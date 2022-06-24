import React, { useContext, useState } from "react";
import {addDoc, Timestamp, collection} from 'firebase/firestore';
import {db} from '../Context/firebase.js';
import './CSS/compose.css';
import setInputHeight from '../Scripts/setInputHeight.js';
import Notification from './Notification'
import { Link } from "react-router-dom";
import { ApiContext } from "../Context/Context.js";
import { useNavigate } from "react-router-dom";


export default function Compose(){
    const [text, setText] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [notification, setNotification] = useContext(ApiContext);
    const navigate = useNavigate();

    const textAreaHandle = (event) => {
        setInputHeight(event, '100px');
        
        const lc = event.target.value.length;

        let perc = (lc * 100) / 280;
        if (perc>100) perc=100;
        setPercentage(parseInt(perc));
        
        setText(event.target.value);
    }
    
    const renderNotification = (msg, type, link) => {
        setNotification({
            msg:msg,
            type:type,
            link:link,
            show:true,
        })

    }

    const newTweet = async() => {
        if (text.length > 0 && text.length < 280){
            const tweetsRef = collection(db, "tweets");
            await addDoc(
                tweetsRef, 
                { 
                message:text, 
                authorID:1, 
                createdAt:Timestamp.fromDate(new Date())
                }
            )
            renderNotification("Your tweet was sent", "info", "#");
        }

        navigate("/");

    }

    return (
        <div id="compose">
            <div className="compose-head">
                <div className="compose-back">
                    <Link to="/"> <i className="fa-solid fa-arrow-left"></i> </Link>
                </div>
                <div className="compose-submit">
                    <button style={{
                        opacity:text.length>0 && text.length<280 ? 1: .5, 
                        cursor: text.length>0 && text.length<280 ? "pointer":"default"
                    }} className="compose-submit-button" onClick={newTweet} {...text.length<0 && text.length>280 ? "disabled":null}>
                        {text.length>0 && text.length<280 ? 
                        <Link to="/"> Tweet </Link>
                        :
                        "Tweet"
                        }
                        </button>
                </div>
            </div>

            <div className="compose-container">
                <div className="user-picture">
                    <img alt="user" src="https://pbs.twimg.com/profile_images/1525129595045007360/YX8NICtP_400x400.jpg"/>
                </div>
                <div className="compose-tweet">
                    <div className="container compose-text">

                        <div className="backdrop">
                            <div className="highlights">
                                {/* <!-- cloned text with <mark> tags here --> */}
                            </div>
                        </div>
                        <textarea autoFocus={true} onChange={(event) => textAreaHandle(event, '100px')} placeholder="What's happening?" className="compose-textarea"></textarea>
                    </div>

                    <div className="compose-range">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <span> Everyone can reply </span>
                    </div>
                    <div className="horizontal-separator"></div>
                    <div className="compose-add">
                        <i className="fa-regular fa-image"></i>
                        <i className="fa-solid fa-audio-description"></i>
                        <i className="fa-solid fa-bars-progress"></i>
                        <i className="fa-regular fa-face-smile"></i>
                        <i className="fa-solid fa-calendar-days"></i>
                        <i className="fa-solid fa-location-dot"></i>
                        <div className={text.length>0?"progressContainer show":"progressContainer hide"}>
                            <CircularProgressBar
                                strokeWidth={percentage>=93 ? "2" : "12"}
                                sqSize="30"
                                percentage={percentage}
                                value={280-text.length}
                                />
                            <div className="vertical-separator"></div>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* { !notification.shown &&
                <Notification msg={notification.msg} type={notification.type} link={notification.link}/>
            } */}
        </div>
    )
}


class CircularProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      // Size of the enclosing square
      const sqSize = this.props.sqSize;
      // SVG centers the stroke width on the radius, subtract out so circle fits in square
      const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
      // Enclose cicle in a circumscribing square
      const viewBox = `0 0 ${sqSize} ${sqSize}`;
      // Arc length at 100% coverage is the circle circumference
      const dashArray = radius * Math.PI * 2;
      // Scale 100% coverage overlay with the actual percent
      const dashOffset = dashArray - dashArray * this.props.percentage / 100;
  
      return (
        <svg className="lettersLeft"
            width={this.props.sqSize}
            height={this.props.sqSize}
            viewBox={viewBox}>
            <circle
              className="circle-background"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius}
              strokeWidth={`${this.props.strokeWidth}px`} 
              style={{
                    display: this.props.value<=-10 ? "none" : "block"
              }}
              />
            <circle
              className={
                this.props.percentage === 100 ? "circle-progress limit-full-progress" :
                  this.props.percentage >= 93 ? "circle-progress limit-warning-progress" : 
                      "circle-progress"
              }
              cx={(this.props.sqSize / 2)}
              cy={(this.props.sqSize / 2)}
              r={radius}
              strokeWidth={`${this.props.strokeWidth}px`}
              // Start progress marker at 12 O'Clock
              transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                display:this.props.value<=-10 ? "none" : "block"
              }} />
            <text
                className={
                    this.props.percentage === 100 || this.props.percentaje < 0 ? "circle-text limit-full" :
                        this.props.percentage >= 93 ? "circle-text limit-warning" : 
                            "circle-text"
                    }
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${this.props.value}`}
            </text>
        </svg>
      );
    }
  }

  CircularProgressBar.defaultProps = {
    sqSize: 100,
    percentage: 25,
    strokeWidth: 5
  };