import React from 'react';
import InputLogin from './inputLogin';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            code: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.verifyUser = this.verifyUser.bind(this);
    }
    handleChange(event) {
        if(event.target.className=="user")
            this.setState({user: event.target.value});
        else   
            this.setState({password: event.target.value});
    }
    changeColor(){
        this.props.actions.changeValueCode();
    }
    verifyUser(){
        this.props.actions.getUserLogin(this.state.user,this.state.password);
        <Redirect to='/menu' />
    }
    renderLogin(){
        return(
            <div>
                <span className="title1">Iniciar sesión</span>
                <span className="title2">Administrador</span>

                <div className="inputContainer"> 
                    <input className="inputs" type="text" placeholder="Correo electrónico"></input>                
                </div>

                <div className="inputContainer"> 
                    <input className="inputs" type="password" placeholder="Contraseña"></input>                
                </div>

                <span className="link">Recuperar contraseña </span>

                <div className="button"> 
                    Iniciar sesión jajajaja
                </div>                
            </div>
        );
    }
    render() {
		return (
			<div className='loginContainer'>				            
                {this.renderLogin()}
			</div>
		);
	}
  }
  export default withRouter(Login);