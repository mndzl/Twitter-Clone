import './CSS/homepage.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Notification from './Notification'
import exploreIMG from './Images/explore.png';
import { db } from '../Context/firebase.js';
import { getDocs, collection, orderBy } from 'firebase/firestore';
import Tweet from './Tweet'


export default function homepage(){
    const [notification, setNotification] = useState({});
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getTweets();
    }, []);

    const getTweets = async() => {
        const data = await getDocs(collection(db, "tweets"), orderBy("createdAt"));
        setTweets(data.docs.map(doc => (
            {...doc.data(), id: doc.id}
        )));
    }

    return (
        <>
        <div className="head">
            <div className="user-picture">
                <img alt="user" src="https://pbs.twimg.com/profile_images/1525129595045007360/YX8NICtP_400x400.jpg"/>
            </div>
            <div className="head-title"><p>Inicio</p></div>
            <div className="head-explore">
                <img src={exploreIMG} alt="explore"></img>
            </div>
        </div>
        <div className="feed">
            <div className="feed-tweetlist">
                { tweets.map(tweet => 
                    <Tweet key={tweet.id} id={tweet.id} message={tweet.message} createdAt={tweet.createdAt} />
                )}
            </div>
        </div>

        <Navbar />
        
        <div className="write">
            <Link to="compose"> <i className="fa-solid fa-feather-pointed"></i> </Link>
        </div>
        
        { notification.show &&
            <Notification msg={notification.msg} type={notification.type} link={notification.link}/>
        }
        </>
    );
}