import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import "../../App.css";
// import Avatar from '../../Chatbox/avatar';

export const Shop = () => {
    // const flaskproduct = [
    //     {
    //         id: 1,
    //         productName: "Test Test",
    //         price: 999.0,
    //         productImage: "product1",
    //         category: "Motherboard",
    //         reviews: ["Great product ID 1"],
    //         productlink: "/product/product1",
    //         match: [2,3,5],
    //       },
    //       {
    //         id: 2,
    //         productName: "Test Test",
    //         price: 999.0,
    //         productImage: "product1",
    //         category: "Motherboard",
    //         reviews: ["Great product ID 1"],
    //         productlink: "/product/product1",
    //         match: [2,3,5],
    //       },
    // ];

  return (

    <div className='shop'>
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
                {/* <Avatar></Avatar> */}
            </div>
        </div>
    </div>
  )
}
