import React from 'react';
import { Button } from 'rsuite';
import { useCart } from '../Context/Item.context';

const ItemsInCart = ({ item, deleteItem }) => {
    
  const { id, name, price, currency, thumbnail } = item;

  const [cartItems, dispatch] = useCart();

  const data = cartItems.find(d => d.id === id);
  const { qty } = data;

  const increaseQty = () => {
    dispatch({
      type: 'ADD_TO_CART',
      id,
    });
  };

  const decreaseQty = () => {
    dispatch({
      type: 'DECREASE_QTY',
      id,
      item
    });
  };

  return (
    <div className="cart-item-container">
      <div className="img">
        <img src={thumbnail} alt="img" className="img-in-cart" />
      </div>
      <div className="info">
        <h5 className="info-name">{name}</h5>
        <div className="info-price">
          {currency} {price}
        </div>
        <Button onClick={decreaseQty} className="btn-icon">
            <i class="far fa-minus-square"></i>
        </Button>
        <Button onClick={increaseQty} className="btn-icon">
            <i class="far fa-plus-square"></i>
        </Button>
        <Button onClick={() => deleteItem(item)} className="btn-icon">
            <i class="far fa-window-close"></i>
        </Button>
        <span className="info-qty">{qty}</span>
      </div>
    </div>
  );
};

export default ItemsInCart;
