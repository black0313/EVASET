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

function Header({active,sidebarfunc,users}) {

    useEffect(()=>{
        setCalactive(false)
    },[])

    const [calactive,setCalactive] = useState(false)

    function calchange(){
        setCalactive(!calactive)
    }
    function sidebar() {
        active(false)
        sidebarfunc()
    }

    return(
       
        <div className={'container-fluid position-relative'}>
            <div className={'headerBox '}>
                <div className="dashbortButton">
                    <img onClick={sidebar} src={imgMenu}  className={'im1'} alt=""/>
                </div>
                <div className="two ">
                    <div className={'img2img3'}>
                        <img src={imgCalc} onClick={calchange} className={'im2'} alt=""/>
                        <div className="notificBox">
                            <img src={imgNot}  className={'im3'} alt=""/>
                            <div className="notificatNum">
                                <p>2</p>
                            </div>
                        </div>
                        {
                            calactive ? <Calculator/> :''
                        }
                    </div>

                    <div className="imgUserBox">
                        <div className="imgUser">

                        </div>
                        <Link to={'/headerthird/profil'}> <img src={Arrow} alt="" /> </Link>
                    </div>    
                </div>


            </div>
        </div>
    )
}
export default connect((users),{active}) (Header)
