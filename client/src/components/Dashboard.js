import React,{Component, useState} from'react'
import {Link} from 'react-router-dom'
import EventHistory from './EventHistory'

export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <Link to='/dashboard/eventlog'>
                    <button className="button" type="submit">eventlog</button>
                </Link>
                <Link to='/dashboard/roomhistory'>
                    <button className="button" type="submit">All chat logs</button>
                </Link>
                <Link to='/dashboard/filterroom'>
                    <button className="button" type="submit">filter by room</button>
                </Link>
                
                
            </div>
        )
    }
}