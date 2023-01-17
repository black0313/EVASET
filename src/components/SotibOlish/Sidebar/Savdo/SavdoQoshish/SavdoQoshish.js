import { Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import { useEffect, useState } from 'react'
import { connect } from "react-redux";
import LavozimReducer, { deleteLavozim, editLavozim, getLavozim, saveLavozim } from "../../Hodimlar/reducer/LavozimReducer";
import SavdoQoshishReducer, { deleteSavdolar, editSavdolar, getSavdolar, saveSavdolar } from "../reducer/SavdoQoshishReducer";
import TaminotReducer from "../../Hamkorlar/reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import './savdoQoshish.css'
import branchreducer, { getbranch } from "../../../../../reducer/branchreducer";
import MaxsulotlarRoyxariReducer, { getMaxsulotRuyxati } from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import { toast } from "react-toastify";
import MijozGuruxReducer, { getMijozGurux } from "../../Hamkorlar/reducer/MijozGuruxReducer";
import { Link } from "react-router-dom";
import PayReducer, { getPay } from "../../../../../reducer/PayReducer";
import {useTranslation} from "react-i18next";

function SavdoQoshish({ getbranch, branchreducer, getPay, PayReducer, getMijozGurux, MijozGuruxReducer, saveSavdolar, getMaxsulotRuyxati, MaxsulotlarRoyxariReducer, deleteSavdolar, match, editSavdolar, SavdoQoshishReducer, users }) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            baza: '',
            savdoqoshish: '',
            mijoz: '',
            tulovmuddati: '',
            tulovmuddatitanlash: '',
            savdooynasisana: '',
            status: '',
            xisobfakturasxemasi: '',
            savdoraqami: '',
            qoshimchaxujjat: '',
            maxsulotnomishtrix: '',
            avans: '',
            paidon: '',
            tulovusuli: '',
            eslatma: '',
            maxmiqdor: ''
        }
    )

    const [placeholders, setPlaceholders] = useState(
        {
            tolovUsuliPlaceholder: "",
            tolovSummasiPlaceholder: "",
        }
    )

    useEffect(() => {
        editS()
        getbranch(users.businessId)
        getMaxsulotRuyxati(users.businessId)
        getMijozGurux(users.businessId)
        getPay(users.businessId)
    }, [])

    function baza(e) {
        input.savdoqoshish = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function mijoz(e) {
        input.mijoz = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovmuddati(e) {
        input.tulovmuddati = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovmuddatitanlash(e) {
        input.tulovmuddatitanlash = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function savdooynasisana(e) {
        input.savdooynasisana = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function status(e) {
        input.status = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function xisobfakturasxemasi(e) {
        input.xisobfakturasxemasi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function savdoraqami(e) {
        input.savdoraqami = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qoshimchaxujjat(e) {
        input.qoshimchaxujjat = e.target.value
        let a = { ...input }
        setInput(a)
    }

    const [xisob, setxisob] = useState(0)
    const [jamixisob, setjamixisob] = useState(0)
    const [mah, setmah] = useState([])
    function pushesh(val) {
        let d = false
        mah.map(item => {
            if (item.id === val.id) {
                d = true
                // alert('Bu mahsulot jadvalda bor!')
                toast.warn('Bu mahsulot jadvalda bor!')
            }
        })
        if (d === false) {
            mah.push({ ...val })
        }
    }

    function maxsulotnomishtrix(e) {
        input.maxsulotnomishtrix = e.target.value
        let a = { ...input }
        setInput(a)
        {
            console.log(MaxsulotlarRoyxariReducer.maxsulotlar)
        }
        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val => {
            if (val.name === input.maxsulotnomishtrix) {
                console.log(val.quantity)
                pushesh({ ...val, counter: '' })
                input.maxsulotnomishtrix = ''
                let a = { ...input, counter: '' }
                setInput(a)
            } else if (input.maxsulotnomishtrix == val.barcode) {
                pushesh({ ...val })
                input.maxsulotnomishtrix = ''
                let a = { ...input }
                setInput(a)
            }
        })
    }

    function avans(e) {
        input.avans = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function paidon(e) {
        input.paidon = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovusuli(e) {
        input.tulovusuli = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function eslatma(e) {
        input.eslatma = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function maxmiqdor(e, id) {
        input.maxmiqdor = e.target.value
        let b = { ...input.maxmiqdor }
        setInput(b)
        mah.filter(item => {
            if (item.id == id) {
                if (item.counter > item.quantity) {
                    item.counter = parseInt(input.maxmiqdor)
                    toast.warn(`Bazada atigi ${item.quantity}  ${item.measurement.name} mahsulot bor`)

                }
                else {
                    item.counter = parseInt(input.maxmiqdor)
                }

            }
        })
        let a = [...mah]
        setmah(a)
        let d = 0
        let c = 0
        mah.map(item => {
            d += item.counter
            c += (item.counter * item.salePrice)

        })
        setxisob(d)
        setjamixisob(c)
    }
    function editS() {
        if (match.params.id !== undefined) {
            getSavdolar()
        }
        SavdoQoshishReducer.savdolar.map(item => {
            if (item.id == match.params.id) {
                input.mijoz = item.name
                let a = { ...input }
                setInput(a)
            }
        })
    }

    function saqla() {
        if (match.params.id !== undefined) {
            editSavdolar({
                customerId: input.mijoz,
                userId: 1,
                productTraderDto: [
                    {
                        tradedQuantity: 1,
                        productTradeId: 1
                    }
                ],
                payDate: "2020-10-10",
                branchId: input.baza,
                payMethodId: input.tulovusuli,
                amountPaid: input.avans,
                currencyId: 1,
                addressId: 1
            })
        } else {
            if (input.tulovusuli && input.avans) {
                mah.map(item => {
                    saveSavdolar(
                        {
                            customerId: 1,
                            payDate: "2020-10-10",
                            userId: 1,
                            productTraderDto: [
                                {
                                    tradedQuantity: item.counter,
                                    productTradeId: item.id
                                }
                            ],
                            branchId: item.branch.id,
                            payMethodId: input.tulovusuli,
                            amountPaid: input.avans,
                            currencyId: 1,
                            addressId: 1
                        },
                    )
                })
            }
            else {
                setPlaceholders(
                    {
                        tolovSummasiPlaceholder: "To'lov summasini kiriting",
                        tolovUsuliPlaceholder: "To'lov usulini tanlang!"
                    }
                )
            }
        }
    }
    function deleteM(ind) {
        mah.map((item, index) => {
            if (item.id === ind) {
                mah.splice(index, 1)
            }
        })
        let ad = [...mah]
        setmah(ad)

        let b = 0
        let c = 0
        mah.map(item => {
            b += item.counter
            c += (item.counter * item.salePrice)

        })
        setxisob(b)
        setjamixisob(c)
    }

    return (
        <div className="savdoQBox">
            <div className={'row mt-5'}>
                <h5 className="mt-1 text-center mb-3">{t('Trade.7')}</h5>
                <div className="col-md-4 col-sm-12 mb-3">
                    <label htmlFor="">{t('ProductList.8')}</label>
                    <select id={input.baza} onChange={baza} className={'form-control'}>
                        <option value={'tanlash'}>Tanlash</option>
                        {
                            branchreducer.branch.map(item => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                </div>

                <div className="col-4 col-sm-12 mb-3 ">
                    <label htmlFor={'mijoz'}>{t('Pagination.10')}</label>
                    {/*<input type="text" id={'mijoz'} value={input.mijoz} onChange={mijoz} className={'form-control'}/>*/}
                    <select onChange={mijoz} value={input.mijoz} className={'form-control'}>
                        <option value="tanlash">Tanlash</option>
                        {
                            MijozGuruxReducer.mijozgurux.map(item => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                </div>

                <div className="col-4 col-sm-12 mb-3">
                        <label htmlFor={'muddat'}>{t('Trade.8')}</label>
                    <div className="d-flex">
                        <input type="number" value={input.tulovmuddati} onChange={tulovmuddati} className={'form-control'} />
                        <select name="" id="" className={'form-control'} value={input.tulovmuddatitanlash} onChange={tulovmuddatitanlash}>
                            <option value="">Tanlash</option>
                        </select>
                    </div>
                </div>
                
                <div className="col-md-4 col-sm-12 mb-3">
                    <label htmlFor={'stat'} >{t('Trade.9')}</label>
                    <select value={input.status} onChange={status} name="" id="" className={'form-control'}>
                        <option value="">Tanlash</option>
                        {
                            PayReducer.paymethod.map(item => <option value={item.id}>{item.type}</option>)
                        }
                    </select>
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                    <label htmlFor={'savRaqam'}>{t('Trade.5')}</label>
                    <input type="number" value={input.savdoraqami} onChange={savdoraqami} className={'form-control'} placeholder={'savdo raqami'} />
                </div>

                <div className="col-4 col-sm-12 mb-3">
                    <label htmlFor={'savOyna'}>{t('Trade.10')}</label>
                    <input type="date" value={input.savdooynasisana} onChange={savdooynasisana} className={'form-control'} />
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor={'hisobF'} className={'mt-4'}>{t('Trade.11')}</label>
                    <select name="" value={input.xisobfakturasxemasi} onChange={xisobfakturasxemasi} id={'hisobF'} className={'form-control'}>
                        <option value="">Default</option>
                    </select>
                </div>
                
                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor={'qoshim'} className={'mt-4'}>{t('Purchase.11')}</label>
                    <input type="file" value={input.qoshimchaxujjat} onChange={qoshimchaxujjat} className={'form-control'} id={'qoshim'} />
                </div>
                
                
                <div className="col-md-12 border mt-5 p-3">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <input type="text" value={input.maxsulotnomishtrix} onChange={maxsulotnomishtrix} className={'form-control'} placeholder={'Mahsulot nomi yoki shtrix kodini yozing'} />
                            {/*<h5 style={{fontSize:'32px',cursor:'pointer'}}>+</h5>*/}
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className={'table mt-4'}>
                            <thead>
                                <tr>
                                    <th>{t('ProductList.1')}</th>
                                    <th>{t('Trade.12')}</th>
                                    <th>{t('Trade.13')}</th>
                                    <th>{t('Trade.14')}</th>
                                    <th>x</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mah
                                        .map(item => <tr key={item.id}>
                                            <td><h5>{item.name}</h5></td>
                                            <td>
                                                <input onChange={event => (maxmiqdor(event, item.id))} value={item.counter} type="number" placeholder={`Bazada ${item.quantity}  ${item.measurement.name} mahsulot bor`}
                                                    className={'form-control'} />
                                            </td>
                                            <td>
                                                {item.salePrice}
                                            </td>
                                            <td>
                                                {item.counter * item.salePrice}
                                            </td>
                                            <td>
                                                <button onClick={() => deleteM(item.id)} className={'btn btn-danger'}>X</button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                        <div className={'d-flex justify-content-around'}>
                            <div><h4>{t('Trade.15')} : {xisob}</h4></div>
                            <div><h4>{t('Trade.14')}: {jamixisob}</h4></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-5 border p-4">
                    <h5 className={'text-center mt-2'}>{t('Trade.16')}</h5>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor={'avans'}>{t('Trade.17')}</label>
                                <input type="number" value={input.avans} onChange={avans} className={'form-control'} id={'avans'} placeholder={placeholders.tolovSummasiPlaceholder} />
                                <label className={'mt-3'} htmlFor={'tol'}>{t('Purchase.26')}</label>
                                <select id={'tol'} className={'form-control'} value={input.tulovusuli} onChange={tulovusuli}>
                                    <option value="tanla">Tanlash</option>
                                    {
                                        PayReducer.paymethod.map(item => <option value={item.id}>{item.type}</option>)
                                    }
                                </select>
                                <p style={{ color: 'red', lineHeight: '13px', marginTop: '6px', textAlign: 'center' }}>{placeholders.tolovUsuliPlaceholder}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor={'paid'}>{t('Purchase.27')}</label>
                                <input type="date" value={input.paidon} onChange={paidon} className={'form-control'} id={'paid'} />
                                <label htmlFor={'area1'} className={'mt-2'}>{t('Trade.18')}</label>
                                <textarea name="" id={'area1'} cols="30" value={input.eslatma} onChange={eslatma} className={'form-control'} rows="2">
                                </textarea>
                            </div>
                        </div>
                </div>
                <div className={'col-md-12 mt-5 border p-4'}>
                    <h5>{t('Purchase.32')}!: 0.00</h5>
                    {
                        input.tulovusuli && input.avans ?
                            <Link to={'/headerthird/barcasavdolar'}>
                                <button className={'btn btn-outline-primary'} onClick={saqla}>{t('Buttons.6')}</button>
                            </Link> :
                            <button className={'btn btn-outline-primary m-1'} onClick={saqla}>{t('Buttons.6')}</button>
                    }
                    <button className={'btn btn-outline-primary m-1'}>{t('Trade.19')}</button>
                </div>

            </div>
        </div>
    )
}

export default connect((TaminotReducer, PayReducer, MaxsulotlarRoyxariReducer, MijozGuruxReducer, SavdoQoshishReducer, users, branchreducer), { getbranch, getPay, getMaxsulotRuyxati, getMijozGurux, getSavdolar, saveSavdolar, editSavdolar, deleteSavdolar })(SavdoQoshish)
