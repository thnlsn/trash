import React from "react";
import "../App.css"
import "../About.css"
import Register from "./auth/Register";

function About() {
    return (
        <div className="about-background">
            <p className="about-p"> 
                <span className="about-span">P</span>ixit is an app for people looking to make a real, tangible difference in the world every day. 
                Simply use the mobile app to track your location and start cleaning up your community!
                You can also join in with others nearby who have started a Pixit sesh with the app. 
            </p>
            <div className="about-image-container">
                <img className="about-image" alt="googleMaps from https://www.cnet.com/how-to/map-out-your-holiday-travel-with-these-6-google-maps-tips/" src="https://cnet2.cbsistatic.com/img/1wA7hlqSUmY0hvKq8gYvEX84v8Q=/2019/08/28/ae269afb-d3ab-4d3b-80e1-d0a89206e3a1/google-maps-2.jpg"></img>
                <img className="about-image trash" alt="recyclePhoto from https://purepng.com/photo/11027/clipart-recycle-bin" src="http://clipart-library.com/images/6cyo8rXoi.png"></img>
                <img className="about-image earth" alt="Earth Photo from https://www.livescience.com/earth.html" src="http://pngimg.com/uploads/earth/earth_PNG39.png"></img>

            </div>
            <p className="about-p">
                <span className="about-span">W</span>hether you use it just to track your own progress
                or for a bit of friendly competition with other environmentally mindful neighbors in your community, Pixit makes cleaning fun!
            </p>
        </div>
    )
}

export default About;