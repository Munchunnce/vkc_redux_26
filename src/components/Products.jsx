import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapiserver.reactbd.org/api/products');
    //   const data = await res.json()
    //   setProducts(data.data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product._id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>$ {product.price}</h5>
            <button onClick = { () => handleAdd(product)} className='btn'>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;
