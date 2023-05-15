import React, { useContext } from 'react'
import { PRODUCTS } from '../../../products'
import { BuildProduct } from './buildProuctList'
import { ShopContext } from '../../../context/shop-context'
import "./buildList.css"
export const BuildList = () => {


  const {currentcat, bundleMatch} = useContext(ShopContext);
  
  const currentCategoryList = currentcat;
  const currentCatLength = currentcat.length;
  const displayProductID = bundleMatch;
  const checkCurrent = (catogoryName) => {
    if (currentCategoryList.includes(catogoryName)) {
      return true;
    }
  };

  if (checkCurrent("Motherboard") && checkCurrent("CPU") && checkCurrent("Case")) {
    return (
      <div>
        <h1>Your Bundle is full</h1>
      </div>
    );
  }
  return (
    <div className="BuildListpage">
      <div className="buildListHeader">
        <h1><b>List</b></h1>
      </div>
      {!checkCurrent("Motherboard") && (
        <div className='category'>
            <div className='Motherboard'>
              <h2><b>Motherboard</b></h2>
            </div>
            <div className="buildPC-product">
            {PRODUCTS.map((product) => (

              product.category === "Motherboard" && (displayProductID.length === 0 || displayProductID.includes(product.id)) ? (
                      <BuildProduct data = {product} key = {product.category}/> 

              ) :(
                <React.Fragment key={product.category}></React.Fragment>
              )
              ))}
            </div>
          </div>
        )}
      {!checkCurrent("CPU") && (
        <div className='category'>
            <div className='Motherboard'>
              <h2><b>CPU</b></h2>
                <div className="buildPC-product">
                    {PRODUCTS.map((product) => (

                      product.category === "CPU" && (displayProductID.length === 0 || displayProductID.includes(product.id)) ? (
                              <BuildProduct data = {product} key = {product.category} /> 

                      ) :(
                        <React.Fragment key={product.category}></React.Fragment>
                      )
                      ))}
                </div>
            </div>
        </div>
   )}
    {!checkCurrent("Case") && (
      <div className='category'>
          <div className='Motherboard'>
            <h2><b>Case</b></h2>
            <div className="buildPC-product">
              {PRODUCTS.map((product) => (

                product.category === "Case" && (displayProductID.length === 0 || displayProductID.includes(product.id)) ? (
                        <BuildProduct data = {product} key = {product.category}/> 

                ) :(
                  <React.Fragment key={product.category}></React.Fragment>
                )
                ))}
              </div>
          </div>
    </div>
  )}
  </div>
);
};
