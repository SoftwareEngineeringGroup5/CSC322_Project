import React, { useState } from 'react'
import { PRODUCTS } from '../../../products'
import { BuildProduct } from '../list/buildProductList'
import { Rating } from '@mui/material'
import "./ratingStyle.css"

export const RatingComponents = (props) => {
  const {id, configName, bundledproductsuggest} = props.data
  const [rating, setRating] = useState(props.rating)
  const displayProductID = bundledproductsuggest;

  return (
    <div className='Suggested-Configuration-card'>
        <div className="card">
        <div className="header">
                <span>{configName}</span>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newRating) => {
                    
                    setRating(newRating);
                    console.log(newRating)
                  }}
                />

        </div>
        
        <div className="product-list">
        <div className="buildPC-product">
            {PRODUCTS.map((product) => (
               (displayProductID.includes(product.id)) ? (
                      <BuildProduct data = {product} key = {product.category}/> 
              ) :(
                <React.Fragment key={product.category}></React.Fragment>
              )
                
              ))}
                  
            </div>
        </div>
        </div>
    </div>
  )
}
