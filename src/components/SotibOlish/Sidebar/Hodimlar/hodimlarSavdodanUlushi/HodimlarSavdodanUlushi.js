import "./hodimlarSavdodanUlushi.css"
import {Link,Switch,Route} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap";
import {useState,useEffect} from 'react'
import {connect} from "react-redux";
import {getXodimSavdo,saveXodimSavdo,editXodimSavdo,deleteXodimSavdo} from "../reducer/XodimSavdoReducer";

 function HodimlarSavdodanUlushi() {

       useEffect(()=>{
              getXodimSavdo()
       })

       const [active,setActive] = useState(false);

       function toggle() {
              setActive(!active)
       }

       return (
              <div>
                     <div className="col-md-12 pt-4 pb-4" >
                            <div className="textHeaderHS">
                                <h2>Hodimlarni savdodan ulushi</h2>
                            </div>
                            <div className="rowStyleHS">
                                   <div className="qoshishHS">
                                          <h5>Hodimlar ulushi</h5>
                                          <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                                   </div>
                                   <div className="izlash">
                                          <div className="izlashBoxHS">
                                                 <p>Ko'rsatildi</p>
                                                 <select name="" id="">
                                                        <option value="">25</option>
                                                        <option value="">50</option>
                                                        <option value="">100</option>
                                                        <option value="">200</option>
                                                        <option value="">500</option>
                                                        <option value="">1,000</option>
                                                        <option value="">All</option>
                                                 </select>
                                                 <button> <img src={CSV} alt="" /> Export CSV</button>
                                                 <button><img src={Excel} alt="" /> Export Excel</button>
                                                 <button><img src={Print} alt="" /> Print</button>
                                                 <button><img src={Pdf} alt="" />Export PDF</button>
                                                 <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                                          </div>
                                          <div className="izlashBoxHS2">
                                                 <input type="text" placeholder='Izlash...'/>
                                          </div>
                                          
                                   </div>
                                   <div className="table-responsive">
                                   <table className='table table-striped table-bordered mt-4'>
                                          <thead>
                                                 <tr>
                                                        <th>Ism</th>
                                                        <th>Email</th>
                                                        <th>Telefon raqam</th>
                                                        <th>Manzil</th>
                                                        <th>Savdodan ulushi(foizda %)</th>
                                                        <th>Amal</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td>boshliq</td>
                                                        <td>Boshliqsdsd</td>
                                                        <td>+998998887778</td>
                                                        <td>Toshkent shaxri</td>
                                                        <td>21%</td>
                                                        <td>
                                                               <Link to={'/headerthird/hodimulush/taxrirlash'}><button onClick={toggle} className='taxrirlash'> <img src={Edit} alt="" /> Taxrirlash</button> </Link>
                                                               <Link to={'/headerthird/hodimulush/view'}><button className='korish'> <img src={Korish} alt="" /> Ko'rish</button></Link>
                                                               <button className='ochirish'> <img src={Delete} alt="" /> O'chirish</button>
                                                        </td>
                                                 </tr>
                                          </tbody>
                                   </table>
                                   </div>

                                   <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                                   <div className='sahifalar'>
                                          <button>Ortga</button>
                                          <button>Oldinga</button>
                                   </div>
                                   {
                                          active?
                                              <Modal isOpen={active} toggle={toggle}>
                                                     <ModalHeader>
                                                            Xodimlarga savdodan ulush berish
                                                     </ModalHeader>
                                                     <ModalBody>
                                                            <label htmlFor={'m'}>Mr/Mrs</label>
                                                            <input type="text" id={'m'} placeholder={'Mr/Mrs'} className={'form-control'}/>

                                                            <label htmlFor={'i'}>Ismi</label>
                                                            <input type="text" id={'i'} placeholder={'Ismi'} className={'form-control'}/>

                                                            <label htmlFor={'f'}>Familiyasi</label>
                                                            <input type="text" id={'f'} placeholder={'Familiyasi'} className={'form-control'}/>

                                                            <label htmlFor={'e'}>Email</label>
                                                            <input type="text" id={'e'} placeholder={'Email'} className={'form-control'}/>

                                                            <label htmlFor={'t'}>Tel Raqam</label>
                                                            <input type="number" id={'t'} placeholder={'Email'} className={'form-control'}/>

                                                            <label htmlFor="'manzil">Manzil</label>
                                                            <textarea  className={'form-control'} name="" id="" cols="30" rows="3">

                                                            </textarea>
                                                            <label htmlFor={'s'}>Savdodan ulush foizda</label>
                                                            <input type="number" className={'form-control'}/>
                                                     </ModalBody>
                                                     <ModalFooter>
                                                            <button className={'btn btn-outline-primary'}>SAQLASH</button>
                                                            <button onClick={toggle} className={'btn btn-outline-primary'}>CHIQISH</button>
                                                     </ModalFooter>
                                              </Modal>:''
                                   }
                            </div>
                     </div>
              </div>

       )
}
export default connect(({XodimSavdoReducer:{xodimsavdo}})=>({xodimsavdo}),{getXodimSavdo,saveXodimSavdo,editXodimSavdo,deleteXodimSavdo}) (HodimlarSavdodanUlushi)