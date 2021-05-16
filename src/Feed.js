import React, {useEffect, useState} from "react";
import "./Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed () {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
     //code to run when feed load when somenthing changes
     db.collection('posts').onSnapshot(snapshot => (
       setPosts(snapshot.docs.map(doc => doc.data()))
     ))
    }, [])

    return(
        <div className="feed">
        <div className="feed_header">
          {/* Header */}
          <h2 >Home</h2>
        </div>

        {/* Tweet Box */}
        <Tweetbox />  
         

        {/*Post */}
        <FlipMove >
        {posts.map(post => 
        <Post
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        )}
        </FlipMove>


        </div>
    )
}

export default Feed;