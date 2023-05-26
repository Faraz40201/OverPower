import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import logo from "./../assets/logo.svg";
import DataTable from "./../components/Datatable";
import { Avatar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 200;

const DrawerList = [
  { title: "TENANTS", id: "1", img: <DashboardIcon /> },
  { title: "USERS", id: "2", img: <GroupIcon /> },
  {
    title: "LOGOUT",
    id: "3",
    img: <LogoutIcon />,
  },
];

export default function MuiDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        variant="permanent"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#000000",
          borderBottom: "1px solid #9B9B9B",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} alt="" height="40rem" />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Admin"
              src=""
              sx={{
                height: "42px",
                width: "42px",
                backgroundColor: "white",
                color: "black",
                marginRight: "0.5rem",
              }}
            />
            <span style={{ color: "white" }}>Admin</span>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            borderRight: " 1px solid #9B9B9B",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            color: "#ffffff",
          }}
        >
          <List>
            {DrawerList.map((item) => (
              <ListItem key={item.id}>
                <ListItemButton>
                  {item.img}
                  <ListItemText
                    sx={{ pl: "1rem" }}
                    primary={
                      <Typography variant="body1" color="white">
                        {item.title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, pt: 10, backgroundColor: "#0F0F13" }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "0.4rem",
          }}
        >
          <DataTable />
        </Box>
      </Box>
    </Box>
  );
}
