import CSV from '../../../../../../../img/CSV.png'
import Excel from '../../../../../../../img/Excel.png'
import Print from '../../../../../../../img/Print.png'
import Data from '../../../../../../../img/Data.png'
import Pdf from '../../../../../../../img/PDF.png'
import Edit from '../../../../../../../img/Edit.png'
import Delete from '../../../../../../../img/Delete.png'
import './savdolar.css'
import {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";

import SavdoQoshishReducer, { getSavdolar} from "../../../../Savdo/reducer/SavdoQoshishReducer";
import XarajatlarReducer, {getXarajatlar} from "../../../../Xarajatlar/reducer/XarajatlarReducer";

function Savdolar1({SavdoQoshishReducer,getMijozGurux,XarajatlarReducer,getSavdolar,users}){

    useEffect(()=>{
       getSavdolar()
        // getMijozGurux()
    },[])
    const [input,setInput] = useState(
        {
            view:'',
            izlash:'',
        }
    )

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

    return(
        <div className='rowStyleSV'>
            <div className="qoshish">
                    <h5>Savdolar</h5>
            </div>
            <div className="izlashSV">
                <div className="izlashBox1">
                    <p>Ko'rsatildi</p>
                    <select name="" value={input.view} onChange={view} id="">
                        <option value="">25</option>
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
                    <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                </div>
               
            </div>
            <div className="table-responsive mb-4">
                <table className='table table-striped table-bordered mt-4 '>
                    <thead>
                    <tr>
                        <th>Sana</th>
                        <th>Savdo raqami</th>
                        <th>Mijoz</th>
                        <th>Baza</th>
                        <th>Tulov statusi</th>
                        <th>Jami summa</th>
                        <th>Tulangan summa</th>
                        <th>Qoldiq qarz</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        SavdoQoshishReducer.savdolar.map(item=><tr key={item.id}>
                            <td>{item.payDate}</td>
                            <td>-</td>
                            <td>{item.customer.name}</td>
                            <td>{item.branch.name}</td>
                            <td>{item.paymentStatus.status}</td>
                            <td>{item.totalSum}</td>
                            <td>{item.amountPaid}</td>
                            <td>{item.loan}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default connect((SavdoQoshishReducer,XarajatlarReducer),{getSavdolar,getXarajatlar}) (Savdolar1)
