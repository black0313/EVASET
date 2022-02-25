import img from '../../img/cuate.png'
import eye from '../../img/eye-slash.png'
import './home.css'
import React, {useState, useEffect} from "react";
import Header from "../header/Header";
import Bottom from "../Bottom/Bottom";
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {active} from "../../reducer/functionreducer";
import SecondPage from "../Pricing/SecondPage/SecondPage";
import users ,{saveusers,getusers,changeerror}from "../../reducer/users";
import {idID} from "@mui/material/locale";


function Home({saveusers, getusers,users, linkpost,active,changeerror}) {

    useEffect(() => {
    }, [])
    const [inputlogin, setLogin] = useState('')
    const [inputparol, setparol] = useState('')
    const [disabled, setdisabled] = useState(false)
    const [checked, setchecked] = useState(false)
    const [placeclass, setplaceclass] = useState('')

    function login(event) {
        setLogin(event.target.value)
        // if (inputparol === '' || inputlogin === '') {
        //     setdisabled(true)
        // } else (
        //     setdisabled(false)
        // )
        // console.log(inputlogin)
        changeerror()
    }

    function parol(event) {
        setparol(event.target.value)
        // if (inputlogin === '' || inputparol === '') {
        //     setdisabled(true)
        // } else (
        //     setdisabled(false)
        // )
        // console.log(inputparol)
        changeerror()
    }

    function changechecked() {
        setchecked(prev => !prev)
            console.log(checked)
    }


    const [typeinput, Settype] = useState('password')
    const [placeholderp, Setplaceholderp] = useState('password')
    const [placeholderl, Setplaceholderl] = useState('login')
    const [array, Setarray] = useState('')


    function changetypeinput() {
        if (typeinput === 'text') {
            Settype('password')
        } else {
            Settype('text')
        }
    }





    function testusers() {
        saveusers({username:inputlogin,password:inputparol})
    }




    return (
        <div>
            <div id={'home'}>
                <div>
                    <Header/>
                </div>
                <div className={'home-body'}>
                    <div className="homeContainer">
                            <div className={"home-img"}>
                                <div className="imgContainer">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="home-text">
                                    <h4 className={'welcome'}>
                                        EVASET Xush kelibsiz!
                                    </h4>
                                    <p className={'p'}>
                                        Nulla porttitor accumsan tincidunt.
                                        Pellentesque inipsum
                                        id orci porta dapibus.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                    </p>
                                </div>
                            </div>


                        <div className="home-enter">
                            <div className="kirish-text">
                                <h5>Kirish</h5>
                                <p className={'p'}>
                                    At ullamcorper pharetra eleifend lectus vitae sit.
                                </p>
                            </div>
                            <div className={`kirish-input`}>
                                <input onChange={login} value={inputlogin} type="text" className={'form-control login'} placeholder={placeholderl}/>
                                <div className={'input'}>
                                    <input onChange={parol} value={inputparol} type={typeinput} className={'form-control pasword'}
                                        placeholder={placeholderp}/>
                                    <img onClick={changetypeinput} src={eye} alt=""/>
                                </div>
                                {
                                  users.error ? <span className={'error'}> Login yoki parol xato !</span>:''
                                }
                                <div className="kirish-checkbox">
                                    <input onChange={changechecked} checked={checked} type="checkbox" id={'check'}/>
                                    <label htmlFor={'check'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <title >ionicons-v5-l</title>
                                            <path
                                                d="M400,48H112a64.07,64.07,0,0,0-64,64V400a64.07,64.07,0,0,0,64,64H400a64.07,64.07,0,0,0,64-64V112A64.07,64.07,0,0,0,400,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/>
                                        </svg>
                                    </label>
                                    <div className="login">
                                        <h4>Meni eslab qol</h4>
                                        <a href="#">Parolni unutdingizmi?</a>
                                    </div>
                                
                                </div>
                            <button onClick={testusers}  disabled={disabled} className={'btn btn-primary form-control kirish'}>Kirish </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                        <Bottom/>
                </div>

                <div>
                    <div className="col-md-12">
                        <SecondPage/>
                    </div>
                </div>
            </div>
            <Switch>
            </Switch>
        </div>
    )
}

export default connect((users), {getusers, saveusers,active,changeerror})(Home)