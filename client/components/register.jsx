import React from 'react'
import Header from './header.jsx'
import {register_wrapper} from '../process_credentials.js'


class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'fname': null,
      'lname': null,
      'email': null,
      'confirm_email': null,
      'pwd': null,
      'confirm_pwd': null
    }
  }

  key_down(e){
    if (e.key == 'Enter'){
      this.handle_submit()
    }
  }

  handle_fname(e){
    this.setState({'fname': e.target.value})
  }

  handle_lname(e){
    this.setState({'lname': e.target.value})
  }

  handle_email(e){
    this.setState({'email': e.target.value})
  }

  handle_cemail(e){
    this.setState({'confirm_email': e.target.value})
  }

  handle_password(e){
    this.setState({'pwd': e.target.value})
  }

  handle_cpassword(e){
    this.setState({'confirm_pwd': e.target.value})
  }

  handle_submit(){
    register_wrapper(this.state)
    return
  }

  confirm_emails(){
    const email = this.state.email
    const cemail = this.state.confirm_email
    if (email === null || cemail === null){
      return
    }
    if ((email.indexOf('@') === -1) || (email.indexOf('.') === -1)){
      return false
    }
    return (email === cemail)
  }

  render (){
    let email_class
    const email_result = this.confirm_emails()
    if (email_result === undefined){
      email_class = 'input'
    } else if (email_result){
      email_class = 'input is-success'
    } else {
      email_class = 'input is-danger'
    }
  	return (
      <div>
        <Header/>
        <div className='container' style={{paddingTop: '40px'}}>
          <h1 className='title is-2'>Registration</h1>
          <h1 className='subtitle is-4'>Just a quick minute to get started!</h1>
          <form>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">First Name</label>
                <p className="control has-icons-left">
                  <input className='input' type="text" placeholder="John" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_fname(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </p>
              </div>
            </div>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">Last Name</label>
                <p className="control has-icons-left">
                  <input className='input' type="text" placeholder="Doe" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_lname(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </p>
                <hr/>
              </div>
            </div>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">Email</label>
                <p className="control has-icons-left">
                  <input className={email_class} type="text" placeholder="johndoe@gmail.com" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_email(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">Confirm Email</label>
                <p className="control has-icons-left">
                  <input className={email_class} type="text" placeholder="johndoe@gmail.com" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_cemail(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
                <hr/>
              </div>
            </div>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input className='input' type="password" placeholder="password" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_password(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="field columns">
              <div className='column is-half'>
                <label className="label">Confirm Password</label>
                <div className="control has-icons-left">
                  <input className='input' type="password" placeholder="password" onKeyPress={(e) => this.key_down(e)} onChange={(e) => this.handle_cpassword(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
            </div>
            <a className="button is-success" onClick={() => this.handle_submit()}>Go!</a>
          </form>
        </div>
      </div>
    )
  		
  }
}

export default Register