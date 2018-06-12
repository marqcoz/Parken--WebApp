import actionTypes from './actionTypes';
import dispatcher from './dispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import App from '../components/app';
//import _ from 'underscore';

const CHANGE_EVENT = 'change';

let AppData = {
    data:{
        isAuthenticated: false,
        tries: {
            max: 3,
            count: 0
        },
        authenticationInfo: {
            success: null,
            id: null
        },
        
    },
    
    getUserLogin(action) {
        axios.post('http://192.168.1.74:3000/login', {
            correo: action.user,
            contrasena: action.pass,
            app: "1"
            
        })
        .then(function (response) {
            console.log("response login: ", response)
            if(response.data.success===1){
                AppData.data.isAuthenticated=true;
                AppData.data.authenticationInfo=response.data;
                if (typeof(Storage) !== "undefined") {
                    localStorage.id = response.data.id;
                } else {
                    console.log("Sorry! No Web Storage support..")
                }
                AppStore.emitChange();
                            
            }else{
                AppData.data.isAuthenticated=false;
                AppData.data.authenticationInfo=response.data.infoLogin; 
                if (typeof(Storage) !== "undefined") {
                    localStorage.id = 0;
                } else {
                    console.log("Sorry! No Web Storage support..")
                }
                AppStore.emitChange();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    closeLogin(){
        localStorage.code = "";
        localStorage.id = "";
        localStorage.name = "";
        localStorage.type = "";
        AppData.data.isAuthenticated=false;
        AppData.data.authenticationInfo.code="";
        AppData.data.authenticationInfo.id="";
        AppData.data.authenticationInfo.name="";
        AppData.data.authenticationInfo.type="";
        AppData.data.students="";
        AppStore.emitChange();
    },
    changeValueCode(){
        AppData.data.authenticationInfo.code=-1;
        AppStore.emitChange();
    },    
}

let AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppStore = assign({}, AppStore, {
    getData: () => {
        return AppData.data;
    }
});

dispatcher.register((action) => {
    switch (action.type) {
    case actionTypes.CHANGEVALUE_CODE:
        AppData.changeValueCode();
        break;
    case actionTypes.CLOSE_LOGIN:
        AppData.closeLogin();
        break;    
    case actionTypes.GET_USERLOGIN:
        AppData.getUserLogin(action);
        break;    
    default: 
		// no op
    }
});

module.exports = AppStore;