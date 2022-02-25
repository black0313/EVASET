import CSV from '../../../../../../../img/CSV.png'
import Excel from '../../../../../../../img/Excel.png'
import Print from '../../../../../../../img/Print.png'
import Data from '../../../../../../../img/Data.png'
import Pdf from '../../../../../../../img/PDF.png'
import Edit from '../../../../../../../img/Edit.png'
import Delete from '../../../../../../../img/Delete.png'
import './ulushli.css'
import {useState} from 'react'
function Ulushli(){

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
        <div className='rowStyleUS'>
            <div className="qoshish">
                    <h5>Ulushli savdolar</h5>
            </div>
            <div className="izlashUS">
                <div className="izlashBox1">
                    <p>Ko'rsatildi</p>
                    <select value={input.view} onChange={view} name="" id="">
                        <option value="">25</option>
                        <option value="">50</option>
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
                        <th>sana</th>
                        <th>Savdo raqamlari</th>
                        <th>Mijoz</th>
                        <th>Telefon raqami</th>
                        <th>Baza</th>
                        <th>To'lov statusi</th>
                        {/*<th>To'lov usuli</th>*/}
                        <th>Jami summa</th>
                        <th>To'langan summa</th>
                        <th>Qarz</th>
                    </tr>
                    </thead>
                    <tbody>
                        <div className={'text-center mt-4'}>
                            <h1>Hozircha manba yuq</h1>
                        </div>
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default Ulushli