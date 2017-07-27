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
        <h1>All Units</h1>
      </div>
    )
  }
}

export default Units