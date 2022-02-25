import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import './mijozlarGuruxi.css'
import {useState, useEffect} from 'react'
import {connect} from "react-redux";
import MijozGuruxReducer, {
    getMijozGurux,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux
} from "../reducer/MijozGuruxReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import users from "../../../../../reducer/users";

function Mijozlarguruxi({
                            getMijozGurux,
                            saveMijozGurux,
                            editMijozGurux,
                            deleteMijozGurux,
                            mijozgurux,
                            users,
                            MijozGuruxReducer
                        }) {



    const [active, setActive] = useState(false);

    const [input, setInput] = useState(
        {
            guruhnomi: '',
            selectfoiz: '',
            foizda: '',
            inputsearch: '',
            phone: '',
            mId: ''
        }
    )

    function phone(e) {
        input.phone = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    function deleteM(item) {
        console.log(item)
        deleteMijozGurux(item.id)
        setTimeout(()=>{
            getMijozGurux(1)
        },100)
    }

    function changeguruxnomi(e) {
        input.guruhnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changeselectfoiz(e) {
        input.selectfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changefoizda(e) {
        input.foizda = e.target.value
        let a = {...input}
        setInput(a)
    }

    function editM(id) {
        toggle()
        MijozGuruxReducer.mijozgurux.map(item => {
            if (item.id === id) {
                input.guruhnomi = item.name
                input.phone = item.phoneNumber
                input.foizda = item.telegram
                input.mId = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {
        if (input.mId !== '') {
            editMijozGurux({
                name: input.guruhnomi,
                phoneNumber: input.phone,
                telegram: input.foizda,
                businessId: 1,
                id: input.mId
            })
        } else {
            saveMijozGurux({
                name: input.guruhnomi,
                phoneNumber: input.phone,
                telegram: input.foizda,
                businessId: 1
            })
        }
        input.guruhnomi = ''
        input.phone = ''
        input.selectfoiz = ''
        input.foizda = ''
        input.mId=''
        let a ={...input}
        setInput(a)
        toggle()
    }

    function toggle() {
        setActive(!active)
    }

    useEffect(() => {
        getMijozGurux()
    }, [MijozGuruxReducer.current])
    return (
        <div className="col-md-12 mt-2 pt-4 pb-4">
            <div className="textHeaderMIG">
                <h2>Mijozlar guruxlari</h2>
            </div>
            <div className="rowStyleMIG">
                <div className="qoshishMIG">
                    <h5>Barcha mijozlar guruxlari</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>

                <div className="izlashMIG">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.inputsearch} onChange={search} placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Nomi</th>
                            <th>Tel raqam</th>
                            <th>Foizda(%)</th>
                            <th>Telegram</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            MijozGuruxReducer.mijozgurux.filter(val => {
                                if (input.inputsearch === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.inputsearch.toUpperCase())) {
                                    return val
                                }
                            })
                                .map(item => <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td></td>
                                    <td>{item.telegram}</td>
                                    <td>
                                        <button className={'btn btn-outline-primary m-1'}
                                                onClick={() => editM(item.id)}>Taxrirlash
                                        </button>
                                        <button className={'btn btn-outline-primary m-1'}
                                                onClick={() => deleteM(item)}>O`chirish
                                        </button>
                                    </td>
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


                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi guruh qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input value={input.guruhnomi} onChange={changeguruxnomi} id={'nomi'} type="text"
                               className={'form-control'}/>
                        <label htmlFor={'lang'}>lang_v1.price_calculation_type</label>
                        <select value={input.selectfoiz} onChange={changeselectfoiz} className={'form-control mt-3'}
                                name="" id="">
                            <option value="#">Foizda</option>
                        </select>
                        <label htmlFor={'tel'}>Tel raqam</label>
                        <input type="text" className={'form-control mt-2'} value={input.phone} onChange={phone}/>
                        <label htmlFor={'foizda'} className={'mt-3'}>Telegram</label>
                        <input type="text" value={input.foizda} onChange={changefoizda} className={'form-control'}
                               id={'foizda'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-primary'} onClick={saqla}>SAQLASH</button>
                        <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                    </ModalFooter>
                </Modal>

            </div>
        </div>
    )
}

export default connect((MijozGuruxReducer, users), {
    getMijozGurux,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux
})(Mijozlarguruxi)