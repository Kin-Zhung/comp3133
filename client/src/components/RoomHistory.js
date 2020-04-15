import React,{Component, useState} from'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../style.css';

const Roomlist = props =>(
    
    
    <tr>
        <td>{props.data.userName}</td>
        <td>{props.data.date}</td>
        <td>{props.data.message}</td>
        <td>{props.data.chat}</td>
        <td>

            <a href="#" onClick={()=>{props.deleteRoom(props.data._id)}}>Delete</a>
    
        </td>

    </tr>
)
export default class RoomHistory extends Component{
    constructor(props){
    super(props);

    this.deleteRoom = this.deleteRoom.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state ={
        room: []
    };
    }
    componentDidMount(){
        axios.get('https://comp3133-chat-app.herokuapp.com/dashboard/history/').then(res =>{
            this.setState({room: res.data})
            console.log(this.state.room);
        }).catch((error) =>{
            console.log(error)
        });
        
        
    }
    deleteRoom(id){
        
        axios.delete('https://comp3133-chat-app.herokuapp.com/dashboard/history/'+id).then(res => console.log(res.data));
        this.setState({
            room: this.state.room.filter(el => el._id !== id)
        });
        console.log(this.room)
    }
    roomList(){
        return this.state.room.map(roomdata =>{
            return <Roomlist data={roomdata} deleteRoom={this.deleteRoom} key={roomdata._id}/>
        })
    }
    render(){
        return(

            <div>
                <h1>All chat logs</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Date</th>
                            <th>Message</th>
                            <th>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.roomList()}
                    </tbody>
                </table>
            </div>
        )
    }
}