import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import { HomeWrapper } from './Home.styled';
import Title from './Title';

const Home = () => {
    return( 
        <HomeWrapper>
            <Title title="E-Commerce Company" subTitle="We fulfill all your needs!!" />
            <div className='button' >
                
                    <Link to='/category' ><Button><i class="fas fa-list-alt"></i>Category</Button></Link>
                
            </div>
        </HomeWrapper>
    );
};

export default Home;
