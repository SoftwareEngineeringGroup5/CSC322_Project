import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import ChatBox from './chat';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function Avatar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
      variant="outlined" onClick={handleClickOpen} 
      style={{ 
      fontSize: '20px',
       backgroundColor: 'white', 
       width: '200px',
       height: '100px',
       position: 'fixed',
       bottom: '0',
       right: '0',
       marginRight: '10px',
       marginBottom: '10px',


       }}>
        CHAT BOX
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* CHAT BOX */}

        <DialogContent dividers  style={{ height: '400px', width: '600px' }}>
          <Typography gutterBottom>
            Message converstions:
        <ChatBox>  </ChatBox>
          </Typography>
        </DialogContent>
        <DialogActions>
       


          <Button autoFocus onClick={handleClose}>
          Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

