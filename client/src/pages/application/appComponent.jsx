import React, { useState , useEffect} from 'react';
import './appComponent.css';
import { Button, TextField } from '@mui/material';
import { USERDATA } from './applications';
import { ApplicatonPage } from './applicationPage';

export const AppComponent = (prop) => {
  const { id, username, message,status } = prop.data;
  const [newMessage, setNewMessage] = useState(message);
  const [showText, setShowText] = useState(true);
  const [showSubmit, setSumbit] = useState(true);
  const [state, setState] = useState({status});

 
  const updateAcceptButton = () => {
    console.log(prop.data)
    const updateData = {...prop.data, status: 'Accepted'};
    setState(updateData);
    console.log(updateData)

  };

  console.log(state.status);
  const updateRejectButton = () => {
    const updateData = {...prop.data, status: 'Rejected'};
    setState(updateData);
    console.log(updateData)

  }
  console.log(state.status)
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    prop.data.message = newMessage; // Update the message prop with the new value
    console.log(newMessage);
    setNewMessage('');
    setShowText(false);
    setSumbit(false);   
   

  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  if (state.status === 'Accepted') {
    return null; 
  }

  if (state.status === 'Rejected') {
    return null; 
  }

  const isSubmitDisabled = newMessage.trim() === ''; // Check if the newMessage is empty

  return (
      <div className='boxes'>
        <div className='flex'>
          <h5 className='info1'> {username} </h5>
          {showText &&  ( 
          <TextField
            placeholder="Message is required..." 
            onSubmit={handleFormSubmit}
            name='message'
            rows='2'
            multiline
            sx={{ width: '800px' ,
          
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black', // Customize the outline border color
              },
            },
          }} 
            value={newMessage}
            onChange={handleInputChange}
            InputProps={{
              style: {
                padding: '35px',  borderRadius: '20px', // Customize the padding as desired
              }}}
          />
          )}
          {!showText }
          {!showSubmit}
         <h5 className='info2'> {message} </h5> 
          
          <div className='stack' >
          {showSubmit && (
            <Button className='button'
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                height: '30px',
                borderRadius: '30px',
                marginTop: '15px',
              }}
              onClick={handleFormSubmit} // Handle form submission when the button is clicked
              // disabled={isSubmitDisabled} // Disable the button if the newMessage is empty

            >
              Submit
            </Button>
          )}
            <Button className ='button'
              style={{
                backgroundColor: 'green',
                color: 'white',
                width: '100px',
                height: '30px',
                borderRadius: '30px',
                marginTop: '15px',
              }}
              onClick={updateAcceptButton}
              // disabled={isSubmitDisabled} // Disable the button if the newMessage is empty

              type='submit' // Change the button type to "submit"
            >
              Accept 
            </Button>
            <Button className='button'
              style={{
                backgroundColor: 'red',
                color: 'white',
                width: '100px',
                height: '30px',
                borderRadius: '30px',
                marginTop: '15px',
              }}
              onClick={updateRejectButton}
              // disabled={isSubmitDisabled} // Disable the button if the newMessage is empty

              type='submit' // Change the button typ
            >
              Reject
            </Button>
          </div>
          </div>
      </div>
  )
};

export const OwnerComp = (prop) => {
  const {id, username, message} = prop.data;

return (
  <div >
  <div className='boxes'>
    <div className='flex'>
     <h5 className='info1'> {username} </h5> 
     <h5 className='info2'>{message}</h5>
     </div>
     </div>
    </div>


)
}
