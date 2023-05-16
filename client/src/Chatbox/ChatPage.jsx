import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import badWords from 'bad-words';

export const ChatPage = () => {
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);
  const [user1InputValue, setUser1InputValue] = useState('');
  const [user2InputValue, setUser2InputValue] = useState('');

  const handleUser1InputChange = (e) => {
    setUser1InputValue(e.target.value);
  };

  const handleUser2InputChange = (e) => {
    setUser2InputValue(e.target.value);
  };

  const filter = new badWords();

  const handleUser1FormSubmit = (e) => {
    e.preventDefault();
    const filteredMessage = filter.clean(user1InputValue);

    setUser1Messages([...user1Messages, { user: 'user1', message: filteredMessage }]);
    setUser2Messages([...user2Messages, { user: 'user1', message: filteredMessage }]);

    setUser1InputValue('');
  };

  const handleUser2FormSubmit = (e) => {
    e.preventDefault();
    const filteredMessage = filter.clean(user2InputValue);

    setUser2Messages([...user2Messages, { user: 'user2', message: filteredMessage }]);
    setUser1Messages([...user1Messages, { user: 'user2', message: filteredMessage }]);

    setUser2InputValue('');
  };

  return (
    <div>
      <div className="chat-box">
        <div className="chat-messages">
          {user1Messages.map((message, index) => (
            <div key={`user1-${index}`} className={`message ${message.user}`}>
              {message.message}
            </div>
          ))}
        </div>
        <form onSubmit={handleUser1FormSubmit}>
          <TextField
            sx={{
              width: '500px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
              },
            }}
            type="text"
            rows="3"
            placeholder="User 1: Type your message here"
            value={user1InputValue}
            onChange={handleUser1InputChange}
            InputProps={{
              style: {
                padding: '15px',
                borderRadius: '20px',
              },
            }}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="chat-box">
        <div className="chat-messages">
          {user2Messages.map((message, index) => (
            <div key={`user2-${index}`} className={`message ${message.user}`}>
              {message.message}
            </div>
          ))}
        </div>
        <form onSubmit={handleUser2FormSubmit}>
          <TextField
            sx={{
              width: '500px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
              },
            }}
            type="text"
            rows="3"
            placeholder="User 2: Type your message here"
            value={user2InputValue}
            onChange={handleUser2InputChange}
            InputProps={{
              style: {
                padding: '15px',
                borderRadius: '20px',
              },
            }}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
