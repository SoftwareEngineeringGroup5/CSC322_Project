import React, { useState } from 'react';
import './appComponent.css';
import { Button, TextField } from '@mui/material';

export const AppComponent = (prop) => {
  const { id, username, message } = prop.data;
  const [newMessage, setNewMessage] = useState(message);
  const [showText, setShowText] = useState(true);
  const [showSubmit, setSumbit] = useState(true);
  // const [Accept, setAccept] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    prop.data.message = newMessage; // Update the message prop with the new value
    console.log(newMessage);
    setNewMessage('');
    setShowText(false);
    setSumbit(false);   
    // setAccept(false);
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div>
      <div className='boxes'>
        <div className='flex'>
          {/* <h5 className='info'> {id}. </h5> */}
          <h5 className='info1'> {username} </h5>
          {showText &&  ( 
          <TextField
            onSubmit={handleFormSubmit}
            name='message'
            rows='3'
            multiline
            sx={{ width: '800px' }} 
            value={newMessage}
            onChange={handleInputChange}
          />
          )}
          {!showText }
          {!showSubmit}
         <h5 className='info2'> {message} </h5> 
          </div>
          <div>
            <Button
              style={{
                backgroundColor: 'green',
                color: 'white',
                width: '100px',
                height: '30px',
                borderRadius: '30px',
                margin: '0px 10px',
              }}
              type='submit' // Change the button type to "submit"
            >
              Accept
            </Button>

            <Button
              style={{
                backgroundColor: 'red',
                color: 'white',
                width: '100px',
                height: '30px',
                borderRadius: '30px',
                margin: '0px 10px',
              }}
            >
              Reject
            </Button>

            {showSubmit && (
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '150px',
                height: '30px',
                borderRadius: '30px',
                margin: '0px 200px',
              }}
              onClick={handleFormSubmit} // Handle form submission when the button is clicked
            >
              Submit
            </Button>
            )}
          </div>
      </div>
    </div>
  );
};

export const OwnerComp = (prop) => {
  const {id, username, message} = prop.data;

return (
  <div >
  <div className='boxes'>
    <div className='flex'>
     {/* <h5 className='info'> {id}. </h5>  */}
     <h5 className='info1'> {username} </h5> 
     <h5 className='info2'>{message}</h5>
     </div>
     </div>
    </div>


)
}
