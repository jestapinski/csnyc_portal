import React from 'react'
import Header from './header.jsx'

class UnitDetail extends React.Component{
  constructor(props, params){
    super(props)
    console.log(params)
    console.log(props.params)
  }

  render(){
    console.log(this.id)
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30'}}>Unit Detail</h1>
        </div>
      </div>
    )
  }
}

export default UnitDetail