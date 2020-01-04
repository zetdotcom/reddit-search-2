import React from 'react';
import Header from './components/Header/Header';
import SearchedReddits from './components/SearchedReddits/SearchedReddits';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <SearchedReddits />
    </div>
  );
}

export default App;
