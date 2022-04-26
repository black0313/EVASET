import './taxrirl.css'
import {useState, useEffect} from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import MaxsulotlarRoyxariReducer, {
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati,
    editMaxsulotRuyxati
} from "../../reducer/MaxsulotlarRoyxariReducer";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import kgreducer, {getkg, savekg} from "../../../../../../reducer/kgreducer";
import users from "../../../../../../reducer/users";
import FirmaReducer, {getFirma, saveFirma} from "../../reducer/FirmaReducer";
import BolimReducer, {getBolim, saveBolim} from "../../reducer/BolimReducer";
import branchreducer, {getbranch} from "../../../../../../reducer/branchreducer";
import photoreducer, {savephoto} from "../../../../../../reducer/photoreducer";
import {toast} from "react-toastify";

function Taxrirlash({
                        photoreducer,
                        savephoto,
                        editMaxsulotRuyxati,
                        BolimReducer,
                        getBolim,
                        saveMaxsulotRuyxati,
                        deleteMaxsulotRuyxati,
                        getMaxsulotRuyxati,
                        match,
                        MaxsulotlarRoyxariReducer,
                        kgreducer,
                        getkg,
                        users,
                        saveBolim,
                        savekg,
                        FirmaReducer,
                        getFirma,
                        saveFirma,
                        branchreducer,
                        getbranch
                    }) {

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const [placeholders, setPlaseholders] = useState(
        {
            maxsulotNomiPlaceholder: '',
            shtrixKodPlaceholder: '',
            bazalarPlaceholder: '',
            miqdorPlaceholder: '',
            soliqsizNarxPlaceholder: '',
            soliqbilanNarxPlaceholder: '',
            foydaPlaceholder: '',
            sotishNarxiPlaceholder: '',
            sotibOlishNarxiPlaceholder: '',
        }
    )

    const [input, setInput] = useState(
        {
            mahsulotnomi: '',
            shtrixkod: '',
            //----
            ulcovbirligi: '',
            ulcovnomi: '',
            ulcovqisqanomi: '',
            //-----
            ferma: '',
            brandnomi: '',
            qisqaeslatma: '',
            photoIds: '',
            // ----
            bazalar: '',
            bolim: '',
            bolim2: '',
            ogohmiqdor: '',
            //-------------
            soliqsiznarx: 1,
            foydafoiz: '',
            sotishnarxi: '',
            mahsulotrasmi: '',
            soliqbnnarx: 1,
            sotibolishnarxi: '',
            miqdorMaxsulot: '',
            muddatmaxsulot:'',
            bolimnomi:'',
        }
    )

    function mahsulotnomi(e) {
        input.mahsulotnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolimnomi(e) {
        input.bolimnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function muddatmahsulot(e) {
        input.muddatmaxsulot = e.target.value
        let a = {...input}
        setInput(a)
    }

    function shtrixkod(e) {
        input.shtrixkod = e.target.value
        let a = {...input}
        setInput(a)
    }

    function shtrixkodturi(e) {
        input.shtrixkodturi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ulcovbirligi(e) {
        input.ulcovbirligi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ulcovNomi(e) {
        input.ulcovnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ulcovqisqaNomi(e) {
        input.ulcovqisqanomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ulcovunlikasr(e) {
        input.ulcovunlikasr = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ferma(e) {
        input.ferma = e.target.value
        let a = {...input}
        setInput(a)
    }

    function miqdorMaxsulot(e) {
        input.miqdorMaxsulot = e.target.value
        let a = {...input}
        setInput(a)
    }

    function fermabrandnomi(e) {
        input.brandnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function fermaqisqaeslatma(e) {
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [bazafilter, setbazafilter] = useState([])

    function bazalar(e) {

        if (input.bazalar===''){
            input.bazalar = e.target.value
            let a = {...input}
            setInput(a)
            setactivebaza(false)
        }else {
            input.bazalar = e.target.value
            let a = {...input}
            setInput(a)
            setactivebaza(true)
        }
    }

    function bolim(e) {
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
    }

    function bolim2(e) {
        input.bolim2 = e.target.value
        let a = {...input}
        setInput(a)
    }

    function ogohmiqdor(e) {
        input.ogohmiqdor = e.target.value
        let a = {...input}
        setInput(a)
    }

    function soliqsiznarx(e) {
        input.soliqsiznarx = e.target.value
        let a = {...input}
        setInput(a)
    }

    function foydafoiz(e) {
        input.foydafoiz = e.target.value
        let a = {...input}
        setInput(a)
    }

    function sotishnarxi(e) {
        input.sotishnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function sotibolishnarxi(e) {
        input.sotibolishnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function mahsulotrasmi(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        savephoto(data)
    }

    function soliqbnnarx(e) {
        input.soliqbnnarx = e.target.value
        let a = {...input}
        setInput(a)
    }

    function toggle() {
        setActive(!active)
    }

    function toggle2() {
        setActive2(!active2)
    }

    function toggle3() {
        setActive3(!active3)
    }

    const [bolimactive,setbolimactive] = useState(false)

    function toggle4(){
        setbolimactive(!bolimactive)
    }

    function editMax() {
        // console.log(match.params)
        if (match.params.id !== undefined) {
            getMaxsulotRuyxati()
        }
        MaxsulotlarRoyxariReducer.maxsulotlar.map(item => {
            if (item.id == match.params.id) {
                input.mahsulotnomi = item.name
                input.shtrixkod = item.barcode
                input.sotibolishnarxi = item.salePrice
                input.ferma = item.brand.id
                input.bolim = item.category.id
                input.ulcovbirligi = item.measurement.id
                input.foydafoiz = item.minQuantity
                input.sotishnarxi = item.buyPrice
                input.amaldagisoliq = item.tax
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {
        if (input.mahsulotnomi !== "" && input.shtrixkod !== "" && input.bazalar !== "" && input.miqdorMaxsulot !== "" &&   input.foydafoiz !== "" && input.sotibolishnarxi !== "") {
            if (match.params.id !== undefined) {
                editMaxsulotRuyxati({
                    name: input.mahsulotnomi,
                    quantity: input.miqdorMaxsulot,
                    barcode: input.shtrixkod,
                    brandId: input.ferma,
                    categoryId: input.bolim,
                    measurementId: input.ulcovbirligi,
                    photoIds: [2],
                    minQuantity: input.ogohmiqdor,
                    buyPrice: input.sotibolishnarxi,
                    salePrice: input.sotishnarxi,
                    tax: input.sotibolishnarxi,
                    branchId: [1],
                    expireDate: null,
                    dueDate: null,
                    id: match.params.id,
                })
            } else {
                saveMaxsulotRuyxati({
                    name: input.mahsulotnomi,
                    quantity: input.miqdorMaxsulot,
                    barcode: input.shtrixkod,
                    brandId: input.ferma,
                    categoryId: input.bolim,
                    measurementId: input.ulcovbirligi,
                    photoIds: [photoreducer.photo.id],
                    minQuantity: input.ogohmiqdor,
                    buyPrice: input.sotibolishnarxi,
                    salePrice: parseFloat(input.sotibolishnarxi*input.foydafoiz/100)+parseFloat(input.sotibolishnarxi),
                    tax: input.sotibolishnarxi,
                    branchId: [1],
                    expireDate: input.muddatmaxsulot,
                    dueDate: new Date().getDate()
                })
            }

            setPlaseholders(
                {
                    maxsulotNomiPlaceholder: '',
                    shtrixKodPlaceholder: '',
                    bazalarPlaceholder: '',
                    miqdorPlaceholder: '',
                    soliqsizNarxPlaceholder: '',
                    soliqbilanNarxPlaceholder: '',
                    foydaPlaceholder: '',
                    sotishNarxiPlaceholder: '',
                    sotibOlishNarxiPlaceholder: '',
                }
            )
        } else {
            setPlaseholders(
                {
                    maxsulotNomiPlaceholder: 'Mahsulot nomini kiriting...',
                    shtrixKodPlaceholder: 'Shtrix kodni kiriting...',
                    bazalarPlaceholder: 'Baza nomini kiriting...',
                    miqdorPlaceholder: 'Miqdor kiriting...',
                    soliqsizNarxPlaceholder: 'Soliqsiz narxini kiriting...',
                    soliqbilanNarxPlaceholder: 'Soliq bilan narxini kiriting...',
                    foydaPlaceholder: 'Foydani kiriting...',
                    sotishNarxiPlaceholder: 'Sotish narxini kiriting..',
                    sotibOlishNarxiPlaceholder: 'Sotib olish narxini kiriting...',
                }
            )
        }
    }

    function saqlakg() {
        savekg({
            name: input.ulcovnomi,
            businessId: users.businessId
        })
        toggle()
        input.ulcovnomi = ''
        input.ulcovqisqanomi = ''
        input.ulcovunlikasr = ''
    }

    function saqlaBolim(){
        saveBolim({
            name: input.bolimnomi,
            businessId: users.businessId,
        })
        toggle4()
    }

    function saqlabrand() {
        saveFirma({
            name: input.brandnomi,
            businessId: users.businessId
        })
        toggle2()
        input.brandnomi = ''
        input.qisqaeslatma = ''
    }

    function bazaClick() {
        branchreducer.branch.map((item, index) => {
            input.bazalar = item.name
            let a = {...input}
            setInput(a)
        })
    }

    const [activebaza,setactivebaza] = useState(false)


    useEffect(() => {
        getMaxsulotRuyxati(users.businessId)
        getBolim(users.businessId)
        getbranch(users.businessId)
        editMax()
    }, [MaxsulotlarRoyxariReducer.current])

    useEffect(() => {
        getkg(users.businessId)
    }, [kgreducer.current])

    useEffect(() => {
        getFirma(users.businessId)
    }, [FirmaReducer.current])

    return (
        <div className={'mt-5 contanerT'}>
            <h4 className={'text-center'}>Mahsulot qo`shish / Taxrirlash</h4>
                <div className="row p-md-3">
                    <div className="inputs col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'maxNomi'}>Mahsulot nomi</label>
                        <input type="text" value={input.mahsulotnomi} placeholder={placeholders.maxsulotNomiPlaceholder}
                               onChange={mahsulotnomi} id={'maxNomi'} className={'form-control '}/>

                        <label className={'mt-3'} htmlFor={'olcov'}>O`lchov birligi</label>
                        <div className={'d-flex justify-content-between '}>

                            <select name="" id={'olcov'} onChange={ulcovbirligi} value={input.ulcovbirligi}
                                    className={'form-control'}>
                                {
                                    kgreducer.kg.map((item, index) =>
                                        input.ulcovbirligi == '' ? input.ulcovbirligi = item.id :
                                            <option value={item.id}>
                                                {item.name}
                                            </option>)
                                }
                            </select>
                            <h2 onClick={toggle} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol'}>Bo`lim</label>
                        <div className={'d-flex'}>
                            <select name="" onChange={bolim} value={input.bolim} className={'form-control'} id={'bol'}>
                                {
                                    BolimReducer.bolimlar.map(item =>
                                        input.bolim == '' ? input.bolim = item.id :
                                            <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h2 onClick={toggle4} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                    </div>

                    <Modal isOpen={bolimactive} toggle={toggle4}>
                        <ModalHeader>
                            Bo`lim qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'ism'}>Bo`lim nomi</label>
                            <input type="text" className={'form-control'} value={input.bolimnomi} onChange={bolimnomi}/>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={saqlaBolim} className={'btn btn-outline-primary'}>Saqlash</button>
                            <button onClick={toggle4} className={'btn btn-outline-primary'}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                    <div className="col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'shtrixKod'}>Shtrix kod</label>
                        <input type="number" id={'shtrixKod'} value={input.shtrixkod}
                               placeholder={placeholders.shtrixKodPlaceholder} onChange={shtrixkod}
                               className={'form-control'}/>

                        <label className='mt-3' htmlFor={'firma'}>Firma</label>
                        <div className={'d-flex'}>
                            <select name="" value={input.ferma} onChange={ferma} id={'firma'}
                                    className={'form-control'}>
                                {
                                    FirmaReducer.firmalar.map(item =>
                                        input.ferma == '' ? input.ferma = item.id :
                                            <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h2 onClick={toggle2} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol2'}>Bo`lim ichida bolim</label>
                        <select name="" id={'bol2'} value={input.bolim2} onChange={bolim2} className={'form-control'}>
                            {/*<option value="1">Tanlash</option>*/}
                            <option value="2">Mavjud emas</option>
                        </select>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label htmlFor={'ppp'} className={'mt-3'}>Miqdori</label>
                        <input className={'form-control taxrirlashInputValudetion'} type="number"
                               value={input.miqdorMaxsulot} id='miqdor' placeholder={placeholders.miqdorPlaceholder}
                               onChange={miqdorMaxsulot}/>

                        <label htmlFor="" className={'mt-3 '}>Bazalar</label>
                        <input type="text" id='bazalar' value={input.bazalar}
                               placeholder={placeholders.bazalarPlaceholder} onChange={bazalar}
                               className={'form-control taxrirlashInputValudetion'}/>
                        {
                            branchreducer.branch.filter(val => {
                                if (input.bazalar === '') {
                                } else if (val.name.toUpperCase().includes(input.bazalar.toUpperCase())) {
                                    return val
                                }
                            }).map(item =><ul key={item.id}>
                                    {
                                        activebaza?<li onClick={bazaClick} className={'click'}>{item.name}</li>:''
                                    }
                                </ul>
                                // <button onClick={bazaClick} className={"btn"} value={item.id}>{item.name}</button>
                            )
                        }

                    </div>

                </div>
            <div className="row mt-4 p-md-3">
                    <div className={'col-md-6 col-sm-12 mb-3'}>
                        <label htmlFor={'ogoh'}>Ogohlantiruvchi miqdor</label>
                        <input type="number" value={input.ogohmiqdor} onChange={ogohmiqdor}
                               className={'form-control'} id={'ogoh'}/>
                        <label htmlFor={'yaroq'} className={'mt-3'}>Mahsulot yaroqlilik muddati</label>
                        <input type="date" className={'form-control'} value={input.muddatmaxsulot} onChange={muddatmahsulot}/>
                    </div>

                    <div className={'col-md-6 col-sm-12'}>
                        <p className={"p-0 m-0"}>Mahsulot rasm qo'shish</p>
                        <label htmlFor={'mahRasm'}>
                            <p className={'btn btn-primary'}>Add img</p>
                        </label>
                        <input type="file" className={'form-control d-none'} value={input.mahsulotrasmi} onChange={mahsulotrasmi} id={'mahRasm'}
                               style={{background: 'transparent'}}/>
                    </div>
            </div>

            <Modal isOpen={active} toggle={toggle}>
                <ModalHeader>
                    Birlik qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Nomi</label>
                    <input type="text" onChange={ulcovNomi} value={input.ulcovnomi} className={'form-control'}
                           id={'nomi'}/>
                    <label htmlFor={'nomi2'} className={'mt-2'}>Qisqa nom masalan Kg,MM</label>
                    <input type="text" id={'nomi2'} value={input.ulcovqisqanomi} onChange={ulcovqisqaNomi}
                           className={'form-control'}/>
                </ModalBody>
                <ModalFooter>
                    <button onClick={saqlakg} className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={active2} toggle={toggle2}>
                <ModalHeader>
                    Brand qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Brand Nomi</label>
                    <input onChange={fermabrandnomi} value={input.brandnomi} type="text" className={'form-control'}
                           id={'nomi'}/>
                    <label htmlFor={'nomi2'}>Qisqa eslatma</label>
                    <input type="text" id={'nomi2'} onChange={fermaqisqaeslatma} value={input.qisqaeslatma}
                           className={'form-control'}/>
                </ModalBody>
                <ModalFooter>
                    <button onClick={saqlabrand} className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle2}>CHIQISH</button>
                </ModalFooter>
            </Modal>

            <div className="row mt-5 p-3">

                <div className="table-responsive">
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th>Soliq</th>
                            <th>Foyda foizda(%)</th>
                            <th>Sotib oli sh narxi</th>
                            <th>Sotish narxi</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor={'soliqszNarx'}>Soliqsiz narx (tan narxi)</label>
                                <h4>{input.sotibolishnarxi}  so`m</h4>
                                {/*<input type="number" value={input.soliqsiznarx}*/}
                                {/*       placeholder={input.sotibolishnarxi===''?placeholders.soliqsizNarxPlaceholder:"Mahsulot tan narxi sotib olish narxiga teng"}*/}
                                {/*       className=' form-control' onChange={soliqsiznarx} id={'soliqszNarx'}/><br/>*/}

                                {/*<label htmlFor={'soliqszNarx2'}>Soliq bn narx </label>*/}
                                {/*<input type="number" id={'soliqszNarx2'} value={input.soliqbnnarx}*/}
                                {/*       placeholder={placeholders.soliqbilanNarxPlaceholder}*/}
                                {/*       className='taxrirlashInputValudetion mt-2 form-control' onChange={soliqbnnarx}/>*/}

                                {/*<h3>*/}
                                {/*    {*/}
                                {/*        input.foydafoiz*input.sotibolishnarxi + " so`m"*/}
                                {/*    }*/}
                                {/*</h3>*/}
                            </td>
                            <td>
                                <label htmlFor={'foy'}>Foyda foizda</label><br/>
                                <input type="number" id={'foy'} placeholder={placeholders.foydaPlaceholder}
                                       className='taxrirlashInputValudetion form-control' value={input.foydafoiz}
                                       onChange={foydafoiz}/>
                            </td>
                            <td>
                                <label htmlFor={''}>Sotib olish narxi</label><br/>
                                <input type="number" id='sotishNarxi' placeholder={placeholders.sotibOlishNarxiPlaceholder}
                                       className='taxrirlashInputValudetion form-control' value={input.sotibolishnarxi}
                                       onChange={sotibolishnarxi}/>
                            </td>
                            <td>
                                <label htmlFor={''}>Sotish narxi</label><br/>
                                <input type="number" id='sotibOlishNarxi' className={'form-control'}
                                       placeholder={placeholders.sotishNarxiPlaceholder}
                                       value={parseFloat(input.sotibolishnarxi*input.foydafoiz/100)+parseFloat(input.sotibolishnarxi)} onChange={sotishnarxi}/>
                                {/*<h4 className={'mt-3'}>{input.foydafoiz*input.sotibolishnarxi+ '  so`m'}</h4>*/}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='d-flex justify-content-end'>
                    {
                        (input.mahsulotnomi === "" || input.shtrixkod === "" || input.bazalar === "" || input.miqdorMaxsulot === "" ||  input.foydafoiz === "" ||  input.sotibolishnarxi === "") ?
                            <button className={'btn btn-success mt-4'} onClick={saqla}>Saqlash</button> :
                            <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot'}>
                                <button className={'btn btn-success mt-4'} onClick={saqla}>Saqlash</button>
                            </Link>
                    }
                </div>
            </div>
        </div>

    )
}

export default connect((MaxsulotlarRoyxariReducer, users, kgreducer, FirmaReducer, BolimReducer, branchreducer, photoreducer), {
    getMaxsulotRuyxati,
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati,
    getkg,
    savekg,
    saveBolim,
    getFirma,
    saveFirma,
    getBolim,
    getbranch,
    savephoto,
})(Taxrirlash)
