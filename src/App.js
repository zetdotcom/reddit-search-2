import React, { Suspense } from 'react';
import Header from 'components/Header/Header';
import SearchedReddits from 'components/SearchedReddits/SearchedReddits';
import RedditsList from 'components/RedditsList/RedditsList';
import './App.scss';


function App() {


  return (
    <div>
      <Header />
      <SearchedReddits />
      <RedditsList />
    </div>
  );
}

export default App;
