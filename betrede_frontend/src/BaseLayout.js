import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions/auth'

import Header from './components/Header'
import Footer from './components/Footer'

class BaseLayout extends Component {
  render(){
    return(
    <div>
      <Header {...this.props}/>
      {this.props.children}
      <Footer />
    </div>
  )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(BaseLayout)
