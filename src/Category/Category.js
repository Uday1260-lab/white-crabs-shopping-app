import React from 'react';
import { Button } from 'rsuite';
import categories from '../data-files/categories.json'
import { CategoryWrapper } from './Category.styled';

const Category = () => {

    return (
        <CategoryWrapper>
            {categories.map( item => <Button>{item.name}</Button> )}
        </CategoryWrapper>
    );
};

export default Category;
