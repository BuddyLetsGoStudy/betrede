import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

import logo from '../static/img/logo.png'
import 'bootstrap/dist/js/bootstrap.js';

class Header extends Component {
  render(){
    return(
      <header className='mb-3'>
        <nav className="navbar navbar-expand-lg" style={{background: 'white'}}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} height="77" alt=""/>

            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav mr-auto">
                <a class="nav-item nav-link ml-lg-5" href="/">Main</a>
                <a class="nav-item nav-link mx-lg-2" href="/">About</a>
              </div>
                {
                  this.props.isAuthenticated ?

                  <div class="dropdown show">
                    <a class="dropdown-toggle navbar__user_li" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.props.username}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="/my/spaces">Create a space</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" onClick={this.props.logout}>Log out</a>
                    </div>
                  </div>
                  :
                  <form action="/login">
                    <button type="submit" class="navbar__create_your_space_btn">Your space</button>
                  </form>
                }
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
