import React, {useEffect} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {active} from "./reducer/functionreducer";
import {useState} from "react";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import {useHistory} from "react-router-dom";
import functionreducer from "./reducer/functionreducer";
import Sidebar from "./components/SotibOlish/Sidebar/Sidebar";
import users from "./reducer/users";
import {ToastContainer} from "react-toastify";



function App({functionreducer,active,users}) {

    return (
        <div className={`app-css ${functionreducer.func.class5}`}>
            <div className={`${functionreducer.func.class1}`}>
                {
                    functionreducer.func.actives ? <Sidebar/>
                        : ''
                }
                {console.log('feljfle')}
            </div>
            <div className={`${functionreducer.func.class2}`}>
                {console.log(users.linkhome)}
                {console.log(users.linkheader)}
                <Switch>
                    {
                        users.linkhome ?
                            <Route path={'/home'} component={Home}/>
                            :''
                    }
                    {
                        users.linkheader ?  <Route path={'/headerthird'} component={Headerthird}/>:''

                    }
                    {
                        users.linkhome ?                     <Redirect to={'/home'}/>:''
                    }

                    {
                       users.linkheader ?   <Redirect to={'/headerthird'}/>:''
                    }


                </Switch>
            </div>
        </div>

    );
}

export default connect((functionreducer,users),{active})(App);
