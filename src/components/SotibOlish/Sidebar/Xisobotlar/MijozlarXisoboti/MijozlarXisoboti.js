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
import SavdoQoshishReducer, {getSavdolar} from "../../Savdo/reducer/SavdoQoshishReducer";
import MijozGuruxReducer from "../../Hamkorlar/reducer/MijozGuruxReducer";
import {useTranslation} from "react-i18next";

function MijozlarXisoboti({XodimReducer,MijozGuruxReducer,SavdoQoshishReducer,getXodim,users,getSavdolar,getbranch}) {

    const {t} = useTranslation()
    const [inputvalue,setinputvalue] = useState(
        {
            baza:'',
            xodim:'',
            sananibelgilang:'',
            mijozId:''
        }
    )
    const history = useHistory()
    function xodim(e){
        inputvalue.xodim = e.target.value
        let a = {...inputvalue}
        setinputvalue(a)
    }
    function mijozId(e){
        inputvalue.mijozId = e.target.value
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

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    useEffect(()=>{
        getXodim(users.businessId)
        history.push('/headerthird/mijozlarXisoboti/1')
        getbranch(users.businessId)
        getSavdolar(users.businessId)
    },[])

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderMIX">
                <h2>{t('PurchaseList.5')}</h2>
            </div>
            <div className="rowStyleMIX">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-12">
                        <h6>{t('Sidebar.4')}:</h6>
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
                        <h6>{t('PurchaseList.6')}:</h6>
                        <select  id="" value={inputvalue.mijozId} onChange={mijozId} className={'inptData'}>
                            {
                                MijozGuruxReducer.mijozgurux.map(item => <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Trade.3')}:</h6>
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
                    <h3>{SavdoQoshishReducer.amount} - {t('PurchaseList.7')}: </h3>
                    <h3>{t('PurchaseList.8')}: </h3>
                </div>
            </div>

            <div className="rowStyleMIX2">
                <div className={'btnBoxPage'}>
                    <Link to={'/headerthird/mijozlarXisoboti/1'}><button className={'btnPagenesion'}>{t('PurchaseList.9')}</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/2'}><button className={'btnPagenesion'}>{t('PurchaseList.10')}</button></Link>
                    <Link to={'/headerthird/mijozlarXisoboti/3'}><button className={'btnPagenesion'}>{t('Trade.22')}</button></Link>
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

                <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>

            </div>
        </div>
    )
}

export default connect((XodimReducer,users,MijozGuruxReducer,SavdoQoshishReducer,branchreducer),{getXodim,getbranch,saveXodim,getSavdolar}) (MijozlarXisoboti)