import React, { memo } from 'react';
import { useParams } from 'react-router';
import products from '../data-files/products.json';
import Items from './Items';

const CategoryItems = () => {
    const { catId } = useParams();
    return( 
        <div>
            <h2 align="center" >Category Items</h2>
            {products.map( Element => ( catId === Element.categoryId && <Items key={Element.id} item={Element} /> ))}
        </div>
    );
};
export default memo(CategoryItems);
