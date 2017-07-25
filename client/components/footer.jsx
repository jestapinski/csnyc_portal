import React from 'react'
import Home from './home.jsx'
import About from './about.jsx'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.main_routes = [
      { path: "/",           name: "Home",            btnType: "primary"},
      { path: "/about",      name: "About",           btnType: "info"},
      { path: "/unit_help",  name: "What are Units?", btnType: "info"}      
    ]
  }

  // handle_click(name){
  //   this.setState({active: name})
  // }

  render_tab(route){
    const name = route.name
    console.log(this.props)
    if (this.props.active === name){
      return <li 
        className='is-active' 
        key={name} 
        onClick={() => this.props.handle_click(name)}>
        <a>{name}</a></li>
    }
    return <li key={name} onClick={() => this.props.handle_click(name)}><a>{name}</a></li>;
  }

  render(){
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              {this.main_routes.map(route => 
                this.render_tab(route)
                )
              }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Footer