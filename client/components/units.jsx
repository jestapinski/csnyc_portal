import React from 'react'
import Header from './header.jsx'
import { find_units } from '../process_credentials.js'


class Units extends React.Component{
  constructor(props){
    super(props)
    // State will change based on applied filters
    this.state = {
      'filters': {
      },
      'units': []
    }
    /*
      Defining Filters:
        - Checkbox: {field : {'checkbox' : true (default value)}}
        - Textbox: {field: {'text' : placeholder}}
        - Numeric Input: {field: {'number': [min, max, start]}}
        - Slider: {field: {'slider': [min, max, start]}}
    */
    this.filters = {
      'Approved': {'checkbox': true},
      'Max Lesson Time': {'slider': [0, 240, 240]},
      'Includes the Text': {'text': ''}
    }
    this.units = []
    find_units({}, (units) => {this.units = units})
  }

  componentWillMount(){
    console.log(this.units)
    this.setState({'units': this.units})
  }

  display_unit(unit){
    // code to display a unit
    return <div></div>
  }

  render_search(){
    // Section for searching through units based on keywords
    return (
      <section className="section is-large bg-img">
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30px'}}>What are you searching for?</h1>
          {this.state.units.map((unit) => this.display_unit(unit))}
        </div>
      </section>
    )
  }

  handle_filter_render(key){
    const input_type = Object.keys(this.filters[key])[0]
    switch (input_type) {
      case 'checkbox':
        return (
          <div key={key}>
            <label className='checkBox'>
              <input type='checkBox' style={{marginRight: '10px'}}/>
              {key}
            </label>
          </div>
        )
      case 'text':
        return (
          <div key={key}>
            <p className="control">
              <input className="input" type="text" placeholder={key}/>
            </p>          
          </div>
        )
      case 'number':
        return (
          <div key={key}>
            <p className="control">
              <input className="input" type="number" placeholder={key}/>
            </p>          
          </div>
        )
      case 'slider':
        return (
          <div key={key}>
            <p className="control">
              <input className="input" type="number" placeholder={key}/>
            </p>          
          </div>
        )
      default:
        return <div></div>
    }
  }

  render_filters(){
    // Section for displaying Filters and Checkboxes to apply
    return (
      <div className='column is-one-quarter box' style={{marginBottom: '0', paddingTop: '20px'}}>
        <h1 className='title is-4' style={{textAlign: 'center'}}>Filters</h1>
        {Object.keys(this.filters).map((key) => this.handle_filter_render(key))}
      </div>
    )
  }

  render_all_units(){
    // Section for displaying filtered units
    return (
      <div className='column is-three-quarters'>
        <h1 className='title is-2' style={{textAlign: 'center'}}>All Units</h1>
      </div>
    )
  }

  render(){
    return (
      <div>
        <Header/>
        {this.render_search()}
        <section className="section">
          <div className='container'>
            <div className='columns'>
              {this.render_filters()}
              {this.render_all_units()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Units