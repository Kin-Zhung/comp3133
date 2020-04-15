import React,{Component, useState} from'react'
import {Link,useHistory,withRouter} from 'react-router-dom'
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
        let history = useHistory();
        console.log(this.username);
        console.log(this.password);
        //  if(this.username === "admin" && this.password === "password"){
        //      history.push("/dashboard");
        // }else{
        //     history.push("/admin");
        // }
        history.replace("/dashboard")
    }
    render(){
        return(
            <div>
                <form>
                <div><input placeholder ="Username" className="joinInput" id="username" type="text" onChange={this.handleChange}></input></div>
                <br/>
                <div><input placeholder ="password" className="joinInput" id="password" type="text" onChange={this.handleChange}></input></div>

                <button onClick={this.handleSubmit}>submit</button>

                </form>
            </div>
        )
    }
}