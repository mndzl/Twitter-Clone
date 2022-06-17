import '../CSS/feed.css'
import Tweet from './Tweet'

export default function Feed(){
    return (
        <div className="feed">
            <div className="feed-tweetlist">
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </div>
        </div>
    );
}