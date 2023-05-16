import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import BadWordsFilter from 'bad-words';
import './chat.css'


const MESSAGES = [
  {
    id: 1,
    username: 'elizabeth',
    text: [
      { username: 'Elizabeth', message: 'Hey' },
      { username: 'Chat', message: 'Hey' },
      { username: 'Elizabeth', message: 'I need help' },
      { username: 'Elizabeth', message: 'How can I update my account' },
      { username: 'Elizabeth', message: '?' },
      { username: 'Chat', message: 'okay' },
    ],
  },
  {
    id: 2,
    username: 'hasnain',
    text: [
      { username: 'Hasnain', message: 'hi' },
      { username: 'Chat', message: 'how it going' },
      { username: 'Hasnain', message: 'I need help' },
      { username: 'Hasnain', message: 'How can I update my account' },
      { username: 'Hasnain', message: '?' },
      { username: 'Chat', message: 'okay' },
    ],
  },
  {
    id: 3,
    username: 'Dalitso',
    text: [
      { username: 'Dalitso', message: 'my name' },
      { username: 'Chat', message: 'Hey' },
      { username: 'Dalitso', message: 'Is' },
      { username: 'Dalitso', message: 'hasnain' },
      { username: 'Dalitso', message: '?' },
      { username: 'Chat', message: 'okay' },
    ],
  },
];

export const ChatPage = () => {
  const [messages, setMessages] = useState(MESSAGES[0].text);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
        const filter = new BadWordsFilter();
        const filteredMessage = filter.clean(inputValue.trim());
  
        const newMessage = {
          username: 'Elizabeth',
          message: filteredMessage,
        };
  
        setMessages((messages) => [...messages, newMessage]);
        setInputValue('');
        console.log(messages);
      }
    
  };

  return (
    <div className='chat-container'>
         
    <div className="chat-box">
        <div className='button' >
        <Link to='/feedback'>
        < Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '80px',
                height: '80px',
                borderRadius: '100px',
                marginTop: '20px',
              }}
              type="button"
            >
              CLOSE
            </Button>
            </Link>
          
        </div>
        
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>
              <strong>{message.username}</strong>: {message.message}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          sx={{
            width: '800px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
            },
          }}
          type="text"

          rows={4}
          placeholder=" Type your message here"
          value={inputValue}
          onChange={handleInputChange}
          InputProps={{
            style: {
              padding: '30px',

              borderRadius: '20px',
            },
          }}
        />
        
          <Button
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                marginTop: '20px',
              }}
              type="submit"
            >
              SEND
            </Button>
           
      </form>
    </div>
    </div>
  );
};