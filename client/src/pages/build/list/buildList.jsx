import React, { useContext } from 'react';
import { PRODUCTS } from '../../../products';
import { BuildProduct } from './buildProuctList';
import { ShopContext } from '../../../context/shop-context';
import "./buildList.css";

export const BuildList = () => {
  // Access the currentcat, bundleMatch, and findCommonMatches functions from the ShopContext
  const { currentcat, bundleMatch, findCommonMatches } = useContext(ShopContext);

  // Check if a given category is in the current category list
  const checkCurrent = (categoryName) => {
    if (currentcat.includes(categoryName)) {
      return true;
    }
  };

  // If all categories are in the current category list, display a message that the bundle is full
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
      
      {/* Render the Motherboard category if it is not in the current category list */}
      {!checkCurrent("Motherboard") && (
        <div className='category'>
          <div className='Motherboard'>
            <h2><b>Motherboard</b></h2>
          </div>
          <div className="buildPC-product">
            {PRODUCTS.map((product) => (
              // Render the BuildProduct component if the product belongs to the Motherboard category and matches the displayProductID
              product.category === "Motherboard" && (bundleMatch.length === 0 || bundleMatch.includes(product.id)) ? (
                <BuildProduct data={product} key={product.category} />
              ) : (
                <React.Fragment key={product.category}></React.Fragment>
              )
            ))}
          </div>
        </div>
      )}

      {/* Render the CPU category if it is not in the current category list */}
      {!checkCurrent("CPU") && (
        <div className='category'>
          <div className='Motherboard'>
            <h2><b>CPU</b></h2>
          </div>
          <div className="buildPC-product">
            {PRODUCTS.map((product) => (
              // Render the BuildProduct component if the product belongs to the CPU category and matches the displayProductID
              product.category === "CPU" && (bundleMatch.length === 0 || bundleMatch.includes(product.id)) ? (
                <BuildProduct data={product} key={product.category} />
              ) : (
                <React.Fragment key={product.category}></React.Fragment>
              )
            ))}
          </div>
        </div>
      )}

      {/* Render the Case category if it is not in the current category list */}
      {!checkCurrent("Case") && (
        <div className='category'>
          <div className='Motherboard'>
            <h2><b>Case</b></h2>
          </div>
          <div className="buildPC-product">
            {PRODUCTS.map((product) => (
              // Render the BuildProduct component if the product belongs to the Case category and matches the displayProductID
              product.category === "Case" && (bundleMatch.length === 0 || bundleMatch.includes(product.id)) ? (
                <BuildProduct data={product} key={product.category} />
              ) : (
                <React.Fragment key={product.category}></React.Fragment>
              )
              ))}
              </div>
            </div>
          )}
        </div>
);
};