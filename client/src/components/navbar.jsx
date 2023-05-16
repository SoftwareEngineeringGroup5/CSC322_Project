import React,  { useContext }  from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail"
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Person from "@mui/icons-material/Person";
import Home  from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from "react-router-dom";
import { Balances } from "../pages/balance/userBalances";
import { ShopContext } from "../context/shop-context";

const userID = 0;



export const CustomerNavbar = () => {

  const {userName} = useContext(ShopContext)

  return (
    <Box 
      sx={{ display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            maxHeight: 100, 
            backgroundColor: "#486DF0"
      }}
    >
      <Box sx={{ p: 1 }}>
        <Typography fontSize={36} >
          Welcome, {userName}
        </Typography>
        
        <Typography fontSize={20}>
          Warnings: {0} Praises: {0}
        </Typography>
      </Box>

      <Tooltip title="Balance">
        <IconButton href="/balance" disableRipple >
          <Badge color="secondary">
            <AccountBalanceWalletIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Box sx={{ p: 2.5, alignItems: "flex-end" }}>

      <Link to ="/cart"> 
        <Tooltip title="Cart">
              <IconButton disableRipple >
                <Badge color="secondary">
                  <ShoppingCart fontSize="large" />
                </Badge>
              </IconButton>
            </Tooltip>
            </Link>

        <Tooltip title="Home">
          <IconButton href="/" disableRipple >
            <Badge color="secondary">
              <Home fontSize="large" />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Account">
          <IconButton href="/" disableRipple >
            <Badge color="secondary">
              <Person fontSize="large" />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      
    </Box>
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
      
    </Box>
  );
};

export const OwnerNavbar = () => {
  return (
    <Box 
      sx={{ display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            height: 100, 
            backgroundColor: "#486DF0"
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Typography fontSize={36} >
          Welcome, Owner
        </Typography>
      </Box>

      <Tooltip title="Messages" sx={{ p: 5 }}>
        <IconButton href="/messages" disableRipple >
          <Badge color="secondary" badgeContent={2}>
            <MailIcon fontSize="large" />
          </Badge>
        </IconButton>
      </Tooltip>
      
      
    </Box>
  );
};