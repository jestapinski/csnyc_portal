import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/home.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Register from './components/register.jsx'
import ConfirmRegister from './components/confirm.jsx'
import Profile from './components/profile.jsx'
import Logout from './components/logout.jsx'
import Units from './components/units.jsx'
import Upload from './components/upload.jsx'
import UnitDetail from './components/unitdetail.jsx'


class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let routes = [
      { path: "/",           name: "Home", 			  btnType: "primary",   component: Home },
      { path: "/about",      name: "About",       btnType: "info",      component: About },
      { path: "/register",    name: "Register",     component: Register},
      { path: "/confirmed",    name: "Confirmed",     component: ConfirmRegister},
      { path: "/home",    name: "Profile",     component: Profile},
      { path: "/logout", name: "Logout",  component: Logout},
      { path: "/units", name: "Units",  component: Units},
      { path: "/units/:id", name: "UnitDetail",  component: UnitDetail},
      { path: "/upload", name: "Upload",  component: Upload}
    ]

      return (
        <Router>
          <div>
            {routes.map(route =>
                <Route exact path={route.path} component={route.component} key={route.path} />
              )
            }
          </div>
        </Router>
      )
  }
}

render(<Index />, document.getElementById('app'))