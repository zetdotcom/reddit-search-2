import React from 'react';
import Header from 'components/Header/Header';
import SearchedReddits from 'components/SearchedReddits/SearchedReddits';
import RedditsListContainer from 'containers/RedditsListContainer';
import './App.scss';


function App() {


  return (
    <div>
      <Header />
      <SearchedReddits />
      <RedditsListContainer />
    </div>
  );
}

export default App;
