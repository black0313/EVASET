import './secondPage.css'
import Card1 from '../card1/Card1';
import Card from "../Card/Card";
import BigCard from "../bigCard/BigCard";
import Logo from "../../../img/LOGO.png";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Header from "../../header/Header";

function SecondPage() {

    const {t,i18n} = useTranslation()
    function ChangeLanguage(e){
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const [lang, setLang] = useState()
    return(
        <>
            <div>
               <Header/>
            </div>
            <div className={`container secondpage`}>
                <div className={'row mt-2 m-0'}>
                    <div className="col-md-12">
                        <div className="text">
                            <h1>{t("Tariffs.1")}</h1>
                            <p>{t("Tariffs.2")}</p>
                        </div>

                        <div className="active">
                            <div className='activSelect'>
                                <p className={'p1'}>{t("Tariffs.3")}</p>
                                <input type="checkbox" id={'switch'}/>
                                <label className={'switch'} htmlFor="switch">
                                    <span ></span>
                                </label>
                                <p className={'p2'}>{t("Tariffs.4")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-md-12 f">
                        <div className='fBox'>
                            <div className="c1">
                                <Card1/>
                            </div>

                            <div className="c2">
                                <BigCard/>
                            </div>

                            <div className="c3">
                                <Card/>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                    </div>
                </div>
            </div>
        </>

    )
}
export default SecondPage
