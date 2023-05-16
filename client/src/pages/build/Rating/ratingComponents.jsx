import React from 'react'
import { PRODUCTS } from '../../../products'
import { BuildProduct } from '../list/buildProductList'
import "./ratingStyle.css"

export const RatingComponents = (props) => {

    const {id, configName, rating, bundledproductsuggest} = props.data
    const displayProductID = bundledproductsuggest;
  return (
    <div className='Suggested-Configuration-card'>
        <div className="card">
        <div className="header">
                <span>{configName}</span>

                <span>{rating}</span>
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
