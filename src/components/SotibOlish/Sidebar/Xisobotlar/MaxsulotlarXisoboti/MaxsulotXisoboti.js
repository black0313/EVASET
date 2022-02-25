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
function MaxsulotXisoboti({getMaxsulotxisobot,MaxsulotlarRoyxariReducer,dukon,summa,eslatma,getMaxsulotRuyxati}) {

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

    // const {mijoz,dukon,summa,eslatma} = props.match.params

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeader">
                <h2>Maxsulotlar xisoboti</h2>
            </div>
            <div className="rowStyleMax">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-6 col-sm-12">
                        <h6>Diller:</h6>
                        <input value={inputvalue.baza} onChange={baza} type="text" placeholder='Diller nomi...' className={'inpStyl'}/>
                    </div>
                    <div className="col-6 col-sm-12">
                        <h6>Xarid sanasi:</h6>
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
                        <h6>Sanani belgilang:</h6>
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
                    <h5>Barcha savdolar</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <div className="izlashMax2">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
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
                        <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={inputvalue.izlash} onChange={izlash}/>
                    </div>
                </div>
                <div className="table-responsive pb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>Maxsulot</th>
                            <th>Shtrix kod</th>
                            <th>Qisqa malumot</th>
                            <th>Xarid sanasi</th>
                            <th>Purchase</th>
                            <th>Diller</th>
                            <th>Xarid qilingan narx</th>
                            {/*<th>Sana</th>*/}
                            <th>Savdo</th>
                            <th>Mijoz</th>
                            <th>Baza</th>
                            <th>Miqdori</th>
                            <th>Sotish narxi</th>
                            <th>Jami</th>
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
export default connect((MaxsulotlarRoyxariReducer),{getMaxsulotRuyxati,saveMaxsulotRuyxati,editMaxsulotRuyxati,deleteMaxsulotRuyxati}) (MaxsulotXisoboti)
