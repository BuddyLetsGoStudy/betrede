import React, { Component } from 'react'
import axios from 'axios';

import SpaceDetailArtObj from './SpaceDetailArtObj'


class SpaceDetail extends Component {
    constructor() {
      super()
      this.state = {
          space: [],
          loaded: false,
          artobjects: []
      }
      this.fetchArtObj = this.fetchArtObj.bind(this)
    }

    pushArray(a, e){
      a.push(e)
      return a
    }

    fetchArtObj(){
      this.state.space.artobjects.map(id =>
        axios.get(`https://betredeapi.logachev.top/api/artobject/${id}/`)
            .then(res => {
              this.setState(prevState => {
                return {
                 artobjects: this.pushArray(prevState.artobjects, res.data)
                }
              })
              this.setState({
                loaded: true
              })
          })
      )
    }

    componentDidMount() {
      const spaceID = this.props.match.params.spaceID;
      axios.get(`https://betredeapi.logachev.top/api/space/${spaceID}/`)
          .then(res => {
            this.setState({
              loaded: true,
              space: res.data
            })
            this.fetchArtObj()
          })

    }
    render() {
      return(
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>{this.state.space.name}</h1>
              <p>{this.state.space.description}</p>
              <div className='row'>
                {this.state.artobjects.map(artobject =>
                  <SpaceDetailArtObj {...artobject}/>
                )}
              </div>
            </div>
          </div>
        </div>
      )
   }
}

export default SpaceDetail
