import React, { createContext, useContext, useEffect, useReducer } from 'react';

const reducer = ( cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]'), action ) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const addedItems = [...cartItems];
      const item = addedItems.find(d => d.id === action.id);
      if (item) {
        item.qty += 1;
      } else {
        action.products.qty = 1;
        addedItems.push(action.products);
      }
      return addedItems;
    }

    case 'DELETE_FROM_CART': {
      const deletingProductsproducts = cartItems.filter(
        deleteThisItem => deleteThisItem.id !== action.item.id
      );
      return deletingProductsproducts;
    }

    case 'DECREASE_QTY': {
      const addedItems = [...cartItems];
      const item = addedItems.find(d => d.id === action.id);
      if (item) {
        if (item.qty === 1) {
          const deletingProductsproducts = cartItems.filter(
            deleteThisItem => deleteThisItem.id !== action.item.id
          );
          return deletingProductsproducts;
        }
        else
        item.qty -= 1;
      }
      return addedItems;
    }
    default:
      return cartItems;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={[cartItems, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
