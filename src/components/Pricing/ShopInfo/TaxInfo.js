import React from 'react';
import './shopinfo.css'
import Header from "../../header/Header";
import Main from "../mainPAge/Main";
import {Link} from "react-router-dom";
import Bottom from "../../Bottom/Bottom";


function TaxInfo(props) {
    return (
        <>
            <Header/>
            <Main/>
            <div className={'container mt-5 mb-5'}>
                <form action="" className={'shopinfo-form'}>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Soliq nomi"}/>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Tartib raqami"}/>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Soliq nomi"}/>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Tartib raqami"}/>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Hisobot yil boshlanadigan oy*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Savdolar usullari(tushunmasangiz tegmang)*</option>
                        </select>
                    </div>
                    <div className={'col-md-12 d-flex align-items-center justify-content-end'}>
                        <div className={'col-md-3'}>
                            <Link to={'/shopdetails'}>
                                <button className={'btn-logo-add btn-logo-back'}>
                                   Ortga
                                </button>
                            </Link>
                        </div>
                        <div className={'col-md-3'}>
                            <Link to={'/userDetails'}>
                                <button className={'btn-logo-add btn-logo-continue'}>
                                    Davom etish
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <Bottom/>
        </>
    );
}

export default TaxInfo;
