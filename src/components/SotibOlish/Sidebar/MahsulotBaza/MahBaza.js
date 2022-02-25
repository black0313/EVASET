import down from '../../../../img/arrow-right2.svg'
import mahsulot from '../../../../img/3d-cube-scan.svg'
import './mahbaza.css'
import {Switch,Route,Link} from 'react-router-dom'
import {useState} from 'react'
function MahBaza() {

    const [active,setActive] = useState(false);
    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        setActive(!active)
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

    return(
        <div className={'row mahBaza'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>

                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.69922 9.26001L11.9992 12.33L17.2592 9.28003" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 17.77V12.32" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.7602 6.29L7.56023 8.07003C6.84023 8.47003 6.24023 9.48002 6.24023 10.31V13.7C6.24023 14.53 6.83023 15.54 7.56023 15.94L10.7602 17.72C11.4402 18.1 12.5602 18.1 13.2502 17.72L16.4502 15.94C17.1702 15.54 17.7702 14.53 17.7702 13.7V10.31C17.7702 9.48002 17.1802 8.47003 16.4502 8.07003L13.2502 6.29C12.5602 5.9 11.4402 5.9 10.7602 6.29Z" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className={`sidebar-text ${fontsiza}`}>Malumotlar Bazasi</h4>
                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>            </div>
            {
                active?<ul>
                    <Link className={'malumotBazaLink'} to={'/bazalar'}><li>Bazalar</li></Link>
                    <Link className={'malumotBazaLink'} to={'/yangiQoshish'}><li>Yangi qo`shish</li></Link>
                </ul>:''
            }
        </div>
    )
}
export default MahBaza
