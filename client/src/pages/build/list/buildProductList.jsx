import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ShopContext } from '../../../context/shop-context';

export const BuildProduct = (props) => {
  // Destructure the props
  const { id, productName, price, productImage, category, productlink } = props.data;

  // Access the addToBundle and removeFromBundle functions from the ShopContext
  const { addToBundle, removeFromBundle } = useContext(ShopContext);

  return (
    <div className="build-Product-Card">
      {/* Link to the product's detail page */}
      <Link to={productlink}>
        <img src={productImage} alt="" />
      </Link>
      <div className='build-pc-description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        {/* Add to Bundle button */}
        <button className='add-to-bundle' onClick={() => addToBundle(id)}>
          Add to Bundle
        </button>
        {/* Remove from Bundle button */}
        <button className='add-to-bundle' onClick={() => removeFromBundle(id)}>
          Remove From Bundle
        </button>
      </div>
    </div>
  );
};