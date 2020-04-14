import React,{Component, useState} from'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../style.css';

const Eventlist = props =>(
    <tr>
        <td>{props.data.event}</td>
        <td>{props.data.userName}</td>
        <td>{props.data.date}</td>
        <td>{props.data.room}</td>
        <td>
            <a href="" onClick={()=>{props.deleteEvent(props.data._id)}}>Delete</a>
        </td>

    </tr>
)
export default class EventHistory extends Component{
    constructor(props){
    super(props);
    this.state ={
        events:[]
    }
}
    componentDidMount(){
        axios.get('https://comp3133-chat-app.herokuapp.com/eventlog/').then(res =>{
            this.setState({events: res.data})
            console.log(this.state.events);
        }).catch((error) =>{
            console.log(error)
        });
        
        
    }
    deleteEvent(id){
        axios.delete('https://comp3133-chat-app.herokuapp.com//eventlog/'+id).then(res => console.log(res.data));
        this.setState({
            events: this.state.events.filter(el => el._id !== id)
        })   
    }
    eventsList(){
        return this.state.events.map(eventdata =>{
            return <Eventlist data={eventdata} deleteEvent={this.deleteEvent} key={eventdata._id}/>
        })
    }
    render(){
        return(
            <div>
                <h1>events</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Username</th>
                            <th>Date</th>
                            <th>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.eventsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}