import '../CSS/tweet.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

export default function Tweet({id, message, createdAt}) {
    const [timeAgo, setTimeAgo] = useState("");

    useEffect(() => {
        const timeAgo = moment(createdAt.toDate()).fromNow();

        const text = timeAgo.split(" ");

        var number = text[0] === 'a' ? 1 : text[0];
        var unit = text[1][0];
        
        var dateFormatted = number+unit;

        if(unit==='d'){
            const date = moment(createdAt.toDate()).format('D MMM');
            dateFormatted = date.toLowerCase()+'.';
        }

        setTimeAgo(dateFormatted);

    }, []);

    return (
        <div className="tweet">
            <div className="tweet-userpicture">
                <img src="https://pbs.twimg.com/profile_images/1525129595045007360/YX8NICtP_400x400.jpg" alt="user"/>
            </div>
            <div className="tweet-content">
                <div className="tweet-head">
                    <div className="tweet-userinfo">
                        
                        <span className="tweet-user">Méndez</span>
                        <span className="tweet-username"> @Mendezzluis3</span>
                        <span className="tweet-time"> · {timeAgo}</span>
                    </div>
                    <div className="options"><strong>···</strong></div>
                </div>
                <div className="tweet-text">
                    <p>
                        {message}
                    </p>
                </div>
                {/* <div className="tweet-image">
                    <img alt='user' src="https://pbs.twimg.com/media/FVVM1wVWQAMYoFU?format=jpg&name=360x360"></img>
                </div> */}
                <div className="tweet-actions">
                    <span><i className="fa-regular fa-comment"></i> <span className="number">56</span></span>
                    <span><i className="fa-solid fa-retweet"></i> <span className="number">233</span></span>
                    <span><i className="fa-regular fa-heart"></i> <span className="number"> 7.684</span></span>
                    <span><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
                </div>

            </div>
        </div>

    )
}