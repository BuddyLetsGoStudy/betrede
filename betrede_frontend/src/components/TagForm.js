import React, { Component } from 'react'

import axios from 'axios'

class TagForm extends React.Component {

  handleFormSubmit = (event, requestType) => {
    event.preventDefault()
    const name = event.target.elements.name.value
    const description = event.target.elements.description.value
    const created = event.target.elements.created.value

    switch(requestType){
      case 'post':
        return axios.post('https://betredeapi.logachev.top/api/tag/', {
            name: name,
            description: description,
            created: created
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put('https://betredeapi.logachev.top/api/tag/', {
            name: name,
            description: description,
            created: created
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      }
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(
            event,
            this.props.requestType)}>
          <input type='text' placeholder='name' name='name' value='Kek'/>
          <input type='text' placeholder='description' name='description' value='desc'/>
          <input type='text' value='2019-01-17T12:28:11.020940Z' name='created'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default TagForm
