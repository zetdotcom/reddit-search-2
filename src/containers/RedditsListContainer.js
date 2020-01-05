import React from 'react';
import {useSelector} from 'react-redux';
import RedditsList from 'components/RedditsList/RedditsList';


function RedditsListContainer() {

  const redditsList = useSelector(state => state.redditsList.reddits)
  const pending = useSelector(state => state.redditsList.pending)

  return (
    <RedditsList redditsList={redditsList} pending={pending} />
  )
};

export default RedditsListContainer;