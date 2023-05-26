import React from "react";
import logo from "./../assets/loginlogo.svg";
import Logininput from "../components/inputusername";
import { Box, Stack } from "@mui/material";
import "../styles/login.css";
import CustomButton from "../components/button";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const Navigate = useNavigate();
  const loginNavigate = () => {
    Navigate("/otp");
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <Box
          sx={{
            backgroundColor: "#0F0F1399",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "500px",
            height: "600px",
          }}
        >
          <Stack
            gap={"3rem"}
            display={"flex"}
            alignSelf={"center"}
            padding={"3rem"}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem 0rem 3rem",
              }}
            >
              <img
                src={logo}
                alt=""
                className="Login__logo"
                style={{ maxWidth: "6rem", maxHeight: "6rem" }}
              />
            </div>

            <Logininput
              label={"USERNAME"}
              placeholder={"Enter username"}
              borderColor="white"
            />
            <Logininput
              type={"password"}
              placeholder={" Enter password"}
              label={"PASSWORD"}
              borderColor="white"
            />

            <CustomButton
              color={"red"}
              margin={"0rem 1rem 0rem 1rem"}
              textTransform={"uppercase"}
              onClick={() => loginNavigate()}
            >
              LOGIN
            </CustomButton>
          </Stack>
          <a
            className="Login__anchor"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            FORGOT PASSWORD?
          </a>
        </Box>
      </div>
    </div>
  );
}

export default LoginScreen;

// <div className="Login__container">
// <div className="Login__form">

// </div>
// </div>

// <div className="wrapper">
//   <div className="login-button-div">
//     <button>LOGIN</button>
//     <div className="forgot-password">
//       <a href="#">Forgot password</a>
//     </div>
//   </div>
// </div>;
