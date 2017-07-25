import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/home.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let routes = [
      { path: "/",           name: "Home", 			  btnType: "primary",   component: Home },
      { path: "/about",      name: "About",       btnType: "info",      component: About }
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

// <div className="block">
//   {routes.map(route => <Link to={route.path} className={`button is-${route.btnType}`} key={route.path}>{route.name}</Link>)}
// </div>