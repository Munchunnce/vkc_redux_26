import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart items</h3>

      <div className="cartWrapper">
        {products.length === 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          products.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>

              {/* quantity logic later add karenge */}
              <button className="btn">-</button>
              <span>1</span>
              <button className="btn">+</button>

              <button
                onClick={() => handleDelete(product.id)}
                className="btn"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;