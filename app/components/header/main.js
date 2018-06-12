import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';


class Header extends React.Component {
    renderLoggedIn(){
        return(
            <div>
                Logged Int
            </div>
        );
    }
    renderSignIn(){
        return(
            <div className="signInHeader">
                <img src={require('../../images/oie_transparent.png')} />
                <span>arken</span>
            </div>
        );
    }
    render() {
		return (
			<div className='header'>
				
                {this.props.store.isAuthenticated === true ? this.renderLoggedIn() : this.renderSignIn()}
				    
			</div>
		);
	}
  }
  export default withRouter(Header);