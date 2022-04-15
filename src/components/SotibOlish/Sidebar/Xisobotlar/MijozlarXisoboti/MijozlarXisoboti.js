import {Link, Switch, Route, useHistory} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './mijozlarxisoboti.css'
import {useState,useEffect} from "react";
import Savdolar1 from "./Savdolar/1/Savdolar1";
import Ulushli from "./Savdolar/2/Ulushli";
import Xarajatlar3 from "./Savdolar/3/Xarajatlar3";
import MijozlarBnIshlash from "./Savdolar/4/MijozlarBnIshlash";
import {connect} from 'react-redux'
import {getMijozhisobot,deleteMijozhisobot,saveMijozhisobot,editMijozhisobot} from '../reducer/MijozHisobotiReducer'
import XodimReducer, {getXodim, saveXodim} from "../../Hodimlar/reducer/XodimReducer";
import users from "../../../../../reducer/users";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";

function MijozlarXisoboti({XodimReducer,getXodim,users,getSavdolar,getbranch}) {

    const [inputvalue,setinputvalue] = useState(
        {
            baza:'',
            xodim:'',
            sananibelgilang:'',
        }
    )
    const history = useHistory()
    function xodim(e){
        inputvalue.xodim = e.target.value
        let a = {...inputvalue}
        setinputvalue(a)
    }
    function baza(e){
        inputvalue.baza = e.target.value
        let a = {...inputvalue}
        setinputvalue(a)
    }
    function sananibelgilang(e){
        inputvalue.sananibelgilang = e.target.value
        let a = {...inputvalue}
        setinputvalue(a)
    }

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    useEffect(()=>{
        getXodim(users.businessId)
        history.push('/headerthird/mijozlarXisoboti/1')
        getbranch(users.businessId)
    },[])

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderMIX">
                <h2>Mijozlar xisobot</h2>
            </div>
            <div className="rowStyleMIX">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-12">
                        <h6>Xodim:</h6>
                        <select className='inptData' value={inputvalue.xodim} onChange={xodim} id="">
                            {
                                XodimReducer.xodimlar.map(item=> <option value={item.id}>{item.username}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <select name="" id="" value={inputvalue.baza} onChange={baza} className={'inptData'}>
                            {

                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Sanani belgilang:</h6>
                        <select name="" id="" className={'inptData'} value={inputvalue.sananibelgilang} onChange={sananibelgilang}>
                            <option value="">Bugun</option>

                            {
                                active?<option value="">123</option>:'no find'
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className="rowSty">
                <div className="col-md-12">
                    <h5>Summary</h5>
                    <h3>Jami savdo - Jami sotuvlar bo`yicha daromad: ( backend-backend = backend )</h3>
                    <h3>Jami xarajatlar: ( backend )</h3>
                </div>
            </div>

            <div className="rowStyleMIX2">
                <div className={'btnBoxPage'}>
                    <Link to={'/headerthird/mijozlarXisoboti/1'}><button className={'btnPagenesion'}>Savdolar</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/2'}><button className={'btnPagenesion'}>Ulushli savdolar</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/3'}><button className={'btnPagenesion'}>Xarajatlar</button></Link>
                    {/*<Link to={'/headerthird/mijozlarXisoboti/4'}><button className={'btnPagenesion'}>Mijozlar bn ishlash</button></Link>*/}
                </div>

                <div className="qoshish mt-4">
                    <h5></h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <Route path={'/headerthird/mijozlarXisoboti/1'} component={Savdolar1}/>
                <Route path={'/headerthird/mijozlarXisoboti/2'} component={Ulushli}/>
                <Route path={'/headerthird/mijozlarXisoboti/3'} component={Xarajatlar3}/>
                <Route path={'/headerthird/mijozlarXisoboti/4'} component={MijozlarBnIshlash}/>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>
            </div>
        </div>
    )
}

export default connect((XodimReducer,users,branchreducer),{getXodim,getbranch,saveXodim,}) (MijozlarXisoboti)