import React from "react";
import { AppBar, Typography } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Typography
        variant="h4"
        sx={{ flexGrow: 1 }}
        textAlign={"center"}
        fontWeight={"bold"}
        letterSpacing={1}
        padding={3}
        fontFamily={"cursive"}
      >
        <ChatOutlinedIcon fontSize="5" /> Posts App
      </Typography>
    </AppBar>
  );
};

export default Navbar;
