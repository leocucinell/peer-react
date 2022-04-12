import "./Landing.css"
import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map/Map";
import MapIcon from "../components/MapIcon/MapIcon";

const Landing = () => {

    //NOTE: Add these children to map element once geocoding api implemented
    // const landingMapEvents = [
    //     {}
    // ]

    return(
        <div className="Landing-Page">
            <Map></Map>
            <div className="Landing-content">
                <ul className="Landing-nav">
                    <li className="Landing-nav-option">about</li>
                    <li>|</li>
                    <li className="Landing-nav-option">support</li>
                    <li>|</li>
                    <li className="Landing-nav-option">contact</li>
                    <li>|</li>
                    <li className="Landing-nav-option">mission</li>
                </ul>

                <div className="Landing-content-main">
                    <div className="Landing-title">
                        <h1>Get out there</h1>
                        <h2>with <span>Peer</span></h2>
                    </div>
                    <div className="Landing-btns">
                        <button className="Landing-btn" id="Landing-lgn-btn"><Link to="/login" style={{textDecoration:"none", color: "black"}}>log in</Link></button>
                        <button className="Landing-btn" id="Landing-sgup-btn"><Link to="/signup" style={{textDecoration:"none", color: "black"}}>sign up</Link></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Landing;