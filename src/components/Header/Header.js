import React from 'react';
import redditImage from '../../images/reddit.png';
import SearchForm from '../SearchForm/SearchForm'

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={redditImage} alt='' />
      </div>
        <SearchForm />
    </div>
  );
};

export default Header;
