import React from 'react';
import { Button, Panel } from 'rsuite';
import NOT_FOUND_IMAGE from '../Images/not-found.jpg'
import { ItemWrapper } from './Items.styled';

const Items = ({item}) => {
    const {name,price,currency,delivery,thumbnail,inStock} = item;
    const disable = !delivery || !inStock;
    return (
    <ItemWrapper>
        <Panel className='panel'>
            <h3 className='title' >{name}</h3>
            <img src={thumbnail ? thumbnail : NOT_FOUND_IMAGE} width="400" height="200" alt='SomeThing' />
            <p className='price'>Price :- { currency + price } </p>
            {delivery ? (<p style={{ color: 'green' }}>Can be delivered with 2 working days.</p>) : (<p style={{ color: 'red' }}>*Due to some inconvenience <br/> We cannot deliver it.</p>)}
            {inStock ? (<p style={{ color: 'green' }}> INSTOCK </p>) : (<p style={{ color: 'red' }}> *OUT OF STOCK </p>)}
            <Button className='button' disabled={disable} appearance={disable ? 'ghost' : 'primary'} >Add To Cart</Button>
        </Panel>     
    </ItemWrapper>
    );
};

export default Items;
