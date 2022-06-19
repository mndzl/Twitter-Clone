import { useEffect, useState } from 'react';
import React from 'react';
import { db } from '../../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import '../CSS/feed.css'
import Tweet from './Tweet'

export default function Feed(){
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getTweets();
    }, []);

    const getTweets = async() => {
        const data = await getDocs(collection(db, "tweets"));
        setTweets(data.docs.map(doc => (
            {...doc.data(), id: doc.id}
        )));
        
    }

    return (
        <div className="feed">
            <div className="feed-tweetlist">
                { tweets.map(tweet => 
                    <Tweet key={tweet.id} id={tweet.id} message={tweet.message} createdAt={tweet.createdAt} />
                )}
            </div>
        </div>
    );
}