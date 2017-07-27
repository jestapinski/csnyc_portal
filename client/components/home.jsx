import React from 'react'
import Footer from './footer.jsx'
import Header from './header.jsx'
import About from './about.jsx'


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: "Home"
    }
    this.main_routes = [
      { path: "/",           name: "Home",            btnType: "primary",   component: null },
      { path: "/about",      name: "About",           btnType: "info",      component: About },
      { path: "/unit_help",  name: "What are Units?", btnType: "info",      component: About }      
    ]
    this.handler = this.handle_click.bind(this)
  }

  handle_click(name){
    this.setState({active: name})
  }

  render_body(){
  	if (this.state.active === 'Home'){
		return (<div className="container">
				<h1 className="animated title is-1 fadeInUp is-spaced" style={{textAlign: "center"}}>
			        Inspire the Future.
			      </h1>
			    <p className="animated subtitle fadeInUp is-5">The unfortunate truth is <span className="title is-5">over 1.1 million students in New York City do not have adequate access to computer science education</span>. <br/> What if, through a community of teachers and developers, that could change? <br/><br/> We have developed a library for teachers, open for developer contributions, which provides immediate access to interactive education ready to transform a classroom experience today. <br/><br/> <span className='title is-5'>Create an account or sign-in to get free access to our library of computer science units, ready for use in the classroom.</span> </p>
			    </div>)  		
  	} else if (this.state.active === 'About'){
  		return (<div className="container">
				<h1 className="animated title is-1 fadeInDown is-spaced" style={{textAlign: "center"}}>
			        This isn't just a project, it's a movement.
			      </h1>
			    <p className="animated subtitle fadeInDown is-5">We have created an open, and ever-growing, library of <span className='title is-5'>computer science units</span> designed to supplement existing learning in the classroom. <br/><br/> Through providing a means for developers and teachers to collaborate on teaching material, we are creating a space to improve the quality of computer science education, <span className='title is-5'>together</span>. <br/><br/> <span className='title is-5'>Create an account today to get free access to our library of computer science units, ready for use in the classroom.</span> </p>
			    </div>)
  	} else {
  		return (<div className="container">
				<h1 className="animated title is-1 fadeIn is-spaced" style={{textAlign: "center"}}>
			        Learn by Doing.
			      </h1>
			    <p className="animated subtitle fadeIn is-5"><span className='title is-5'>We believe the heart of learning comes through interacting with the world around us</span>.<br/><br/> This is why we have created interactive websites and applications for students to get their hands on; to provide a chance to <span className='title is-5'>learn by doing</span>. <br/><br/> Each computer science unit comes with adequate <span className='title is-5'>training, lesson plans, and of course, interactive materials</span> to give an amazing lesson. </p>
			    </div>)
  	}
  }

  render(){
	return ( 
		<section className="hero is-fullheight">
		<style>
		</style>
		<Header/>
		  <div className="hero-body bg-img">
		      {this.render_body()}
		  </div>
		  <Footer
		  	active={this.state.active}
		  	handle_click={this.handler} />
		</section>
	)
  }
}

export default Home
