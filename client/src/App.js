import React from 'react';
import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Admin from'./components/Admin'
import Join from'./components/Join'
import Chat from'./components/Chat'
import Dashboard from './components/Dashboard'
const App =()=>(
  <Router>
    <Route path ="/" exact component={Join}/>
    <Route path ="/chat" component={Chat}/>
    <Route path ="/admin" component={Admin}/>
    <Route path ="/dashboard" component={Dashboard}/>
  </Router>
)

export default App;
