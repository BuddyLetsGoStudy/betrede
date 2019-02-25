import React, { Component } from 'react'
import axios from 'axios';

import TagsCont from './TagsCont'
import TagForm from './TagForm'

class TagsList extends Component {
    constructor() {
        super()
        this.state = {
            tags: []
        }
    }

    componentDidMount() {
      axios.get("https://betredeapi.logachev.top/api/tag/")
          .then(res => {
            this.setState({
              tags: res.data
            })
          });
    }

    render() {
      return(
        <div>
          {this.state.tags.map(tag => <TagsCont key={tag.id} name={tag.name} id={tag.id}/>)}
          <TagForm requestType='post' />
        </div>
      )
   }
}

export default TagsList
