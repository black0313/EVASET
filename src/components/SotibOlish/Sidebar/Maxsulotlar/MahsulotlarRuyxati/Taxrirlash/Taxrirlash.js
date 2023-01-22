import './taxrirl.css'
import {useState, useEffect} from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import MaxsulotlarRoyxariReducer, {
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati,
    editMaxsulotRuyxati
} from "../../reducer/MaxsulotlarRoyxariReducer";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import kgreducer, {getkg, savekg} from "../../../../../../reducer/kgreducer";
import users from "../../../../../../reducer/users";
import FirmaReducer, {getFirma, saveFirma} from "../../reducer/FirmaReducer";
import BolimReducer, {getBolim, saveBolim} from "../../reducer/BolimReducer";
import branchreducer, {getbranch} from "../../../../../../reducer/branchreducer";
import photoreducer, {savephoto} from "../../../../../../reducer/photoreducer";
import Ichkibolimred, {getichki} from "../../reducer/Ichkibolimred";
import SoliqReducer from "../../../Settings/DukonSozlamalari/reducers/SoliqReducer";
import Select from 'react-select'
import {useForm} from "react-hook-form";
import ValyutaReducer from "../../../Settings/DukonSozlamalari/reducers/ValyutaReducer";
import {getValue} from "@testing-library/user-event/dist/utils";
import {useTranslation} from "react-i18next";

function Taxrirlash({
                        ValyutaReducer,
                        photoreducer,
                        savephoto,
                        Ichkibolimred,
                        editMaxsulotRuyxati,
                        SoliqReducer,
                        BolimReducer,
                        getBolim,
                        saveMaxsulotRuyxati,
                        getichki,
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
    const {t} = useTranslation()


    const [input, setInput] = useState(
        {

            photoIds: '',
            // ----
            bazalar: [],
            bolim: '',
            bolim2: '',
            ogohmiqdor: '',
            //-------------

            mahsulotrasmi: '',
            muddatmaxsulot: '',
            bolimnomi: '',
            ichkibolim: '',
            selectvalue: [],
            photoID: [],
            changedate: ''
        }
    )

    function ichkibolim(e) {
        input.ichkibolim = e.target.value
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
        console.log(input.muddatmaxsulot)
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

    function mahsulotrasmi(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        savephoto(data)
    }

    function toggle() {
        setActive(!active)
    }

    function toggle2() {
        setActive2(!active2)
    }

    const [bolimactive, setbolimactive] = useState(false)

    function toggle4() {
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
                input.ferma = item.brand?.id
                input.bolim = item.category?.id
                input.ulcovbirligi = item.measurement?.id
                input.foydafoiz = item.minQuantity
                input.sotishnarxi = item.buyPrice
                input.amaldagisoliq = item.tax
                input.photoID = item.photo?.id
                input.ogohmiqdor = item.minQuantity
                input.miqdorMaxsulot = item.quantity
                input.changedate = item.expireDate
                input.selectvalue = [item.branch].map(({
                                                           name: label,
                                                           id: value, ...rest
                                                       }) => ({label, value, ...rest}));
                let a = {...input}
                setInput(a)
            }
        })
        changedates()
    }

    function changedates() {
        let a = input.changedate
        let b = new Date(a)
        let day = b.getDay() + 1
        let month = b.getMonth() + 1
        let year = b.getFullYear()

        let date = year + "/" + month + "/" + day
        console.log(date)
        input.muddatmaxsulot = date
        let d = {...input}
        setInput(d)
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

    function saqlaBolim() {
        saveBolim({
            name: input.bolimnomi,
            businessId: users.businessId,
        })
        toggle4()
        input.bolimnomi = ''
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



    useEffect(() => {
        getMaxsulotRuyxati(users.businessId)
        getBolim(users.businessId)
        getbranch(users.businessId)
        getichki(users.businessId)
        editMax()
    }, [MaxsulotlarRoyxariReducer.current])

    useEffect(() => {
        getkg(users.businessId)
    }, [kgreducer.current])

    useEffect(() => {
        getFirma(users.businessId)
    }, [FirmaReducer.current])

    useEffect(()=>{
       getBolim(users.businessId)
    },[BolimReducer.current])
    function changeselect(e) {
        input.selectvalue = e
        input.bazalar = []
        e.map(item => {
            let b = input.bazalar
            b.push(item.value)
        })
        let a = {...input}
        setInput(a)
    }

    const {register, handleSubmit, setValue,getValues, resetField, formState: {errors}} = useForm()

    function save(data){
        saveMaxsulotRuyxati({
            ...data, expireDate:input.muddatmaxsulot,dueDate: new Date().getDate(),
            photoIds: [photoreducer.photo.id],branchId: input.bazalar, businessId: users.businessId
        })
    }

    function onSubmit(data) {
        console.log(data);
        save(data)
        history.push('/headerthird/mahsulotRuyxati/barcaMahsulot')
    }

    const history = useHistory()


    return (
        <div className={'mt-5 contanerT'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className={'text-center'}>{t('ProductEdit.1')}</h4>
                <div className="row p-md-3">
                    <div className="inputs col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'maxNomi'}>{t('ProductEdit.2')}</label>
                        <input type="text"
                               {...register('name', {required: true})}
                               placeholder={errors.name ? errors.name?.type === "required" && "Name num is required" : 'name'}
                               id={'maxNomi'} className={'form-control '}/>

                        <label className={'mt-3'} htmlFor={'olcov'}>{t('ProductList.5')}</label>
                        <div className={'d-flex justify-content-between '}>

                            <select name="" id={'olcov'}
                                    {...register('measurementId', {required:true})}
                                    className={'form-control'}>
                                {
                                    kgreducer.kg.map((item, index) =>
                                        <option value={item.id}>
                                            {item.name}
                                        </option>)
                                }
                            </select>
                            <h2 onClick={toggle} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol'}>{t('ProductList.4')}</label>
                        <div className={'d-flex select-group'}>
                            <select name="" className={'form-control'}
                                    {...register('categoryId', {required:true})}
                                    id={'bol'}>
                                {
                                    BolimReducer.bolimlar.map(item =>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h2 onClick={toggle4} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                    </div>

                    <Modal isOpen={bolimactive} toggle={toggle4}>
                        <ModalHeader>
                            {t('ProductEdit.3')}
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'ism'}>{t('ProductEdit.4')}</label>
                            <input type="text" className={'form-control'} value={input.bolimnomi} onChange={bolimnomi}/>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={saqlaBolim} className={'btn btn-outline-primary'}>{t('Buttons.6')}</button>
                            <button onClick={toggle4} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <div className="col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'shtrixKod'}>{t('ProductEdit.5')}</label>
                        <input type="number" id={'shtrixKod'}
                               {...register('barcode', {required: true})}
                            placeholder={errors.barcode ? errors.barcode?.type === "required" && "Barcode is required": 'barcode'}
                               defaultValue={''}
                               className={'form-control'}/>

                        <label className='mt-3' htmlFor={'firma'}>{t('ProductList.7')}</label>
                        <div className={'d-flex'}>
                            <select name=""
                                    {...register('brandId', {required:true})}
                                    id={'firma'}
                                    className={'form-control'}>
                                {
                                    FirmaReducer.firmalar.map(item =>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h2 onClick={toggle2} className={'h2'} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol2'}>{t('ProductEdit.6')}</label>
                        <select name="" id={'bol2'} value={input.ichkibolim} onChange={ichkibolim}
                                className={'form-control'}>

                            {
                                Ichkibolimred.ichkibolim.filter(val => input.bolim == val.parentCategory).map(item =>
                                    <option value={item.id}>{item.name}</option>)
                            }

                        </select>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label htmlFor={'ppp'} className={'mt-3'}>{t('ProductEdit.7')}</label>
                        <input className={'form-control taxrirlashInputValudetion'} type="number"
                               {...register('quantity', {required:true})}
                            placeholder={errors.quantity ? errors.quantity?.type === "required" && 'Quantity is required': 'quantity'}
                               id='miqdor'
                               onChange={miqdorMaxsulot}/>

                        <label htmlFor="bazalar" className={'mt-3 '}>{t('ProductList.8')}</label>

                        <Select options={branchreducer.branches}
                                isMulti={true} class={'form-control'}
                                defaultValue={input.selectvalue} onChange={changeselect}/>
                        <label htmlFor={'ogoh'} className={'mt-4'}>{t('ProductEdit.8')}</label>
                        <input type="number"
                               {...register('minQuantity', {required:true})}
                               placeholder={errors.minQuantity ? errors.minQuantity?.type === "required" && "minQuantity is required":'minQuantity'}
                               defaultValue={''}
                               className={'form-control'} id={'ogoh'}/>
                    </div>

                </div>
                <div className="row mt-4 p-md-3">
                    <div className={'col-md-6 col-sm-12 mb-3'}>

                        <label htmlFor={'yaroq'}>{t('ProductEdit.9')}</label>
                        <input type="date" className={'form-control'} value={input.muddatmaxsulot}
                               onChange={muddatmahsulot}/>
                    </div>

                    <div className={'col-md-6 col-sm-12'}>
                        <p className={"p-0 m-0"}>{t('ProductEdit.10')}</p>
                        <label htmlFor={'mahRasm'} style={{width:"100%"}}>
                            <p className={'btn btn-outline-primary form-control'}>{t('ProductEdit.10')}</p>
                        </label>
                        <input type="file" className={'form-control d-none'} value={input.mahsulotrasmi}
                               onChange={mahsulotrasmi} id={'mahRasm'}
                               style={{background: 'transparent'}}/>
                    </div>
                </div>

                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        {t('ProductEdit.12')}
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>{t('ProductEdit.13')}</label>
                        <input type="text" onChange={ulcovNomi} value={input.ulcovnomi} className={'form-control'}
                               id={'nomi'}/>
                        <label htmlFor={'nomi2'} className={'mt-2'}>{t('ProductEdit.14')} Kg,MM</label>
                        <input type="text" id={'nomi2'} value={input.ulcovqisqanomi} onChange={ulcovqisqaNomi}
                               className={'form-control'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={saqlakg} className={'btn btn-primary'}>{t('Buttons.6')}</button>
                        <button className={'btn btn-primary'} onClick={toggle}>{t('Buttons.7')}</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={active2} toggle={toggle2}>
                    <ModalHeader>
                        {t('ProductEdit.15')}
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>{t('ProductEdit.16')}</label>
                        <input onChange={fermabrandnomi} value={input.brandnomi} type="text" className={'form-control'}
                               id={'nomi'}/>
                        <label htmlFor={'nomi2'}>{t('Buttons.17')}</label>
                        <input type="text" id={'nomi2'} onChange={fermaqisqaeslatma} value={input.qisqaeslatma}
                               className={'form-control'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={saqlabrand} className={'btn btn-primary'}>{t('Buttons.6')}</button>
                        <button className={'btn btn-primary'} onClick={toggle2}>{t('Buttons.7')}</button>
                    </ModalFooter>
                </Modal>

                <div className="row mt-5 p-3">

                    <div className="table-responsive">
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>{t('ProductList.6')}</th>
                                <th>{t('ProductEdit.17')}(%)</th>
                                <th>{t('ProductList.11')}</th>
                                <th>{t('ProductList.12')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <label htmlFor={'soliqszNarx'}>{t('ProductEdit.18')}</label>
                                    <h4>{input.sotibolishnarxi} {ValyutaReducer.valyutactiveName}</h4>

                                </td>
                                <td>
                                    <label htmlFor={'foy'}>{t('ProductEdit.17')}</label><br/>
                                    <input type="number" id={'foy'}
                                           {...register("tax", {required:true,onChange:(e)=>{
                                                   setValue('salePrice', parseInt( e.target.value *getValues('buyPrice')/100+parseInt(getValues('buyPrice'))))
                                               }})}
                                           placeholder={errors.tax ? errors.tax?.type === "required" && "tax is required":'tax'}
                                           className='taxrirlashInputValudetion form-control'/>
                                </td>
                                <td>
                                    <label htmlFor={''}>{t('ProductList.11')}</label><br/>
                                    <input type="number" id='sotishNarxi'
                                           {...register("buyPrice", {required:true,onChange:(e)=>{
                                                   setValue('salePrice',parseInt(e.target.value*getValues('tax')/100+parseInt(e.target.value)))
                                               }})}
                                        placeholder={errors.buyPrice ? errors.buyPrice?.type === "required" && "buyPrice is required":'buyPrice'}
                                           className='taxrirlashInputValudetion form-control'/>

                                </td>
                                <td>
                                    <label htmlFor={''}>{t('ProductList.12')}</label><br/>
                                    <input type="number" id='sotibOlishNarxi' className={'form-control'}
                                        {...register('salePrice', {required:true,onChange:(e)=>{
                                                 setValue('tax',Math.round(parseFloat(e.target.value/getValues('buyPrice')-1)*100))
                                            }})}
                                        placeholder={errors.salePrice ? errors.salePrice?.type === "required" && "salePrice is required":'salePrice'}
                                    defaultValue={''}/>
                                    {/*<h4 className={'mt-3'}>{input.foydafoiz*input.sotibolishnarxi+ '  so`m'}</h4>*/}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className={'btn btn-success mt-4'} type={"submit"}>{t('Buttons.6')}</button>
                        {/*{*/}
                        {/*    (input.mahsulotnomi === "" || input.shtrixkod === "" || input.miqdorMaxsulot === "" || input.foydafoiz === "" || input.sotibolishnarxi === "") ?*/}
                        {/*        <button className={'btn btn-success mt-4'} onClick={saqla}>Saqlash</button> :*/}
                        {/*        <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot'}>*/}
                        {/*            <button className={'btn btn-success mt-4'} onClick={saqla}>Saqlash</button>*/}
                        {/*        </Link>*/}
                        {/*}*/}
                    </div>
                </div>
            </form>
        </div>

    )
}

export default connect((MaxsulotlarRoyxariReducer, ValyutaReducer, Ichkibolimred, SoliqReducer, users, kgreducer, FirmaReducer, BolimReducer, branchreducer, photoreducer), {
    getMaxsulotRuyxati,
    getichki,
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
