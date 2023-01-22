import React from 'react';
import './shopinfo.css'
import Header from "../../header/Header";
import Main from "../mainPAge/Main";
import {Link} from 'react-router-dom'
import calendar from '../../../img/calendar.png'
import arrow_down from '../../../img/arrow-down.png'
import Bottom from "../../Bottom/Bottom";

function ShopInfo(props) {


    return (
        <>
            <Header/>
            <Main/>
            <div className={'container mt-5 mb-5'}>
                <form action="" className={'shopinfo-form'}>
                    <div className="col-md-12">
                        <input className={'shopinfo-input'} type="text" placeholder={"Do'konning to'liq nomi*"}/>
                    </div>
                    <div className={'col-md-6'}>
                        <input  id='date' placeholder={"Ochilish sanasi : "} type="date"/>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Valyuta*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <input type="file" id={'updatelogo'}/>
                        <div className='shopinfo-input d-flex justify-content-between align-items-center pe-0'>
                            <p className={'p-0 m-0'}>Logoni yangilash</p>
                            <label className={'btn-logo-add'}  htmlFor="updatelogo">
                                Tanlash
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Web sayt"}/>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Bazaga javobgar shaxsning telifon raqami"}/>
                    </div>
                    <div className="col-md-6">
                        <input className={'shopinfo-input'} type="text" placeholder={"Qo’shimcha telefon raqami"}/>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Davlat*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Viloyat*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Shahar*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Hudud*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Index*</option>
                        </select>
                    </div>
                    <div className={'col-md-6'}>
                        <select className={'shopinfo-input shopInfo-select'}  name="">
                            <option value="">Vaqt zonasi*</option>
                        </select>
                    </div>
                    <div className={'col-md-12'}>
                        <div className={'offset-9 col-md-3'}>
                          <Link to={'/taxDetails'}>
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

export default ShopInfo;
