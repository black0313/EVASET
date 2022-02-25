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
function SavdodaTulov({mijoz,dukon,summa,eslatma,getSavdolar,SavdoQoshishReducer}) {

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
                <h2>Savdodagi to'lov</h2>
            </div>
            <div className="rowStyleST">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6 col-sm-12">
                        <h6>Baza:</h6>
                        <select name="" id="" value={inputvalue.baza} onChange={baza} className={'form-control'}>
                            <option value="#">Tanlash</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>Mijoz:</h6>
                        <select name="" id="" className={'form-control'} value={inputvalue.mijoz} onChange={mijoz}>
                            <option value="">Mavjud emas</option>
                            <option value="">Taminotchi</option>
                            <option value="">(2)</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6>Tulov usuli:</h6>
                        <select name="" id="" className={'form-control'} value={inputvalue.tulovusuli} onChange={tulovusuli}>
                            <option value="">Tanlash</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>Mijoz guruxi:</h6>
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
                    <h3>Jami xarajatlar: ( backend )</h3>
                </div>

            </div>

            <div className="rowStyleST2">

                <div className="qoshish mt-4">
                    <h5>Barcha savdolar</h5>
                    {/*<Link to={'/third/xarajatlarRuyxati/xarajatqoshish'}><button className='btn btn-primary'>+Qo'shish</button></Link>*/}
                </div>

                <div className="izlashST2">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select value={inputvalue.izlash} onChange={izlash} name="" id="">
                            <option value="">25</option>
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
                        <input type="text" placeholder='Izlash...' value={inputvalue.view} onChange={view}/>
                    </div>
                </div>
                {console.log(SavdoQoshishReducer.savdolar)}
                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4 mb-4 '>
                        <thead>
                        <tr>
                            <th>Qisqa eslatma</th>
                            <th>Paid on</th>
                            <th>Tulov so`mmasi</th>
                            <th>Mijoz</th>
                            <th>Mijoz guruhi</th>
                            <th>Tulov usuli</th>
                            <th>Savdo</th>
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
export default connect((SavdoQoshishReducer),{getSavdolar,saveSavdolar}) (SavdodaTulov)
