import React from 'react';
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';

function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets_input">
               <SearchIcon className="widgets_searchIcon" />    
               <input placeholder="Search Twitter" type="text"/>
            </div>


            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1385206905967054850"} />

                <TwitterTimelineEmbed 
                 sourceType="profile"
                 screenName="elbinbinil"
                 options={{ height:400 }}
                 />

                <TwitterShareButton 
                    url={"https://instagram.com/elbinbinil"}
                    options={{ text: "#reactjs is insane" , via:"elbinbinil" }}
                /> 
            </div>
            
        </div>
    )
}

export default Widgets;