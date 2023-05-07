import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { Button, Box, Paper, TextField, Typography } from '@mui/material';


export const DisplayProduct = (props) => {
const {id, productName, price, productImage, reviews} = props.data;
const {addToCart} = useContext(ShopContext);
const {cartItems} = useContext(ShopContext);
const cartItemAmount = cartItems[id];


  return (
    <div className="product-listing">
      <div className="product-img">
        <img src={productImage} alt="" height="420" width="327"/>
      </div>
      <div className='description'>
        <h1>
          <b>{productName}</b>
        </h1>
        <p><span>${price}</span></p>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
	
      <Box textAlign='center' sx={{ 	width: 2/3 }}>
        <Paper elevation={1} sx={{ p: 2}}>
          <Typography align='center'>
            Post Comment:
          </Typography>

          <TextField multiline fullWidth />

          <Button
            type="submit"
            variant="contained"
            size="medium"
            style={{ 
              backgroundColor: 'black', 
              color: 'white' , 
              width:'200px',  
              borderRadius: '30px'
            }}
          > 
            Submit
          </Button>

        </Paper>

        <br/>

        <Paper elevation={1}>
          <Typography>
            USERNAME
          </Typography>

          <Typography>
          {reviews}
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}
