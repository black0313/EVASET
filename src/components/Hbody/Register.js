import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import './home.css'
import '../header/header.css'
import './register.css'
import register from '../../img/register.jpg'
import Header from "../header/Header";
import {Link,useHistory} from "react-router-dom";
import Logo from "../../img/LOGO.png";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Bottom from "../Bottom/Bottom";

function Register(props) {

    const {t,i18n} = useTranslation()
    function ChangeLanguage(e){
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const [lang, setLang] = useState()

    const history = useHistory()

    function onRegister(){
        history.push('/tariffs')
    }

    return (
        <div>
            <div>
                <div  className={'register-header'}>
                    <div className=" d-flex justify-content-between align-item-center">
                        <div className="image__">
                            <img src={Logo} alt=""/>
                        </div>
                        <div>
                            <select className={'form-control'} value={lang} style={{cursor:"pointer"}} name="" id="" onChange={ChangeLanguage} >
                                <option value="uz">Uzbek</option>
                                <option value="ru">Русский</option>
                                <option value="ki">Крилл</option>
                                <option value="en">English</option>
                            </select>

                        </div>

                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12 col-md-6  register-Form'}>
                        <form action="">
                        <div className={'text-center'}>
                            <h4>{t('Welcome.8')}</h4>
                        </div>
                        <div>

                            <label htmlFor="log">{t('Welcome.9')}</label>
                            <input type="text" id={'log'} className={'form-control register-input mt-1'}/>

                            <label htmlFor="name">{t('Welcome.10')}</label>
                            <input type="text" id={'name'} className={'form-control register-input mt-1'}/>


                            <label htmlFor="password">{t('Welcome.11')}</label>
                            <input type="password" id={'password'} className={'form-control register-input mt-1'}/>
                            <label htmlFor="password">{t('Welcome.22')}</label>
                            <input type="password" id={'password'} className={'form-control register-input mt-1'}/>
                        </div>
                        <div>
                            <button onClick={onRegister} className={'btn btn-primary form-control mb-2 mt-3'}>{t('Welcome.21')}</button>
                            <Link className={'registrBtn'} to={'/login'}>{t('Welcome.20')}</Link>
                        </div>
                        </form>
                    </div>
                    <div className={'col-md-6'}>
                        <div className="registerImg">
                            <img className="registerImg_picture" src={register} alt="register"/>
                        </div>
                    </div>
                </div>

                <div className={'mt-5'}>
                    <Bottom/>
                </div>
            </div>
        </div>

    );
}

export default Register;
