import './xarid.css'
import {useEffect, useState} from "react";
import {ModalBody, ModalHeader, ModalFooter, Modal} from "reactstrap";
import {connect} from "react-redux";
import XaridReducer, {getXarid, saveXarid, deleteXarid, editXarid} from '../reducer/XaridReducer'
import users from "../../../../../reducer/users";
import {Link} from 'react-router-dom'
import TaminotReducer, {
    deleteTaminot,
    editTaminot,
    getTaminot,
    saveTaminot
} from "../../Hamkorlar/reducer/TaminotReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";

function Xarid({
                   getXarid,
                   saveXarid,
                   taminot,
                   deleteXarid,
                   getTaminot,
                   saveTaminot,
                   editXarid,
                   XaridReducer,
                   users,
                   TaminotReducer,
    branchreducer,getbranch
               }) {

    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);

    const [input, setInput] = useState(
        {
            diller: '',
            lang1: '',
            dukon: '',
            idraqam: '',
            login: '',
            tel: '',
            ismi: '',
            ikkinciraqam: '',
            otaismi: '',
            telegram: '',
            familiyasi: '',
            email: '',
            //--------
            qisqaeslatma: '',
            baza: '',
            xaridsanasi: '',
            tulovmuddati: '',
            xaridstatusi: '',
            qoshimchahujjat: '',
            //    ------tulov qilish
            avans: '',
            tulovusuli: '',
            paidon: '',
            eslatma: '',
            //    ----- yetkazib berish
            yetkazibberish: '',
            yetkazibberishnarxi: '',
            langv2: '',
            yetkazibberishnarxi2: '',
        }
    )

    function diller(e) {
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
    }

    function lang1(e) {
        input.lang1 = e.target.value
        let a = {...input}
        setInput(a)
    }

    function dukon(e) {
        input.dukon = e.target.value
        let a = {...input}
        setInput(a)
    }

    function idraqam(e) {
        input.idraqam = e.target.value
        let a = {...input}
        setInput(a)
    }

    function login(e) {
        input.login = e.target.value
        let a = {...input}
        setInput(a)
    }

    function tel(e) {
        input.tel = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ismi(e) {
        input.ismi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ikkinciraqam(e) {
        input.ikkinciraqam = e.target.value
        let a = {...input}
        setInput(a)
    }

    function otaismi(e) {
        input.otaismi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function telegram(e) {
        input.telegram = e.target.value
        let a = {...input}
        setInput(a)
    }

    function familiyasi(e) {
        input.familiyasi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function email(e) {
        input.email = e.target.value
        let a = {...input}
        setInput(a)
    }

    function qisqaeslatma(e) {
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    function baza(e) {
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }

    function xaridsanasi(e) {
        input.xaridsanasi = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.xaridsanasi)
    }

    function tulovmuddati(e) {
        input.tulovmuddati = e.target.value
        let a = {...input}
        setInput(a)
    }

    function xaridstatusi(e) {
        input.xaridstatusi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function qoshimchahujjat(e) {
        input.qoshimchahujjat = e.target.value
        let a = {...input}
        setInput(a)
    }

    function avans(e) {
        input.avans = e.target.value
        let a = {...input}
        setInput(a)
    }

    function tulovusuli(e) {
        input.tulovusuli = e.target.value
        let a = {...input}
        setInput(a)
    }

    function paidon(e) {
        input.paidon = e.target.value
        let a = {...input}
        setInput(a)
    }

    function eslatma(e) {
        input.eslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    function yetkazibberish(e) {
        input.yetkazibberish = e.target.value
        let a = {...input}
        setInput(a)
    }

    function yetkazibberishnarxi(e) {
        input.yetkazibberishnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function langv2(e) {
        input.langv2 = e.target.value
        let a = {...input}
        setInput(a)
    }

    function yetkazibberishnarxi2(e) {
        input.yetkazibberishnarxi2 = e.target.value
        let a = {...input}
        setInput(a)
    }

    function toggle() {
        setActive(!active)
    }

    function toggle2() {
        setActive2(!active2)
    }

    function saqla() {
        saveXarid(
            {
                dealerId: input.diller,
                seller: 1,
                purchaseStatusId: input.xaridstatusi,
                paymentStatusId: input.tulovusuli,
                branchId: input.baza,
                date: input.xaridsanasi,
                description: input.qisqaeslatma,
                deliveryPrice: input.yetkazibberishnarxi2,
                purchaseProductsDto: [
                    {
                        purchasedQuantity: 10,
                        productPurchaseId: 1
                    }
                ]
            }
        )
        console.log('saaaaaaqlani');
    }

    function savedealer() {
        saveTaminot({
            name: input.ismi,
            phoneNumber: input.tel,
            telegram: input.telegram,
            supplierType: '',
            businessId: 1,
        })
        input.ismi = ''
        input.ismi = ''
        input.telegram = ''
        let a = {...input}
        setInput(a)
        toggle()
    }

    useEffect(() => {
        getTaminot(users.businessId)
    }, [TaminotReducer.current])
    useEffect(() => {
        getbranch(users.businessId)
    },[])

    return (
        <div className='xaridQilishBox'>
            <div className={'row  mt-5 '}>
                <h5 className={'text-center mt-3'}>Xarid qilish</h5>
                <div className="col-md-10 border mt-4 offset-1 d-flex">
                    <div className="row">
                        <div className={'col-3 col-sm-12'}>
                            <div className={'d-flex'}>
                                <div>
                                    <label htmlFor={'dil'}>Diller</label>
                                    <select name="" value={input.diller} onChange={diller} id={'dil'}
                                            className={'form-control'}>
                                        <option value="">Tanlash</option>
                                        {
                                            TaminotReducer.taminot.map(item => <option
                                                value={item.id}>{item.name}</option>)
                                        }

                                    </select>
                                </div>
                                <h4 style={{cursor: 'pointer', marginTop: '25px', fontSize: '30px'}}
                                    onClick={toggle}>+</h4>
                            </div>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label htmlFor={'qisqa'}>Qisqa eslatma</label>
                            <input type="text" className={'form-control'} value={input.qisqaeslatma}
                                   onChange={qisqaeslatma}
                                   id={'qisqa'}/>
                            <label htmlFor={'baza'} className={'mt-3'}>Baza</label>
                            <select name="" id={'baza'} value={input.baza} onChange={baza} className={'form-control'}>
                                <option value="">Tanlash</option>
                                {
                                    branchreducer.branch.map(item=> <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                        </div>

                        <div className="col-3 col-sm-12">
                            <label htmlFor={'sana'}>Xarid sanasi</label>
                            <input type="date" value={input.xaridsanasi} onChange={xaridsanasi}
                                   className={'form-control'}/>
                            <label className={'mt-3'} htmlFor={'muddat'}>To`lov muddati</label>
                            <select name="" id={'muddat'} value={input.tulovmuddati} onChange={tulovmuddati}
                                    className={'form-control'}>
                                <option value="">Tanlash</option>
                                <option value="">Oy</option>
                                <option value="">Hafta</option>
                            </select>
                        </div>

                        <div className="col-3 col-sm-12 ">
                            <label htmlFor={'status'}>Xarid statusi</label>
                            <select name="" value={input.xaridstatusi} onChange={xaridstatusi}
                                    className={'form-control'}
                                    id={'status'}>
                                <option value="1">Tanlash</option>
                                <option value="2">Qabul qilindi</option>
                            </select>
                            <label htmlFor={'qosh'} className={'mt-4'}>Qo`shimcha Hujjat</label>
                            <input type="file" value={input.qoshimchahujjat} onChange={qoshimchahujjat}
                                   className={'form-control'}/>
                        </div>
                    </div>

                    <Modal isOpen={active} toggle={toggle} style={{width: '90%'}}>
                        <ModalHeader>
                            Yangi qo`shish / taxrirlash
                        </ModalHeader>
                        <ModalBody>
                            <div className={'text-center'}>
                                <input type="radio" id={'radio1'} name={'l'} value={input.lang1} onChange={lang1}/>
                                <label htmlFor={'radio1'}>lang_v1.induvidial</label>
                                <input type="radio" id={'radio2'} name={'l'} value={input.dukon} onChange={dukon}/>
                                <label htmlFor={'radio2'}>Do`kon</label>
                            </div>
                            <label htmlFor={'id1'}>ID Raqami</label>
                            <input type="text" className={'form-control'} value={input.idraqam} onChange={idraqam}
                                   placeholder={'ID raqami'}/>
                            <div className={'d-flex justify-content-between mt-3'}>
                                <div>
                                    <label htmlFor={'log'}>Login</label>
                                    <input value={input.login} onChange={login} type="text" className={'form-control'}
                                           id={'log'}/>
                                    <label htmlFor={'tel'}>Tel:</label>
                                    <input type="text" onChange={tel} value={input.tel} className={'form-control'}
                                           id={'tel'}/>
                                </div>
                                <div>
                                    <label htmlFor={'ismi'}>Ismi</label>
                                    <input type="text" value={input.ismi} onChange={ismi} className={'form-control'}/>
                                    <label htmlFor={'ikki'}>Ikkinchi raqam</label>
                                    <input type="text" value={input.ikkinciraqam} onChange={ikkinciraqam}
                                           className={'form-control'} id={'ikki'}/>
                                </div>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-between mt-3'}>
                                <div>
                                    <label htmlFor={'log2'}>Otasining ismi</label>
                                    <input type="text" className={'form-control'} value={input.otaismi}
                                           onChange={otaismi}
                                           id={'log2'}/>
                                    <label htmlFor={'tel2'}>Telegram:</label>
                                    <input type="text" className={'form-control'} value={input.telegram}
                                           onChange={telegram}
                                           id={'tel2'}/>
                                </div>
                                <div>
                                    <label htmlFor={'ismi2'}>Familiyasi</label>
                                    <input type="text" className={'form-control'} value={input.familiyasi}
                                           onChange={familiyasi} id={'ismi2'}/>
                                    <label htmlFor={'ikkii2'}>Email</label>
                                    <input type="text" className={'form-control'} value={input.email} onChange={email}
                                           id={'ikki2'}/>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={savedealer} className={'btn btn-outline-primary'}>Saqlash</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>

                <h5 className={'text-center mt-5'}>To`lov qilish</h5>
                <div className="col-md-10 offset-1 border p-4 d-flex">
                    <div className="row">
                        <div className="col-6 col-sm-10">
                            <label htmlFor={'avans'}>Avans 0 / To`lov so`mmasi</label>
                            <input type="text" className={'form-control'} value={input.avans} onChange={avans}
                                   id={'avans'}/>
                            <label className={'mt-3'} htmlFor={'tol'}>To`lov statusi</label>
                            <select name="" id={'tol'} className={'form-control'} value={input.tulovusuli}
                                    onChange={tulovusuli}>
                                <option value="#">Naqd</option>
                                <option value="#">Pastik</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm-10">
                            <label htmlFor={'paid'}>Paid on</label>
                            <input type="date" value={input.paidon} onChange={paidon} className={'form-control'}
                                   id={'paid'}/>
                            <label htmlFor={'area1'} className={'mt-2'}>Eslatma</label>
                            <textarea name="" id={'area1'} cols="30" onChange={eslatma} value={input.eslatma}
                                      className={'form-control'} rows="2">
                        </textarea>
                        </div>

                        <div className={'col-10 col-sm-10 offset-1 mt-5 border p-2 d-flex'}>
                            <div className="row">
                                <div className="col-6 col-sm-12">
                                    <div className="btnBox">
                                        <label htmlFor={'yet'}>Yetkazib berish manzili</label>
                                        <input type="text" id={'yet'} value={input.yetkazibberish}
                                               onChange={yetkazibberish}
                                               className={'form-control'}/>
                                        <button onClick={toggle2}
                                                className={'btnAdd btn btn-primary mt-2'}>add_additional_experence
                                        </button>
                                    </div>
                                    <Modal isOpen={active2} toggle={toggle2}>
                                        <ModalHeader>Yetkazib berish</ModalHeader>
                                        <ModalBody>
                                            <label htmlFor={'l1'}>additional_experence_name</label>
                                            <input type="text" value={input.langv2} onChange={langv2}
                                                   className={'form-control'}
                                                   id={'l1'}/>
                                            <label htmlFor={'l2'} className={''}>Yetkazib berish narxi</label>
                                            <input type="text" className={'form-control'}
                                                   value={input.yetkazibberishnarxi}
                                                   onChange={yetkazibberishnarxi} id={'l2'}/>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button className={'btn btn-primary'} onClick={saqla}>Saqlash</button>
                                            <button className={'btn btn-primary'} onClick={toggle2}>Chiqish</button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div className="col-6 col-sm-10">
                                    <label htmlFor={'yet2'}>(+)Yetkazib berish narxi</label>
                                    <input type="text" value={input.yetkazibberishnarxi2}
                                           onChange={yetkazibberishnarxi2}
                                           className={'form-control'}/>
                                </div>
                            </div>

                        </div>
                        <div className={'col-10 col-sm-10 offset-1 mt-5 border p-4'}>
                            <h5>Qarz miqdori!: 0.00</h5>
                            <Link to={'/headerthird/xaridlarRuyxati'}>
                                <button className={'btn btn-primary'} onClick={saqla}>Saqlash</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((XaridReducer, users, TaminotReducer, branchreducer), {
    getXarid,
    saveXarid,
    editXarid,
    getTaminot,
    saveTaminot,
    getbranch
})(Xarid)