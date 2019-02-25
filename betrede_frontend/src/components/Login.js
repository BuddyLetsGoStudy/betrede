import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../store/actions/auth'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const loginData = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    }
    this.props.onAuth(loginData.username, loginData.password)
  }

  componentDidMount(){
    document.title = 'Login'
  }


  render(){
    let errorMessage = null
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }
    if (this.props.username && !this.props.error){
      console.log('kek')
      window.location.assign("/")
    }

    return(
      <div className='container'>

        <div className='row'>
          <div className='col-12'>
          {errorMessage}
          {
            this.props.loading ?
            <h1>Loading...</h1>
            :
            <div class="col-md-8 col-md-offset-2 mx-auto">
            <div class="msform">
                <div class="fieldset">
                    <form id="msform" onSubmit={this.handleSubmit}>
                      <fieldset>
                          <h2 class="fs-title">Log In</h2>
                          <div class="form-group">
                              <input class="form-control logreg_input" autofocus required type='text' name='username' placeholder="Enter username"/>
                           </div>
                           <div class="form-group">
                              <input type='password' name='password' className="form-control logreg_input" placeholder="Password" required />
                          </div>
                          <input type="submit" name="submit" class="submit" value="CONFIRM" />
                          <a href="#">Forgot password?</a>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="login__OR">
                  <p>DON'T HAVE AN ACCOUNT?</p>
                  <form action='./signup'>
                    <input type="submit" class="submit" value="REGISTRATION" />
                  </form>
                </div>
            </div>
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token,
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
