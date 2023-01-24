import React from 'react';
import Card1 from "../card1/Card1";
import BigCard from "../bigCard/BigCard";
import Card from "../Card/Card";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import './main.css'

function Main(props) {

    const location  = useLocation();
    const {t, i18n} = useTranslation()

    return (
        <>
            <div className={`container mt-5 secondpage`}>
                <div className={'row m-0'}>
                    <div className="col-md-12">
                        <div className="text">
                            <h1>{t("Main.1")}</h1>
                            <p>{t("Main.2")}</p>
                        </div>

                        <div className="main-active ">
                            <div className={'main-check-container'}>
                                <input checked={
                                    location.pathname === "/shopdetails" ||
                                    location.pathname === "/userDetails" ||
                                    location.pathname === "/taxDetails"  ? false :true
                                } type="checkbox" id={'shI'} disabled={true}/>
                                <label className={'main-label'} htmlFor="shI">
                                    <div className={'main-switch'}>
                                        <span className={'main-checkbox'}></span>
                                    </div>
                                    <p>{t('Main.3')}</p>
                                </label>
                            </div>
                            <div className={'main-check-container'}>
                                <input checked={
                                    location.pathname === "/userDetails" ||
                                    location.pathname === "/taxDetails" ? false : true
                                } type="checkbox" id={'shS'} disabled={true}/>
                                <label className={'main-label'} htmlFor="shS">
                                    <div className={'main-switch'}>
                                        <span className={'main-checkbox'}></span>
                                    </div>
                                    <p>{t('Main.4')}</p>
                                </label>
                            </div>
                            <div className={'main-check-container'}>
                                <input checked={
                                    location.pathname === "/userDetails" ? false : true
                                } type="checkbox" id={'Cus'} disabled={true}/>
                                <label className={'main-label'} htmlFor="Cus">
                                    <div className={'main-switch'}>
                                        <span className={'main-checkbox'}></span>
                                    </div>
                                    <p>{t('Main.5')}</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Main;
