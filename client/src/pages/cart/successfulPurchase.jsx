import React, { useContext, useState } from 'react'
import { SUGGESTEDCOFIGS } from '../build/SuggestedConfigData'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { BuildProduct } from '../build/list/buildProductList'
import { Link, Grid, Box, Button, TextField, Container, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SuccessfulPurchase = () => {
  const { allIDinBundle } = useContext(ShopContext)
  const navigate = useNavigate()

  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [isCommentValid, setIsCommentValid] = useState(true);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Perform your submit logic here using the selected rating and comment

    let bundleid = SUGGESTEDCOFIGS.length + 1
    const suggestedBundle = {
      id: bundleid,   //bundle id 
      configName: comment, //bundle name 
      rating: rating, //customer bundle rating
      countFive: 0, //five count 
      countZero: 0, //zero count 
      bundledproductsuggest: allIDinBundle // add current bundle items

    }
    SUGGESTEDCOFIGS.push(suggestedBundle) //push the suggested bundle to bundle array
    console.log(SUGGESTEDCOFIGS)
    navigate('/')
  };

  return (

    <div>
      <div className="Main-text">
        <h1>Thank you for your purchase.</h1>
      </div>
      <div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FormControl>
            <h2>Rating</h2>
            <Select
              labelId="rating-label"
              value={rating}
              onChange={handleRatingChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Add Bundle Name"
            value={comment}
            onChange={handleCommentChange}
            margin="normal"
            error={!isCommentValid}
            helperText={!isCommentValid && 'Bundle name is required'}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            style={{
              backgroundColor: 'black',
              color: 'white',
              width: '200px',
              borderRadius: '30px'
            }}>
            Add your Config
          </Button>
        </Box>
      </div>
      <button className="checkout">
      </button>

    </div>
  )
}