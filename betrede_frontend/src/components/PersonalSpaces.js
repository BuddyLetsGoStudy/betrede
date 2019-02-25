import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

import PersonalForm from './PersonalForm'

class PersonalSpaces extends Component{

  constructor(props){
    super(props)
    this.state = {
      user: 0,
      artobjects: [],
      loaded: false
    }
    this.fetchArtObj = this.fetchArtObj.bind(this)
  }

  fetchArtObj(){
    axios.get(`https://betredeapi.logachev.top/api/user/?username=${this.props.username}`)
        .then(res => {
          this.setState({
            user: res.data[0].id
          })
          console.log(this.state.user)
          axios.get(`https://betredeapi.logachev.top/api/artobject/?author=${this.state.user}`)
              .then(res => {
                this.setState({
                  artobjects: res.data,
                  loaded: true
                })
                console.log(this.state.artobjects)
              })
        })

  }

  componentDidMount() {
    document.title = 'Betrede'
    setTimeout(this.fetchArtObj, 0)
  }

  render(){
    return(
      <div className='container'>
        {
          this.state.loaded ?
        <div className='row'>
              <h4 className='col-12'>Create a Space</h4>
              <PersonalForm type='space' artobjects={this.state.artobjects} author={this.state.user} />
        </div>
        :
        <h1></h1>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps, null)(PersonalSpaces)
