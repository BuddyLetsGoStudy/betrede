import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class Signup extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
    const signupData = {
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      confirm: e.target.elements.confirm.value,
    }
    this.props.onAuth(
      signupData.username,
      signupData.email,
      signupData.password,
      signupData.confirm
    )
  }

  componentDidMount(){
    document.title = 'Signup'
  }

  render(){
    let errorMessage = null
    if (this.props.error){
      if (this.props.error.response.data.username) {
        errorMessage = (<p>{this.props.error.response.data.username}</p>)
      } else if (this.props.error.response.data.email){
        errorMessage = (<p>{this.props.error.response.data.email}</p>)
      } else {
        errorMessage = (<p>{this.props.error.message}</p>)
      }
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
          {this.props.username}
          {
            this.props.loading ?
            <p></p>
            :

            <div class="col-md-8 col-md-offset-2 mx-auto">
            <div class="msform">
                <div class="fieldset">
                    <form id="msform" onSubmit={this.handleSubmit}>
                      <fieldset>
                        <h2 class="fs-title">Create your account</h2>
                        <h3 class="fs-subtitle">It is free</h3>
                        <div class="msform">
                          <input type='text' name='username' className="form-control" placeholder="Username" required />
                        </div>
                        <div class="msform ">
                          <input type='email' name='email' className="form-control" placeholder="Email" required />
                         </div>
                         <div class="fmsform">
                           <input type='password' name='password' className="form-control" placeholder="Password" required />
                        </div>
                        <input type='password' name='confirm' className="form-control" placeholder="Password" required/>
                        <input type="submit" name="submit" class="submit" value="CONFIRM" />
                      </fieldset>
                    </form>
                  </div>
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
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
