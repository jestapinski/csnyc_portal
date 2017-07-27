import React from 'react'
import cookie from 'react-cookies'
import Header from './header.jsx'


class Profile extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = { email: cookie.load('email'), fname: cookie.load('fname'), lname: cookie.load('lname') }
    console.log(this.state)
  }

  render(){
    return (
      <div>
      <Header/>
      <div className='container'>
        <h1 className='title is-s2' style={{textAlign: "center", paddingTop: '40px'}}>{this.state.fname} {this.state.lname}</h1>
        <h1 className='title is-s4' style={{textAlign: "center"}}>{this.state.email}</h1>
      </div>
    </div>
    )
  }
}

export default Profile