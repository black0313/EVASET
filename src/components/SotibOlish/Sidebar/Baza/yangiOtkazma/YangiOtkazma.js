import Search from '../../../../../img/search.png'
import './yangiOtkazma.css'
import {useState} from 'react'

export default function YangiOtkazma() {

       const [input,setInput] = useState(
           {
                  qisqaeslatma:'',
                  status:'',
                  bazadan:'',
                  bazaga:'',
                  sana:'',
                  maxsulotizlash:'',
                  yulhaqi:'',
                  qisqaeslatmaarea:''
           }
       )

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
       function maxsulotizlash(e){
              input.maxsulotizlash = e.target.value
              let a = {...input}
              setInput(a)
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

       return (
              <div className="col-md-12 mt-2">
                     <div className="textHeader">
                            <h2>Yangi o'tkazma</h2>
                     </div>
                     <div className="rowStyleM">
                            <div className="row cont">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Qisqa eslatma:</h6>
                                          <input value={input.qisqaeslatma} onChange={qisqaeslatma} className={'form-control'} type="text" placeholder='Eslatma...' />
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Status:</h6>
                                          <select name="" id="" value={input.status} onChange={status}>
                                                 <option value="">Tanlash</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Bazadan(Amaldagi baza):</h6>
                                          <select name="" id="" value={input.bazadan} onChange={bazadan}>
                                                 <option value="">Tanlash</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Bazaga(O'tkaziladigan baza):</h6>
                                          <select name="" id="" value={input.bazaga} onChange={bazaga}>
                                                 <option value="">Tanlash</option>
                                                 <option value="">Shifer zavod</option>
                                          </select>
                                   </div>
                            </div>
                            <div className="row">
                                   <div className="col-md-12 col-sm-12" >
                                          <div className="sana">
                                                 <h6>Sana:</h6>
                                                 <input type="date" value={input.sana} onChange={sana}/>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div className="rowStyle1">
                            <div className="qoshish">
                                   <h5>Maxsulot izlash</h5>
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
                                                 <th>Maxsulot</th> 
                                                 <th>Miqdori</th> 
                                                 <th>Narxi</th> 
                                                 <th>Jami</th>
                                                 <th>O'chirildi</th> 
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 <td></td>
                                                 </tr>
                                          </tbody>
                                   </table>
                            </div>

                            <div className="row cont">
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Yo'lkira xaqi:</h6>
                                          <input type="text" value={input.yulhaqi} onChange={yulhaqi}/>
                                   </div>
                                   <div className="col-md-6 col-sm-12">
                                          <h6>Qisqa eslatma:</h6>
                                          <input type="text" placeholder='Eslatma...' value={input.qisqaeslatmaarea} onChange={qisqaeslatmaarea}/>
                                   </div>
                            </div>

                            <div className='saqlash'>
                                   <button className='btn btn-primary'>Saqlash</button>
                            </div>
                     </div>
              </div>
       )
}
