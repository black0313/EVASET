import down from '../../../../img/arrow-right2.svg'
import {Link,Switch,Route} from 'react-router-dom'
import mahsulot from '../../../../img/convert-3d-cube.svg'
import './baza.css'
import {useState} from 'react'
import {connect} from "react-redux";
import {active} from "../../../../reducer/functionreducer";

function Mahsulotlar({active}) {

    const [active2,setActive] = useState(false);

    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        if(classs===''){
            setClasss('right2')
            setfill('fill')
            setfontsize('fontsize')
            let style = document.getElementById('baza')
            style.classList.add('baza2')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
            let style = document.getElementById('baza')
            style.classList.remove('baza2')
        }
    }

    function sidebaractive(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
    }
    return(
        <div className={'row baza'} id={'baza'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>
                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.6992 4.45001L17.6792 6.75L21.6192 4.46002" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.6797 10.82V6.73999" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.7396 2.21L14.3396 3.53996C13.7996 3.83996 13.3496 4.59995 13.3496 5.21995V7.75999C13.3496 8.37999 13.7896 9.13998 14.3396 9.43998L16.7396 10.77C17.2496 11.06 18.0896 11.06 18.6096 10.77L21.0096 9.43998C21.5496 9.13998 21.9996 8.37999 21.9996 7.75999V5.21995C21.9996 4.59995 21.5596 3.83996 21.0096 3.53996L18.6096 2.21C18.0996 1.93 17.2596 1.93 16.7396 2.21Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.34961 15.45L6.31961 17.75L10.2696 15.46" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.32031 21.82V17.74" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                <h4 className={`sidebar-text ${fontsiza}`}>Bazadan Bazaga</h4>

                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

                <ul>
                    <Link to={'/headerthird/utkazmaRuyxati'} ><li className={'li-text'} onClick={sidebaractive}>O`tkazmalar ruyxati</li></Link>
                    <Link to={'/headerthird/yangiOtkazma'} ><li className={'li-text'} onClick={sidebaractive}>Yangi o`tkazma</li></Link>
                </ul>

        </div>
    )
}
export default connect(({functionreducer:{func}})=>({func}),{active}) (Mahsulotlar)