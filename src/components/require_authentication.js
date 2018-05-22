import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class Authentication extends Component {
        // static contextTypes = {
        //     router: PropTypes.object.isRequired
        //   }
          componentWillMount() {
            //   this.context.router.history.push('/')
            if(!this.props.authenticated){
                this.props.history.push('/');
            }
          }
          // To Log User Out of the view !!
         componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.props.history.push('/');
            }
         }
        
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