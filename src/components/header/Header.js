import React from "react";
import Logo from '../../img/LOGO.png'
import './header.css'
import {useState} from "react";
import * as url from "url";

function Header() {

    return(
            <div className={'header__ '}>
                <div className="homebody">
                    <div className="image__ ">
                        <a href=""><img src={Logo} alt=""/></a>
                    </div>
                    <div className="header-narx">
                            <a href="Narxlar">Narxlar</a>
                            <select name="" id="" >
                                <option value="uzb">Uzbekcha</option>
                                <option value="rus">Rus</option>
                                <option value="eng">English</option>
                            </select>
                            <button>Sotib olish</button>
                    </div>
                </div>
            </div>

    )
}
export default  Header