import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import categories from '../data-files/categories.json'
import { CategoryWrapper } from './Category.styled';

const Category = () => {

    return (
        <CategoryWrapper>
            <p>Choose a category</p>
            {categories.map( item => <Link key={item.id} to={`/category/${item.id} `} ><Button><i class={item.icon}></i><br/><p>{item.name}</p><small>{item.description}</small></Button></Link>)}
        </CategoryWrapper>
    );
};

export default Category;
