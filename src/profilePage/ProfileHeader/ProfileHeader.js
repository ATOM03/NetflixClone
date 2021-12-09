import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./ProfileHeader.scss";
import EditIcon from "@mui/icons-material/Edit";
// import MenuIcon from "@mui/icons-material/Menu";

export default function ProfileHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="profileHeader">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NetFlix
          </Typography>
          <Button color="inherit">
            <EditIcon style={{ marginRight: "5px" }} />
            Manage
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
