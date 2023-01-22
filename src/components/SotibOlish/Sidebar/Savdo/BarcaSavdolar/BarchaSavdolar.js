import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './barcasavdolar.css'
import React, {useState, useRef, useEffect} from "react";
import {MenuItem, TextField,Select,InputLabel} from "@mui/material";
import {connect} from "react-redux";
import TaminotReducer, {getTaminot} from "../../Hamkorlar/reducer/TaminotReducer";
import SavdoQoshishReducer, {
    deleteSavdolar,
    editSavdolar,
    getSavdolar, getSavdolar2, getSavdolar3,
    saveSavdolar,

} from "../reducer/SavdoQoshishReducer";
import users from "../../../../../reducer/users";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import ValyutaReducer from "../../Settings/DukonSozlamalari/reducers/ValyutaReducer";
import {useTranslation} from "react-i18next";

function BarchaSavdolar({getSavdolar3,ValyutaReducer,deleteSavdolar,branchreducer,getTaminot,TaminotReducer,SavdoQoshishReducer,getSavdolar,getSavdolar2,users,getbranch,ditSavdolar,saveSavdolar}) {

    const {t} = useTranslation()
    const [input,setInput] = useState(
        {
            baza:'',
            diller:'',
            mahsulotizlash:'',
            sananibelgilash:'',
            view:'',
            izlash:''
        }
    )

    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
        if (input.baza !=='barcasi'){
            getSavdolar3(input.baza)
        }else {
            getSavdolar3(users.businessId)
        }
    }
    function diller(e){
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
        if (input.diller !== 'barcasi'){

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

    useEffect(()=>{
        // getXaridXisobot()
        getSavdolar(users.businessId)
        getSavdolar2(users.businessId)
        getbranch(users.businessId)
        getTaminot(users.businessId)
        ommabop()
        // getSavdolar3(users.businessId)
    },[ValyutaReducer.current])

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

    function deleteS(item){
        deleteSavdolar(item.id)
        setTimeout(()=>{
            getSavdolar(users.businessId)
        },100)
    }
    const [pages,setpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function ommabop() {

        let d = SavdoQoshishReducer.savdolar.length/7
        setpages(d)
    }
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        console.log(pages)
        console.log(currentPage)
    }
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * 7 - 7;
        const endIndex = startIndex + 7;
        return SavdoQoshishReducer.savdolar.slice(startIndex, endIndex);
    };
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 1) * 1;
        return new Array(1).fill().map((_, idx) => start + idx + 1);
    };

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteSavdolar(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
        // deleteTaminot(item.id)
        console.log(item)
    }

    return (
        <div className="col-md-12 mt-2 mb-4 mt-4 ">
            <div className="textHeader">
                <h2>{t('Trade.1')}</h2>
            </div>
            <div className="rowStyleH">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>{t('ProductList.8')}:</h6>
                        <select name="" value={input.baza} onChange={baza} id="">
                            <option value="barcasi">Barchasi</option>
                            {
                                branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Purchase.2')}:</h6>
                        <select name="" value={input.diller} onChange={diller} id="" className={'form-control'}>
                            <option value={'barcasi'}>Barchasi</option>
                            <option value='noback'>No backend</option>
                            {
                                TaminotReducer.taminot.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>{t('Trade.2')}:</h6>
                        <input type="text" value={input.mahsulotizlash} onChange={mahsulotizlash} className={'form-control'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Trade.3')}:</h6>
                        <input type="date" className={'form-control'} value={input.sananibelgilash} onChange={sananibelgilash}/>

                    </div>
                </div>
            </div>

            <div className="rowStyleH2">
                <div className="qoshish">
                    <h5>{t('Trade.1')}</h5>
                    <Link to={'/headerthird/mahsulotQoshish'}><button className='btn btn-primary'>+{t('Buttons.2')}</button></Link>
                </div>
                <div className="izlashH2">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">All</option>
                        </select>
                        <button> <img src={CSV} alt="" /> Export CSV</button>
                        <button><img src={Excel} alt="" /> Export Excel</button>
                        <button><img src={Print} alt="" /> Print</button>
                        <button><img src={Pdf} alt="" />Export PDF</button>
                        <button> <img src={Data} alt="" />{t('Buttons.18')} </button>
                    </div>
                    <div className="izlashBox2">
                        <input value={input.izlash} onChange={izlash} type="text" placeholder='Izlash...'/>
                    </div>
                    
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            {/*<th>T/R</th>*/}
                            <th>{t('Trade.4')}</th>
                            <th>{t('Trade.5')}</th>
                            <th>{t('Pagination.10')}</th>
                            <th>{t('Purchase.15')}</th>
                            <th>{t('ProductList.8')}</th>
                            <th>{t('Purchase.4')}</th>
                            <th>{t('Purchase.26')}</th>
                            <th>{t('Purchase.22')}</th>
                            <th>{t('Trade.6')}</th>
                            <th>{t('Supplier.8')}</th>
                            {/*<th>Yetkazish statusi</th>*/}
                            <th>{t('Purchase.23')}</th>
                            {/*<th>Savdogar</th>*/}
                            {/*<th>Savdo eslatmasi</th>*/}
                            {/*<th>Yetkazish manzili</th>*/}
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            getPaginatedData().splice(0,visible).map((item,index)=><tr key={item?.id}>
                                {/*<td>{index+1}</td>*/}
                                <td>{item?.payDate}</td>
                                <td>-</td>
                                <td>{item?.customer?.name}</td>
                                <td>{item?.customer?.phoneNumber}</td>
                                <td>{item?.branch?.name}</td>
                                <td>{item?.paymentStatus?.status}</td>
                                <td>{item?.payMethod?.type}</td>
                                <td>{item?.totalSum}</td>
                                <td>{item?.avans}</td>
                                <td>{item?.totalSum - item?.avans}</td>
                                <td>{item?.tradeProductList[0].tradedQuantity
                                } </td>
                                {/*<td> </td>*/}
                                <td>
                                        <Link to={'/headerthird/mahsulotQoshish/'+item?.id}><button className='taxrirlash'> <img src={Edit} alt="" /> {t('Buttons.1')}</button> </Link>
                                        <button onClick={()=>deleteModaltoggle(item.id)} className='ochirish'> <img src={Delete} alt="" /> {t('Buttons.3')}</button>

                                    <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                        <ModalBody>
                                            <h5>{t('Buttons.12')} ?</h5>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>{t('Buttons.3')}</button>
                                            <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                                        </ModalFooter>
                                    </Modal>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                </div>

            </div>
        </div>
    )
}
export default connect((TaminotReducer,SavdoQoshishReducer,users,branchreducer,ValyutaReducer),{getSavdolar3,getbranch,getSavdolar,getTaminot,getSavdolar2,saveSavdolar,editSavdolar,deleteSavdolar}) (BarchaSavdolar)
