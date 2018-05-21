import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {authenthicate}  from "../actions" 
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class HeaderComp extends Component {
  authButton() {
      if(this.props.authenticated) {
          return (<button onClick= { () => this.props.authenthicate(false) } className="btn btn-primary">Sign Out</button>)
      } else return (
      <button onClick= { () => this.props.authenthicate(true) } className="btn btn-primary">Sign in</button>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}


function mapStateToProps(state) {
    return { 
        authenticated: state.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ authenthicate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp)