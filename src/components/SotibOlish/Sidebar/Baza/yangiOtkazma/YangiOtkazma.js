import Search from '../../../../../img/search.png'
import './yangiOtkazma.css'
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import users from "../../../../../reducer/users";
import branchreducer,{getbranch} from "../../../../../reducer/branchreducer";
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import OtkazmaReducer,{saveOtkazma,} from "../reducer/OtkazmaReducer";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import ExchangeStatusR,{getOtkazmaStatus} from "../../../../../reducer/ExchangeStatusR";
import {useTranslation} from "react-i18next";

function YangiOtkazma({branchreducer,getbranch,ExchangeStatusR,getOtkazmaStatus,users,saveOtkazma,OtkazmaReducer,getMaxsulotRuyxati,MaxsulotlarRoyxariReducer}) {


       const {t} = useTranslation()
       const [input,setInput] = useState(
           {
                  qisqaeslatma:'',
                  status:'',
                  bazadan:'',
                  bazaga:'',
                  sana:'',
                  maxsulotizlash:'',
                  yulhaqi:'',
                  qisqaeslatmaarea:'',
                  miqdor:'',
                  narx:'',
           }
       )

       function changemiqdor(e,id){
              input.miqdor = e.target.value
              let a = {...input}
              setInput(a)

              mah.map(val=>{
                     if (id == val.id){
                            val.quantity = parseInt(input.miqdor)
                     }
              })
              let b = [...mah]
              setmah(b)
       }
       function changenarx(e,id){
              input.naxr = e.target.value
              let a = {...input}
              setInput(a)

              mah.map(val=>{
                     if (id == val.id){
                            val.salePrice = parseInt(input.naxr)
                     }
              })
              let b = [...mah]
              setmah(b)
       }

       function qisqaeslatma(e){
              input.qisqaeslatma = e.target.value
              let a = {...input}
              setInput(a)
       }
       function status(e){
              input.status = e.target.value
              let a = {...input}
              setInput(a)
       }
       function bazadan(e){
              input.bazadan = e.target.value
              let a = {...input}
              setInput(a)
       }
       function bazaga(e){
              input.bazaga = e.target.value
              let a = {...input}
              setInput(a)
       }
       function sana(e){
              input.sana = e.target.value
              let a = {...input}
              setInput(a)
       }
       const [mah,setmah] = useState([])
       function maxsulotizlash(e){
              input.maxsulotizlash = e.target.value
              let a = {...input}
              setInput(a)

              MaxsulotlarRoyxariReducer.maxsulotlar.filter(val=>{
                            if (val.name === input.maxsulotizlash){
                                   console.log(val.quantity)
                                   pushesh({...val,quantity:'',buyPrice:'',salePrice:''})
                                   input.maxsulotizlash = ''
                                   let a = {...input}
                                   setInput(a)
                            }else if (input.maxsulotizlash == val.barcode){
                                   pushesh({...val,quantity:'',buyPrice:'',salePrice:''})
                                   input.maxsulotizlash = ''
                                   let a = {...input}
                                   setInput(a)
                            }})

       }
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

              let a = 0
              let c = 0
              mah.map(item => {
                     a += item.quantity
                     c += (item.quantity * item.buyPrice)
              })
       }
       function yulhaqi(e){
              input.yulhaqi = e.target.value
              let a = {...input}
              setInput(a)
       }
       function qisqaeslatmaarea(e){
              input.qisqaeslatmaarea = e.target.value
              let a = {...input}
              setInput(a)
       }


       useEffect(()=>{
              getMaxsulotRuyxati(users.businessId)
       },[])

       function saqla(){
              mah.map(item=>{
                     saveOtkazma({
                            shippedBranchId:input.bazadan,
                            receivedBranchId:input.bazaga,
                            exchangeDate:input.sana,
                            description:input.qisqaeslatma,
                            exchangeStatusId:input.status,
                            exchangeProductDTOS:[
                                   {
                                          exchangeProductQuantity:item.quantity,
                                          productExchangeId:item.id
                                   }
                            ],
                            businessId:users.businessId

                     })
              })
       }


       function deleteM(ind) {
              mah.map((item, index) => {
                     if (item.id === ind) {
                            mah.splice(index, 1)
                     }
              })
              let ad = [...mah]
              setmah(ad)

       }

       useEffect(()=>{
         getbranch(users.businessId)
              getOtkazmaStatus()
       },[])

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>{t('BaseList.5')}</h2>
                     </div>
                     <div className="rowStyleM">
                            <div className="row cont">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('Buttons.17')}:</h6>
                                          <input value={input.qisqaeslatma} onChange={qisqaeslatma} className={'form-control'} type="text" placeholder='Eslatma...' />
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('Trade.9')}:</h6>
                                          <select name="" id="" value={input.status} onChange={status}>
                                                 {
                                                        ExchangeStatusR.exchangestatus.map(item=>
                                                            <option value={item.id}>{item.status}</option>)
                                                 }
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('BaseList.6')}:</h6>
                                          <select name="" id="" value={input.bazadan} onChange={bazadan}>
                                                 <option value="">Baza tanlash</option>
                                                 {
                                                        branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                                                 }
                                          </select>
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('BaseList.3')}:</h6>
                                          <select name="" id="" value={input.bazaga} onChange={bazaga}>
                                                 <option value="">Baza tanlash</option>

                                                 {
                                                        branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                                                 }
-                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-12 col-sm-12" >
                                          <div className="sana">
                                                 <h6>{t('Trade.4')}:</h6>
                                                 <input type="date" value={input.sana} onChange={sana}/>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div className="rowStyle1">
                            <div className="qoshish">
                                   <h5>{t('BaseList.7')}</h5>
                            </div>
                            <div className="row">
                                   <div className="col-md-12">
                                          <div className='searchIcon'>
                                                 <div className="iconca">
                                                        <img src={Search} alt="" />
                                                 </div>
                                                 <input type="text" value={input.maxsulotizlash} onChange={maxsulotizlash} placeholder='Izlash...' />
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive mb-4">
                                   <table className='table table-striped table-bordered mt-4 '>
                                          <thead>
                                                 <tr>
                                                 <th>{t('ProductList.1')}</th>
                                                 <th>{t('ProductEdit.7')}</th>
                                                 <th>{t('Trade.13')}</th>
                                                 <th>{t('Trade.14')}</th>
                                                 <th>{t('Buttons.3')}</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                          {
                                                 mah.map(item=><tr>
                                                        <th>{item.name}</th>
                                                        <th><input onChange={event => changemiqdor(event,item.id)} value={item.quantity} type="number" className={'form-control'}/></th>
                                                        <th><input onChange={event => changenarx(event,item.id)} value={item.salePrice} type="number" className={'form-control'}/></th>
                                                        <th>{item.quantity*item.salePrice}</th>
                                                        <th> <button onClick={()=>deleteM(item.id)} className={'btn btn-danger'}>X</button></th>
                                                 </tr>)
                                          }
                                          </tbody>
                                   </table>
                            </div>

                            <div className="row cont">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('BaseList.4')}:</h6>
                                          <input type="text" value={input.yulhaqi} onChange={yulhaqi}/>
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>{t('Buttons.17')}:</h6>
                                          <input type="text" placeholder='Eslatma...' value={input.qisqaeslatmaarea} onChange={qisqaeslatmaarea}/>
                                   </div>
                            </div>

                            <div className='saqlash'>
                                   <Link to={'/headerthird/utkazmaRuyxati'}>
                                          <button className='btn btn-primary' onClick={saqla}>{t('Buttons.6')}</button>
                                   </Link>

                            </div>
                     </div>
              </div>
       )
}
export default connect((branchreducer,users,MaxsulotlarRoyxariReducer,OtkazmaReducer,ExchangeStatusR),{getbranch,getMaxsulotRuyxati,saveOtkazma,getOtkazmaStatus})  (YangiOtkazma)