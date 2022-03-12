import {Modal,ModalFooter,ModalBody,ModalHeader} from "reactstrap";
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import LavozimReducer, {deleteLavozim, editLavozim, getLavozim, saveLavozim} from "../../Hodimlar/reducer/LavozimReducer";
import SavdoQoshishReducer, {deleteSavdolar, editSavdolar, getSavdolar, saveSavdolar} from "../reducer/SavdoQoshishReducer";
import TaminotReducer from "../../Hamkorlar/reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import './savdoQoshish.css'
import branchreducer,{getbranch} from "../../../../../reducer/branchreducer";
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import {toast} from "react-toastify";
import MijozGuruxReducer, {getMijozGurux} from "../../Hamkorlar/reducer/MijozGuruxReducer";
import {Link} from "react-router-dom";
import PayReducer, {getPay} from "../../../../../reducer/PayReducer";

function SavdoQoshish({getbranch,branchreducer,getPay,PayReducer,getMijozGurux,MijozGuruxReducer,saveSavdolar,getMaxsulotRuyxati,MaxsulotlarRoyxariReducer,deleteSavdolar,match,editSavdolar,SavdoQoshishReducer,users}){

    const [input,setInput] = useState(
        {
            baza:'',
            savdoqoshish:'',
            mijoz:'',
            tulovmuddati:'',
            tulovmuddatitanlash:'',
            savdooynasisana:'',
            status:'',
            xisobfakturasxemasi:'',
            savdoraqami:'',
            qoshimchaxujjat:'',
            maxsulotnomishtrix:'',
            avans:'',
            paidon:'',
            tulovusuli:'',
            eslatma:'',
            maxmiqdor:''
        }
    )
    useEffect(()=>{
       editS()
        getbranch(users.businessId)
        getMaxsulotRuyxati(users.businessId)
        getMijozGurux(users.businessId)
        getPay(users.businessId)
    },[])

    function baza(e){
        input.savdoqoshish = e.target.value
        let a = {...input}
        setInput(a)
    }
    function mijoz(e){
        input.mijoz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovmuddati(e){
        input.tulovmuddati = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovmuddatitanlash(e){
        input.tulovmuddatitanlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdooynasisana(e){
        input.savdooynasisana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function status(e){
        input.status = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xisobfakturasxemasi(e){
        input.xisobfakturasxemasi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdoraqami(e){
        input.savdoraqami = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qoshimchaxujjat(e){
        input.qoshimchaxujjat = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [xisob,setxisob] = useState(0)
    const [jamixisob,setjamixisob] = useState(0)
    const [mah,setmah] = useState([])
    function pushesh(val) {
        let d = false
        mah.map(item => {
            if (item.id === val.id) {
                d = true
                // alert('Bu mahsulot jadvalda bor!')
                toast.warn('Bu mahsulot jadvalda bor!')
            }
        })
        if(d===false){
            mah.push({...val })
        }
    }

    function maxsulotnomishtrix(e){
        input.maxsulotnomishtrix = e.target.value
        let a = {...input}
        setInput(a)
        {
            console.log(MaxsulotlarRoyxariReducer.maxsulotlar)
        }
        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val=>{
            if (val.name === input.maxsulotnomishtrix){
                console.log(val.quantity)
                pushesh({...val,counter:''})
                input.maxsulotnomishtrix = ''
                let a = {...input,counter:''}
                setInput(a)
            }else if (input.maxsulotnomishtrix == val.barcode){
                pushesh({...val})
                input.maxsulotnomishtrix = ''
                let a = {...input}
                setInput(a)
            }
        })
    }

    function avans(e){
        input.avans = e.target.value
        let a = {...input}
        setInput(a)
    }
    function paidon(e){
        input.paidon = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovusuli(e){
        input.tulovusuli = e.target.value
        let a = {...input}
        setInput(a)
    }
    function eslatma(e){
        input.eslatma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function maxmiqdor(e,id){
        input.maxmiqdor = e.target.value
        let b = {...input.maxmiqdor}
        setInput(b)
            mah.filter(item=>{
                if (item.id==id){
                    if (item.counter > item.quantity){
                        item.counter= parseInt(input.maxmiqdor)
                        toast.warn(`Bazada atigi ${item.quantity}  ${item.measurement.name} mahsulot bor`)

                    }
                    else{
                        item.counter=parseInt(input.maxmiqdor)
                    }

                }
            })
        let a =[...mah]
        setmah(a)
        let d = 0
        let c = 0
        mah.map(item => {
            d += item.counter
            c += (item.counter * item.salePrice)

        })
        setxisob(d)
        setjamixisob(c)
    }
    function editS(){
        if(match.params.id !== undefined){
            getSavdolar()
        }
        SavdoQoshishReducer.savdolar.map(item=>{
            if (item.id==match.params.id){
                input.mijoz = item.name
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla(){
        if (match.params.id !== undefined){
            editSavdolar({
                customerId:input.mijoz,
                userId:1,
                productTraderDto:[
                    {
                        tradedQuantity:1,
                        productTradeId:1
                    }
                ],
                payDate:"2020-10-10",
                branchId:input.baza,
                payMethodId:input.tulovusuli,
                amountPaid:input.avans,
                currencyId:1,
                addressId:1
            },console.log('edited'))
        }else {
            mah.map(item=>{
                saveSavdolar(
                    {
                        customerId:1,
                        payDate:"2020-10-10",
                        userId:1,
                        productTraderDto:[
                            {
                                tradedQuantity:item.counter,
                                productTradeId:1
                            }
                        ],
                        branchId:item.branch.id,
                        payMethodId:input.tulovusuli,
                        amountPaid:input.avans,
                        currencyId:1,
                        addressId:1
                    },
                    console.log('saved')
                )
            })

        }
    }
    function deleteM(ind) {
        mah.map((item, index) => {
            if (item.id === ind) {
                mah.splice(index, 1)
            }
        })
        let ad = [...mah]
        setmah(ad)

        let b = 0
        let c = 0
        mah.map(item => {
            b += item.counter
            c += (item.counter * item.salePrice)

        })
        setxisob(b)
        setjamixisob(c)
    }

    return(
        <div className="savdoQBox">
        <div className={'row mt-5 d-flex justify-content-center'}>
            <div className="col-md-10">
                <h5 className="mt-3">Savdo qo`shish</h5>
                <select id={input.baza} onChange={baza} className={'form-control'}>
                    <option value={'tanlash'}>Tanlash</option>
                    {
                        branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>

            <div className="col-md-10 d-flex p-4 justify-content-center border mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-4 col-sm-12 ">
                        <label htmlFor={'mijoz'}>Mijoz</label>
                        {/*<input type="text" id={'mijoz'} value={input.mijoz} onChange={mijoz} className={'form-control'}/>*/}
                        <select  onChange={mijoz} value={input.mijoz} className={'form-control'}>
                            <option value="tanlash">Tanlash</option>
                            {
                                MijozGuruxReducer.mijozgurux.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label htmlFor={'muddat'}>To`lov muddati</label>
                        <div className={'d-flex'}>
                            <input type="number" value={input.tulovmuddati} onChange={tulovmuddati} className={'form-control'}/>
                            <select name="" id="" className={'form-control'} value={input.tulovmuddatitanlash} onChange={tulovmuddatitanlash}>
                                <option value="">Tanlash</option>
                            </select>
                        </div>
                        <label htmlFor={'stat'} >Status</label>
                        {console.log(PayReducer.paymethod)}
                        <select value={input.status} onChange={status} name="" id="" className={'form-control'}>
                            <option value="">Tanlash</option>
                            {
                                PayReducer.paymethod.map(item=> <option value={item.id}>{item.type}</option>)
                            }
                        </select>
                        <label htmlFor={'savRaqam'} className={'mt-4'}>Savdo raqami</label>
                        <input type="number" value={input.savdoraqami} onChange={savdoraqami} className={'form-control'} placeholder={'savdo raqami'}/>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label htmlFor={'savOyna'}>Savdo oynasi</label>
                        <input type="date" value={input.savdooynasisana} onChange={savdooynasisana} className={'form-control'}/>

                        <label htmlFor={'hisobF'} className={'mt-4'}>Xisob Faktura sxemasi</label>
                        <select name="" value={input.xisobfakturasxemasi} onChange={xisobfakturasxemasi} id={'hisobF'} className={'form-control'}>
                            <option value="">Default</option>
                        </select>

                        <label htmlFor={'qoshim'} className={'mt-4'}>Qo`shimcha hujjat</label>
                        <input type="file" value={input.qoshimchaxujjat} onChange={qoshimchaxujjat} className={'form-control'} id={'qoshim'}/>
                    </div>
                </div>
            </div>

            <div className="col-md-10 border mt-4 p-2">
                <div className="col-6 col-sm-6 offset-3 d-flex">
                    <input type="text" value={input.maxsulotnomishtrix} onChange={maxsulotnomishtrix} className={'form-control'} placeholder={'mahsulot nomi yoki shtrix kodini yozing'}/>
                    {/*<h5 style={{fontSize:'32px',cursor:'pointer'}}>+</h5>*/}
                </div>
                <div className="table-responsive">
                <table className={'table mt-4'}>
                    <thead>
                        <tr>
                            <th>Mahsulot</th>
                            <th>Miqdori</th>
                            <th>Narxi</th>
                            {/*<th>Discount</th>*/}
                            <th>Jami</th>
                            <th>x</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        mah
                            .map(item => <tr key={item.id}>
                                <td><h5>{item.name}</h5></td>
                                <td>
                                    <input onChange={event=>(maxmiqdor(event,item.id))} value={item.counter} type="number" placeholder={`Bazada ${item.quantity}  ${item.measurement.name} mahsulot bor`}
                                           className={'form-control'}/>
                                </td>
                                <td>
                                    {item.salePrice}
                                </td>
                                    <td>
                                        {item.counter*item.salePrice}
                                    </td>
                                <td>
                                    <button onClick={()=>deleteM(item.id)} className={'btn btn-danger'}>X</button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
                    <div className={'d-flex justify-content-around'}>
                        <div><h4>Maxsulotlar soni: {xisob}</h4></div>
                        <div><h4>Jami: {jamixisob}</h4></div>
                    </div>
                </div>
            </div>

            <div className="col-md-10 mt-4 border p-0">
                <h5 className={'text-center mt-5'}>To`lov qilish</h5>
                <div className="col-md-10 offset-1  p-0 d-flex justify-content-between">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor={'avans'}>To`lov so`mmasi</label>
                            <input type="text" value={input.avans} onChange={avans} className={'form-control'} id={'avans'}/>
                            <label className={'mt-3'} htmlFor={'tol'}>To`lov usuli</label>
                            <select id={'tol'} className={'form-control'} value={input.tulovusuli} onChange={tulovusuli}>
                                <option value="tanla">Tanlash</option>
                                {
                                    PayReducer.paymethod.map(item=> <option value={item.id}>{item.type}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor={'paid'}>Paid on</label>
                            <input type="date" value={input.paidon} onChange={paidon} className={'form-control'} id={'paid'}/>
                            <label htmlFor={'area1'} className={'mt-2'}>Eslatma</label>
                            <textarea name="" id={'area1'} cols="30" value={input.eslatma} onChange={eslatma} className={'form-control'} rows="2">
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4'}>
                <h5>Qarz miqdori!: 0.00</h5>
                <Link to={'/headerthird/barcasavdolar'}>
                    <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                </Link>
                <button className={'btn btn-outline-primary'}>Saqlash va chek</button>
            </div>

        </div>
        </div>
    )
}

export default connect((TaminotReducer,PayReducer,MaxsulotlarRoyxariReducer,MijozGuruxReducer ,SavdoQoshishReducer,users,branchreducer),{getbranch,getPay,getMaxsulotRuyxati,getMijozGurux,getSavdolar,saveSavdolar,editSavdolar,deleteSavdolar}) (SavdoQoshish)
