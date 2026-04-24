import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapiserver.reactbd.org/api/products');
      const data = await res.json()
      setProducts(data.data);
      console.log(data.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product._id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn'>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;
