import React from 'react';
import { useCart } from '../Context/Item.context';
import { CartWrapper } from './Cart.styled';
import ItemsInCart from './ItemsInCart';
import EMPTY_CART from '../Images/empty_cart.png';

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
        <CartWrapper>
          {cartTotal === 0 ? ( < img className='empty' src={EMPTY_CART} alt='Your Cart Is Empty' /> ) : ( <h4 className='amount' > Your total payable amount is: USD {cartTotal}</h4> )}
          {cartItems.map(item => ( <ItemsInCart item={item} key={item.id} deleteItem={deleteItem} /> ))}
        </CartWrapper>
  );
};

export default Cart;
