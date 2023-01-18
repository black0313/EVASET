import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarXisoboti.css'
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {useTranslation} from "react-i18next";
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
import XarajatTurlariReducer, {
    deleteXarajatlarTurlari, editXarajatlarTurlari,
    getXarajatlarTurlari, saveXarajatlarTurlari
} from "../../Xarajatlar/reducer/XarajatTurlariReducer";
import XarajatlarReducer, {getXarajatlar} from "../../Xarajatlar/reducer/XarajatlarReducer";
import branchreducer from "../../../../../reducer/branchreducer";
import BolimReducer, {getBolim} from "../../Maxsulotlar/reducer/BolimReducer";
import users from "../../../../../reducer/users";

function XarajatlarXisoboti({XarajatTurlariReducer,BolimReducer,getBolim,XarajatlarReducer,getXarajatlar,branchreducer}) {

    const {t} = useTranslation()
    const [input,setInput] = useState(
        {
            baza:'',
            bolim:'',
            aniqsana:'',
            view:'',
            izlash:'',
        }
    )

    function view(e){
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolim(e){
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
    }
    function aniqsana(e){
        input.aniqsana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }


    useEffect(() => {
        // getXarajatxisobot()
        getXarajatlar()
        getBolim(users.businessId)
    },[])

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeader">
                <h2>{t('ExpenseReport.1')}</h2>
            </div>
            <div className="rowStyleXX">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-4 col-sm-12">
                        <h6>{t('ProductList.8')}:</h6>
                        <select value={input.baza} onChange={baza} name="" id="">
                            {
                                branchreducer.branch.map(item=> <option value={item.id}>
                                    {item.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="col-4 col-sm-12">
                        <h6>{t('Sidebar.13')}:</h6>
                        <select name="" id="" onChange={bolim} value={input.bolim}>
                            {
                                BolimReducer.bolimlar.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-4 col-sm-12">
                        <h6>{t('Profit.2')}:</h6>
                        <select name="" id="" value={input.aniqsana} onChange={aniqsana}>
                            <option value="" hidden>{t('Profit.2')}</option>
                        </select>
                    </div>
                </div>
                <div className="btnFiltrlash">
                    <button className='btn btn-primary'>{t('Buttons.16')}</button>
                </div>

            </div>

            <div className="rowStyleXX2">
                <div className="izlashXX2">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">1,000</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>{t('Buttons.18')}</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                    </div>
                </div>

                <div className="table-responsive mb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>{t('Trade.24')}</th>
                            <th>{t('ExpenseReport.2')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            XarajatlarReducer.xarajatlar.
                            map(item=><tr key={item.id}>
                                {/*<td>{item.outlayCategory.title}</td>*/}
                                <td>{item.totalSum}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default connect((XarajatTurlariReducer,branchreducer,BolimReducer,SavdoOynaReducer,XarajatlarReducer),{getXarajatlar,getBolim,getXarajatlarTurlari,saveXarajatlarTurlari,editXarajatlarTurlari,deleteXarajatlarTurlari,}) (XarajatlarXisoboti)
