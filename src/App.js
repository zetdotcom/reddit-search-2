import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import SearchedReddits from './components/SearchedReddits/SearchedReddits';
import './App.scss';

const RedditsList = React.lazy(() => import('components/RedditsList/RedditsList'));

function App() {

  const data = useSelector(state => state.redditsList)

  return (
    <div>
      <Header />
      <SearchedReddits />
      <Suspense fallback={<div>Loading ...</div>}>
        <RedditsList data={data} />
      </Suspense>
    </div>
  );
}

export default App;
