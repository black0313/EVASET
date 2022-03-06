import './foydaZarar.css'
import {connect} from "react-redux";
import {useEffect,useState} from "react";
import FoydaZararReducer, {deleteFoydaZarar, editFoydaZarar, getFoydaZarar, saveFoydaZarar} from "../reducer/FoydaZararReducer";
import MaxsulotlarRoyxariReducer, {
       deleteMaxsulotRuyxati,
       getMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import users from "../../../../../reducer/users";
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function FoydaZarar({getFoydaZarar,saveFoydaZarar,MaxsulotlarRoyxariReducer,branchreducer,getbranch,deleteFoydaZarar,foydazarar,users}) {

       const [input,setInput] = useState(
           {
                  branchId:1,
                  firstDate:'',
                  secondDate:'',
                  name:'',
                  branch:'',
           }
       )

       const [sana,setsana] = useState(false)
       function toggle2(){
              setsana(!sana)
       }
       function branch(e){
              input.branch = e.target.value
              let a = {...input}
              setInput(a)
              if (input.branch !=='barcasi'){
                     getFoydaZarar(input.branch)
                     console.log('hello')
              }else {
                     getFoydaZarar(users.businessId)
                     console.log('hfagsjlkda')
              }
       }

       function aniqsananibelgilash(e){
              if(e.target.value == 1){
                     const bugun = parseInt(new Date().getFullYear())+"-"+ parseInt(new Date().getMonth()+1)+'-'+ parseInt(new Date().getDate())
                     const bugun2 = new Date().getFullYear()+"-"+ (new Date().getMonth()+1)+'-'+ (new Date().getDate() - 7)
                     console.log(typeof bugun)
                     const bugun3 = new Date().toLocaleDateString()
                     console.log(bugun3)
                     console.log(typeof bugun3)
                     console.log(bugun2)
                     input.firstDate=(bugun)
                     input.secondDate=parseInt(bugun2)
                     let a ={...input}
                     setInput(a)
                     console.log(input)
                     saveFoydaZarar(input)
              }
       }

       function dataPicker(){

              toggle2()
       }

       useEffect(()=>{
              getFoydaZarar()
              getMaxsulotRuyxati(users.businessId)
              getbranch(users.businessId)
       },[])

       return (
              <div className="col-md-12 mt-4 mb-4">
                     <div className="textHeaderF">
                     <h2>Foyda va Zarar</h2>
                     </div>
                     <div className="rowStyleF">
                            <div className="izlashF">
                                   <div className="row">
                                          <div className="col-md-6 col-sm-10">
                                                 <h6>Baza tanlash:</h6>
                                                 <select value={input.branch} onChange={branch} name="" id="" >
                                                        <option value="barcasi">Barchasi</option>
                                                        {
                                                               branchreducer.branch.map(item=> <option
                                                                   value={item.id}>{item.name}</option>)
                                                        }
                                                 </select>
                                          </div>
                                          <div className="col-md-6 col-sm-10 ">
                                                 <h6 style={{cursor:'pointer'}} className={'hovFoyda'} onClick={toggle2}>Aniq sanani belgilash:</h6>
                                                 {
                                                        sana?<div className={'col-md-4 d1'}>
                                                               <ul>
                                                                      <li onClick={dataPicker} style={{cursor:'pointer'}}>Bugun</li>
                                                                      <li>Kecha</li>
                                                                      <li>Oxirgi 7 kun</li>
                                                                      <li>Oxirgi 30 kun</li>
                                                                      <li>Bu oy</li>
                                                                      <li>O`tgan oy</li>
                                                                      <li>Bu yil</li>
                                                                      <li>O`tgan yil</li>
                                                                      <li>Siz istagan sana</li>
                                                               </ul>
                                                        </div>:''
                                                 }
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive mb-4">
                            <table className='table table-striped table-bordered mt-4'>
                                   <thead>
                                          <tr>
                                                 <th>Nomi</th>
                                                 <th>Maxsulot sotib olish narxi(sum)</th>
                                                 <th>Maxsulot sotish narxi(sum)</th>
                                                 <th>Umumiy qoladigan foyda(sum) </th>
                                                 <th>Qilingan xarajat</th>
                                                 <th>Sof foyda(sum)</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                   {
                                          MaxsulotlarRoyxariReducer.maxsulotlar.map(item=><tr key={item.id}>
                                                 <td>{item.name}</td>
                                                 <td>{item.buyPrice}</td>
                                                 <td>{item.salePrice}</td>
                                                 <td>{item.salePrice-item.buyPrice}</td>
                                                 <td>{item.tax}</td>
                                                 <td>{(item.salePrice-item.buyPrice) -item.tax}</td>
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

export default connect((MaxsulotlarRoyxariReducer,FoydaZararReducer,users,branchreducer),{getbranch,getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar,getMaxsulotRuyxati,deleteMaxsulotRuyxati}) (FoydaZarar)
