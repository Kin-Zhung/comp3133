import React,{Component, useState} from'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../style.css';
export default class Admin extends Component{
    state = {
        username: '',
        password: '',
        auth:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDEFAULT();
            axios.post('http://localhost:5000/admin',{username: this.username, password: this.password}).then(res =>{
                this.setState({auth: res.data});
                console.log(this.auth);
            }).catch((error) =>{
                console.log(error)
            });
            
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div><input placeholder ="Username" className="joinInput" id="username" type="text" onChange={this.handleChange}></input></div>
                <br/>
                <div><input placeholder ="password" className="joinInput" id="password" type="text" onChange={this.handleChange}></input></div>
                <Link to='/dashboard'>
                <button >submit</button>
                </Link>
                </form>
            </div>
        )
    }
}