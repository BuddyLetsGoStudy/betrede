import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import BaseRouter from './routes'
import * as actions from './store/actions/auth'

import BaseLayout from './BaseLayout'

import './static/assets/bootstrap/bootstrap.css'
import './styles.css'
import '@fortawesome/fontawesome-free/js/all.js'


class App extends Component {

    componentDidMount() {
      this.props.onTryAutoSignup()
    }

    render() {
      return(
        <Router>
          <BaseLayout {...this.props}>
            <BaseRouter />
          </BaseLayout>
        </Router>
      )
   }
}

const mapStateProps = state => {
  return {
    isAuthenticated: state.token !== null,
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
