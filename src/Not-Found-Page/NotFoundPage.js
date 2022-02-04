import React from 'react';
import NOT_FOUND_PAGE from '../Images/HTML-Yeti-404-Page.gif'
import { NotFoundWrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return <NotFoundWrapper>
    <img src={NOT_FOUND_PAGE} alt='The page you are requesting does not exists!!!' />
  </NotFoundWrapper>;
};

export default NotFoundPage ;
