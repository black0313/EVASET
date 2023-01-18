import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './savdoqilingantulov.css'
import {useState,useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {getSavdotulov,saveSavdotulov,editSavdotulov,deleteSavdotulov} from '../reducer/SavdodagiTulovReducer'
import {connect} from 'react-redux'
import SavdoQoshishReducer, {getSavdolar, saveSavdolar} from "../../Savdo/reducer/SavdoQoshishReducer";
import {useTranslation} from "react-i18next";

function SavdodaTulov({mijoz,dukon,summa,eslatma,getSavdolar,SavdoQoshishReducer}) {

    const {t} = useTranslation()
    const [inputvalue,setInputvalue] = useState(
        {
            baza:'',
            mijoz:'',
            tulovusuli:'',
            mijozguruhi:'',
            view:'',
            izlash:''
        }
    )

    function baza(e){
        inputvalue.baza = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function mijoz(e){
        inputvalue.mijoz = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function tulovusuli(e){
        inputvalue.tulovusuli = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function mijozguruhi(e){
        inputvalue.mijozguruhi = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function view(e){
        inputvalue.view = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function izlash(e){
        inputvalue.izlash = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }

    useEffect(()=>{
        // getSavdotulov()
        getSavdolar()
    },[])

    // const {mijoz,dukon,summa,eslatma} = props.match.params
    const [input,setInput] = useState(
        {
            mijoz: 'React',
            dukon: 'korzinka',
            summa: '13',
            eslatma:'joylashadi'
        }
    )
    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-4 mt-4">
            <div className="textHeader">
                <h2>{t('ExpenseReport.3')}</h2>
            </div>
            <div className="rowStyleST">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('ProductList.8')}:</h6>
                        <select name="" id="" value={inputvalue.baza} onChange={baza} className={'form-control'}>
                            <option value="#">Tanlash</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('PurchaseList.6')}:</h6>
                        <select name="" id="" className={'form-control'} value={inputvalue.mijoz} onChange={mijoz}>
                            <option value="">Mavjud emas</option>
                            <option value="">Taminotchi</option>
                            <option value="">(2)</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('Purchase.26')}:</h6>
                        <select name="" id="" className={'form-control'} value={inputvalue.tulovusuli} onChange={tulovusuli}>
                            <option value="">Tanlash</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('CustomGroup.1')}:</h6>
                        <select name="" id="" className={'form-control'} value={inputvalue.mijozguruhi} onChange={mijozguruhi}>
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rowStyleST2">
                <div className="col-md-12">
                    <h5>Summary</h5>

                    <h3>Jami savdo - Jami sotuvlar bo`yicha daromad: ( backend-backend = backend )</h3>
                    <h3>{t('PurchaseList.8')}: --</h3>
                </div>

            </div>

            <div className="rowStyleST2">

                <div className="qoshish mt-4">
                    <h5>{t('Trade.1')}</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <div className="izlashST2">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select value={inputvalue.izlash} onChange={izlash} name="" id="">
                            <option value="">25</option>
                            <option value="">1,000</option>
                            <option value="">All</option>
                        </select>
                        <button> <img src={CSV} alt="" /> Export CSV</button>
                        <button><img src={Excel} alt="" /> Export Excel</button>
                        <button><img src={Print} alt="" /> Print</button>
                        <button><img src={Pdf} alt="" />Export PDF</button>
                        <button> <img src={Data} alt="" />{t('Buttons.18')} </button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={inputvalue.view} onChange={view}/>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4 mb-4 '>
                        <thead>
                        <tr>
                            <th>{t('Buttons.17')}</th>
                            <th>Paid on</th>
                            <th>{t('ExpenseReport.4')}</th>
                            <th>{t('PurchaseList.6')}</th>
                            <th>{t('CustomGroup.1')}</th>
                            <th>{t('Purchase.26')}</th>
                            <th>{t('ExpenseReport.5')}</th>
                            {/*<th>To'lov usuli</th>*/}
                            {/*<th>Amal</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            SavdoQoshishReducer.savdolar.map(item=><tr key={item.id}>
                                <td>{item.customer.business.description}</td>
                                <td>not  found</td>
                                <td>{item.totalSum}</td>
                                <td>{item.customer.name}</td>
                                <td>-</td>
                                <td>{item.payMethod.type}</td>
                                <td>-</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}
export default connect((SavdoQoshishReducer),{getSavdolar,saveSavdolar}) (SavdodaTulov)
