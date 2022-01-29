import React from 'react';
import './Title.styled.js'
import { TitleWrapper } from './Title.styled.js';

const Title = ({ title , subTitle }) => {
    return( 
        <TitleWrapper>
            <h2>{ title }</h2>
            <p>{ subTitle }</p>
        </TitleWrapper>
    );
};

export default Title;
