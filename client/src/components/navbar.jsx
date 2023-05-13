
import React from "react";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail"
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="center-link">
        <Link to="/">
          Home
        </Link>
        
        <Link to="/build">
          Build
        </Link>
      
      </div>
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/login">
          <User size={32} />
        </Link>
      </div>
    </div>
  );
};

export const EmployeeNavbar = () => {
  return (
    <Box 
      sx={{ display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            height: 100, 
            backgroundColor: "#486DF0"
      }}
    >
      <Box sx={{ p: 1}}>
        <Typography fontSize={36} >
          Welcome, EmployeeName
        </Typography>

        <Typography fontSize={20}>
          Warnings: {0} Praises: {0}
        </Typography>
      </Box>

      
          <IconButton disableRipple sx={{p: 5}}>
            <Badge color="secondary" badgeContent={2}>
              <MailIcon fontSize="large" />
            </Badge>
          </IconButton>
      
    </Box>
  );
};