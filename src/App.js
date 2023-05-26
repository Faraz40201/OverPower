import React from "react";
import LoginScreen from "./Screens/LoginScreen";
import OtpScreen from "./Screens/Otp";
import User from "./Screens/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./helper/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },

  {
    path: "/otp",
    element: <OtpScreen />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
