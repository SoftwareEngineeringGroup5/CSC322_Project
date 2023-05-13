import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import "../../App.css";
import Avatar from '../../Chatbox/avatar';
import { Navbar } from '../../components/navbar';

export const Shop = () => {
  return (

    <div className='shop'>
        <Navbar/>
        <div className='shopTitle'>
            <h1>PC Palace</h1>
        </div>
        <div>
           
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data = {product} /> 
                ))}
                
            </div>
            <div>
                <Avatar></Avatar>
            </div>
        </div>
    </div>
  )
}
