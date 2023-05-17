import React,  { useContext }  from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail"
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Home  from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConstructionIcon from '@mui/icons-material/Construction';
import QueueIcon from '@mui/icons-material/Queue';
import { Link } from "react-router-dom";
import { Balance } from "../pages/balance/balance";
import { ShopContext } from "../context/shop-context";
import GradingIcon from '@mui/icons-material/Grading';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export const VisitorNavbar = () => {
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
          Welcome, Visitor
        </Typography>
      </Box>

      <Box sx={{p: 3}}>
        <Link to="/">
          <Tooltip title="Home">
            <IconButton disableRipple >
              <Badge color="secondary">
                <Home fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/login">
          <Tooltip title="Login">
            <IconButton disableRipple >
              <Badge color="secondary">
                <LoginIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>  
      </Box>
    </Box>
  );
};



export const CustomerNavbar = () => {
  const { userName, userBalance, userWarnings, userPraises } = useContext(ShopContext)
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
          Warnings: {userWarnings} Praises: {userPraises}
        </Typography>
      </Box>

      <Box 
        sx={{ display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
        }}
      >
        <Typography mt={1} fontSize={20} >
          ${userBalance}
        </Typography>

        <Link to="/balance">
          <Tooltip title="Balance">
            <IconButton disableRipple >
              <Badge color="secondary">
                <AccountBalanceWalletIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
      </Box>

      <Box sx={{ p: 2.5, alignItems: "flex-end" }}>
        <Link to ="/build"> 
          <Tooltip title="Build">
            <IconButton disableRipple >
              <Badge color="secondary">
                <ConstructionIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to ="/wishlist"> 
          <Tooltip title="Wishlist">
            <IconButton disableRipple >
              <Badge color="secondary">
                <QueueIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to ="/cart"> 
          <Tooltip title="Cart">
            <IconButton disableRipple >
              <Badge color="secondary">
                <ShoppingCart fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/chat"> 
     <Tooltip title="chat">
            <ChatBubbleIcon disableRipple >
              <Badge color="secondary">
                <LoginIcon fontSize="large" />
              </Badge>
            </ChatBubbleIcon>
          </Tooltip>
     </Link>

        <Link to="/">
          <Tooltip title="Home">
            <IconButton disableRipple >
              <Badge color="secondary">
                <Home fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
        
        <Link to="/login">
          <Tooltip title="Logout">
            <IconButton disableRipple >
              <Badge color="secondary">
                <ExitToAppIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
      </Box>
      
    </Box>
  );
};

export const EmployeeNavbar = () => {
  return (
    <Box 

      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100, 
        backgroundColor: "#486DF0"
      }}
    >
      <Box sx={{ p: 1 }}>
        <Typography fontSize={36}>
          Welcome, EmployeeName
        </Typography>

        <Typography fontSize={20}>
          Warnings: {0} Praises: {0}
        </Typography>
      </Box>

      <div className="feedback">
        <Link to="/feedback">
        <h1>Feedback</h1>
        </Link>
      </div>
      
      
      <Box sx={{ p: 2.5, alignItems: "flex-end" }}>
        <Link to="/applications"> 
          <Tooltip title="applications">
            <GradingIcon disableRipple >
              <Badge color="secondary" fontSize="large">
                <LoginIcon />
              </Badge>
            </GradingIcon>
          </Tooltip>
        </Link>

        <Link to="/chat"> 
          <Tooltip title="chat">
            <ChatBubbleIcon disableRipple >
              <Badge color="secondary" fontSize="large">
                <LoginIcon />
              </Badge>
            </ChatBubbleIcon>
          </Tooltip>
        </Link>

        <Link to="/build"> 
          <Tooltip title="Build">
            <IconButton disableRipple >
              <Badge color="secondary" fontSize="large">
              <ConstructionIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to ="/cart"> 
          <Tooltip title="Cart">
            <IconButton disableRipple >
              <Badge color="secondary">
                <ShoppingCart fontSize="large" />
              <Badge color="secondary">
                <ConstructionIcon fontSize="large" />
              </Badge>
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/">
          <Tooltip title="Home">
            <IconButton disableRipple >
              <Badge color="secondary" fontSize="large">
                <Home />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
        
        <Link to="/login">
          <Tooltip title="Logout">
            <IconButton disableRipple >
              <Badge color="secondary" fontSize="large">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
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

      <Box sx={{ p: 2.5, alignItems: "flex-end" }}>

        <Link to ="/owner"> 
          <Tooltip title="Review">
            <IconButton disableRipple >
              <Badge color="secondary">
                <GradingIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/messages">
          <Tooltip title="Messages">
            <IconButton disableRipple >
              <Badge color="secondary">
                <MailIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
        
        <Link to="/login">
          <Tooltip title="Logout">
            <IconButton disableRipple >
              <Badge color="secondary">
                <ExitToAppIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
};