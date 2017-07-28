import React from 'react'
import Header from './header.jsx'
import { post_unit } from '../process_credentials.js'
import cookie from 'react-cookies'


class Upload extends React.Component{
  constructor(props){
    super(props)
    this.state = {'confirmed': false,
                  'unit_name': '',
                  'num_checks': 0,
                  'desc': '',
                  'obj': [''],
                  'agenda': [''],
                  'agenda_hrs': [''],
                  'agenda_mins': [''],
                  'agenda_desc': [''],
                  'resources': [''],
                  'extensions': [''],
                  'assessment': '',
                  'email': cookie.load('email'),
                  'step': 0}
    this.enter_function = (() => {
      const this_step = this.state.step
      this.setState({'step': this_step + 1})
    });
  }

  key_down(e, f) {
    if (e.key == 'Enter'){
      if (f){
        f()
        return
      }
      this.enter_function()
    }
  }

  handle_click(e){
    console.log(e)
    console.log(e.target.checked)
    const is_checked = e.target.checked
    const num_checks = this.state.num_checks - 1 + (2 * is_checked)
    this.setState({'num_checks': num_checks})
  }

  handle_name(e){
    this.setState({'unit_name': e.target.value})
  }

  handle_desc(e){
    this.setState({'desc': e.target.value})
  }

  handle_obj(e, num){
    const this_array = this.state.obj
    this_array[num] = e.target.value
    this.setState({'obj': this_array})
  }

  add_obj(){
    const this_array = this.state.obj
    this_array.push('')
    this.setState({'obj': this_array})
  }

  add_resource(){
    const this_array = this.state.resources
    this_array.push('')
    console.log(this_array)
    this.setState({'resources': this_array})
  }

  add_extension(){
    const this_array = this.state.extensions
    this_array.push('')
    console.log(this_array)
    this.setState({'extensions': this_array})
  }

  add_agenda(){
    const agenda_array = this.state.agenda
    const hrs_array = this.state.agenda_hrs
    const mins_array = this.state.agenda_mins
    const desc_array = this.state.agenda_desc
    agenda_array.push('')
    hrs_array.push('')
    mins_array.push('')
    desc_array.push('')
    this.setState({'agenda': agenda_array})
    this.setState({'agenda_hrs': hrs_array})
    this.setState({'agenda_mins': mins_array})
    this.setState({'agenda_desc': desc_array})
  }

  handle_agenda(e, num){
    const this_array = this.state.agenda
    this_array[num] = e.target.value
    this.setState({'agenda': this_array}, () => {console.log(this.state)})
  }

  handle_agenda_hrs(e, num){
    const this_array = this.state.agenda_hrs
    this_array[num] = e.target.value
    this.setState({'agenda_hrs': this_array}, () => {console.log(this.state)})
  }

  handle_agenda_mins(e, num){
    const this_array = this.state.agenda_mins
    this_array[num] = e.target.value
    this.setState({'agenda_mins': this_array}, () => {console.log(this.state)})
  }

  handle_agenda_desc(e, num){
    const this_array = this.state.agenda_desc
    this_array[num] = e.target.value
    this.setState({'agenda_desc': this_array}, () => {console.log(this.state)})
  }

  handle_resources(e, num){
    const this_array = this.state.resources
    this_array[num] = e.target.value
    this.setState({'resources': this_array}, () => {console.log(this.state)})
  }

  handle_extensions(e, num){
    const this_array = this.state.extensions
    this_array[num] = e.target.value
    this.setState({'extensions': this_array}, () => {console.log(this.state)})
  }

  handle_assessment(e){
    this.setState({'assessment': e.target.value})
  }

  transition_to_obj(){
    this.setState({'step': 1})
  }

  transition_to_agenda(){
    this.setState({'step': 2})
  }

  transition_to_resources(){
    this.setState({'step': 3})
  }

  transition_to_extensions(){
    this.setState({'step': 4})
  }

  transition_to_assessment(){
    this.setState({'step': 5})
  }

  transition_to_done(){
    this.setState({'step': 6})
    post_unit(this.state)
  }

  go_back(){
    const current_step = this.state.step
    this.setState({'step': current_step - 1})
  }

  render_name(){
    const placeholder = 'Unit Name'
    const placeholder_desc = 'Unit Description'
    let value = this.state.unit_name
    let value_desc = this.state.desc
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>

        <div className="control" style={{paddingTop: '30px'}}>
          <label className="title is-5">What would you like to name the unit?</label>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_name(e)}} onKeyPress={(e) => this.key_down(e)}/>
        </div>

        <div className="control" style={{paddingTop: '30px'}}>
          <label className="title is-5">Description</label>
          <input className="input is-hovered" type="text" placeholder={placeholder_desc} value={value_desc} onChange={(e) => {this.handle_desc(e)}} onKeyPress={(e) => this.key_down(e)}/>
        </div>

        <hr/>
        <div style={{marginTop: '10px'}}>
        <a className="button is-primary" onClick={() => {this.transition_to_obj()}}>Go!</a>
        </div>
        </div></div>
      </div>
    )
  }

  render_learning_objectives(){
    let placeholder = 'Learning Objective'
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>
          <label className="title is-5">What are some learning objectives you have for students using the unit?</label>
        {this.state.obj.map((value, i) => 
          (!i) ?
          (<div className="control" style={{paddingTop: '20px'}} key={i}>
            <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_obj(e, i)}} onKeyPress={(e) => this.key_down(e, this.add_obj.bind(this))}/>
          </div>) : 
          (<div className="control" style={{paddingTop: '10px'}} key={i}>
            <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_obj(e, i)}} onKeyPress={(e) => this.key_down(e, this.add_obj.bind(this))}/>
          </div>)
        )}

        <hr/>
        <a className="button is-primary" style={{marginBottom: '10px'}} onClick={() => {this.add_obj()}}>Add Another Objective</a>
        <br/>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.transition_to_agenda()}}>Go!</a>
        <a className="button is-danger" onClick={() => {this.go_back()}}>Back</a>
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
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>
            <label className="title is-5">What is a lesson agenda you have for the unit?</label><br/>

        {this.state.agenda.map((value, i) =>
          <div key={i}>
          <div className="field">
            <div className="field-label is-normal">
              <label className="title is-5" style={{float: 'left'}}>Timing for sub-activity</label><br/>
            </div>
            <div className="field-body">
              <div className="field">
              <label className="label">Hours</label>
                <input className="input is-hovered" type="number" value={this.state.agenda_hrs[i]} onChange={(e) => {this.handle_agenda_hrs(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
              </div>
              <div className="field">
              <label className="label">Minutes</label>
                <input className="input is-hovered" type="number" value={this.state.agenda_mins[i]} onChange={(e) => {this.handle_agenda_mins(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="field-label is-normal">
              <label className="title is-5" style={{float: 'left'}}>Sub-Activity Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
            </div>
            <div className="field-body">
              <div className="field">
                <input className="input is-hovered" type="text" placeholder='Activity Name' value={value} onChange={(e) => {this.handle_agenda(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="field-label is-normal">
              <label className="title is-5" style={{float: 'left'}}>Short Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
            </div>
            <div className="field-body">
              <div className="field">
                <input className="input is-hovered" type="text" placeholder='Activity Description' value={this.state.agenda_desc[i]} onChange={(e) => {this.handle_agenda_desc(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
              </div>
            </div>
          </div>          
          <hr/>
          </div>
          )
        }

        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.add_agenda()}}>Add Another Item</a>

        <div style={{marginTop: '10px'}}>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.transition_to_resources()}}>Go!</a>
        <a className="button is-danger" style={{marginRight: '10px'}} onClick={() => {this.go_back()}}>Back</a>
        </div></div>
        </div>
      </div>
    )    
  }

  render_resources(){
    let placeholder = 'Resources'
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>
            <label className="title is-5">What are some external resources for the unit (if any)?</label><br/>

        {this.state.resources.map((val, i) =>
          <div className="control" style={{paddingTop: '30px'}} key={i}>
            <input className="input is-hovered" type="text" placeholder={placeholder} value={val} onChange={(e) => {this.handle_resources(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
          </div>
          )
        }

        <hr/>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.add_resource()}}>Add Another Resource</a>
        <div style={{marginTop: '10px'}}>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.transition_to_extensions()}}>Go!</a>
        <a className="button is-danger" onClick={() => {this.go_back()}}>Back</a>
        </div>
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
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>
            <label className="title is-5">What are some lesson extensions off of this unit (if any)?</label><br/>

        {this.state.extensions.map((val, i) =>

        <div className="control" style={{paddingTop: '30px'}} key={i}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={val} onChange={(e) => {this.handle_extensions(e, i)}} onKeyPress={(e) => this.key_down(e)}/>
        </div>
        )}

        <hr/>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.add_extension()}}>Add Another Extension</a>
        <div style={{marginTop: '10px'}}>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.transition_to_assessment()}}>Go!</a>
        <a className="button is-danger" onClick={() => {this.go_back()}}>Back</a>
        </div>

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
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>Upload a Unit</h1>
        </div>
        <div className='columns'><div className='column is-half is-offset-one-quarter'>
            <label className="title is-5">What are some means of assessing understanding?</label><br/>

        <div className="control" style={{paddingTop: '30px'}}>
          <input className="input is-hovered" type="text" placeholder={placeholder} value={value} onChange={(e) => {this.handle_assessment(e)}} onKeyPress={(e) => this.key_down(e)}/>
        </div>

        <hr/>
        <div style={{marginTop: '10px'}}>
        <a className="button is-primary" style={{marginRight: '10px'}} onClick={() => {this.transition_to_done()}}>Go!</a>
        <a className="button is-danger" onClick={() => {this.go_back()}}>Back</a>
        </div>

        </div></div>
      </div>
    )    
  }

  submit(){
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>Upload Successful!</h1>
        </div>
      </div>
    )
  }

// TODO map checkboxes to a single function for concision
  render(){
    let disabled = 'true'
    if (this.state.confirmed){
      switch (this.state.step){
        case 0:
          return this.render_name()
        case 1:
          return this.render_learning_objectives()
        case 2:
          return this.render_agenda()
        case 3:
          return this.render_resources()
        case 4:
          return this.render_extensions()
        case 5:
          return this.render_assessment()
        default:
          return this.submit()
      }
      return 
    }
    if (this.state.num_checks >= 7){
      disabled = ''
    }
    //BELOW IS FOR DEBUGGING
    disabled=''
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
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Name</span> for the Unit
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Description</span> of the Unit (under 150 characters!)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>List of Learning Objectives</span> (To Upload or Type)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              A <span className='title is-5'>Lesson Agenda</span> (time/description for each activity, in PDF or typed text)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              Any <span className='title is-5'>External Resources</span> (files to upload, and links, if needed)
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              Any <span className='title is-5'>Outside Extensions</span> to the unit.
              </span>
          </label>

          <br/>
          <label className="checkbox subtitle is-5">
            <input type="checkbox" onClick={(e) => this.handle_click(e)}/>
              <span style={{paddingLeft: '20px'}}>
              A means of <span className='title is-5'>Assessment</span> to the unit (PDF or typed text).
              </span>
          </label>
          <br/><br/>

          <a disabled={disabled} className="button is-primary" onClick={() => {if(!disabled) this.setState({'confirmed': true})}}>Go!</a>

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload