import React from "react";
import Logo from '../../img/LOGO.png'
import './header.css'
import {useState} from "react";
import {ModalFooter,Modal,ModalBody,ModalHeader} from "reactstrap";
import {useTranslation} from "react-i18next";

function Header() {

    const {t,i18n} = useTranslation();
    const [onRegister, setRegister] = useState(false)

    function toggle() {
        setRegister(!onRegister)
    }

    function ChangeLanguage(e){
        i18n.changeLanguage(e.target.value)
    }

    return(
            <div className={'header__ '}>
                <div className="homebody">
                    <div className="image__ ">
                        <a href=""><img src={Logo} alt=""/></a>
                    </div>
                    <div className="header-narx">
                            <a href="Narxlar">Narxlar</a>
                            <select name="" id="" onChange={ChangeLanguage} >
                                <option value="uz">Uzbek</option>
                                <option value="ru">Русский</option>
                                <option value="ki">Крилл</option>
                                <option value="en">English</option>
                            </select>
                            <button onClick={toggle}>Sotib olish</button>
                    </div>
                    <Modal className={'form-control'} isOpen={onRegister} toggle={toggle}>
                        <ModalHeader>
                            <h4>Ro'yhatdan o'tish</h4>
                        </ModalHeader><ModalHeader>
                            <h4>Ro'yhatdan o'tish</h4>
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="log">Login kiritng</label>
                            <input type="text" id={'log'} className={'form-control mt-1'}/>

                            <label htmlFor="">Ismingizni kiriting</label>
                            <input type="text"  className={'form-control mt-1'}/>

                            <label htmlFor="password">Parolingizni kiriting</label>
                            <input type="text" className={'form-control mt-1'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-primary form-control'}>Saqlash</button>
                            <button onClick={toggle} className={'btn btn-outline-primary form-control'}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

    )
}
export default  Header
