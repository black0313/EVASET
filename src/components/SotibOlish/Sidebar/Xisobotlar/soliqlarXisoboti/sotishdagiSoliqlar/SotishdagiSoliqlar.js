import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import './sotishdagiSoliqlar.css'
import {useState} from 'react'
export default function SotishdagiSoliqlar() {


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


    return (
        <div className="col-md-12 mt-2">
        <div className="rowStyleSTS">
            <h5>Sotishdagi soliqlar</h5>
               <div className="izlashSTS">
                      <div className="izlashBox1">
                            <p>Ko'rsatildi</p>
                            <select name="" id="" value={input.view} onChange={view}>
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
                            <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                      </div>
               </div>
                <div className="table-responsive">
               <table className='table table-striped table-bordered mt-4'>
                      <thead>
                             <tr>
                                    <th>Sana</th>
                                    <th>Savdo raqami</th>
                                    <th>Mijoz</th>
                                    <th>Soliq</th>
                                    <th>Jami summa</th>
                                    <th>To'lov usuli</th>
                             </tr>
                      </thead>
                      <tbody>
                             <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                             </tr>
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
