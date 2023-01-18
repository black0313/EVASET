import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './maxsulotxisoboti.css'
import {useState,useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {getMaxsulotxisobot,saveMaxsulotxisobot,editMaxsulotxisobot,deleteMaxsulotxisobot} from '../reducer/MaxsulotxisobotReducer'
import {connect} from 'react-redux'
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati,
    getMaxsulotRuyxati,
    saveMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import {useTranslation} from "react-i18next";

function MaxsulotXisoboti({getMaxsulotxisobot,MaxsulotlarRoyxariReducer,dukon,summa,eslatma,getMaxsulotRuyxati}) {

    const {t} = useTranslation()
    const [inputvalue,setInputvalue] = useState(
        {
            baza:'',
            mijoz:'',
            xaridsanasi:'',
            sananibelgilang:'',
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
    function xaridsanasi(e){
        inputvalue.xaridsanasi = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function sananibelgilang(e){
        inputvalue.sananibelgilang = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function view(e){
        inputvalue.view= e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function izlash(e){
        inputvalue.izlash= e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }

    useEffect(()=>{
        // getMaxsulotxisobot()
        getMaxsulotRuyxati()
    },[])

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeader">
                <h2>{t('Sidebar.35')}</h2>
            </div>
            <div className="rowStyleMax">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-6 col-sm-12">
                        <h6>{t('Purchase.2')}:</h6>
                        <input value={inputvalue.baza} onChange={baza} type="text" placeholder='Diller nomi...' className={'inpStyl'}/>
                    </div>
                    <div className="col-6 col-sm-12">
                        <h6>{t('ExpenseReport')}:</h6>
                        <select name="" id="" value={inputvalue.xaridsanasi} onChange={xaridsanasi} className={'inpStyl'}>
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <h6>Mijoz:</h6>
                        <select name="" id="" className={'inpStyl'} value={inputvalue.mijoz} onChange={mijoz}>
                            <option value="">Tanlash</option>
                            <option value="">Shefir zavod</option>
                            <option value="">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-12">
                        <h6>{t('Profit.2')}:</h6>
                        <select name="" id="" className={'inpStyl'} value={inputvalue.sananibelgilang} onChange={sananibelgilang}>
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rowStyleMax2">

                <div className="qoshish mt-4">
                    <h5>{t('PurchaseList.9')}</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <div className="izlashMax2">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="" value={inputvalue.view} onChange={view}>
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
                        <button> <img src={Data} alt="" />{t('Buttons.18')} </button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={inputvalue.izlash} onChange={izlash}/>
                    </div>
                </div>
                <div className="table-responsive pb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>{t('ProductEdit.2')}</th>
                            <th>{t('ExpenseReport.7')}</th>
                            <th>{t('Buttons.17')}</th>
                            <th>{t('ExpenseReport.8')}</th>
                            <th>{t('Sidebar.15')}</th>
                            <th>{t('Purchase.2')}</th>
                            <th>{t('Purchase.21')}</th>
                            {/*<th>Sana</th>*/}
                            <th>{t('Trade.1')}</th>
                            <th>{t('CustomAll.1')}</th>
                            <th>{t('ProductList.8')}</th>
                            <th>{t('ProductEdit.7')}</th>
                            <th>{t('ExpenseReport.9')}</th>
                            <th>{t('Trade.14')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            MaxsulotlarRoyxariReducer.maxsulotlar.map(item=><tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.barcode}</td>
                                <td>-</td>
                                <td>{item.expireDate}</td>
                                <td>{item.buyPrice}</td>
                                <td>-</td>
                                <td>{item.buyPrice}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{item.branch.business.name}</td>
                                <td>{item.minQuantity}</td>
                                <td>{item.salePrice}</td>
                                <td>-</td>
                                <td>{item.dueDate}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
export default connect((MaxsulotlarRoyxariReducer),{getMaxsulotRuyxati,saveMaxsulotRuyxati,editMaxsulotRuyxati,deleteMaxsulotRuyxati}) (MaxsulotXisoboti)
