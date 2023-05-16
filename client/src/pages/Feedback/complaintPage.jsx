import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './complaint.css'

export const FeedbackPage = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleButtonClick = () => {
    setShowTextField(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMessage = e.target.message.value;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setShowTextField(false);
  };

  return (
    <div className='feed'>
        <h2 className='feed'>Complaints/Compliments Page</h2>
        <h4> Do You Want File A Complaint Or Compliment Based On Interaction?  </h4>
      <div className='feed'>
        <Button
          className="button"
          style={{
            margin: '50px',
            backgroundColor: 'green',
            color: 'white',
            width: '500px',
            height: '100px',
            borderRadius: '100px',
            marginTop: '15px',
          }}
          onClick={handleButtonClick}
          type="submit"
        >
          Compliment
        </Button>
        <Button
          className="button"
          style={{
            margin: '50px',
            backgroundColor: 'red',
            color: 'white',
            width: '500px',
            height: '100px',
            borderRadius: '100px',
            marginTop: '15px',
          }}
          onClick={handleButtonClick}
          type="submit"
        >
          Complaint
        </Button>
        {showTextField && (
          <form onSubmit={handleFormSubmit}>
            <TextField
              placeholder="Message is required..."
              name="message"
              rows="2"
              multiline
              sx={{
                width: '800px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
              InputProps={{
                style: {
                  padding: '35px',
                  borderRadius: '20px',
                },
              }}
            />
            <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                height: '50px',
                borderRadius: '20px',
                marginTop: '20px',
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
        <div>
          <h3>Complaints/Compliments:</h3>
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
