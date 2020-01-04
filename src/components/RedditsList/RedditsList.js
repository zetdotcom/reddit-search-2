import React from 'react';
import { useSelector } from 'react-redux';

import './RedditsList.scss';

function RedditsList() {

  const redditsList = useSelector(state => state.redditsList.reddits)

  return (
    <div>
      {redditsList.map(item => (
        <div key={item.id} style={{border: '1px solid red'}}>{item.title}</div>
      ))}
    </div>
  )
};

export default RedditsList;