import React from 'react';
import Header from 'components/Header/Header';
import SearchedRedditsContainer from 'containers/SearchedRedditsContainer';
import RedditsListContainer from 'containers/RedditsListContainer';
import './App.scss';


function App() {


  return (
    <div>
      <Header />
      <SearchedRedditsContainer />
      <RedditsListContainer />
    </div>
  );
}

export default App;
