import React from 'react';
import { useCart } from '../Context/Item.context';
import ItemsInCart from './ItemsInCart';

const Cart = () => {
  const [cartItems, dispatch] = useCart();

  const cartTotal = cartItems.reduce(
    (currentTotal, item) => currentTotal + item.price * item.qty,
    0
  );

  const deleteItem = item => {
    dispatch({
      type: 'DELETE_FROM_CART',
      item,
    });
  };

  return (
    <>
      <div>
        {cartItems.map(item => (
          <ItemsInCart item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </div>
      {cartTotal === 0 ? (
        <div className="total">Cart is Empty</div>
      ) : (
        <div className="total">Total cost: {cartTotal}</div>
      )}
    </>
  );
};

export default Cart;
