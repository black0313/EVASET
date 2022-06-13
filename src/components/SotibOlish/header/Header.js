import './header.css'
import imgMenu from '../../../img/menu.png'
import imgCalc from '../../../img/calculator.png'
import imgNot from '../../../img/notification.png'
import Arrow from '../../../img/Arrow.png'
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import {active} from "../../../reducer/functionreducer";
import Calculator from "./Calculator/Calculator";
import users from "../../../reducer/users";
import {Link} from "react-router-dom";
import Imagecom from "../../Imagecom";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ValyutaReducer,{getValyuta,changeActivecur} from "../Sidebar/Settings/DukonSozlamalari/reducers/ValyutaReducer";
import MaxsulotlarRoyxariReducer,{getMaxsulotRuyxati} from "../Sidebar/Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";

function Header({active,sidebarfunc,users,getValyuta,ValyutaReducer,changeActivecur,MaxsulotlarRoyxariReducer,getMaxsulotRuyxati}) {

    useEffect(()=>{
        setCalactive(false)
        getValyuta(users.businessId)
        getMaxsulotRuyxati(users.businessId)
    },[ValyutaReducer.current])



    const [calactive,setCalactive] = useState(false)

    function calchange(){
        setCalactive(!calactive)
    }

    const [activeN, setactiveN] = useState(false)
    function toggle2(){
        setactiveN(!activeN)
    }

    function sidebar() {
        active(false)
        sidebarfunc()
    }


    function valyutactiver(e){
            changeActivecur({
                businessId:users.businessId,
                id:e.target.value
            })
        getValyuta(users.businessId)
    }

    return(
        <div className={'container-fluid position-relative'}>
            <div className={'headerBox '}>
                <div className={'w'} onClick={sidebar}>
                    <div onClick={sidebar} className="dashbortButton ">
                        <img  src={imgMenu} onClick={sidebar} className={'im1'} alt=""/>
                    </div>
                </div>
                <div className="two ">
                    <div className={'img2img3'}>
                        <select name="" id="" className={'form-select me-2'} onChange={valyutactiver} value={ValyutaReducer.valyutactiveID} >
                            {
                                    ValyutaReducer.valyuta.map(item=>
                                        <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                        <img src={imgCalc} onClick={calchange} className={'im2'} alt=""/>
                        <div className="notificBox">
                            <img src={imgNot}  className={'im3'} alt=""/>
                            <div className="notificatNum">
                                <p>2</p>
                            </div>
                        </div>
                        <div className={'margintop'} >
                            {
                                calactive ? <Calculator toggle={calchange}/> :''
                            }
                        </div>
                    </div>
                    <div className="imgUserBox">
                        <div className="iiii ">
                            <div >
                                {
                                    users.users?.photo?.id===undefined ?  <img className={'img-fluid bg-danger'} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrDpSgHY2z-CJ_i1pQr42NUW531sx0yqOcQ&usqp=CAU`} alt="###"/>
:
                                        <img onClick={toggle2}  className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${users.users?.photo?.id}`} alt="###"/>

                                }
                                <Modal toggle={toggle2} isOpen={activeN}>
                                    <ModalHeader>
                                        <h2>XABARNOMA</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <h3>Hozirda sizda xabar mavjud emas</h3>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className={'btn btn-outline-primary'} onClick={toggle2}>Chiqish</button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                        <Link to={'/headerthird/profil'} > <img src={Arrow} alt="" /> </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default connect((users,ValyutaReducer,MaxsulotlarRoyxariReducer),{getMaxsulotRuyxati,active,getValyuta,changeActivecur}) (Header)
