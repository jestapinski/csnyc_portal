import React from 'react'
import {process_successful_registration} from '../process_credentials.js'

class ConfirmRegister extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'authed': false,
    }
  }

  componentWillMount(){
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const token = params.get('token')
    const tokenid = params.get('tokenId')
    process_successful_registration(token, tokenid, this.on_success)
  }

  on_success(){
    this.setState({'authed': true})
  }

  render(){
    if (this.state.authed){
      return <h1>AUTHED</h1>
    }
    return <h1>WOW</h1>
  }
}

export default ConfirmRegister