import './sidebar.css'
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import Hodimlar from "./Hodimlar/Hodimlar";
import Hamkorlar from "./Hamkorlar/Hamkorlar";
import Maxsulotlar from "./Maxsulotlar/Maxsulotlar";
import Haridlar from "./Haridlar/Haridlar";
import Baza from "./Baza/Baza";
import MahBaza from "./MahsulotBaza/MahBaza";
import Xarajatlar from "./Xarajatlar/Xarajatlar";
import Xirsobotlar from "./Xisobotlar/Xirsobotlar";
import Sozlamalar from "./Settings/Sozlamalar";
import Savdo from "./Savdo/Savdo";
import logo from '../../../img/LOGO.png'
import {Route, Switch, Link} from "react-router-dom";
import functionreducer from "../../../reducer/functionreducer";
import {active} from "../../../reducer/functionreducer";
import xodimReducer from "./Hodimlar/reducer/XodimReducer";
import users from "../../../reducer/users";

function Sidebar({functionreducer,active,users}) {

    useEffect(()=>{
        // permission()

    })
    function sidebaractive(){
    }

    const [adduser,setadduser]=useState(true)


    function permission(){
        console.log(users.users.role.permissions)
        users.users.role.permissions.map(item=>{
            switch (item){
                case "ADD_USER":;
                setadduser(true)
                    break;
            }
        })
    }

    return (
                <div className={`col-md-12 sidebar ${functionreducer.func.class3} ${functionreducer.func.class4}`}>
                    <div className="sidehead d-flex justify-content-center">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={'gap ms-2 sidebar-active'}>
                        <div className="row bosh">
                            <div className="imgDiv">
                                <div className={'d-flex align-items-center'}>
                                    <Link onClick={sidebaractive} className={'d-flex align-items-center'} to={'/headerthird/'}><svg className={'sidebar-img'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#0044FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#0044FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#0044FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#0044FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                        <h4 className={'sidebar-text'}>Bosh sahifa</h4>
                                    </Link>

                                </div>
                            </div>

                        </div>

                        {
                           adduser ?  <Hodimlar/> :''
                        }

                        <Hamkorlar/>
                        <Maxsulotlar/>
                        <Haridlar/>
                        <Savdo/>
                        <Baza/>
                        {/* <MahBaza/> */}
                        <Xarajatlar/>
                        <Xirsobotlar/>
                        <Sozlamalar/>
                    </div>

                </div>


    )
}

export default connect((functionreducer,users),{active}) (Sidebar)