import {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {saveOtkazma} from "../../Baza/reducer/OtkazmaReducer";
import {connect} from "react-redux";
import {deleteXarajatlar, editXarajatlar, getXarajatlar, saveXarajatlar} from "../reducer/XarajatlarReducer";
import {Link} from 'react-router-dom'
import './xarajatQoshish.css'

function XarajatQoshish({deleteXarajatlar,saveXarajatlar,}){

    const [input,setInput] = useState(
        {
            baza:'',
            sana:'',
            qoshimchaxujjat:'',
            xarajateslatmasi:'',
            xarajatturi:'',
            xarajatqildi:'',
            amaldagisoliq:'',
            doimtakror:'',
            xarajatsana:'',
            takrorsoni:'',
            takrorkun:'',
            qisqaeslatma:'',
            experencecontact:'',
            jamisumma:'',
            maxsulotnomishtrix:'',
            avans:'',
            paidon:'',
            tulovusuli:'',
            eslatma:''
        }
    )
    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sana(e){
        input.sana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qoshimchaxujjat(e){
        input.qoshimchaxujjat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xarajateslatmasi(e){
        input.xarajateslatmasi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xarajatturi(e){
        input.xarajatturi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xarajatqildi(e){
        input.xarajatqildi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function amaldagisoliq(e){
        input.amaldagisoliq = e.target.value
        let a = {...input}
        setInput(a)
    }
    function doimtakror(e){
        input.doimtakror = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xarajatsana(e){
        input.xarajatsana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function takrorsoni(e){
        input.takrorsoni = e.target.value
        let a = {...input}
        setInput(a)
    }
    function takrorkun(e){
        input.takrorkun = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqaeslatma(e){
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function experencecontact(e){
        input.experencecontact = e.target.value
        let a = {...input}
        setInput(a)
    }
    function jamisumma(e){
        input.jamisumma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function maxsulotnomishtrix(e){
        input.maxsulotnomishtrix = e.target.value
        let a = {...input}
        setInput(a)
    }
    function avans(e){
        input.avans = e.target.value
        let a = {...input}
        setInput(a)
    }
    function paidon(e){
        input.paidon = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovusuli(e){
        input.tulovusuli = e.target.value
        let a = {...input}
        setInput(a)
    }
    function eslatma(e){
        input.eslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active,setActive] = useState(false)

    function saqla(){
        saveXarajatlar(
            {
                outlayCategoryId:1,
                totalSum:input.jamisumma,
                branchId:1,
                spenderId:1,
                description:input.qisqaeslatma,
                date:input.sana
            }
        )
        console.log(saveXarajatlar);
    }

    function toggle(){
        setActive(!active)
    }

    return(
        <div className="contenerX">
        <div className={'row  mt-4'}>
            <div className="col-12 d-flex justify-content-center">
                <h5>Xarajat qo`shish</h5>
            </div>

            <div className="col-12 border mt-4">
                <div className="row">
                    <div className="col-4 col-sm-12">
                        <label htmlFor="">baza</label>
                        <select className={'form-control'} value={input.baza} onChange={baza} name="" >
                            <option value="#">Tanlash</option>
                            <option value="#">Shefir zavod(Bl001)</option>
                            <option value="#">Instrumentlar(Bl002)</option>
                        </select>

                        <label htmlFor={'mijoz'} className={'mt-4'}>Sana</label>
                        <input type="date" id={'mijoz2'} className={'form-control'} value={input.sana} onChange={sana}/>

                        <label htmlFor={'mijoz'} className={'mt-4'}>Qo`shimcha hujjat</label>
                        <input type="file" id={'mijoz2'} className={'form-control'} value={input.qoshimchaxujjat} onChange={qoshimchaxujjat}/>

                        <label htmlFor={'area1'}>Xarajat eslatmasi</label>
                        <textarea name="" id={'area1'} value={input.xarajateslatmasi} onChange={xarajateslatmasi} className={'form-control'} cols="30" rows="2">

                        </textarea>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label htmlFor={'muddat'}>Xarajat turi</label>
                        {/*<div className={'d-flex'}>*/}
                        {/*    <input type="number" className={'form-control'}/>*/}
                            <select name="" id="" value={input.xarajatturi} onChange={xarajatturi} className={'form-control'}>
                                <option value="#">Tanlash</option>
                                <option value="#">Oy</option>
                                <option value="#">Hafta</option>
                            </select>
                        {/*</div>*/}
                        <label htmlFor={'stat'} className={'mt-4'}>Xarajat qildi</label>
                        <select name="" id="" className={'form-control'} value={input.xarajatqildi} onChange={xarajatqildi}>
                            <option value="#">Tanlash</option>
                            <option value="#">Boshliq</option>
                        </select>

                        <label htmlFor={'savRaqam'} className={'mt-4'}>Amaldagi soliq</label>
                        <input type="number" value={input.amaldagisoliq} onChange={amaldagisoliq} className={'form-control'} placeholder={'savdo raqami'}/>

                        <label className={'mt-5'} htmlFor={'lang'}>lang_v1.is_refend</label>
                        <input onClick={toggle} itemID={'lang'} style={{width:'20px',height:'20px'}} type="checkbox" id={'lang'}/>
                    </div>
                        <Modal isOpen={active} toggle={toggle}>
                            <ModalHeader>
                                Qoshimcha
                            </ModalHeader>
                            <ModalBody>
                                <label htmlFor={'doim'}>Doim takrorlanadimi</label>
                                <input type="checkbox" value={input.doimtakror} onChange={doimtakror} id={'doim'} style={{width:'20px',height:'20px'}}/><br/>
                                <label htmlFor={'xsana'} className={'mt-3'}>Xarajat sanasi</label>
                                <div className={'d-flex'}>
                                    <input type="text" className={'form-control'} value={input.xarajatsana} onChange={xarajatsana}/>
                                    <select name="" value={input.takrorkun} onChange={takrorkun}>
                                        <option value="#">Hafta</option>
                                        <option value="#">Oy</option>
                                        <option value="#">Yil</option>
                                    </select>
                                </div>
                                <label htmlFor={'takror'}>Takrorlashlar soni</label>
                                <input type="number" className={'form-control'} value={input.takrorsoni} onChange={takrorsoni}/>
                            </ModalBody>
                            <ModalFooter>
                                <button className={'btn btn-primary'}>Saqlash</button>
                                <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
                            </ModalFooter>
                        </Modal>
                    <div className="col-4 col-sm-12">
                        <label htmlFor={'savOyna'}>Qisqa eslatma</label>
                        <input type="text" className={'form-control'} value={input.qisqaeslatma} onChange={qisqaeslatma}/>

                        <label htmlFor={'hisobF'} className={'mt-4'}>Experence for contact</label>
                        <select name="" id={'hisobF'} className={'form-control'} value={input.experencecontact} onChange={experencecontact}>
                            <option value="#">Default</option>
                            <option value="#">Walk in customer</option>
                        </select>

                        <label htmlFor={'qoshim'} className={'mt-4'}>Jami summa</label>
                        <input type="text" value={input.jamisumma} onChange={jamisumma} className={'form-control'} id={'qoshim'}/>
                    </div>
                </div>
            </div>

            <div className="col-12 mt-4 border p-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex">
                        <input type="text" className={'form-control'} value={input.maxsulotnomishtrix} onChange={maxsulotnomishtrix} placeholder={'mahsulot nomi yoki shtrix kodini yozing'}/>
                        <h5 style={{fontSize:'32px',cursor:'pointer'}}>+</h5>
                    </div>
                    <div className="table-responsive mb-2">
                    <table className={'table mt-4'}>
                        <thead>
                        <tr>
                            <th>Mahsulot</th>
                            <th>Miqdori</th>
                            <th>Narxi</th>
                            <th>Discount</th>
                            <th>Jami</th>
                            <th>x</th>
                        </tr>
                        </thead>
                    </table>
                    </div>
                </div>
            </div>

            <div className="col-12  mt-4 border p-4">
                <div className="row">
                    <h5 className={'text-center mt-5'}>To`lov qilish</h5>
                            <div className="col-6 col-sm-12">
                                <label htmlFor={'avans'}>Avans 0 / To`lov so`mmasi</label>
                                <input type="text" className={'form-control'} id={'avans'}/>
                                <label className={'mt-3'} htmlFor={'tol'}>To`lov usuli</label>
                                <select name="" id={'tol'} className={'form-control'} onChange={tulovusuli} value={input.tulovusuli}>
                                    <option value="#">Naqd</option>
                                    <option value="#">Pastik</option>
                                    <option value="#">Cheque</option>
                                    <option value="#">Bank Transfer</option>
                                    <option value="#">UzCard</option>
                                    <option value="#">Humo</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor={'paid'}>Paid on</label>
                                <input type="date" value={input.paidon} onChange={paidon} className={'form-control'} id={'paid'}/>
                                <label htmlFor={'area1'} className={'mt-2'}>Eslatma</label>
                                <textarea name="" id={'area1'} cols="30" value={input.eslatma} onChange={eslatma} className={'form-control'} rows="2">
                            </textarea>
                        </div>
                </div>
            </div>
            <div className={'col-md-10 offset-1 mt-5 border p-4'}>
                <h5>Qarz miqdori!: 0.00</h5>
                <Link to={'/headerthird/xarajatRuyxati'}><button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button></Link>
                <button className={'btn btn-outline-primary'}>Saqlash va chek</button>
            </div>

        </div>
        </div>
    )
}

export default connect(({XarajatlarReducer: {xarajatlar}}) => ({xarajatlar}), {
    getXarajatlar,
    saveXarajatlar,
    editXarajatlar,
    deleteXarajatlar
})(XarajatQoshish)