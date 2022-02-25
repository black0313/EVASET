import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import './xaridxisobot.css'
import {useState, useRef, useEffect} from "react";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import {MenuItem, TextField,Select,InputLabel} from "@mui/material";
import {connect} from "react-redux";
import './xaridxisobot.css'
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
import XaridReducer, {deleteXarid, editXarid, getXarid, saveXarid} from "../../Haridlar/reducer/XaridReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import users from "../../../../../reducer/users";
import TaminotReducer, {getTaminot} from "../../Hamkorlar/reducer/TaminotReducer";
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";

function XaridlarXisoboti({branchreducer,users,getbranch,TaminotReducer,getTaminot,getMaxsulotRuyxati,MaxsulotlarRoyxariReducer,XaridReducer,getXarid}) {

    const [input,setInput] = useState(
        {
            baza:'',
            diller:'',
            mahsulotizlash:'',
            sananibelgilash:'',
            view:'',
            izlash:'',
            eslatma:''
        }
    )

    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function diller(e){
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
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
        console.log('hello');
        // getbranch(users.businessId)
        // getTaminot(users.businessId)
        getMaxsulotRuyxati(users.businessId)
        getXarid(users.businessId)
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

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderXH">
                <h2>Xaridlar hisoboti</h2>
            </div>
            <div className="rowStyleXH">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <select name="" value={input.baza} onChange={baza} id="" className='inputData'>
                            {/*<option value="">Tanlash</option>*/}
                            {
                                branchreducer.branch.map(item=>
                                    <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Diller:</h6>
                        <select name="" value={input.diller} onChange={diller} id="" className={'inputData'}>
                            {
                                TaminotReducer.taminot.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Mahsulot izlash:</h6>
                        <input type="text" value={input.mahsulotizlash} onChange={mahsulotizlash} placeholder="Mahsulot nomi" className={'inputData'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>Sanani belgilang:</h6>
                        <input type="date" className={'inputData'} value={input.sananibelgilash} onChange={sananibelgilash}/>
                            {
                                active?     <DateRangePickerComponent placeholder="Enter Date Range"
                                                                      startDate={startValueDate}
                                                                      endDate={endValueDate}
                                                                      min={minDateDate}
                                                                      max={maxDateDate}
                                                                      minDays={1}
                                                                      maxDays={10000}
                                                                      format="dd-MMM-yy"

                                ></DateRangePickerComponent>:''
                            }

                    </div>
                </div>

            </div>

            <div className="rowStyleXH2">

                <div className="izlashXH2">
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
                        <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                    </div>
                    <div className="izlashBox2">
                        <input value={input.izlash} onChange={izlash} type="text" placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive mb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <td>Maxsulot</td>
                            <td>Shtrix kod</td>
                            <td>Diller</td>
                            <td>Qisqa eslatma</td>
                            <td>Sana</td>
                            <td>Miqdori</td>
                            <td>Jami</td>
                            <td>Sotib olish narxi</td>
                            <td>Jami</td>
                        </tr>
                        </thead>
                        {/*{console.log(XaridReducer.xaridlar)}*/}
                        {/*{console.log(XaridReducer.xaridlar[0].purchaseProductList)}*/}

                        <tbody>
                        {
                            // console.log(MaxsulotlarRoyxariReducer.maxsulotlar)
                           // XaridReducer.xaridlar.map(item => <tr key={item.id}>
                           //     {
                           //         item.purchaseProductList.map(item=><td key={item.id}>{item.product.name}</td>)
                           //
                           //     }
                           //     {
                           //         item.purchaseProductList.map(item=><td key={item.id}>{item.product.barcode}</td>)
                           //     }
                           //
                           //     <td>{item.dealer.name}</td>
                           //     <td>{item.description}</td>
                           //     <td>{item.date}</td>
                           //     {
                           //         item.purchaseProductList.map(item=><td key={item.id}>{item.product.quantity}</td>)
                           //     }
                           //     {/*<td>{item.totalSum}</td>*/}
                           //     <td>-</td>
                           //     {
                           //         item.purchaseProductList.map(item=><td key={item.id}>{item.product.buyPrice}</td>)
                           //     }
                           //     <td>{item.totalSum}</td>
                           //  </tr>)
                        }
                        </tbody>
                    </table>
                </div>

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

export default connect((XaridReducer,SavdoOynaReducer,branchreducer,users,TaminotReducer,MaxsulotlarRoyxariReducer),
    {getXarid,saveXarid,editXarid,deleteXarid,getbranch,getTaminot,getMaxsulotRuyxati,}) (XaridlarXisoboti)
