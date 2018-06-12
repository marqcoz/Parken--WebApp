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
        this.getLogin = this.getLogin.bind(this);
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
    getLogin(){
        console.log("user ", this.state.user, "pass ", this.state.password)
        if(this.state.user.length !== 0 && this.state.password.length !== 0){
            this.props.actions.getUserLogin(this.state.user,this.state.password);
        }else{
            console.log("invalid")
        }
        //console.log("estoy entrando a login", this.props)
    }
    renderLogin(){
        return(
            <div className="rightContainer">
                <div className="login">
                    <span className="title1">Iniciar sesión</span>
                    <span className="title2">Administrador</span>

                    <div className="inputContainer"> 
                        <span className="ico icon-user-male"></span>
                        <input className="user" type="text" placeholder="Correo electrónico" onChange={this.handleChange}></input>                
                    </div>

                    <div className="inputContainer"> 
                        <span className="ico icon-lock"></span>
                        <input className="pass" type="password" placeholder="Contraseña" onChange={this.handleChange}></input>                
                    </div>
                    <div className="button" onClick={this.getLogin}> 
                        Iniciar sesión
                    </div> 
                    <span className="link">Recuperar contraseña</span>
                </div>
                               
            </div>
        );
    }
    renderImages(){
        return(
            <div className="leftContainer">
                <div>
                    <img className="imgPhone" src={require('../../images/Android1.png')}/>
                </div>
                <div>
                    <img className="imgGoogle" src={require("../../images/google_play_icon.png")}/>
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