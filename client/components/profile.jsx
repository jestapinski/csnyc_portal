import React from 'react'
import cookie from 'react-cookies'
import Header from './header.jsx'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


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
      <div className='container' >
        <figure style={{textAlign: 'center', paddingTop: '40px'}}>
          <img src="/images/js.jpg" height='256' width='256'/><br/>
          <a style={{textAlign: "center"}}>Change Profile Picture</a>
        </figure>
        <h1 className='title is-s2' style={{textAlign: "center", marginTop: '30px'}}>{this.state.fname} {this.state.lname}</h1>
        <h1 className='subtitle is-s4' style={{textAlign: "center"}}>({this.state.email})</h1>
      <div className='columns'>
        <div className='column is-one-third'>
        <span className='box' style={{paddingTop: '0'}}>
          <h1 className='title is-s2' style={{textAlign: "center", paddingTop: '30px'}}>Recent Activity</h1>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Enigma Unit
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>I used the <a>#EnigmaUnit</a> today in my class, and it was a blast!</p>
                <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px'}}>
                  <img src="/images/wc.jpeg"/>
                </figure>
                <small><strong>Will Cross</strong> - wcross@mongodb.com</small>
                <br/>
                <small>11:09 PM - 1 Jan 2016</small>
                <br/>
              </div>
            </div>
          </div>
          <br/>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Enigma Unit
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>Just updated the <a>#EnigmaUnit</a> with better instructions! Try it out at <a>enigma-unit.herokuapp.com</a></p>
                <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px'}}>
                  <img src="/images/js.jpg"/>
                </figure>
                <small><strong>Jordan Stapinski</strong> - jestapinski@yahoo.com</small>
                <br/>
                <small>11:09 PM - 1 Jan 2016</small>
                <br/>
              </div>
            </div>
          </div>
        </span>
        </div>
        <div className='column is-one-third'>
          <h1 className='title is-s2' style={{textAlign: "center", paddingTop: '30px'}}>Suggested Units</h1>
          <div className = 'card'>
            <Link to='/' style={{ textDecoration: 'none', border: '0', opacity: 'inherit' }}>
              <header className="card-header">
                <p className="card-header-title">
                  Enigma Unit
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <h1 className='title is-s4' style={{textAlign: "center", marginBottom: '5'}}>Enigma Unit</h1>
                  <i style={{marginBottom: '5'}}>A journey into cryptography, with a historical context</i>
                  <br/>
                  <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px', paddingTop: '10px'}}>
                    <img src="/images/js.jpg"/>
                  </figure>
                  <br/>
                  <small><strong>Jordan Stapinski</strong> - jestapinski@yahoo.com</small>
                  <br/>
                </div>
              </div>
            </Link>
            </div><br/><br/>

            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Mean, Median, Mode
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <h1 className='title is-s4' style={{textAlign: "center", marginBottom: '5'}}>Mean, Median, Mode</h1>
                  <i style={{marginBottom: '5'}}>A look into statistics with real-world applications</i>
                  <br/>
                  <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px', paddingTop: '10px'}}>
                    <img src="/images/js.jpg"/>
                  </figure>
                  <br/>
                  <small><strong>Nathan Dalal</strong> - nathan.dalal@mongodb.com</small>
                  <br/>
                </div>
              </div>
            </div>

          </div>

        <div className='column is-one-third'>
          <h1 className='title is-s2' style={{textAlign: "center", paddingTop: '30px', visibility: 'hidden'}}>Suggested Units</h1>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Electoral College
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <h1 className='title is-s4' style={{textAlign: "center", marginBottom: '5'}}>Electoral College</h1>
                  <i style={{marginBottom: '5'}}>Explore the outcomes of elections and hypothetical scenarios.</i>
                  <br/>
                  <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px', paddingTop: '10px'}}>
                    <img src="/images/js.jpg"/>
                  </figure>
                  <br/>
                  <small><strong>Sarina Lim</strong> - sarina.lim@mongodb.com</small>
                  <br/>
                </div>
              </div>
            </div><br/><br/>

            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Mean, Median, Mode
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <h1 className='title is-s4' style={{textAlign: "center", marginBottom: '5'}}>Dice Simulator</h1>
                  <i style={{marginBottom: '5'}}>Investigate probability through monte-carlo dice simulations.</i>
                  <br/>
                  <figure className='image is-48x48' style={{float: 'left', paddingRight: '10px', paddingTop: '10px'}}>
                    <img src="/images/js.jpg"/>
                  </figure>
                  <br/>
                  <small><strong>Tim Chen</strong> - tim.chen@mongodb.com</small>
                  <br/>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    )
  }
}

export default Profile