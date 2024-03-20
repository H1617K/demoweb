import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import '../Product/Product.css'

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${(page - 1) * 10}&limit=5`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); 

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <ul className="products-list">
        {products.map(product => (
          <li className="product-item" key={product.id}>
            <span className="product-title">{product.title}</span>
            <img className="product-image" src={product.images} alt='Imgs' />
            - <span className="product-price">${product.price}</span> 
            <span className='product-decripction'>{product.description}</span>
            {/* <span className="category-name">{product.category.name}</span> 
            <img className="category-image" src={product.category.image} alt='categoryimg' /> */}
          </li>
        ))}
      </ul>
      <Pagination 
        count={6} 
        page={page}
        onChange={handlePageChange}
        // variant="outlined"
        // shape="rounded"
        className="pagination"
        color="primary"
      />
    </div>
  );
};

export default Product;
