import '../CSS/homepage.css';
import React, { useEffect, useState } from 'react';
import Head from './Head';
import Feed from './Feed';
import Navbar from './Navbar';
import Write from './Write';
import Notification from '../Notification'


export default function homepage(){
    const [notification, setNotification] = useState({});

    // useEffect(() => {
    //     setNotification({
    //         msg:null,
    //         type:null,
    //         link:null,
    //         show:null,
    //     });
    // }, [])

    return (
        <>
        <Head/>
        <Feed />
        <Navbar />
        <Write />
        
        { notification.show &&
            <Notification msg={notification.msg} type={notification.type} link={notification.link}/>
        }
        </>
    );
}