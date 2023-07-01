import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {

  const [posts, setPosts] = useState([{
    user: 'zhanibekibatov',
    postImage: 'https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000',
    likes: 12,
    timestamp: '2d',
  },

  {
    user: 'ekulynbaev',
    postImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80',
    likes: 126,
    timestamp: '5d',
  },

  {
    user: 'quanyshev',
    postImage: 'https://st2.depositphotos.com/1008939/7395/i/600/depositphotos_73955485-stock-photo-pensive-man.jpg',
    likes: 31,
    timestamp: '3d',
  }]);

  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {posts.map(post => (
            <Post user={post.user} 
                  postImage={post.postImage} 
                  likes={post.likes} 
                  timestamp={post.timestamp} />
          ))}
        </div>
      </div>

      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline
