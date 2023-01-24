import React from 'react';
import './shopinfo.css'
import Header from "../../header/Header";
import Main from "../mainPAge/Main";
import {Link} from "react-router-dom";
import Bottom from "../../Bottom/Bottom";
function UserDetails(props) {
    return (
        <>
            <Header/>
            <Main/>
            <div className={'container mt-5 mb-5'}>
                <form action="" className={'shopinfo-form'}>
                    <div className="col-sm-12 col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Ism*"}/>
                    </div>
                    <div className="col-sm-12  col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Familiya"}/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Login*"}/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Email"}/>
                    </div>
                    <div className={'col-sm-12 col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Parol*</option>
                        </select>
                    </div>
                    <div className={'col-sm-12 col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Parolni takroran yozing*</option>
                        </select>
                    </div>
                    <div className={'col-md-12 col-sm-12 d-flex align-items-center justify-content-end'}>
                        <div className={'col-sm-6 col-md-3 '}>
                            <Link to={'/taxDetails'}>
                                <button className={'btn-logo-add btn-logo-back'}>
                                    Ortga
                                </button>
                            </Link>
                        </div>
                        <div className={'col-sm-6 col-md-3'}>
                            <Link to={'/paymentDetails'}>
                                <button className={'btn-logo-add btn-logo-continue'}>
                                   A'zo bo'lish
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

export default UserDetails;
