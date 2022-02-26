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


    const [rasm,setrasm] = useState({
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYS4ItI44R4hI66qjzhinqY5-Miyb30PelnQ&usqp=CAU'
    })

    function imageHander(e){
        const reader = new FileReader()
        reader.onload = () =>{
            if (reader.readyState===2){
                // pic: reader.result
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

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
                        {/*<div className="imgUser">*/}
                        {/*    /!*<img src={rasm.pic} alt=""/>*!/*/}
                        {/*</div>*/}
                        <div className="iiii ">
                            <img src={rasm.pic} className={'img-fluid'} alt=""/>
                        </div>
                        <Link to={'/headerthird/profil'} > <img src={Arrow} alt="" image={imageHander} /> </Link>
                    </div>    
                </div>


            </div>
        </div>
    )
}
export default connect((users),{active}) (Header)
