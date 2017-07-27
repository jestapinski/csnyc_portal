import React from 'react'
import Header from './header.jsx'

class Units extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1 className='title is-2' style={{textAlign: 'center', paddingTop: '30'}}>All Units</h1>
        </div>
      </div>
    )
  }
}

export default Units