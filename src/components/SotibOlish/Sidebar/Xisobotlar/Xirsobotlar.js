import down from '../../../../img/arrow-right2.svg'
import mahsulot from '../../../../img/status-up.svg'
import './xisobotlar.css'
import {useState} from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import {connect} from "react-redux";
import {active} from "../../../../reducer/functionreducer";

function Xirsobotlar({active}) {

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
            <div className=" imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>

                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.88086 18.15V16.08" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M12 18.15V14.01" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M17.1191 18.15V11.93" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M17.1209 5.85001L16.6609 6.39001C14.1109 9.37001 10.6909 11.48 6.88086 12.43" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M14.1895 5.85001H17.1195V8.77001" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className={`sidebar-text ${fontsiza}`}>Xisobotlar</h4>
                </div>

                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>              </div>
            {
                active2 ?<ul>
                    <Link to={'/headerthird/foydaZarar'} ><li  className={'li-text'} onClick={sidebaractive}>Foyda va zarar</li></Link>
                    <Link to={'/headerthird/xaridlarXisoboti'} ><li  className={'li-text'} onClick={sidebaractive}>Xaridlar hisoboti</li></Link>
                    <Link to={'/headerthird/mijozlarXisoboti'} ><li className={'li-text'} onClick={sidebaractive}>Mijozlar hisoboti</li></Link>
                    {/*<Link to={'/smendagiXisoboti'} className={'mahsulotXisobot'}><li>Smendagi hisobotlar</li></Link>*/}
                    <Link to={'/headerthird/xarajatXisoboti'} ><li  className={'li-text'} onClick={sidebaractive}>Xarajat hisoboti</li></Link>
                    <Link to={'/headerthird/savdoTolov'}><li className={'li-text'} onClick={sidebaractive}>Savdodagi to`lov</li></Link>
                    {/*<Link to={'/xaridQarz'} className={'mahsulotXisobot'}><li>Xarid u-n to`langan qarz</li></Link>*/}
                    <Link to={'/headerthird/mahsulotXisoboti'} ><li className={'li-text'} onClick={sidebaractive}>Mahsulotlar hisoboti</li></Link>
                    {/*<Link to={'/savdolarHisoboti'} className={'mahsulotXisobot'}><li>Savdolar hisoboti</li></Link>*/}
                    {/*<Link to={'/savdolarHisoboti'} className={'mahsulotXisobot'}><li>Savdolar hisoboti</li></Link>*/}
                    {/*<Link to={'/xaridlarSavdolar'} className={'mahsulotXisobot'}><li>Xaridlar va savdolar</li></Link>*/}
                    <Link to={'/headerthird/kopSotilgan'} ><li  className={'li-text'} onClick={sidebaractive}>Ko`p sotilgan tovarlar</li></Link>
                    <Link to={'/headerthird/otkazmalarXisoboti'} ><li className={'li-text'} onClick={sidebaractive}>O`tkazmalar hisoboti</li></Link>
                    <Link to={'/headerthird/qoldiqlarXisoboti'} ><li  className={'li-text'} onClick={sidebaractive}>Qoldiqlar hisoboti</li></Link>
                    {/*<Link to={'/guruhlarXisoboti'} className={'mahsulotXisobot'}><li>Guruhlar bo`yicha hisobot</li></Link>*/}
                    {/*<Link to={'/taminotMijoz'} className={'mahsulotXisobot'}><li>Ta`minot va mijoz hisoboti</li></Link>*/}
                    <Link to={'/headerthird/soliqlarXisoboti'} ><li  className={'li-text'} onClick={sidebaractive}>Soliqlar hisoboti</li></Link>
                    {/*<Link to={'/kmDastur'} className={'mahsulotXisobot'}><li>Kimlar dasturga kirdi?</li></Link>*/}
                </ul>:''
            }
        </div>
    )
}
export default  connect(({functionreducer:{func}})=>({func}),{active})  (Xirsobotlar)
