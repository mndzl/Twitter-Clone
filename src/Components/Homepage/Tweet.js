import '../CSS/tweet.css'

export default function Tweet() {
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
                        <span className="tweet-time"> · 15 jun.</span>
                    </div>
                    <div className="options"><strong>···</strong></div>
                </div>
                <div className="tweet-text">
                    <p>
                    In my path to master React.js, my first project was small chat application that looks like a WhatsApp chat. 
                    <br/>

                    This is a Global Live Chat that everybody can log in with their Google account and chat with everyone on real time. 
                    <br/>

                    <span className="url">https://chat-68052.firebaseapp.com</span>
                    <br/>
                    <br/>

                    <span className="tag">@platzi</span>
                    <br/>

                    <span className="hashtag">#firebase</span>
                    <br/>
                    <span className="hashtag">#ReactJS</span>
                    </p>
                </div>
                <div className="tweet-image">
                    <img alt='user' src="https://pbs.twimg.com/media/FVVM1wVWQAMYoFU?format=jpg&name=360x360"></img>
                </div>
                <div className="tweet-actions">
                    <span><i class="fa-regular fa-comment"></i> <span className="number">56</span></span>
                    <span><i class="fa-solid fa-retweet"></i> <span className="number">233</span></span>
                    <span><i class="fa-regular fa-heart"></i> <span className="number"> 7.684</span></span>
                    <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                </div>

            </div>
        </div>

    )
}