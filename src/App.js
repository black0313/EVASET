import React, {useEffect, useState} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {active} from "./reducer/functionreducer";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import functionreducer from "./reducer/functionreducer";
import Sidebar from "./components/SotibOlish/Sidebar/Sidebar";
import users from "./reducer/users";
import SavdoOynasi from "./components/SotibOlish/Sidebar/Savdo/SavdoOynasi/SavdoOynasi";
import {ToastContainer} from "react-toastify";


function App({functionreducer, users}) {

    const [auth,setAuth] = useState(false)
    useEffect(()=>{
        setAuth(users.authEnter)
    },[users.authEnter])

    return (
        <div>
            <div>
                <Switch>
                    <Route path={'/login'} component={Home}/>
                    {
                        auth ? <Route path={'/'}>
                                <Route path={'/headerthird'} component={Headerthird}/>
                            <Route path={'/turliTavar'} component={SavdoOynasi}/>
                            </Route>
                            :<Redirect to={'/login'}/>
                    }

                </Switch>
            </div>
        </div>

    );
}

export default connect((functionreducer,users), {}) (App);
