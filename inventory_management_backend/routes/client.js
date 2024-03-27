import express from "express";
import {
  addProduct,
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  addCustomers,
  deleteProduct,
} from "../controllers/client.js";

const router = express.Router();

router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.post("/addcustomers", addCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
