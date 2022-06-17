import '../CSS/head.css'
import exploreIMG from '../Images/explore.png';

export default function Head() {
    return (
        <div className="head">
            <div className="head-user-picture">
                <img alt="user" src="https://pbs.twimg.com/profile_images/1525129595045007360/YX8NICtP_400x400.jpg"/>
            </div>
            <div className="head-title"><p>Inicio</p></div>
            <div className="head-explore">
                <img src={exploreIMG} alt="explore"></img>
            </div>
        </div>
    );
}