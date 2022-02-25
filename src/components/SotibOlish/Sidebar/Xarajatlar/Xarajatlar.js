import down from '../../../../img/arrow-right2.svg'
import mahsulot from '../../../../img/card-send.svg'
import {Switch,Link,Route} from 'react-router-dom'
import './xarajatlar.css'
import {useState} from 'react'
import {connect} from "react-redux";
import {active} from "../../../../reducer/functionreducer";

function Mahsulotlar({active}) {

    const [active2,setActive] = useState(false);

    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        setActive(!active2)
        if(classs===''){
            setClasss('right2')
            setfill('fill')
            setfontsize('fontsize')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
        }
    }

    function sidebaractive(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
    }
    return(
        <div className={'row mahsulot'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>

                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.5H14.5" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 16.5H8" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 16.5H14.5" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 9.5V3.5L22 5.5" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 3.5L18 5.5" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className={`sidebar-text ${fontsiza}`}>Xarajatlar</h4>
                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            {
                active2 ?<ul>
                    <Link to={'/headerthird/xarajatRuyxati'}><li className={'li-text'} onClick={sidebaractive}>Xarajatlar ruyxati</li></Link>
                    <Link to={'/headerthird/xarajatQoshish'}><li className={'li-text'} onClick={sidebaractive}>Xarajat qoshish</li></Link>
                    <Link to={'/headerthird/xarajatTurlari'}><li className={'li-text'} onClick={sidebaractive}>Xarajat turlari</li></Link>
                </ul>:''
            }
        </div>
    )
}
export default connect(({functionreducer:{func}})=>({func}),{active}) (Mahsulotlar)
