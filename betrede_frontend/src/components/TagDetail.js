import React, { Component } from 'react'
import axios from 'axios';


class TagDetail extends Component {
    constructor() {
      super()
      this.state = {
          tag: {}
      }
    }
    componentDidMount() {
      const tagID = this.props.match.params.tagID;
      axios.get(`https://betredeapi.logachev.top/api/tag/${tagID}/`)
          .then(res => {
            this.setState({
              tag: res.data
            })
          })
    }
    render() {
      return(
        <div>
          <h1>{this.state.tag.name}</h1>
        </div>
      )
   }
}

export default TagDetail
