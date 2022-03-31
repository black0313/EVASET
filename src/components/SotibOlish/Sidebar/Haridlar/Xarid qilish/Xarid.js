import './xarid.css'
import { useEffect, useState } from "react";
import { ModalBody, ModalHeader, ModalFooter, Modal } from "reactstrap";
import { connect } from "react-redux";
import XaridReducer, { getXarid, getXarid5, saveXarid, deleteXarid, editXarid, getXarid2 } from '../reducer/XaridReducer'
import tolovreducer, { gettolovholati } from "../../../../../reducer/tolovreducer";
import users from "../../../../../reducer/users";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import TaminotReducer, {
    deleteTaminot,
    editTaminot,
    getTaminot,
    saveTaminot
} from "../../Hamkorlar/reducer/TaminotReducer";
import branchreducer, { getbranch } from "../../../../../reducer/branchreducer";
import Tolovreducer from "../../../../../reducer/tolovreducer";
import MaxsulotlarRoyxariReducer, { getMaxsulotRuyxati } from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import kgreducer, { getkg } from "../../../../../reducer/kgreducer";
import { lineHeight } from '@mui/system';
import PayReducer, {getPay} from "../../../../../reducer/PayReducer";

function Xarid({
    getXarid,
    getXarid5,
                   getPay,
                   PayReducer,
    getXarid2,
    saveXarid,
    taminot,
    getkg,
    kgreducer,
    deleteXarid,
    getTaminot,

    saveTaminot,
    editXarid,
    XaridReducer,
    users,
    match,
    getMaxsulotRuyxati,
    MaxsulotlarRoyxariReducer,
    TaminotReducer,
    branchreducer, getbranch, tolovreducer, gettolovholati,
}) {

    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);

    const [input, setInput] = useState(
        {
            taxririd: '',
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
            shtrix: '',
            xaridmiqdori: '',
            donanarxi: '',
            chegirmafoiz: '',
            birliknarxi: '',
            jamimiqdori: '',
            foydafoiz: '',
            donasotish: '',
            kg: '',
        }
    )

    const [placeholders, setPlaceholders] = useState(
        {
            qisqaeslatmaPlaceholder: "",
            xaridMiqdoriPlaceholder: "",
            donaNarxiPlaceholder: "",
            donaSotishNarxiPlaceholder: "",
            tolovSummasiPlaceholder: "",
            yetkazibBerishManziliPlaceholder: "",
            yetkazibBerishNarxiPlaceholder: "",
            dillerSelectStyle:"",
            xaridStatusiSelectStyle:"",
            tolovUsuliSelectStyle:"",
            bazaSelectStyle:"",
            xaridSanasiSelectStyle:"",
        }
    )

    const [xisob, setXisob] = useState(0)
    const [jamixisob, setjamiXisob] = useState(0)

    function diller(e) {
        // if (input.diller === ''){
        //     // TaminotReducer.taminot.map(item=> input.diller = 1 )
        //     // let a = {...input}
        //     // setInput(a)
        //     input.diller = TaminotReducer.taminot[0]
        //     let a = {...input}
        //     setInput(a)
        //     console.log(input.diller+' s2/')
        // }else {
        //     input.diller = e.target.value
        //     let a = {...input}
        //     setInput(a)
        //     console.log(input.diller+ 's7')
        // }

        input.diller = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function xaridmiqdori(e, id) {
        input.xaridmiqdori = e.target.value
        let a = { ...input }
        setInput(a)
        console.log(parseInt(e.target.value))
        console.log(id)
        mah.map(val => {
            if (id == val.id) {
                val.quantity = parseInt(input.xaridmiqdori)
            }
        })
        let b = [...mah]
        setmah(b)

        let d = 0
        let c = 0
        mah.map(item => {
            d += item.quantity
            c += (item.quantity * item.buyPrice)

        })
        setXisob(d)
        setjamiXisob(c)
    }
    function donanarxi(e, id) {
        input.donanarxi = e.target.value
        let a = { ...input }
        setInput(a)

        mah.map(val => {
            if (id == val.id) {
                val.buyPrice = input.donanarxi
            }
        })
        let b = [...mah]
        setmah(b)

        let d = 0
        let c = 0
        mah.map(item => {
            d += item.quantity
            c += (item.quantity * item.buyPrice)

        })
        setXisob(d)
        setjamiXisob(c)
    }
    function donasotish(e, id) {
        // input.donasotish = e.target.value
        input.donasotish = e.target.value
        let a = { ...input }
        setInput(a)

        mah.map(val => {
            if (id == val.id) {
                val.salePrice = input.donasotish
            }
        })
        let b = [...mah]
        setmah(b)

        let d = 0
        let c = 0
        mah.map(item => {
            d += item.quantity
            c += (item.quantity * item.buyPrice)

        })
        setXisob(d)
        setjamiXisob(c)
    }
    function kg(e) {
        input.kg = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function lang1(e) {
        input.lang1 = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function dukon(e) {
        input.dukon = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function idraqam(e) {
        input.idraqam = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function login(e) {
        input.login = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tel(e) {
        input.tel = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function ismi(e) {
        input.ismi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function ikkinciraqam(e) {
        input.ikkinciraqam = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function otaismi(e) {
        input.otaismi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function telegram(e) {
        input.telegram = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function familiyasi(e) {
        input.familiyasi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function email(e) {
        input.email = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function shtrix(e) {
        input.shtrix = e.target.value
        let a = { ...input }
        setInput(a)
        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val => {
            if (val.name === input.shtrix) {
                console.log(val.quantity)
                pushesh({ ...val, quantity: '', buyPrice: '', salePrice: '' })
                input.shtrix = ''
                let a = { ...input }
                setInput(a)
            } else if (input.shtrix == val.barcode) {
                pushesh({ ...val, quantity: '', buyPrice: '', salePrice: '' })
                input.shtrix = ''
                let a = { ...input }
                setInput(a)
            }
        })
        console.log(input.shtrix)
        console.log(mah)
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
            b += item.quantity
            c += (item.quantity * item.buyPrice)

        })
        setXisob(b)
        setjamiXisob(c)
    }
    function qisqaeslatma(e) {
        input.qisqaeslatma = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function baza(e) {
        input.baza = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function xaridsanasi(e) {
        input.xaridsanasi = e.target.value
        let a = { ...input }
        setInput(a)
        console.log(input.xaridsanasi)
    }
    function tulovmuddati(e) {
        input.tulovmuddati = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function xaridstatusi(e) {
        input.xaridstatusi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qoshimchahujjat(e) {
        input.qoshimchahujjat = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function avans(e) {
        input.avans = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovusuli(e) {
        input.tulovusuli = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function paidon(e) {
        input.paidon = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function eslatma(e) {
        input.eslatma = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function yetkazibberish(e) {
        input.yetkazibberish = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function yetkazibberishnarxi(e) {
        input.yetkazibberishnarxi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function langv2(e) {
        input.langv2 = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function yetkazibberishnarxi2(e) {
        input.yetkazibberishnarxi2 = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function toggle() {
        setActive(!active)
    }
    function toggle2() {
        setActive2(!active2)
    }

    const [mah, setmah] = useState([])
    const [funcpush, setfuncpush] = useState(true)

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

        let a = 0
        let c = 0
        mah.map(item => {
            a += item.quantity
            c += (item.quantity * item.buyPrice)
        })
        setXisob(a)
        setjamiXisob(c)
    }
    useEffect(() => {
        // diller()
        // console.log(TaminotReducer.taminot.map(item=><div>{item.id}</div>) +' nimadir')
    }, [])

    function editX() {
        console.log(XaridReducer.xaridlar)
        if (match.params.id !== undefined) {
            getXarid(users.businessId)
        }
        XaridReducer.xaridlar.map(item => {
            if (item.id == match.params.id) {
                input.diller = item.dealer.id
                input.qisqaeslatma = item.description
                input.xaridsanasi = item.date
                input.baza = item.branch.id
                input.eslatma = item.paymentStatus.id
                input.yetkazibberishnarxi2 = item.deliveryPrice
                input.xaridstatusi = item.purchaseStatus.id
                let a = { ...input }
                setInput(a)
                console.log(item.purchaseProductList[0].product)
                pushesh({ ...item.purchaseProductList[0].product, quantity: item.purchaseProductList[0].purchasedQuantity })
            }
        })

    }
    function saqla() {  
        if ((input.diller && input.xaridstatusi && input.tulovusuli && input.baza && input.xaridsanasi && input.qisqaeslatma && input.yetkazibberishnarxi2)) {
            if (match.params.id === undefined) {
                mah.map(item => {
                    saveXarid(
                        {
                            dealerId: input.diller,
                            seller: 2,
                            purchaseStatusId: input.xaridstatusi,
                            paymentStatusId: input.eslatma,
                            branchId: input.baza,
                            date: input.xaridsanasi,
                            description: input.qisqaeslatma,
                            deliveryPrice: input.yetkazibberishnarxi2,
                            purchaseProductsDto: [
                                {
                                    purchasedQuantity: item.quantity,
                                    productPurchaseId: item.id
                                }
                            ]
                        }
                    )
                })
            }
            else {
                mah.map(item => {
                    editXarid(
                        {
                            dealerId: input.diller,
                            seller: 2,
                            purchaseStatusId: input.xaridstatusi,
                            paymentStatusId: input.eslatma,
                            branchId: input.baza,
                            date: input.xaridsanasi,
                            description: input.qisqaeslatma,
                            deliveryPrice: input.yetkazibberishnarxi2,
                            purchaseProductsDto: [
                                {
                                    purchasedQuantity: item.quantity,
                                    productPurchaseId: item.id
                                }
                            ],
                            id: match.params.id
                        }
                    )
                })
            }
            setmah([])
            
           
        }
        else {
            setPlaceholders(
                {
                    qisqaeslatmaPlaceholder: "qisqa eslatma kiriting...",
                    xaridMiqdoriPlaceholder:"xarid miqdorini kiriting...",
                    donaNarxiPlaceholder:"ma'lumot kiriting...",
                    donaSotishNarxiPlaceholder:"ma'lumot kiritilmadi...",
                    tolovSummasiPlaceholder:"",
                    yetkazibBerishNarxiPlaceholder:"ma'lumot kiritilmadi...",
                    dillerSelectStyle:"Diller tanlang!",
                    xaridStatusiSelectStyle:"Xarid statusini tanlang!",
                    tolovUsuliSelectStyle:"To'lov usulini tanlang!",
                    bazaSelectStyle:"Baza tanlang!",
                    xaridSanasiSelectStyle:"Xarid sanasini tanlang!",
                }   
            )
        }
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
        let a = { ...input }
        setInput(a)
        toggle()
    }

    const [activeshtrix, setactiveshtrix] = useState(false)

    useEffect(() => {
        getTaminot(users.businessId)
        getMaxsulotRuyxati(users.businessId)
        getkg(users.businessId)
        getPay(users.businessId)
        editX()
    }, [TaminotReducer.current])
    useEffect(() => {
        getbranch(users.businessId)
    }, [])
    useEffect(() => {
        gettolovholati()
    }, [])
    
    return (
        
        <div className='xaridQilishBox'>
            <div className={'row  mt-5 '}>
                <h5 className={'text-center mt-3'}>XARID QILISH</h5>
                <div className="col-md-10 border mt-4 offset-1 d-flex">
                    <div className="row">
                        <div className={'col-3 col-sm-12'}>
                            <div className={'d-flex'}>
                                <div style={{ width: '100%' }}>
                                    <label htmlFor={'dil'}>Diller</label>
                                    {
                                        <select name="" value={input.diller} onChange={diller} id={'dil'}
                                            className={'form-control'}>
                                            {/*<option value="">Tanlash</option>*/}
                                            {
                                                TaminotReducer.taminot.map(item =>
                                                    input.diller == '' ? input.diller = item.id
                                                        : <option value={item.id}>{item.name}</option>)
                                            }
                                        </select>
                                        
                                        
                                    }
                                    {
                                        input.diller ? "":
                                        <p style={{color:'red',marginTop:'4px'}}>{placeholders.dillerSelectStyle}</p>

                                    }
                                </div>
                                <h4 style={{ cursor: 'pointer', marginTop: '25px', fontSize: '30px' }}
                                    onClick={toggle}>+</h4>
                            </div>
                        </div>

                        <div className="col-3 col-sm-12 mb-4">
                            <label htmlFor={'qisqa'}>Qisqa eslatma</label>
                            <input type="text" className={'form-control'} value={input.qisqaeslatma}
                                placeholder={placeholders.qisqaeslatmaPlaceholder} onChange={qisqaeslatma}
                                id={'qisqa'} />
                            <label htmlFor={'baza'} className={'mt-3'}>Baza</label>
                            <select name="" id={'baza'} value={input.baza} onChange={baza} className={'form-control'}>
                                {/*<option value="">Tanlash</option>*/}
                                {
                                    branchreducer.branch.map(item =>
                                        input.baza == '' ? input.baza = item.id :
                                            <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            {
                                input.baza ? "" :
                                <p style={{color:'red',marginTop:'4px',lineHeight:'13px'}}>{placeholders.bazaSelectStyle}</p>
                            }
                        </div>

                        <div className="col-3 col-sm-12">
                            <label htmlFor={'sana'}>Xarid sanasi</label>
                            <input type="date" value={input.xaridsanasi} onChange={xaridsanasi}
                                className={'form-control'}/>
                                {
                                    input.xaridsanasi ? "":
                                    <p style={{color:'red',marginTop:'4px',lineHeight:'13px'}}>{placeholders.xaridSanasiSelectStyle}</p>

                                }
                        </div>

                        <div className="col-3 col-sm-12 ">
                            <label htmlFor={'status'}>Xarid statusi</label>
                            <select name="" value={input.xaridstatusi} onChange={xaridstatusi}
                                className={'form-control'}
                                id={'status'}>
                                <option value="1">Tanlash</option>
                                {/*TaminotReducer.taminot.map(item =>*/}
                                {/*input.diller==''?input.diller = item.id*/}
                                {/*:<option value={item.id}>{item.name}</option>)*/}
                                <option value="2">Qabul qilindi</option>
                            </select>
                            {
                                input.xaridstatusi ? "":
                                <p style={{color:'red',marginTop:'4px',lineHeight:'13px'}}>{placeholders.xaridStatusiSelectStyle}</p>
                            }
                            <label htmlFor={'qosh'} className={'mt-4'}>Qo`shimcha Hujjat</label>
                            <input type="file" value={input.qoshimchahujjat} onChange={qoshimchahujjat}
                                className={'form-control'} />
                        </div>
                    </div>

                    <Modal isOpen={active} toggle={toggle} style={{ width: '90%' }}>
                        <ModalHeader>
                            Yangi qo`shish / taxrirlash
                        </ModalHeader>
                        <ModalBody>
                            <div className={'text-center'}>
                                <input type="radio" id={'radio1'} name={'l'} value={input.lang1} onChange={lang1} />
                                <label htmlFor={'radio1'}>lang_v1.induvidial</label>
                                <input type="radio" id={'radio2'} name={'l'} value={input.dukon} onChange={dukon} />
                                <label htmlFor={'radio2'}>Do`kon</label>
                            </div>
                            <label htmlFor={'id1'}>ID Raqami</label>
                            <input type="number" className={'form-control'} value={input.idraqam} onChange={idraqam}
                                placeholder={'ID raqami'} />
                            <div className={'d-flex justify-content-between mt-3'}>
                                <div>
                                    <label htmlFor={'log'}>Login</label>
                                    <input value={input.login} onChange={login} type="text" className={'form-control'}
                                        id={'log'} />
                                    <label htmlFor={'tel'}>Tel:</label>
                                    <input type="number" onChange={tel} value={input.tel} className={'form-control'}
                                        id={'tel'} />
                                </div>
                                <div>
                                    <label htmlFor={'ismi'}>Ismi</label>
                                    <input type="text" value={input.ismi} onChange={ismi} className={'form-control'} />
                                    <label htmlFor={'ikki'}>Ikkinchi raqam</label>
                                    <input type="number" value={input.ikkinciraqam} onChange={ikkinciraqam}
                                        className={'form-control'} id={'ikki'} />
                                </div>
                            </div>
                            <hr />
                            <div className={'d-flex justify-content-between mt-3'}>
                                <div>
                                    <label htmlFor={'log2'}>Otasining ismi</label>
                                    <input type="text" className={'form-control'} value={input.otaismi}
                                        onChange={otaismi}
                                        id={'log2'} />
                                    <label htmlFor={'tel2'}>Telegram:</label>
                                    <input type="text" className={'form-control'} value={input.telegram}
                                        onChange={telegram}
                                        id={'tel2'} />
                                </div>
                                <div>
                                    <label htmlFor={'ismi2'}>Familiyasi</label>
                                    <input type="text" className={'form-control'} value={input.familiyasi}
                                        onChange={familiyasi} id={'ismi2'} />
                                    <label htmlFor={'ikkii2'}>Email</label>
                                    <input type="text" className={'form-control'} value={input.email} onChange={email}
                                        id={'ikki2'} />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={savedealer} className={'btn btn-outline-primary'}>Saqlash</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div className={'col-md-10 mt-4 offset-1'}>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" value={input.shtrix} onChange={shtrix} className={'form-control'}
                                placeholder={'Mahsulot shtrix kodi yoki nomi'} />
                                {
                                    (input.xaridmiqdori==="" && input.donanarxi==="" && input.donasotish==="") ?
                                    <div><p style={{color:"red",textAlign:'center',marginTop:'4px'}}>Mahsulot nomi yoki shtrix kodini kiriting </p></div> :
                                    ""
                                }
                            <div className="table-responsive">
                                <table className={'table mt-3 border'}>
                                    <thead>
                                        <tr>
                                            <th>Mahsulot nomi</th>
                                            <th>Xarid miqdori</th>
                                            <th>Sotib olish narxi</th>
                                            <th>Jami summa</th>
                                            <th>Sotish narxi</th>
                                            <th>x</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mah
                                                .map(item => <tr key={item.id}>
                                                    <td><h5>{item.name}</h5></td>
                                                    <td>
                                                        <input type="number"
                                                            value={item.quantity} onChange={(event) => xaridmiqdori(event, item.id)}
                                                            placeholder={placeholders.xaridMiqdoriPlaceholder}
                                                            id="xaridMiqdor" className={'form-control'} />

                                                        <select name="" className={'form-control mt-1'} value={input.kg}
                                                            onChange={kg} id="">
                                                            {
                                                                kgreducer.kg.map(item => <option
                                                                    value={item.id}>{item.name}</option>)
                                                            }
                                                            {console.log(kgreducer.kg)}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input type="number" value={item.buyPrice} id='sotibOlishInput'
                                                            onChange={(event) => donanarxi(event, item.id)}
                                                            placeholder={placeholders.donaNarxiPlaceholder} className={'form-control'} />
                                                    </td>

                                                    <td>
                                                        <h5>{item.buyPrice * item.quantity}</h5>
                                                    </td>
                                                    <td>
                                                        <input type="number" value={item.salePrice} id='sotishNarxiInput'
                                                            onChange={(event) => donasotish(event, item.id)}
                                                            className={'form-control'} placeholder={placeholders.donaSotishNarxiPlaceholder} />
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteM(item.id)}
                                                            className={'btn btn-danger'}>x
                                                        </button>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <h6>Jami maxsulotlar: {xisob}</h6>
                            <h6>Jami summa: {jamixisob}</h6>
                        </div>
                    </div>
                </div>

                <h5 className={'text-center mt-5'}>To`lov qilish</h5>
                <div className="col-md-10 offset-1 border p-4 d-flex">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <label htmlFor={'avans'}>Avans 0 / To`lov so`mmasi</label>
                            <input type="number" className={'form-control'} value={input.avans} placeholder={placeholders.tolovSummasiPlaceholder} onChange={avans}
                                id={'avans'} />
                            <label className={'mt-3'} htmlFor={'tol'}>To`lov usuli</label>
                            {
                                console.log(PayReducer.getPay)
                            }
                            <select name="" id={'tol'} className={'form-control mb-3'} value={input.tulovusuli}
                                onChange={tulovusuli}>
                                {/*<option value="1">Naqd</option>*/}
                                {/*<option value="2">Pastik</option>*/}

                                {
                                    PayReducer.paymethod.map(item=>
                                        input.tulovusuli==''?input.tulovusuli = item.id:
                                            <option value={item.id}>{item.type}</option>)
                                }
                            </select>
                            {
                                input.tulovusuli ? "":
                                <p style={{color:'red',marginTop:'4px',lineHeight:'13px'}}>{placeholders.tolovUsuliSelectStyle}</p>
                            }
                        </div>
                        <div className="col-6 col-sm-12">
                            <label htmlFor={'paid'}>Paid on</label>
                            <input type="date" value={input.paidon} onChange={paidon} className={'form-control'}
                                id={'paid'} />
                            <label htmlFor={'area1'} className={'mt-3'}>To'lov statusi</label>

                            <select name="" id={'area1'} className={'form-control'} value={input.eslatma}
                                onChange={eslatma}>
                                {
                                    tolovreducer.tolovholati.map(item => <option value={item.id}>{item.status}</option>)
                                }
                            </select>
                        </div>

                        <div className={'col-10 col-sm-11 offset-1 mt-5 border p-2 d-flex'}>
                            <div className="row">
                                <div className="col-6 col-sm-11">
                                    <div className="btnBox">
                                        <label htmlFor={'yet'}>Yetkazib berish manzili</label>
                                        <input type="text" id={'yet'} value={input.yetkazibberish}
                                             onChange={yetkazibberish}
                                            className={'form-control'} />
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
                                                id={'l1'} />
                                            <label htmlFor={'l2'} className={''}>Yetkazib berish narxi</label>
                                            <input type="text" className={'form-control'}
                                                value={input.yetkazibberishnarxi}
                                                onChange={yetkazibberishnarxi} id={'l2'} />
                                        </ModalBody>
                                        <ModalFooter>
                                            <button className={'btn btn-primary'} onClick={saqla}>Saqlash</button>
                                            <button className={'btn btn-primary'} onClick={toggle2}>Chiqish</button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div className="col-6 col-sm-10">
                                    <label htmlFor={'yet2'}>(+)Yetkazib berish narxi</label>
                                    <input type="text" value={input.yetkazibberishnarxi2} placeholder={placeholders.yetkazibBerishNarxiPlaceholder}
                                       id="yetkizibBerishNarxiSelect" onChange={yetkazibberishnarxi2}
                                        className={'form-control'} />
                                </div>
                            </div>

                        </div>
                        <div className={'col-10 col-sm-10 offset-1 mt-5 border p-4'}>
                            <h5>Qarz miqdori!: 0.00</h5>
                            {
                                input.diller && input.xaridstatusi && input.tulovusuli && input.baza && input.xaridsanasi && input.qisqaeslatma && input.yetkazibberishnarxi2  ?
                                    <Link to={'/headerthird/xaridlarRuyxati'}>
                                        <button className={'btn btn-primary'} onClick={saqla}>Saqlash</button>
                                    </Link>
                                    :
                                <button className={'btn btn-danger'} onClick={saqla}>Saqlash</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((MaxsulotlarRoyxariReducer,PayReducer, XaridReducer, kgreducer, users, TaminotReducer, branchreducer, tolovreducer), {
    getMaxsulotRuyxati,
    getXarid,
    getkg,
    getXarid2,
    getXarid5,
    getPay,
    saveXarid,
    editXarid,
    getTaminot,
    saveTaminot,
    getbranch,
    gettolovholati
})(Xarid)