import './CSS/homepage.css';
import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Notification from './Notification'
import exploreIMG from './Images/explore.png';
import { db } from '../Context/firebase.js';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import Tweet from './Tweet'
import {ApiContext} from '../Context/Context';


export default function homepage(){
    const [notification, setNotification] = useContext(ApiContext);

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getTweets().then(
            setInterval(()=>{
                setNotification({
                    show:false,
                });
            }, 5000)
        )

        console.log(notification);
    }, []);

    const getTweets = async() => {
        const data = await getDocs(query(collection(db, "tweets"), orderBy("createdAt", "desc")));
        setTweets(data.docs.map(doc => (
            {...doc.data(), id: doc.id}
        )));
    }

    return (
        <div className="homepage">
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

                {notification.show && 
                    <Notification msg={notification.msg} type={notification.type} link={notification.link}/>
                }
            </div>

            <Navbar />
            
            <div className="write" style={
                {"bottom": notification.show && "calc(5vh + 2em + 3em"}
            }>
                <Link to="compose"> <i className="fa-solid fa-feather-pointed"></i> </Link>
            </div>
        </div>
    );
}