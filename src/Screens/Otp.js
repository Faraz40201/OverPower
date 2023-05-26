import { React, useState } from "react";
import logo from "./../assets/loginlogo.svg";
import { Box, Button, Stack } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";
import "../styles/otp.css";
import CustomButton from "../components/button";

function Otp() {
  const Navigate = useNavigate();

  const otpNavigate = () => {
    Navigate("/User");
  };

  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleComplete = (value) => {};

  return (
    <div className="Otp">
      <div className="Otp__container">
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
          <Stack display={"flex"} alignSelf={"center"} padding={"3rem"}>
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
            <div className="Otp__description">
              <h4>Verify Email OTP</h4>
              <p>
                Enter the six digit code we sent to your email address to verify
                your Email account:
              </p>
            </div>

            <div className="Otp__inputs">
              <MuiOtpInput
                value={otp}
                onChange={handleChange}
                length={6}
                onComplete={handleComplete}
                display="flex"
                width="25rem"
                justifyContent="center"
                alignItems="center"
                className="Otp__input"
                autoCorrect="off"
                gap="10px"
                inputProps={{
                  style: {
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                      borderColor: "transparent",
                    },
                  },
                }}
              />
            </div>
            <div className="Otp__anchorbox">
              <a
                className="Otp__anchor"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESEND OTP
              </a>
            </div>
            <CustomButton
              color={"#F12E39"}
              margin={"2rem 1rem 0rem 1rem"}
              textTransform={"uppercase"}
              onClick={() => otpNavigate()}
            >
              VERIFY AND CONTINUE
            </CustomButton>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Otp;
