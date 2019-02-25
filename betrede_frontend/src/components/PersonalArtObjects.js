import React, { Component } from 'react'
import axios from 'axios'

import PersonalForm from './PersonalForm'

class PersonalArtObjects extends Component{

  constructor(props){
    super(props)
    this.state = {
      artobjects: []
    }
  }

  componentDidMount() {
    document.title = 'Betrede'

  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <h4 className='col-12'>Create an Art Object</h4>
          <PersonalForm type='artobject'/>
        </div>
      </div>
    )
  }
}


export default PersonalArtObjects
