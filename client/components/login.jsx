import React from 'react'
import {Router, Redirect} from 'react-router-dom'
import {login_wrapper} from '../process_credentials.js'
import cookie from 'react-cookies'

class Login extends React.Component {
	constructor(props){
    console.log(props)
		super(props)
    this.data = null
    this.login_async = false
    this.state = {
      'email': null,
      'password': null,
      'incorrect_creds': false,
      'just_logged_in': false,
      'fname': null,
      'email': null
    }
	}

  key_down(e) {
    if (e.key == 'Enter'){
      this.handle_submit()
    }
  }

  handle_submit(){
    const email = this.state.email
    const pwd = this.state.password
    this.login_async = true;
    login_wrapper(email, pwd, this.handle_login_success.bind(this), this.handle_login_fail.bind(this))
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount(){
    let data = this.data
    if (data){
      cookie.remove('email', { path: '/' })
      cookie.remove('fname', { path: '/' })
      cookie.remove('lname', { path: '/' })
      cookie.save('email', data.email, {path : '/'})
      cookie.save('fname', this.capitalizeFirstLetter(data.fname), {path : '/'})
      cookie.save('lname', this.capitalizeFirstLetter(data.lname), {path : '/'})            
    }
    
  }

  handle_login_success(data){
    console.log(data['email'])
    this.data = data
    this.login_async = true
    this.setState({'just_logged_in': true})
    cookie.remove('email', { path: '/' })
    cookie.remove('fname', { path: '/' })
    cookie.save('email', data.email, {path : '/'})
    cookie.save('fname', this.capitalizeFirstLetter(data.fname), {path : '/'})
    cookie.save('lname', this.capitalizeFirstLetter(data.lname), {path : '/'})            
    console.log(this.state)
  }

  handle_login_fail(){
    this.setState({'incorrect_creds': true})
  }

  handle_email(e){
    this.setState({'email': e.target.value})
  }

  handle_password(e){
    this.setState({'password': e.target.value})
  }

  componentDidUpdate(){
    if (this.state.just_logged_in){
      this.setState({'just_logged_in': false})    
    }
  }

  renderLogin(){
    let data = this.data
    if (data){
      cookie.remove('email', { path: '/' })
      cookie.remove('fname', { path: '/' })
      cookie.save('email', data.email, {path : '/'})
      cookie.save('fname', this.capitalizeFirstLetter(data.fname), {path : '/'})
      cookie.save('lname', this.capitalizeFirstLetter(data.lname), {path : '/'})                
    }

    let modal_class = 'modal'
    let cred_class = 'input'
    if (this.props.modal_open){
      modal_class += ' is-active'
    }
    if (this.state.incorrect_creds){
      cred_class += ' is-danger'
    }
    if (this.state.just_logged_in){
      console.log('just logged in')
      //TODO re-write below to use cookies
      return <Redirect to='/home'/>
    }
    return (
    <div className={modal_class} id='login_modal'>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Login</p>
          <button className="delete" onClick={() => this.props.handler()}></button>
        </header>
        <section className="modal-card-body">

        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left">
            <input id='username' className={cred_class} type="text" placeholder="johndoe@gmail.com" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_email(e)}/>
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input id='password' className={cred_class} type="password" placeholder="password" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_password(e)}/>
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>

        </section>
        <footer className="modal-card-foot">
          <a className="button is-success" onClick={() => this.handle_submit()}>Go!</a>
          <a className="button" onClick={() => this.props.handler()}>Cancel</a>
        </footer>
      </div>
    </div>
  )
  }

  render(){
    return this.renderLogin()
  }
}

export default Login
