import React from 'react';
import { useParams } from 'react-router';
import products from '../data-files/products.json';
import Items from './Items';

const CategoryItems = () => {
    const { categoryId } = useParams();

    return( 
        <div>
            <h2 align="center" >Category Items</h2>
            {products.map( item => (categoryId === item.categoryId && (<Items key={item.categoryId} item={item} />)) )}
        </div>
    );
};

export default CategoryItems;
