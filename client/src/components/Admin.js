import React,{Component, useState} from'react'
import {Link,useHistory,withRouter,Redirect} from 'react-router-dom'
import axios from 'axios'
import '../style.css';

export default class Admin extends Component{
    constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
        username: '',
        password: '',
        auth: false
    };
}
    handleChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
        console.log(this.state.username);
    }
    handleChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password);
    }
    handleSubmit =(e) =>{
        //e.preventdefault();
        //let history = useHistory();
        // console.log(this.state.username);
        // //console.log(this.state.password);
        if(this.state.username === 'admin' && this.state.password === 'password'){
             this.setState({
                 auth: true
             });
        }else{
            this.setState({
                auth:false
            });
        }
        console.log(this.state.password)
        console.log(this.state.username)
        console.log(this.state.auth);
        // this.state.auth = true;
         //window.location.reload();
    }
    render(){
        if (this.state.auth === true) {
            return <Redirect to='/dashboard' />
          }
        return(
            <div>
                {/* <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div><input placeholder ="Username" className="joinInput" id="username" type="text" onChange={this.handleChangeUsername}></input></div>
                <br/>
                <div><input placeholder ="password" className="joinInput" id="password" type="text" onChange={this.handleChangePassword}></input></div>

                <button onClick={(e)=>this.handleSubmit(e)}>submit</button>

                </form> */}
                                <div><input placeholder ="Username" className="joinInput" id="username" type="text" onChange={this.handleChangeUsername}></input></div>
                <br/>
                <div><input placeholder ="password" className="joinInput" id="password" type="password" onChange={this.handleChangePassword}></input></div>

                <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            </div>
        )
    }
}

