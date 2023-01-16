import React from 'react'
import { Link } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import './firmalar.css'
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import FirmaReducer, { deleteFirma, editFirma, getFirma, saveFirma, } from "../reducer/FirmaReducer";
import users from "../../../../../reducer/users";
import {useTranslation} from "react-i18next";

function Firmalar({ getFirma, users, firmalar, saveFirma, editFirma, deleteFirma, FirmaReducer, }) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            view: '',
            search: '',
            brandqoshish: '',
            qisqaeslatma: '',
            idF: ''
        }
    )
    const [placeholders, setplaceholders] = useState(
        {
            brendNomiPlaceholder: ""
        }
    )

    const [current, setCurrent] = useState(false)

    function view(e) {
        input.view = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function search(e) {
        input.search = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function brandqoshish(e) {
        input.brandqoshish = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function qisqaeslatma(e) {
        input.qisqaeslatma = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function editB(id) {
        toggle()
        FirmaReducer.firmalar.map(item => {
            if (item.id === id) {
                input.brandqoshish = item.name
                input.idF = id
                let a = { ...input }
                setInput(a)
            }
        })
    }

    function saqla() {
        if (input.brandqoshish !== "") {
            if (input.idF !== '') {
                editFirma({
                    name: input.brandqoshish,
                    businessId: users.businessId,
                    id: input.idF
                })
            } else {
                saveFirma(
                    {
                        name: input.brandqoshish,
                        businessId: users.businessId,
                    }
                )
            }
            input.idF = ''
            input.brandqoshish = ''
            input.qisqaeslatma = ''
            let a = { ...input }
            setInput(a)

            setplaceholders(
                {
                    brendNomiPlaceholder: ""
                }
            )
            toggle()
        }
        else {
            setplaceholders(
                {
                    brendNomiPlaceholder: "Brend nomini kiriting..."
                }
            )
        }
    }

    function deleteF(item) {
        deleteFirma(item.id)
    }

    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)

        setplaceholders(
            {
                brendNomiPlaceholder: ""
            }
        )
        setInput(
            {
                view: '',
                search: '',
                brandqoshish: '',
                qisqaeslatma: '',
                idF: ''
            }
        )
    }
    useEffect(() => {
        getFirma(users.businessId)
    }, [FirmaReducer.current])

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteFirma(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
        // deleteTaminot(item.id)
        console.log(item)
    }

    return (
        <div className="col-md-12 mt-2 mt-4 mb-4">
            <div className="textHeaderFR">
                <h2>{t('Firms.1')}</h2>
                <p>{t('Firms.2')}</p>
            </div>
            <div className="rowStyleFR">
                <div className="qoshishFR">
                    <h5 className='sarlavha'>{t('Firms.2')}</h5>
                    <button onClick={toggle} className='btn btn-primary'>+{t('Buttons.2')}</button>
                </div>
                <div className="izlashFR">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select value={input.view} onChange={view} name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">100</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt="" /> Export CSV</button>
                        <button><img src={Excel} alt="" /> Export Excel</button>
                        <button><img src={Print} alt="" /> Print</button>
                        <button><img src={Pdf} alt="" />Export PDF</button>
                        <button><img src={Data} alt="" />Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.search} onChange={search} placeholder='Izlash...' />
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar pb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>{t('Firms.1')}</th>
                                <th>{t('Firms.3')}</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                FirmaReducer.firmalar.filter(val => {
                                    if (input.search === '') {
                                        return val
                                    } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                        return val
                                    }
                                }).splice(0,visible).map((item,index) => <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td> </td>
                                    <td>
                                        <Link>
                                            <button onClick={() => editB(item.id)} className='taxrirlash'><img src={Edit} alt="" /> {t('Buttons.1')}
                                            </button>
                                        </Link>
                                        <button className='ochirish' onClick={() => deleteModaltoggle(item.id)}><img src={Delete} alt="" /> {t('Buttons.3')}</button>
                                    </td>

                                    <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                        <ModalBody>
                                            <h5>{t('Buttons.12')} ?</h5>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>{t('Buttons.3')}</button>
                                            <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                                        </ModalFooter>
                                    </Modal>

                                </tr>)
                            }

                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                </div>


                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        {t('Sections.8')}
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'l'}>{t('Firms.4')}</label>
                        <input value={input.brandqoshish} placeholder={placeholders.brendNomiPlaceholder} onChange={brandqoshish} type="text" id={'l'}
                            className={'form-control'} />
                        <label htmlFor={'l2'} className={'mt-3'}>{t('Buttons.17')}</label>
                        <input value={input.qisqaeslatma} onChange={qisqaeslatma} type="text" className={'form-control'}
                            id={'l2'} />
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={saqla}>{t('Buttons.6')}</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>{t('Buttons.7')}</button>
                    </ModalFooter>
                    
                </Modal>
            </div>
        </div>
    )
}

export default connect((FirmaReducer, users), {
    getFirma,
    saveFirma,
    editFirma,
    deleteFirma
})(Firmalar)
