import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  color,
  fontSize,
  Padding,
  margin,
  children,
  borderRadius,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: color,
        color: "white",
        m: margin,
        fontSize: fontSize,
        p: Padding,
        borderRadius: borderRadius,
        height: "3rem",

        "&:hover": {
          backgroundColor: color,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
