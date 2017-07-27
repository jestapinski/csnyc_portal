import React from 'react'
import Header from './header.jsx'

class Upload extends React.Component{
  constructor(props){
    super(props)
    this.state = {'confirmed': false,
                  'unit_name': '',
                  'desc': '',
                  'obj': '',
                  'agenda': '',
                  'resources': '',
                  'extensions': '',
                  'assessment': '',
                  'step': 0}
  }

  handle_name(e){
    this.setState({'unit_name': e.target.value})
  }

  handle_desc(e){
    this.setState({'desc': e.target.value})
  }

  handle_obj(e){
    this.setState({'obj': e.target.value})
  }

  handle_agenda(e){
    this.setState({'agenda': e.target.value})
  }

  handle_resources(e){
    this.setState({'resources': e.target.value})
  }

  handle_extensions(e){
    this.setState({'extensions': e.target.value})
  }

  handle_assessment(e){
    this.setState({'assessment': e.target.value})
  }

  transition_to_desc(){
    this.setState({'step': 1})
  }

  transition_to_obj(){
    this.setState({'step': 2})
  }

  transition_to_agenda(){
    this.setState({'step': 3})
  }

  transition_to_resources(){
    this.setState({'step': 4})
  }

  transition_to_extensions(){
    this.setState({'step': 5})
  }

  transition_to_assessment(){
    this.setState({'step': 6})
  }

  transition_to_assessment(){
    this.setState({'step': 7})
  }

  render_name(){
    console.log(this.state)
    let placeholder = 'Unit Name'
    let value = this.state.unit_name
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_name(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_desc()}}>Go!</a>

        </div></div>
      </div>
    )
  }

  render_description(){
    let placeholder = 'Unit Description'
    let value = this.state.desc
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_desc(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_obj()}}>Go!</a>

        </div></div>
      </div>
    )
  }

  render_learning_objectives(){
    let placeholder = 'Learning Objectives'
    let value = this.state.obj
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_obj(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_agenda()}}>Go!</a>

        </div></div>
      </div>
    )
  }

  render_agenda(){
    let placeholder = 'Agenda'
    let value = this.state.agenda
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_agenda(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_resources()}}>Go!</a>

        </div></div>
      </div>
    )    
  }

  render_resources(){
    let placeholder = 'Resources'
    let value = this.state.resources
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_resources(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_extensions()}}>Go!</a>

        </div></div>
      </div>
    )    
  }

  render_extensions(){
    let placeholder = 'Extensions'
    let value = this.state.extensions
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_extensions(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_assessment()}}>Go!</a>

        </div></div>
      </div>
    )    
  }

  render_assessment(){
    let placeholder = 'Assessment'
    let value = this.state.assessment
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_assessment(e)}}/>
        </div>

        <a className="button is-primary" onClick={() => {this.transition_to_done()}}>Go!</a>

        </div></div>
      </div>
    )    
  }

  submit(){
    return <div>whee</div>
  }

// TODO map checkboxes to a single function for concision
  render(){
    if (this.state.confirmed){
      switch (this.state.step){
        case 0:
          return this.render_name()
        case 1:
          return this.render_description()
        case 2:
          return this.render_learning_objectives()
        case 3:
          return this.render_agenda()
        case 4:
          return this.render_resources()
        case 5:
          return this.render_extensions()
        case 6:
          return this.render_assessment()
        default:
          return this.submit()
      }
      return 
    }
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
          <h1 className='title is-4' style={{textAlign: 'center'}}>
            Ready to contribute a unit? Here is what you will need:
          </h1>
          <div className='columns'><div className='column is-half is-offset-one-quarter'>

          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Name</span> for the Unit
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Description</span> of the Unit (under 150 characters!)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>List of Learning Objectives</span> (To Upload or Type)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Lesson Agenda</span> (time/description for each activity, in PDF or typed text)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              Any <span className='title is-5'>External Resources</span> (files to upload, and links, if needed)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              Any <span className='title is-5'>Outside Extensions</span> to the unit.
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox"/>
              <span style={{paddingLeft: '20px'}}>
              A means of <span className='title is-5'>Assessment</span> to the unit (PDF or typed text).
              </span>
          </label>
          <br/><br/>

          <a className="button is-primary" onClick={() => {this.setState({'confirmed': true})}}>Go!</a>

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload