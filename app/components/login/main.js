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
            <div className="rightContainer">
                <span className="title1">Iniciar sesión</span>
                <span className="title2">Administrador</span>

                <div className="inputContainer"> 
                    <span className="ico icon-user-male"></span>
                    <input className="inputs" type="text" placeholder="Correo electrónico"></input>                
                </div>

                <div className="inputContainer"> 
                    <span className="ico icon-lock"></span>
                    <input className="inputs" type="password" placeholder="Contraseña"></input>                
                </div>
                <div className="button"> 
                    Iniciar sesión
                </div> 
                <span className="link">Recuperar contraseña</span>

                               
            </div>
        );
    }
    renderImages(){
        return(
            <div className="leftContainer">
                <div>
                    <img src="../images/Android1.png"/>
                </div>
                <div>
                    <img src="../images/google_play_icon.png"/>
                </div>
            </div>
        );
    }
    render() {
		return (
			<div className='loginContainer'>				            
                {this.renderImages()}
                {this.renderLogin()}
			</div>
		);
	}
  }
  export default withRouter(Login);