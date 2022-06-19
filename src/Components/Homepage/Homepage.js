import '../CSS/homepage.css';
import React from 'react';
import Head from './Head';
import Feed from './Feed';
import Navbar from './Navbar';
import Write from './Write';


export default function homepage(){
    return (
        <>
        <Head/>
        <Feed />
        <Navbar />
        <Write />
        </>
    );
}