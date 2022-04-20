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
import OtkazmaReducer, {deleteOtkazma, editOtkazma, saveOtkazma, getOtkazma} from "../reducer/OtkazmaReducer";
import users from "../../../../../reducer/users";

function OtkazmalarRoyxati({getOtkazma, otkazmalar, deleteOtkazma, saveOtkazma, match, users, OtkazmaReducer}) {

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
        getOtkazma(users.businessId)
    }, [OtkazmaReducer.counter])

    function deleteOt(item) {
        console.log('deleteed')
        deleteOtkazma(item.id)
    }

    const [headlist, setheadlist] = useState([
        {
            sana: 'Sana',
            baza: 'Baza amaldagi',
            baza2: 'Baza otkaziladigan',
            status: 'Status',
            yulkira: 'Yul haqi',
            jamisumma: 'Jami summa',
            qisqaeslatma: 'Qisqa eslatma',
            amallar: 'Amallar'
        }
    ])
    const [sana, setsana] = useState(true)
    const [baza, setbaza] = useState(true)
    const [baza2, setbaza2] = useState(true)
    const [status, setstatus] = useState(true)
    const [yulkira, setyulkira] = useState(true)
    const [jamisumma, setjamisumma] = useState(true)
    const [qisqaeslatma, setqisqaeslatma] = useState(true)
    const [amallar, setamallar] = useState(true)

    const [malkamay, setmalkamay] = useState(false)

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
                        <button onClick={() => setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni kamaytirish
                        </button>

                        {
                            malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                <li onClick={() => setsana(!sana)}
                                    className={'li2'}>{sana ? item.sana : item.sana + ' <-'}</li>
                                <li onClick={() => setbaza(!baza)}
                                    className={'li2'}>{baza ? item.baza : item.baza + ' <-'}</li>
                                <li onClick={() => setbaza2(!baza2)}
                                    className={'li2'}>{baza2 ? item.baza2 : item.baza2 + ' <-'}</li>
                                <li onClick={() => setstatus(!status)}
                                    className={'li2'}>{status ? item.status : item.status + ' <-'}</li>
                                <li onClick={() => setyulkira(!yulkira)}
                                    className={'li2'}>{yulkira ? item.yulkira : item.yulkira + ' <-'}</li>

                                <li onClick={() => setjamisumma(!jamisumma)}
                                    className={'li2'}>{jamisumma ? item.jamisumma : item.jamisumma + ' <-'}</li>

                                <li onClick={() => setamallar(!amallar)}
                                    className={'li2'}>{amallar ? item.amallar : item.amallar + ' <-'}</li>
                            </ul>) : ''
                        }


                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={input.search} onChange={search}/>
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>

                        {
                            headlist.map(item => <tr key={item.id}>
                                {sana?<td>{item.sana}</td>:''}
                                {baza?<td>{item.baza}</td>:''}
                                {baza2?<td>{item.baza2}</td>:''}
                                {status?<td>{item.status}</td>:''}
                                {yulkira?<td>{item.yulkira}</td>:''}
                                {jamisumma?<td>{item.jamisumma}</td>:''}
                                {qisqaeslatma?<td>{item.qisqaeslatma}</td>:''}
                                {amallar?<td>{item.amallar}</td>:''}
                            </tr>)
                        }

                        </thead>
                        <tbody>
                        {
                            OtkazmaReducer.otkazmalar.filter(val => {
                                if (input.search === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                    return val
                                }
                            })
                                .map(item => <tr key={item.id}>
                                    {sana?<td>{item.exchangeDate}</td>:''}
                                    {baza?<td>{item.shippedBranch?.name}</td>:''}
                                    {baza2?<td>{item.receivedBranch?.name}</td>:''}
                                    {status?<td></td>:''}
                                    {yulkira?<td></td>:''}
                                    {jamisumma?<td></td>:''}
                                    {qisqaeslatma?<td>{item.description}</td>:''}
                                    {amallar?<td>
                                        <Link to={'/headerthird/utkazmaRuyxati/taxrirlash'}>
                                            <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash</button>
                                        </Link>
                                        <button onClick={() => deleteOt(item)} className='ochirish'><img src={Delete}
                                                                                                         alt=""/> O'chirish
                                        </button>
                                    </td>:''}
                                </tr>)
                        }
                        {
                            console.log(otkazmalar)
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default connect((OtkazmaReducer, users), {
    getOtkazma,
    saveOtkazma,
    editOtkazma,
    deleteOtkazma
})(OtkazmalarRoyxati)
