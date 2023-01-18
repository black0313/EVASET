import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import './xaridxisobot.css'
import {useState, useRef, useEffect} from "react";
import {MenuItem, TextField,Select,InputLabel} from "@mui/material";
import {connect} from "react-redux";
import './xaridxisobot.css'
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
import XaridReducer, {
    deleteXarid,
    editXarid,
    getXarid,
    getXarid2,
    saveXarid
} from "../../Haridlar/reducer/XaridReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import users from "../../../../../reducer/users";
import TaminotReducer, {getTaminot, getTaminot2} from "../../Hamkorlar/reducer/TaminotReducer";
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useTranslation} from "react-i18next";

function XaridlarXisoboti({branchreducer,getXarid2,users,getTaminot2,getbranch,TaminotReducer,getTaminot,getMaxsulotRuyxati,MaxsulotlarRoyxariReducer,XaridReducer,getXarid}) {

    const {t} = useTranslation()
    const [input,setInput] = useState(
        {
            baza:'',
            diller:'',
            mahsulotizlash:'',
            sananibelgilash:'',
            view:'',
            izlash:'',
            eslatma:'',
            qarz:''
        }
    )
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
        if (input.baza !=='barcasi'){
            getXarid2(input.baza)
        }else {
            getXarid2(users.businessId)
        }
        console.log(
            XaridReducer.xaridlar
        )
    }

    function diller(e){
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
        if (input.diller !=='barcasi'){
            getXarid2(input.diller)
        }else {
getXarid2(users.businessId)
        }
    }
    function mahsulotizlash(e){
        input.mahsulotizlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sananibelgilash(e){
        input.sananibelgilash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function view(e){
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qarzfunction(e){
        input.qarz = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getMaxsulotRuyxati(users.businessId)
        getTaminot2(users.businessId)
        getXarid(users.businessId)
        getXarid2(users.businessId)
        getTaminot(users.businessId)
    },[])

    const [active,setActive] = useState(false)
    const [selectvalue,setSelectvalue] =useState('')
    const startValueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
    const endValueDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
    const minDateDate = new Date(new Date().getFullYear(), new Date().getMonth(), 8);
    const maxDateDate = new Date(new Date().getFullYear(), new Date().getMonth()+1, 20);

    function selectchange(event){
         console.log(event.isDefaultPrevented(false))
             event.isDefaultPrevented(true)
        event.isPropagationStopped(false)
        if(event.target.value == 20){
            setActive(true)
        }
        else{
            setActive(false)
        }
        if(event.target.value == 3){
            const day = new Date()
            const day1 = new Date().getMonth()+1
            const day2 = new Date().getFullYear()
            console.log(day,day1,day2)
        }
    }
    const [qarz,setqarz] = useState(false)

    function toggleQarz(){
        setqarz(!qarz)
    }

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderXH">
                <h2>{t('PurchaseList.1')}</h2>
            </div>
            <div className="rowStyleXH">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>{t('Buttons.8')}:</h6>
                        <select name="" value={input.baza} onChange={baza} id="" className='inputData'>

                            <option value="barcasi">Barchasi</option>
                            {
                                branchreducer.branch.map(item=>
                                    input.baza == '' ? input.baza = item.id:
                                    <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Purchase.2')}:</h6>
                        <select name="" value={input.diller} onChange={diller} id="" className={'inputData'}>
                            {
                                TaminotReducer.taminot.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>{t('PurchaseList.2')}</h6>
                        <input type="text" value={input.mahsulotizlash} onChange={mahsulotizlash} placeholder="Mahsulot nomi" className={'inputData'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Trade.3')}:</h6>
                        <input type="date" className={'inputData'} value={input.sananibelgilash} onChange={sananibelgilash}/>

                    </div>
                </div>

            </div>

            <div className="rowStyleXH2">

                <div className="izlashXH2">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                        </select>
                        <button> <img src={CSV} alt="" /> Export CSV</button>
                        <button><img src={Excel} alt="" /> Export Excel</button>
                        <button><img src={Print} alt="" /> Print</button>
                        <button><img src={Pdf} alt="" />Export PDF</button>
                        <button> <img src={Data} alt="" />{t('Buttons.18')}</button>
                    </div>
                    <div className="izlashBox2">
                        <input value={input.izlash} onChange={izlash} type="text" placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive mb-4 table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table table-hover table-primary table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>T/R</th>
                            <th>{t('Sidebar.9')}</th>
                            {/*<th>Shtrix kod</th>*/}
                            <th>{t('Purchase.2')}</th>
                            <th>{t('Purchase.31')}</th>
                            <th>{t('Supplier.8')}</th>
                            <th>{t('Buttons.11')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            XaridReducer.xaridlar.filter(val=>{
                                if (input.izlash === ''){
                                    return val
                                }else if (val.product.name.toUpperCase().includes(input.izlash.toUpperCase())){
                                    return val
                                }
                            }).
                            map((item,index)=><tr key={item.id}>
                                <td>{index+1}</td>
                                    {
                                        item.purchaseProductList.map(item=><td key={item.id}>
                                            {item.product.name}
                                        </td>)
                                    }

                                <td>
                                    {item.dealer.name}
                                </td>
                                <td>
                                    {item.deliveryPrice}
                                </td>
                                <td>-</td>
                                <td>
                                    <button onClick={toggleQarz} className={'btnQarz'}>
                                        {t('Buttons.11')}
                                    </button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    <Modal isOpen={qarz} toggle={toggleQarz}>
                        <ModalHeader>
                            {t('Buttons.11')}
                        </ModalHeader>
                        <ModalBody>
                            <h3>{t('PurchaseList.3')}</h3>
                            <label htmlFor={'qarz'}>{t('PurchaseList.4')}</label>
                            <input value={input.qarz} onChange={qarzfunction} type="number" className={'form-control'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'}>{t('Buttons.6')}</button>
                            <button className={'btn btn-outline-primary'} onClick={toggleQarz}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        </div>
    )
}

export default connect((XaridReducer,SavdoOynaReducer,branchreducer,users,TaminotReducer,MaxsulotlarRoyxariReducer),
    {getXarid,getXarid2,saveXarid,editXarid,deleteXarid,getbranch,getTaminot,getTaminot2,getMaxsulotRuyxati,}) (XaridlarXisoboti)
