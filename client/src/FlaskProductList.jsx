import React, { useEffect, useState } from 'react';

export const FlaskProductList = () => {
    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https:/localhost:5000/product/all');
        if (response.ok) {
          const data = await response.json();

          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

   console.log(products)

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.id},&nbsp;{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlaskProductList;