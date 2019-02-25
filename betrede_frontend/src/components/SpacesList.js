import React, { Component } from 'react'
import axios from 'axios';
// import * as DAT from '../static/assets/globe/'

import SpacesCont from './SpacesCont'

class SpacesList extends Component {
    constructor() {
        super()
        this.state = {
            spaces: []
        }

        // this.globe = this.globe.bind(this)
    }

    // globe(){
    //   var earth = new DAT.map('earth_div');
    //   DAT.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    // }

    componentDidMount() {
      document.title = 'Betrede'
      axios.get("https://betredeapi.logachev.top/api/space/")
          .then(res => {
            this.setState({
              spaces: res.data
            })
          })
      // this.globe()
    }
    render() {
      return(
          <div class="container" >
            <div class="row">
              {
                this.state.spaces.map(space =>
                  <SpacesCont {...space}/>
                )
              }
              
            </div>
          </div>
      )
   }
}

export default SpacesList
