import React, {useEffect, useState} from "react";
import Home from "./components/Hbody/Home";
import './App.css'
import {connect} from "react-redux";
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Headerthird from "./components/SotibOlish/headerthird";
import users from "./reducer/users";
import SavdoOynasi from "./components/SotibOlish/Sidebar/Savdo/SavdoOynasi/SavdoOynasi";
import Register from "./components/Hbody/Register";
import SecondPage from "./components/Pricing/SecondPage/SecondPage";
import ShopInfo from "./components/Pricing/ShopInfo/ShopInfo";
import TaxInfo from "./components/Pricing/ShopInfo/TaxInfo";
import UserDetails from "./components/Pricing/ShopInfo/UserDetails";


function App({users}) {

    const [auth,setAuth] = useState(false)
    useEffect(()=>{
        setAuth(users.authEnter)
    },[users.authEnter])

    return (
        <div>
            <div>
                <Switch>
                    <Route path={'/login'} component={Home}/>
                    <Route path={'/register'} component={Register} />
                    <Route path={'/shopdetails'} component={ShopInfo}/>
                    <Route path={'/taxDetails'} component={TaxInfo}/>
                    <Route path={'/userDetails'} component={UserDetails}/>
                    <Route path={'/tariffs'} component={SecondPage}/>

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

export default connect((users), {}) (App);
