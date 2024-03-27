import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicTextFields from "./TextField";
import { useTheme } from "@emotion/react";
import logoImage from "assets/logo.png";
import { useNavigate } from "react-router-dom";
function Register() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please enter all required fields *");
    } else {
      navigate("/dashboard");
      setError("");
    }
  };

  const handleRedirect = () => {
    navigate("/login");
  };
  return (
    <Box
      m="1.5rem 2.5rem"
      sx={{
        alignContent: "center",
        flexDirection: "column",
        gap: "1rem",
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        height: "70%",

        padding: "1rem", // Optionally, add padding for spacing
      }}
    >
      <Box display="flex" alignItems="center" gap="0.3rem">
        <Box
          component="img"
          alt="profile"
          src={logoImage}
          height="50px"
          width="50px"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
        <Typography variant="h4" fontWeight="bold" mt="5px">
          NexInvent
        </Typography>
      </Box>
      {error && (
        <Typography variant="h6" fontWeight="bold" color="error">
          {error}
        </Typography>
      )}
      <Box
        mt="1rem"
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        gap="1rem"
        width="100%"
        sx={{
          display: "flex",
          gap: "1rem",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <BasicTextFields
          title="Name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BasicTextFields
          title="Email address "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BasicTextFields
          title="Password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={handleRegister}
        >
          Signup
        </Button>
        <Typography
          sx={{
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.primary.light,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "2px 10px",
            m: "5px",
          }}
        >
          Already have an account?
          <Button
            onClick={handleRedirect}
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "2px 10px",
              m: "5px",
            }}
          >
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
