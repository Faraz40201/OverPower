import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ValidationTextField = styled(TextField)(({ theme, borderColor }) => ({
  width: "400px",

  "& .MuiOutlinedInput-input": {
    color: "white",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: borderColor || theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: borderColor || theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: borderColor || theme.palette.primary.main,
    },
  },
}));

export default function LoginUsername({
  type,
  placeholder,
  label,
  borderColor,
}) {
  return (
    <Box
      component="form"
      // noValidate
      sx={{
        // display: "grid",
        // gridTemplateColumns: { sm: "1fr 1fr" },
        gap: 10,
      }}
    >
      <ValidationTextField
        label={label}
        type={type}
        variant="outlined"
        placeholder={placeholder}
        id="validation-outlined-input"
        borderColor={borderColor}
        InputLabelProps={{ shrink: true, style: { color: "white" } }}
        sx={{ marginX: 2 }}
      />
    </Box>
  );
}
