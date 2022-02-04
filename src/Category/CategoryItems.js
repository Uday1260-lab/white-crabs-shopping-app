import React, { useState , useEffect , useCallback } from 'react';
import { useParams } from 'react-router';
import { Checkbox, CheckboxGroup } from 'rsuite';
import productsData from '../data-files/products.json';
import { CategoryItemsWrapper } from './CategoryItems.styled';
import Items from './Items';

const CategoryItems = () => {

    const { catId } = useParams();
    const [products] = useState( productsData.filter( Element => Element.categoryId === catId ) );
    const [filtered, setFiltered] = useState([...products]);    
    const [isDelivery,setIsDelivery] = useState( sessionStorage.getItem( 'isDelivery') || false );
    const [isInstock,setIsInstock] = useState( sessionStorage.getItem( 'isInstock') || false );

        
    console.log('isDelivery', isDelivery);
    console.log('isInStock', isInstock);

    const deliveryHandle = () => {
        setIsDelivery( d => !d );
        sessionStorage.setItem('isDelivery',isDelivery);
        setFiltered( filterProducts() );
    }

    const inStockHandle = () => {
        setIsInstock(s => !s);
        sessionStorage.setItem('isInstock',isInstock);
        setFiltered( filterProducts() );
    }
    const filterProducts = useCallback ( () => {
        let results = [...products];

        if(isDelivery){
            results = results.filter( Element => Element.delivery === true );
        }
        if(isInstock){
            results = results.filter( Element => Element.inStock === true );
        }

        return results;

    },[isDelivery, isInstock, products])

    useEffect(() => {
        filterProducts();
    }, [filterProducts]);

    return(
        
        <CategoryItemsWrapper>
             
            <h2 align="center" > Category Items </h2> 
            <p>Showing {filtered.length} out of {products.length} </p>
                       
            <CheckboxGroup  className='checkboxgroup' inline name="checkboxList">
                <h5>Filters:-</h5> 
                <Checkbox className='checkbox' checked={isDelivery} value="isDelivery" onChange={deliveryHandle} >Delivery</Checkbox>
                <Checkbox className='checkbox' checked={isInstock} value="isInstock" onChange={inStockHandle} >Instock</Checkbox>
            </CheckboxGroup>
            { filtered.map( Element => <Items key={Element.id} products={Element} /> ) }
             
        </CategoryItemsWrapper>
    );
};
export default CategoryItems;
