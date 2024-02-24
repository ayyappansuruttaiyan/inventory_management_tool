import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("User ID:", id);
    const userWithStats = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);
    console.log("User with Stats:", userWithStats);

    if (!userWithStats || userWithStats.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map(async (id) => {
        try {
          const transaction = await Transaction.findById(id);
          return transaction;
        } catch (transactionError) {
          // Handle specific error or log the error
          console.error(
            `Error fetching transaction with ID ${id}:`,
            transactionError.message
          );
          return null;
        }
      })
    );

    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
