import React, { Component } from 'react';
import {connect} from "react-redux";

export default function (ComposedComponent) {
    class Authentication extends Component {
        render() {
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return { 
            authenticated: state.authenticated
        };
    }
    
    return connect(mapStateToProps)(Authentication)

};


// In some other location we want to use this higher order function
// import Authentication
// import Resources
// const ComposedComponent = Authentication(Resources);

// In some render method    <ComposedComponent />