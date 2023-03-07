import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';

export default function Feed() {
  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}
