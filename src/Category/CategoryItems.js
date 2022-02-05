import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Checkbox, CheckboxGroup } from 'rsuite';
import productsData from '../data-files/products.json';
import { CategoryItemsWrapper } from './CategoryItems.styled';
import Items from './Items';

const filterProducts = (products,filters) => {
    let results = [...products];

    if(filters.isDelivery){
        results = results.filter( Element => Element.delivery === true );
    }
    if(filters.isInstock){
        results = results.filter( Element => Element.inStock === true );
    }

    return results;

}

const CategoryItems = () => {

    const { catId } = useParams();
    const [filters, setFilters] = useState({
        isDelivery: sessionStorage.getItem('isDelivery') || false,
        isInstock: sessionStorage.getItem('isInstock') || false
    });
    const [products] = useState( productsData.filter( Element => Element.categoryId === catId ) );
    const filteredProducts = filterProducts(products,filters);

    const deliveryHandle = () => {
        setFilters( state => ({
            ...state, isDelivery: !state.isDelivery
        }));
    }

    const inStockHandle = () => {
        setFilters( state => ({
            ...state, isInstock: !state.isInstock
        }));
    }

    useEffect(() => {
        sessionStorage.setItem('isDelivery',filters.isDelivery);
        sessionStorage.setItem('isInstock',filters.isInstock);
    }, [filters]);
    

    return(
        
        <CategoryItemsWrapper>
             
            <h2 align="center" > Category Items </h2> 
            <p>Showing {filteredProducts.length} out of {products.length} </p>
                       
            <CheckboxGroup  className='checkboxgroup' inline name="checkboxList">
                <h5>Filters:-</h5> 
                <Checkbox className='checkbox' checked={filters.isDelivery} value="isDelivery" onChange={deliveryHandle} >Delivery</Checkbox>
                <Checkbox className='checkbox' checked={filters.isInstock} value="isInstock" onChange={inStockHandle} >Instock</Checkbox>
            </CheckboxGroup>
            { filteredProducts.map( Element => <Items key={Element.id} products={Element} /> ) }
             
        </CategoryItemsWrapper>
    );
};
export default CategoryItems;
