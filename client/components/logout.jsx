import React from 'react'
import {Router, Redirect} from 'react-router-dom'
import cookie from 'react-cookies'

class Logout extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    cookie.remove('email', { path: '/' })
    cookie.remove('fname', { path: '/' })
    cookie.remove('lname', { path: '/' })    
  }

  render(){
    return <Redirect to='/'/>
  }
}

export default Logout