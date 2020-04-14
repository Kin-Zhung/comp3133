import React,{Component, useState} from'react'
import {Link} from 'react-router-dom'
import EventHistory from './EventHistory'
import '../style.css';
export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <EventHistory></EventHistory>
            </div>
        )
    }
}