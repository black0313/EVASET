import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarXisoboti.css'
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {
    getXarajatxisobot,
    saveXarajatxisobot,
} from '../reducer/XarajatXisobotReducer'
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
import XarajatTurlariReducer, {
    deleteXarajatlarTurlari, editXarajatlarTurlari,
    getXarajatlarTurlari, saveXarajatlarTurlari
} from "../../Xarajatlar/reducer/XarajatTurlariReducer";
import XarajatlarReducer, {getXarajatlar} from "../../Xarajatlar/reducer/XarajatlarReducer";

function XarajatlarXisoboti({XarajatTurlariReducer,XarajatlarReducer,getXarajatlar}) {


    const [input,setInput] = useState(
        {
            baza:'',
            bolim:'',
            aniqsana:'',
            view:'',
            izlash:'',
        }
    )

    function view(e){
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolim(e){
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
    }
    function aniqsana(e){
        input.aniqsana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }


    useEffect(() => {
        // getXarajatxisobot()
        getXarajatlar()
    },[])

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeader">
                <h2>Xarajatlar xisoboti</h2>
            </div>
            <div className="rowStyleXX">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-4 col-sm-12">
                        <h6>Baza:</h6>
                        <select value={input.baza} onChange={baza} name="" id="">
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-4 col-sm-12">
                        <h6>Bo'limlar:</h6>
                        <select name="" id="" onChange={bolim} value={input.bolim}>
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-4 col-sm-12">
                        <h6>Aniq sanani belgilash:</h6>
                        <select name="" id="" value={input.aniqsana} onChange={aniqsana}>
                            <option value="" hidden>Aniq sanani belgilash</option>
                            <option value="">Bugun</option>
                            <option value="">Oxirgi 1 hafta</option>
                        </select>
                    </div>
                </div>
                <div className="btnFiltrlash">
                    <button className='btn btn-primary'>Filtrlash</button>
                </div>


            </div>

            <div className="rowStyleXX2">
                <div className="izlashXX2">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">1,000</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                    </div>
                </div>
                {console.log(XarajatlarReducer.xarajatlar)}
                {console.log('222')}
                <div className="table-responsive mb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>Xarajat turlari</th>
                            <th>Jami xarajatlar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            XarajatlarReducer.xarajatlar.
                            map(item=><tr key={item.id}>
                                {/*<td>{item.outlayCategory.title}</td>*/}
                                <td>{item.totalSum}</td>
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

export default connect((XarajatTurlariReducer,SavdoOynaReducer,XarajatlarReducer),{getXarajatlar,getXarajatlarTurlari,saveXarajatlarTurlari,editXarajatlarTurlari,deleteXarajatlarTurlari,}) (XarajatlarXisoboti)
