import React, { useState } from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase'

function Tweetbox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Elbin Binil',
            username:  'elbinbinil',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://twitter.com/elbinbinil'
        })
        setTweetMessage("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
         <form>
             <div className="tweetBox_input">
                <Avatar src="https://twitter.com/ElbinBinil"></Avatar>
                <input
                  onChange={ (e) => setTweetMessage(e.target.value)}
                  value={tweetMessage}
                  placeholder="What's happening?"
                  type="text" />
                
             </div>
             <input 
             onChange={ (e) => setTweetImage(e.target.value)}
             value={tweetImage}
             className="tweetBox_imageInput"
             placeholder="Optional: Enter image url"
             type="text"></input>
             <Button onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
         </form>
        </div>
    )
}

export default Tweetbox;