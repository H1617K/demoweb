import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setPage } from '../Product/productSlice';
import { Pagination } from '@mui/material';
import '../Product/Product.css';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  // const error = useSelector((state) => state.products.error);
  const page = useSelector((state) => state.products.page);
  console.log("page",page);


  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch,page]);

  const handlePageChange = (event, value) => {
    console.log("selected",value)
    dispatch(setPage(value));
    dispatch(fetchProducts(value));
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      {status === 'loading' && <div>Loading...</div>}
      {/* {status === 'failed' && <div>Error: {error}</div>} */}
      <ul className="products-list">
        {products.map(product => (
          <li className="product-item" key={product.id}>
            <span className="product-title">{product.title}</span>
            <img className="product-image" src={product.images} alt='Imgs' />
            - <span className="product-price">${product.price}</span> 
            {/* <span className='product-decripction'>{product.description}</span>  */}
          </li>
        ))}
      </ul>
      <Pagination 
        count={10} 
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        // shape="rounded"
        className="pagination"
        color="primary"
      />
    </div>
  );
};

export default Product;