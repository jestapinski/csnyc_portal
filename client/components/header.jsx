import React from 'react'
import {Router, Redirect, Link} from 'react-router-dom'
import Login from './login.jsx'
import cookie from 'react-cookies'


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'modal_open': false,
      'fname': null
    }
    this.handler = this.handle_login.bind(this)
  }

  handle_login(){
    this.setState({'modal_open': !this.state.modal_open})
  }

  componentWillMount(){
    this.handle_cookies()
  }

  handle_cookies(){
    const fname = cookie.load('fname')
    console.log(fname)
    if (fname){
      this.setState({ 'fname': fname })
      console.log(this.state.fname)
    }
  }

  render_login(){
    if (this.state.fname){
      return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Hi, {this.state.fname}!
        </a>
        <div className="navbar-dropdown">
          <Link to='/home' className="navbar-item">
            My Profile
          </Link>
          <Link to="/logout" className="navbar-item">
            Logout
          </Link>
        </div>
      </div>
      )
    }
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Sign In
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item"
             onClick={() => this.handle_login()}>
            Login
          </a>
          <Link to="/register" className="navbar-item">
            Register
          </Link>
          <hr className="navbar-divider"/>
          <div className="navbar-item">
            Forgot Your Password?
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
    <div>
      <Login modal_open={this.state.modal_open}
             handler={this.handler}/>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src="/images/cstoall.png" width="112" height="28"/>
            </Link>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">
              Units
            </a> 
            {this.render_login()}
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Header