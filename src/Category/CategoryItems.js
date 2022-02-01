import React, { memo, useState } from 'react';
import { useParams } from 'react-router';
import productsData from '../data-files/products.json';
import Items from './Items';

const CategoryItems = () => {
    const { catId } = useParams();
    const [products] = useState( productsData.filter( Element => Element.categoryId === catId ) );
    return( 
        <div> 
            <h2 align="center" >Category Items</h2>
            { products.map( Element => <Items key={Element.id} products={Element} /> ) }
            
        </div>
    );
};
export default memo(CategoryItems);
