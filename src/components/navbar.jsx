import './Navbar.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

 export function Navbar(){
  return (
  <div className="Nav">
    <h1 className='Logo'>PC PALACE</h1>  
    <div className='search'>
      <Box position="relative" display='flex' sx={{
      '& > :not(style)': { m: 2, width: '50ch', ml:30},
      }}>
        <TextField  label="Search" variant="outlined" style={{ backgroundColor: 'white', color: 'black', borderRadius: '30px' }} />
          <Button variant="contained" href="/Login" size="medium" style={{ backgroundColor: 'black', color: 'white' , width:'200px',  borderRadius: '30px'}}> Login</Button>
      </Box>
    </div>
  </div>)
}

export function NavbarNoButton(){
  return (
  <div className="Nav">
    <h1 className='Logo'>PC PALACE</h1>  
    <div className='search'>
      <Box position="relative" display='flex' sx={{
      '& > :not(style)': { m: 2, width: '50ch', ml:30},
      }}>
        <TextField  label="Search" variant="outlined" style={{ backgroundColor: 'white', color: 'black', borderRadius: '30px' }} />
      </Box>
    </div>
  </div>)
}
