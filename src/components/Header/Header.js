import React from 'react';
import redditImage from 'images/reddit.png';
import SearchFormContainer from 'containers/SearchFormContainer'

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={redditImage} alt='' />
      </div>
        <SearchFormContainer />
    </div>
  );
};

export default Header;
