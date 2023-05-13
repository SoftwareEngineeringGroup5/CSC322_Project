import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ShopContext } from '../../../context/shop-context';

export const BuildProduct = (props) => {
<<<<<<< HEAD
    const { id, productName, price, productImage, productlink} = props.data;
    const {addToBundle} = useContext(ShopContext);
    const {bundleItems} = useContext(ShopContext);
    const {removeFromBundle} = useContext(ShopContext);
    const bundleAmount = bundleItems[id];

=======
    const { id, productName, price, productImage, category, productlink} = props.data;
    const {addToBundle} = useContext(ShopContext);
    const {bundleItems} = useContext(ShopContext);
    const {removeFromBundle} = useContext(ShopContext);
    const {addBundleCategory, removeBundleCategory} = useContext(ShopContext);
    const bundleAmount = bundleItems[id];

  const handleAddToBundleClick = () => {
      addBundleCategory(category)
      addToBundle(id)
    }

  const handleRemoveFromBundleClick = () => {
      removeBundleCategory(category)
      removeFromBundle(id)
    }
>>>>>>> 55539d5ccb60ba04b600facf4476f2d223630366

  return (
    <div className="build-Product-Card" >
      <Link to={productlink}>
        <img src={productImage} alt="" />
      </Link>
      <div className='build-pc-description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <p>Bundle {bundleAmount}</p>
<<<<<<< HEAD
        <button className='add-to-bundle' onClick={ () => addToBundle(id)}>Add to Bundle</button>
        <button className='add-to-bundle' onClick={ () => removeFromBundle(id)}>Remove From Bundle</button>
=======
        <button className='add-to-bundle' onClick={ () => handleAddToBundleClick()}>Add to Bundle</button>
        <button className='add-to-bundle' onClick={ () => handleRemoveFromBundleClick()}>Remove From Bundle</button>
>>>>>>> 55539d5ccb60ba04b600facf4476f2d223630366
        </div>
    </div>
  )
}
