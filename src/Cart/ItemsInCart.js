import React from 'react';
import { Button, Panel, Tooltip, Whisper } from 'rsuite';
import { useCart } from '../Context/Item.context';
import NOT_FOUND_IMAGE from '../Images/not-found.jpg'
import { ItemsInCartWrapper } from './ItemsInCart.styled';

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
    <ItemsInCartWrapper>

            <Panel className='panel'>
                <h4 className='title' >{name}</h4>
                <img className='item-img' src={thumbnail ? thumbnail : NOT_FOUND_IMAGE} alt='Cart Item' />
                                
                <h5 className='price'> Price of Each :- { currency + " " + price } </h5>
                <h4 className='total' > Total :- { currency + " " + price*qty }</h4>
                
                <h5 className='qty' >Quantity:- {qty}</h5>
                <Whisper speaker={<Tooltip>Increase Qty</Tooltip>}>
                  <span>
                    <Button onClick={increaseQty} className="btn-add">                  
                      <i class="fas fa-plus"><Tooltip /></i>
                    </Button>
                  </span>
                </Whisper>
                <Whisper speaker={<Tooltip>Decrease Qty</Tooltip>}>
                  <span>
                    <Button onClick={decreaseQty} className="btn-dec">
                      <i class="fas fa-minus"></i>
                    </Button>
                  </span>
                </Whisper>
                <Whisper speaker={<Tooltip>Remove Item</Tooltip>}>
                  <span>
                    <Button onClick={() => deleteItem(item)} className="remove-btn">
                      <i class="fas fa-times"></i>
                    </Button>
                  </span>
                </Whisper>
            </Panel>
    </ItemsInCartWrapper>
  );
};

export default ItemsInCart;
