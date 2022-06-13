import './hodimlar.css'
import {Link,Switch,Route} from 'react-router-dom'
import {useState} from 'react'
import right from '../../../../img/arrow-right2.svg'
import {connect} from "react-redux";
import {active,activemedia} from "../../../../reducer/functionreducer";

function Hodimlar({active,activemedia}) {

    const [active2,setActive] = useState(false);
    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        if(classs===''){
            setClasss('right2')
            setfill('stroke')
            setfontsize('fontsize')
            let style = document.getElementById('h')
            style.classList.add('list22')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
            let style = document.getElementById('h')
            style.classList.remove('list22')
        }

    }
    function sidebaractive(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
    }


    return(
            <div className={'row list active'} id={'h'}>
                {/*<div className="col-md-6">*/}
                <div className="imgDiv"    onClick={toggle}>
                    <div className={'d-flex align-items-center'}>
                        <svg    className={`sidebar-img2 ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.7517C11.3 22.7517 10.59 22.4817 10.06 21.9517L8.34998 20.2617C7.92998 19.8417 7.35001 19.6117 6.76001 19.6117H6C3.93 19.6117 2.25 17.9417 2.25 15.8917V4.98169C2.25 2.93169 3.93 1.26172 6 1.26172H18C20.07 1.26172 21.75 2.93169 21.75 4.98169V15.8917C21.75 17.9417 20.07 19.6117 18 19.6117H17.24C16.65 19.6117 16.07 19.8517 15.65 20.2617L13.94 21.9517C13.41 22.4817 12.7 22.7517 12 22.7517ZM6 2.75171C4.76 2.75171 3.75 3.75168 3.75 4.97168V15.8817C3.75 17.1117 4.76 18.1017 6 18.1017H6.76001C7.75001 18.1017 8.70997 18.5017 9.40997 19.1917L11.12 20.8817C11.61 21.3617 12.4 21.3617 12.89 20.8817L14.6 19.1917C15.3 18.5017 16.26 18.1017 17.25 18.1017H18C19.24 18.1017 20.25 17.1017 20.25 15.8817V4.97168C20.25 3.74168 19.24 2.75171 18 2.75171H6Z" fill="#ffffff"/>
                            <path d="M12.0019 10.7498C10.3019 10.7498 8.92188 9.3698 8.92188 7.6698C8.92188 5.9698 10.3019 4.58984 12.0019 4.58984C13.7019 4.58984 15.0819 5.9698 15.0819 7.6698C15.0819 9.3698 13.7019 10.7498 12.0019 10.7498ZM12.0019 6.08984C11.1319 6.08984 10.4219 6.7998 10.4219 7.6698C10.4219 8.5398 11.1319 9.24982 12.0019 9.24982C12.8719 9.24982 13.5819 8.5398 13.5819 7.6698C13.5819 6.7998 12.8719 6.08984 12.0019 6.08984Z" fill="#ffffff"/>
                            <path d="M16 16.4084C15.59 16.4084 15.25 16.0684 15.25 15.6584C15.25 14.2784 13.79 13.1484 12 13.1484C10.21 13.1484 8.75 14.2784 8.75 15.6584C8.75 16.0684 8.41 16.4084 8 16.4084C7.59 16.4084 7.25 16.0684 7.25 15.6584C7.25 13.4484 9.38 11.6484 12 11.6484C14.62 11.6484 16.75 13.4484 16.75 15.6584C16.75 16.0684 16.41 16.4084 16 16.4084Z" fill="#ffffff"/>
                        </svg>

                        <h4 className={`sidebar-text ${fontsiza}`}>Hodimlar</h4>
                    </div>
                    <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div className={'hodimul'}>
                    <ul>
                        <li onClick={sidebaractive}><Link  to={'/headerthird/hodimlarruyxati'} className={"lll li-text"}>Xodimlar ruyxati</Link></li>
                        <li onClick={sidebaractive}><Link  to={'/headerthird/lavozimlar'} className={"lll li-text"}>Lavozimlar</Link></li>
                        {/*<li onClick={sidebaractive}><Link  to={'/headerthird/hodimulush'} className={"lll li-text"}>Xodimlar ulushi</Link>   </li>*/}
                    </ul>

                </div>


            </div>
    )
}
export default connect(({functionreducer:{func}})=>({func}),{active,activemedia}) (Hodimlar)