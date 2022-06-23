import React from "react";
import './CSS/notification.css'

export default function Notification({msg, type, link}) {

    const renderClasses = () => {
        return "notification-container " + type;
    }

    return (
        <div className={renderClasses()}>
            <div className="text">
                <span>
                    {msg}
                </span>
            </div>
            <div className="link">
                <a href={link}>See</a>
            </div>
        </div>
    );
}