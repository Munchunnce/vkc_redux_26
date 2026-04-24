import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapiserver.reactbd.org/api/products');
      const data = await res.json()
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Products
