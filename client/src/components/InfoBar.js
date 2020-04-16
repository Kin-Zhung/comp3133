import React from 'react';
import {Link} from 'react-router-dom'
import '../style.css';
const InfoBar = ({room}) =>(
    <div className="infoBar">
        <div className="leftInnderContainer">
            <h1>{room}</h1>
        </div>
        <div className="rightInnderContainer">
            <Link to='/'><a>close</a></Link>
        </div>

    </div>
)

export default InfoBar;