import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './barcasavdolar.css'
import {useState, useRef, useEffect} from "react";
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

function BarchaSavdolar({getSavdolar3,deleteSavdolar,branchreducer,getTaminot,TaminotReducer,SavdoQoshishReducer,getSavdolar,getSavdolar2,users,getbranch,ditSavdolar,saveSavdolar}) {

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
        // getSavdolar3(users.businessId)
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

    function deleteS(item){
        deleteSavdolar(item.id)
        setTimeout(()=>{
            getSavdolar(users.businessId)
        },100)
    }

    return (
        <div className="col-md-12 mt-2 mb-4 mt-4 ">
            <div className="textHeader">
                <h2>Barcha savdolar</h2>
            </div>
            <div className="rowStyleH">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <select name="" value={input.baza} onChange={baza} id="">
                            <option value="barcasi">Barchasi</option>
                            {
                                branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Diller:</h6>
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
                        <h6>Mahsulot izlash:</h6>
                        <input type="text" value={input.mahsulotizlash} onChange={mahsulotizlash} className={'form-control'}/>
                    </div>
                    <div className="col-md-6">
                        <h6>Sanani belgilang:</h6>
                        <input type="date" className={'form-control'} value={input.sananibelgilash} onChange={sananibelgilash}/>

                    </div>
                </div>
            </div>

            <div className="rowStyleH2">
                <div className="qoshish">
                    <h5>Barcha savdolar</h5>
                    <Link to={'/headerthird/mahsulotQoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>
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
                        <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                    </div>
                    <div className="izlashBox2">
                        <input value={input.izlash} onChange={izlash} type="text" placeholder='Izlash...'/>
                    </div>
                    
                </div>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>sana</th>
                            <th>Savdo raqami</th>
                            <th>Mijoz</th>
                            <th>Telefon raqami</th>
                            <th>Baza</th>
                            <th>To'lov statusi</th>
                            <th>To'lov usuli</th>
                            <th>Jami summa</th>
                            <th>To'langan summa</th>
                            <th>Qarz</th>
                            {/*<th>Yetkazish statusi</th>*/}
                            <th>Jami maxsulotlar</th>
                            {/*<th>Savdogar</th>*/}
                            {/*<th>Savdo eslatmasi</th>*/}
                            {/*<th>Yetkazish manzili</th>*/}
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        {console.log(SavdoQoshishReducer.savdolar)}
                        <tbody>
                        {
                            SavdoQoshishReducer.savdolar.map(item=><tr key={item?.id}>
                                <td>{item?.payDate}</td>
                                <td>{item?.branch?.id}</td>
                                <td>{item?.customer?.name}</td>
                                <td> -</td>
                                <td>{item?.branch?.name}</td>
                                <td>{item?.paymentStatus?.status}</td>
                                <td>{item?.payMethod?.type}</td>
                                <td>{item?.totalSum}</td>
                                <td>{item?.amountPaid}</td>
                                <td>{item?.loan}</td>
                                <td> </td>
                                {/*<td> </td>*/}
                                <td>
                                        <Link to={'/headerthird/mahsulotQoshish/'+item?.id}><button className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
                                        <button onClick={()=>deleteS(item)} className='ochirish'> <img src={Delete} alt="" /> O'chirish</button>
                                </td>
                            </tr>)
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
export default connect((TaminotReducer,SavdoQoshishReducer,users,branchreducer),{getSavdolar3,getbranch,getSavdolar,getTaminot,getSavdolar2,saveSavdolar,editSavdolar,deleteSavdolar}) (BarchaSavdolar)
