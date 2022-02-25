import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import Arrow from '../../../../../img/arrowIcon.png'
import './otkazmalarRoyxati.css'
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {deleteOtkazma, editOtkazma, saveOtkazma, getOtkazma} from "../reducer/OtkazmaReducer";

function OtkazmalarRoyxati({getOtkazma, otkazmalar, deleteOtkazma, saveOtkazma}) {

    const [input, setInput] = useState(
        {
            view: '',
            search: '',
        }
    )

    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.search = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(() => {
        getOtkazma()
    }, [])

    function deleteOt(item) {
        deleteOtkazma(item.id)
        console.log('deleteed')
    }

    return (
        <div className="col-md-12 mt-2 mt-4 mb-4 ">
            <div className="textHeader">
                <h2>Bazadan Bazaga</h2>
            </div>
            <div className="rowStyleN">
                <div className="qoshish">
                    <h5>Barcha o'tkazmalar</h5>
                    <Link to={'/headerthird/utkazmaRuyxati/taxrirlash'}>
                        <button className='btn btn-primary'>+Qo'shish</button>
                    </Link>
                </div>
                <div className="izlashOR">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" value={input.view} onChange={view} id="">
                            <option value="">25</option>
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
                        <input type="text" placeholder='Izlash...' value={input.search} onChange={search}/>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Sana</th>
                            <th>Bazadan (Amaldagi baza)</th>
                            <th>Bazaga (O'tkaziladigan baza)</th>
                            <th>Status</th>
                            <th>Yo'lkira haqi</th>
                            <th>Jami summa</th>
                            <th>Qisqa eslatma</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            otkazmalar.filter(val=>{
                                if (input.search===''){
                                    return val
                                }else if (val.name.toUpperCase().includes(input.search.toUpperCase())){
                                    return val
                                }
                            })
                                .map(item => <tr key={item.id}>
                                <td>{item.date}</td>
                                <td>
                                    <Link to={'/headerthird/utkazmaRuyxati/taxrirlash'}>
                                        <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash</button>
                                    </Link>
                                    <button className='ochirish'><img onClick={()=>deleteOt(item)} src={Delete} alt=""/> O'chirish</button>
                                </td>
                            </tr>)
                        }
                        {
                            console.log(otkazmalar)
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

export default connect(({OtkazmaReducer: {otkazmalar}}) => ({otkazmalar}), {
    getOtkazma,
    saveOtkazma,
    editOtkazma,
    deleteOtkazma
})(OtkazmalarRoyxati)
