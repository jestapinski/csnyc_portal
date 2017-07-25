import React from 'react'

const Header = (props) => {
  return (
<nav className="navbar">
  <div className="container">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src="http://bulma.io/images/bulma-logo.png" width="112" height="28"/>
      </a>
    </div>
    <div className="navbar-end">
      <a className="navbar-item">
        Units
      </a> 
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Sign In
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            Login
          </a>
          <a className="navbar-item">
            Register
          </a>
          <hr className="navbar-divider"/>
          <div className="navbar-item">
            Forgot Your Password?
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header