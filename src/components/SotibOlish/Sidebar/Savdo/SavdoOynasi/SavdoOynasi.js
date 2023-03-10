import img1 from '../../../../../img/pause1.png'
import img3 from '../../../../../img/calculator3.png'
import ReactTooltip from 'react-tooltip';
import img4 from '../../../../../img/note4.png'
import img5 from '../../../../../img/clipboard-close5.png'
import img6 from '../../../../../img/backward6.png'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import './savdoOynasi.css'
import SavdoOynaReducer, { deleteSavdo, editSavdo, getSavdo, saveSavdo } from "../reducer/SavdoOynaReducer";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati, getMaxsulotRuyxati2, saveMaxsulotRuyxati, getMaxsulotRuyxatibranch, getMaxsulotRuyxati3
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Calculator from "../../../header/Calculator/Calculator";
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import Final from "./Final/Final";
import Chegirma from "./Final/Chegirma";
import Eslatma from "./Final/Eslatma";
import users from "../../../../../reducer/users";
import { savdooynasi } from "../../../../../reducer/users";
import ReactToPrint from 'react-to-print';
import { useRef } from "react";
import MaxsulotQoshish from '../../Maxsulotlar/MahsulotlarRuyxati/Taxrirlash/Taxrirlash'
import Print from "./Print";
import MijozGuruxReducer, { getMijozGurux } from "../../Hamkorlar/reducer/MijozGuruxReducer";
import SavdoQoshishReducer, { saveSavdolar } from "../reducer/SavdoQoshishReducer";
import BolimReducer, { getBolim } from "../../Maxsulotlar/reducer/BolimReducer";
import FirmaReducer, { getFirma } from "../../Maxsulotlar/reducer/FirmaReducer";
import kgreducer, { getkg } from "../../../../../reducer/kgreducer";
import PayReducer, { getPay, getPay2 } from "../../../../../reducer/PayReducer";
import branchreducer, { getbranch } from "../../../../../reducer/branchreducer";
import TradeHistory, { getSavdolarHistory } from "../reducer/TradeHistory";
import { toast } from "react-toastify";
import XarajatlarReducer, { getXarajatlar, saveXarajatlar } from "../../Xarajatlar/reducer/XarajatlarReducer";
import XarajatTurlariReducer, { getXarajatlarTurlari } from "../../Xarajatlar/reducer/XarajatTurlariReducer";
import {useTranslation} from "react-i18next";
import Imagecom from "../../../../Imagecom";
import ValyutaReducer, {getValyuta,changeActivecur} from "../../Settings/DukonSozlamalari/reducers/ValyutaReducer";
function SavdoOynasi({
    saveXarajatlar,
    getXarajatlar,
    XarajatTurlariReducer,
    getMaxsulotRuyxati,
    BolimReducer, getBolim, getXarajatlarTurlari,
    getPay, getPay2, PayReducer,
    FirmaReducer, getFirma, saveMaxsulotRuyxati, getMaxsulotRuyxati3,
    MaxsulotlarRoyxariReducer,
    getMijozGurux, MijozGuruxReducer, saveSavdo, SavdoQoshishReducer, saveSavdolar,
    users, savdooynasi, getkg, kgreducer, branchreducer, getbranch, getMaxsulotRuyxatibranch,
    getSavdolarHistory, TradeHistory,
    XarajatlarReducer,getValyuta,ValyutaReducer,changeActivecur

}) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            baza: "",
            mahsulotnomi: '',
            barchabrandlar: '',
            modalmahsulotnomi: '',
            shtrix: '',
            ulcovbirligi: '',
            firma: '',
            bolim: '',
            miqdor: '',
            soliqsiznarx: '',
            foydafoiz: '',
            soliqbnnarxi: '',
            sotibolishnarx: '',
            sotishnarxi: '',
            branch: users.users.branches[0].id,
            brand: '',
            narxi: '',
            chegirmatartib: '',
            chegirmamiqdor: '',
            qisqanarx: '',
            kun: '',
            yil: '',
            birincitulovkredit: '',
            qarzamount: '',
            naqdId: '',
            jamisummaxarajat: '',
            bazaxarajat: '',
            qisqaeslatmaxarajat: '',
            sanaxarajat: '',
            eslatma: '',
            xarajatturisavdo: '',
            tulovturi: '',
            tulovmiqdori: '',
            tulovmiqdori2: '',
            tulovturi2: '',
            inputCounter: 0,
            valyutaa:'',
            selectdisabled:false,
        }
    )

    const [placeholders, setPlaceholders] = useState(
        {
            // xarajat qo'shish
            xqBazalaceholder: "",
            xqSanaPlaceholder: "",
            xqQisqaEslatmaPlaceholder: "",
            xqXarajatTuriPlaceholder: "",
            xqJamiSummaPlaceholder: "",

            // maxsulor qo'shish

            mqMaxsulotNomiPlaceholder: "",
            mqShtrixKodiPlaceholder: "",
            mqOlchovBirligiPlaceholder: "",
            mqFirmaPlaceholder: "",
            mqBolimPlaceholder: "",
            mqMiqdorPlaceholder: "",
            mqSotishNarxiPlaceholder: "",
            mqSoliqsizNarxiPlaceholder: "",//yuq
            mqFoydaPlaceholder: "",
            mqSoliqBilanNarxiPlaceholder: "",
            mqSotishNarxiSoliqsizPlaceholder: "",
            mqSotibOlishNarxiPlaceholder: "",



        }
    )

    function jamisummaxarajat(e) {
        input.jamisummaxarajat = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function tulovturi(e) {
        input.tulovturi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovturi2(e) {
        input.tulovturi2 = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovmiqdori(e) {
        input.tulovmiqdori = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function tulovmiqdori2(e) {
        input.tulovmiqdori2 = e.target.value
        let a = { ...input }
        setInput(a)
    }

    const [karta, setkarta] = useState(false)

    function toggle10() {
        setkarta(!karta)
    }

    function xarajatturisavdo(e) {
        input.xarajatturisavdo = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function eslatma(e) {
        input.eslatma = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function bazaxarajat(e) {
        input.bazaxarajat = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qisqaeslatmaxarajat(e) {
        input.qisqaeslatmaxarajat = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function sanaxarajat(e) {
        input.sanaxarajat = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function modalmahsulotnomi(e) {
        input.modalmahsulotnomi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function narxi(e) {
        input.narxi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function chegirmatartib(e) {
        input.chegirmatartib = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function chegirmamiqdor(e) {
        input.chegirmamiqdor = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qisqanarx(e) {
        input.qisqanarx = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qarzamount(e) {
        console.log(e.target.value)
        input.qarzamount = parseInt(e.target.value)
        let a = { ...input }
        setInput(a)

    }
    function shtrix(e) {
        input.shtrix = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function birincitulovkredit(e) {
        input.birincitulovkredit = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function ulcovbirligi(e) {
        input.ulcovbirligi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function firma(e) {
        input.firma = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function bolim(e) {
        input.bolim = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function miqdor(e) {
        input.miqdor = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function sotibolishnarxi(e) {
        input.sotibolishnarx = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function sotishnarxi(e) {
        input.sotishnarxi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function soliqsiznarx(e) {
        input.soliqsiznarx = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function foydafoiz(e) {
        input.foydafoiz = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function soliqbnnarxi(e) {
        input.soliqbnnarxi = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function kun(e) {
        input.kun = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function yil(e) {
        input.yil = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function setbranch(e) {
        input.branch = e.target.value
        let a = { ...input}
        setInput(a)
        if (input.branch===''){
            getMaxsulotRuyxatibranch(users.users.branches[0].id)
        }
        else{
            getMaxsulotRuyxatibranch(input.branch)
        }

    }
    function setbrand(e) {
        input.brand = e.target.value
        let a = { ...input }
        setInput(a)
        if (input.brand !== 'barchasi') {
            getMaxsulotRuyxati3(input.brand)
        }
        else {
            getMaxsulotRuyxati(users.businessId)

        }
    }
    const [arr1, setarr1] = useState([])
    const [lastTradeActive, setlastTradeActive] = useState(false)
    const [printactive, setprintactive] = useState(false)
    function printtoggle() {
        setprintactive(!printactive)
    }
    function toggle4() {
        setlastTradeActive(!lastTradeActive)
    }
    const [openModal, setOpenModal] = useState(false)
    function toggle5() {
        setInput(
            {
                mahsulotnomi:"",
                miqdor:"",
                shtrix:"",
                firma:"",
                bolim:"",
                ulcovbirligi:"",
                foydafoiz:"",
                sotibolishnarx:"",
                sotishnarxi:"",
                soliqbnnarxi:"",
            }
        )
        setPlaceholders({
            mqMaxsulotNomiPlaceholder: "",
            mqOlchovBirligiPlaceholder: "",
            mqBolimPlaceholder: "",
            mqSotishNarxiPlaceholder: "",
            mqShtrixKodiPlaceholder: "",
            mqFirmaPlaceholder: "",
            mqMiqdorPlaceholder: "",
            // mqSoliqsizNarxiPlaceholder:"Ma'lumot kiritilmadi!", yuq
            mqSoliqBilanNarxiPlaceholder: "",
            mqFoydaPlaceholder: "",
            mqSotishNarxiSoliqsizPlaceholder: "",
            mqSotibOlishNarxiPlaceholder: "",

        })

        setOpenModal(!openModal)
    }
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [openCalc, setOpenCalc] = useState(false)
    const [pushmah, setPushmah] = useState('')
    const [pushbool, setPushbool] = useState(false)
    function openCalcul() {
        setOpenCalc(!openCalc)
    }
    let [xisob, setxisob] = useState(0)
    let [jamixisob, setjamixisob] = useState(0)
    const [ushlabtur, setushlabtur] = useState([])
    const [countId, setcountId] = useState(1)
    const [ushla2, setushla2] = useState(false)
    const [ushlanumber, setushlanumber] = useState('')

    function toggle8() {
        if (arr1.length === 0) {
            toast.warn("Mahsulot qo'shing !")
        }
        else {
            setushla2(!ushla2)
        }

    }
    function ushla() {
        if (ushlanumber === '') {
            ushlabtur.push({ id: countId, array: arr1, description: input.eslatma, jami: jamixisob, jamimiqdori: xisob })
            let a = [...ushlabtur]
            setushlabtur(a)
            setushlanumber('')
        }
        else {
            ushlabtur.map(item => {
                if (item.id == ushlanumber) {
                    item.array = arr1
                    item.description = input.eslatma
                    item.jami = jamixisob
                    item.jamimiqdori = xisob
                }
            })
        }

        let a = [...ushlabtur]
        setushlabtur(a)
        setushlanumber('')


        setarr1([])
        setcountId(p => p + 1)
        toast.success('Mahsulot kutish xonasida')
        console.log(ushlabtur)
        input.eslatma = ''
        let d = { ...input }
        setInput(d)
        toggle8()

        setxisob(0)
        setjamixisob(0)

    }
    function xisobkitob(){
        let a = 0
        let c = 0
        arr1.map(item => {
            a += item.tradedQuantity
            c += (item.tradedQuantity *  Math.round((item.salePrice+Number.EPSILON)*100))/100
        })
        setxisob(a)
        setjamixisob(c)
    }
    function savdooynakochirish(id) {
        ushlabtur.filter(val => {
            if (id == val.id) {
                if (arr1.length == 0) {
                    console.log(arr1)
                    setarr1(val.array)
                    input.eslatma = val.description
                    let b = { ...input }
                    setInput(b)
                    setushlanumber(id)
                    toast.warning('Mahsulot Savdo bo`limida')
                } else {
                    console.log(arr1.length)
                    toast.warn('Savdo oynasi band')
                }
            }
        })

        toggle()
    }
    function pushesh(val) {
        let order = false
        arr1.map(item => {
            if (item.id === val.id) {
                order = true
            }
        })
        if (order === true) {
            setCount(val.id)
        }
        else {
            arr1.push({ ...val, productTradeId:val.id, tradedQuantity: 1, disabled: false, active: false })
            order = false
        }
        let b = [...arr1]
        setarr1(b)

      xisobkitob()
    }
    function changeCount(e,id){
        arr1.map(item => {
            if (item.id === id) {

                if (item.tradedQuantity>= item.quantity) {
                    item.tradedQuantity = parseFloat(e)
                    item.active = true
                    item.disabled = false
                }
                else {
                    item.tradedQuantity = parseFloat(e)
                    item.disabled = false
                    item.active = false
                }
            }
        })
        let a = [...arr1]
        setarr1(a)
      xisobkitob()
    }
    function setCount(id) {
        arr1.map(item => {
            if (item.id === id) {

                if (item.tradedQuantity >= item.quantity) {
                    item.tradedQuantity += 1
                    item.active = true
                    item.disabled = false
                }
                else {
                    item.tradedQuantity += 1
                    item.disabled = false
                    item.active = false
                }
            }
        })
        let a = [...arr1]
        setarr1(a)
       xisobkitob()

    }
    function sMinus(id) {
        arr1.map(item => {
            if (item.id === id) {
                if (item.tradedQuantity >= 1) {
                    item.tradedQuantity -= 1
                    if(item.tradedQuantity <= item.quantity) {
                        item.active = false
                    }
                    else {
                        item.active = true
                    }

                } else {
                    item.disabled = true
                    if (item.tradedQuantity <= item.quantity) {
                        item.active = false
                    }
                    else {
                        item.active = true
                    }
                }
            }
        })
        let a = [...arr1]
        setarr1(a)


      xisobkitob()
    }
    function deleteM(ind) {
        arr1.map((item, index) => {
            if (item.id === ind) {
                arr1.splice(index, 1)
            }
        })
        let ad = [...arr1]
        setarr1(ad)

        let b = 0
        let c = 0
     xisobkitob()
    }
    function baza(e) {
        input.baza = e.target.value
        let a = { ...input }
        setInput(a)
    }

    function mahsulotnomi(e) {
        input.mahsulotnomi = e.target.value
        let a = { ...input }
        setInput(a)
        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val => {
            if (val.name === input.mahsulotnomi) {
                pushesh(val)
                input.mahsulotnomi = ''
                let a = { ...input }
                setInput(a)
            } else if (input.mahsulotnomi == val.barcode) {
                pushesh(val)
                input.mahsulotnomi = ''
                let a = { ...input }
                setInput(a)
            }
        })

        if (input.mahsulotnomi === '') {
            setfiltermahsulot(false)
        } else {
            setfiltermahsulot(true)
        }
    }

    function UzcardTolov(naqd, type) {

        if (naqd === 4) {
            kredit()
        }

            if (baza !== '') {
                saveSavdolar({
                    customerId: input.baza,
                    userId: users.id,
                    productTraderDto: arr1,
                    payDate: new Date().getDate(),
                    branchId: input.branch,
                    payMethodId: naqd,
                    amountPaid: jamixisob,
                    totalSum:jamixisob,
                    addressId: users.users.branches[0].address.id,
                    businessId:users.businessId
                })
            }else {
                alert('MIJOZ QOSHING')
            }

        setarr1([])

        setxisob(0)
        setjamixisob(0)
        getMaxsulotRuyxatibranch(users.users.branches[0].id)


    }
    function UzcardTolovturli(naqd, type) {

        if (naqd == 4) {
            kredit()
        }

            if (baza !== '') {
                saveSavdolar({
                    customerId: input.baza,
                    userId: users.id,
                    productTraderDto:arr1,
                    payDate: new Date().getDate(),
                    branchId: input.branch,
                    payMethodId: naqd,
                    totalSum:jamixisob,
                    amountPaid: jamixisob,
                    addressId: users.users.branches[0].address.id,
                    businessId:users.businessId
                })
            } else {
                alert('MIJOZ QOSHIN')
            }

        setarr1([])

        setxisob(0)
        setjamixisob(0)
        toggle9()
        input.tulovmiqdori = ''
        input.tulovmiqdori2 = ''
        let a = { ...input }
        setInput(a)
        getMaxsulotRuyxatibranch(users.users.branches[0].id)

    }
    function UzcardTolovQarz(naqd) {
        console.log(input.qarzamount)
        if (naqd == 4) {
            kredit()
        }
        if (input.qarzamount === '') {
            input.qarzamount = 0
            let a = { ...input }
            setInput(a)
        }

        printtoggle()
            if (baza !== '') {
                saveSavdolar({
                    customerId: input.baza,
                    userId: users.id,
                    productTraderDto:arr1,
                    payDate: new Date().getDate(),
                    branchId: input.branch,
                    payMethodId: "03c7fe33-7be5-494e-8ff9-97b71a173023",
                    totalSum:jamixisob,
                    amountPaid:  input.qarzamount,
                    addressId: users.users.branches[0].address.id,
                    businessId:users.businessId
                })
            } else {
                alert('MIJOZ QOSHIN')
            }
        setarr1([])
        console.log(input.qarzamount)
        setxisob(0)
        setjamixisob(0)
        input.qarzamount = ''
        let a = { ...input }
        setInput(a)
        qarz()
        getMaxsulotRuyxatibranch(users.users.branches[0].id)

    }
    const [activeqarz, setactiveqarz] = useState(false)

    function qarz() {
        setactiveqarz(!activeqarz)
        input.qarzamount = ''
        let a = { ...input }
        setInput(a)
    }

    function saqla() {
        if (input.modalmahsulotnomi && input.miqdor && input.shtrix && input.firma && input.bolim
            && input.ulcovbirligi && input.foydafoiz && input.sotibolishnarx && input.sotishnarxi && input.soliqbnnarxi) {

            saveMaxsulotRuyxati({
                name: input.modalmahsulotnomi,
                quantity: input.miqdor,                                 /*input.foydafoiz,*/
                barcode: input.shtrix,
                brandId: input.firma,                      /*input.ferma,*/
                categoryId: input.bolim,                     /*  input.bolim,*/
                measurementId: input.ulcovbirligi,             /*  input.ulcovbirligi,*/
                photoIds: [1],
                minQuantity: input.foydafoiz,
                buyPrice: input.sotibolishnarx,               /*   input.sotishnarxi,*/
                salePrice: input.sotishnarxi,
                tax: input.soliqbnnarxi,         /* input.amaldagisoliq,*/
                branchId: [1],
                expireDate: null,
                dueDate: null
            })
            setPlaceholders({
                mqMaxsulotNomiPlaceholder: "",
                mqOlchovBirligiPlaceholder: "",
                mqBolimPlaceholder: "",
                mqSotishNarxiPlaceholder: "",
                mqShtrixKodiPlaceholder: "",
                mqFirmaPlaceholder: "",
                mqMiqdorPlaceholder: "",
                // mqSoliqsizNarxiPlaceholder:"Ma'lumot kiritilmadi!", yuq
                mqSoliqBilanNarxiPlaceholder: "",
                mqFoydaPlaceholder: "",
                mqSotishNarxiSoliqsizPlaceholder: "",
                mqSotibOlishNarxiPlaceholder: "",
            })
            setInput(
                {
                    mahsulotnomi:"",
                    miqdor:"",
                    shtrix:"",
                    firma:"",
                    bolim:"",
                    ulcovbirligi:"",
                    foydafoiz:"",
                    sotibolishnarx:"",
                    sotishnarxi:"",
                    soliqbnnarxi:"",
                }
            )
            toggle5()
            getMaxsulotRuyxati(users.businessId)
        }
        else {
            setPlaceholders({
                mqMaxsulotNomiPlaceholder: "Ma'lumot kiritilmadi!",
                mqOlchovBirligiPlaceholder: "O'lchov birligini tanlang!",
                mqBolimPlaceholder: "Bo'lim tanlang!",
                mqSotishNarxiPlaceholder: "Ma'lumot kiritilmadi!",
                mqShtrixKodiPlaceholder: "Ma'lumot kiritilmadi!",
                mqFirmaPlaceholder: "Firma tanlang!",
                mqMiqdorPlaceholder: "Ma'lumot kiritilmadi!",
                // mqSoliqsizNarxiPlaceholder:"Ma'lumot kiritilmadi!", yuq
                mqSoliqBilanNarxiPlaceholder: "Ma'lumot kiritilmadi!",
                mqFoydaPlaceholder: "Ma'lumot kiritilmadi!",
                mqSotishNarxiSoliqsizPlaceholder: "Ma'lumot kiritilmadi!",
                mqSotibOlishNarxiPlaceholder: "Ma'lumot kiritilmadi!",

            })
            
        }
    }
    useEffect(() => {
        getbranch(users.businessId)
        getMijozGurux(users.businessId)
        getBolim(users.businessId)
        getFirma(users.businessId)
        getXarajatlar(users.businessId)
        getXarajatlarTurlari(users.businessId)
        getkg(users.businessId)
        getPay(users.businessId)
        getValyuta(users.businessId)
        // history.push('/headerthird/turliTavar/final')
    }, [MaxsulotlarRoyxariReducer.current,ValyutaReducer.current])

    function toggle() {
        if (ushlabtur.length === 0) {
            toast.info("Ma'lumot yo'q")
        }
        else {
            setActive(!active)
        }

    }
    function toggle2() {
        setActive2(!active2)
    }
    function toggle3() {
        setActive3(!active3)
    }
    function toggle6() {
        settahrir(!tahrir)
    }
    function toggle7() {
        setxarajat(!xarajat)
    }
    function saqlaXarajat() {
        if (input.xarajatturisavdo && input.jamisummaxarajat && input.bazaxarajat && input.qisqaeslatmaxarajat && input.sanaxarajat) {
            saveXarajatlar(
                {
                    outlayCategoryId: input.xarajatturisavdo,
                    totalSum: input.jamisummaxarajat,
                    branchId: input.bazaxarajat,
                    spenderId: 1,
                    description: input.qisqaeslatmaxarajat,
                    date: input.sanaxarajat
                }
            )

            setInput(
                {
                    xarajatturisavdo:"",
                    jamisummaxarajat:"",
                    bazaxarajat:"",
                    qisqaeslatmaxarajat:"",
                    sanaxarajat:""

                }
            )
            toggle7()
        }
        else {
            setPlaceholders(
                {
                    xqBazalaceholder:"Baza tanlang!",
                    xqSanaPlaceholder:"Sana tanlang!",
                    xqQisqaEslatmaPlaceholder:"Ma'lumot kiriting!",
                    xqXarajatTuriPlaceholder:"Xarajat turini tanlang!",
                    xqJamiSummaPlaceholder:"Ma'lumot kiritilmadi!"
                }
            )
        }

    }
    const [xarajat, setxarajat] = useState(false)
    const [tahrir, settahrir] = useState(false)

    function clear() {
        setarr1([])
    }

    const [activeModalkredit, setactiveModalkredit] = useState(false)



    function changevalyuta(e){
        changeActivecur({
            businessId:users.businessId,
            id:e.target.value
        })
        getValyuta(users.businessId)
        setarr1([])
       setxisob(0)
        setjamixisob(0)
    }


    function kredit() {
        setactiveModalkredit(!activeModalkredit)
    }

    useEffect(() => {
        getSavdolarHistory(users.businessId)
        getXarajatlarTurlari(users.businessId)
        getMaxsulotRuyxatibranch(users.users.branches[0].id)
    }, [ValyutaReducer.current])

    function deleteushla(id) {
        ushlabtur.map(item => {
            if (item.id == id) {
                ushlabtur.splice(item, 1)
                let a = [...ushlabtur]
                setushlabtur(a)
            }
        }
        )

        if (ushlabtur.length == 0) {
            setActive(!active)
        }
    }

    const [turli, setturli] = useState(false)

    function toggle9() {
        setturli(!turli)
        if (karta == true) {
            setkarta(false)
        }
    }

    const [filtermahsulot, setfiltermahsulot] = useState(false)

    const componentRef = useRef();

    return (
        <div className={"shopping"}>
            <div className={'shoppingmodal p-5'} ref={componentRef}>
                <h1 className={'text-center'}>Chek</h1>
                <h6 className={'text-center'}>Tekshiruv qog`ozi</h6>
                <br />
                <h2 className={'text-center'}>Invoice</h2>
                <div className={'d-flex justify-content-between'}>
                    <div className={'d-flex justify-content-around'}><strong>Invoice No.</strong> <p> 0025</p></div>
                    <div className={'d-flex justify-content-around'}><strong>Date</strong>  <p className={'ms-2'}>
                        {
                            // Date.now()
                            new Date().getDate() + "/ " + new Date().getMonth() + "/ " + new Date().getFullYear()
                        }
                    </p></div>
                </div>
                <div className={'d-flex'}><strong>Customer</strong> <p className={'ms-2'}>
                    {
                        MijozGuruxReducer.mijozgurux.filter(val => {
                            if (val.id == input.baza) {
                                return val
                            }
                        }).map(item => <p>{item.name}</p>)

                    }

                </p></div>
                <div className={'table-responsive'}>
                    <table className={'table'}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr1.map(item => <tr>
                                    <td>{item.name}</td>
                                    <td>{item.tradedQuantity}  {item.measurement.name}</td>
                                    <td> {Math.round((item.salePrice+Number.EPSILON)*100)/100}</td>
                                    <td>{item.tradedQuantity* Math.round((item.salePrice+Number.EPSILON)*100)/100} {ValyutaReducer.valyutactiveName}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <hr />
                <br />

                <div className={'d-flex col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'}>
                    <div className={'col-5 col-sm-5 col-md-5 col-xl-5 col-lg-5'}>
                        <p className={"d-flex justify-content-between"}> <strong>Total paid:</strong>  {jamixisob} {ValyutaReducer.valyutactiveName}</p>
                        <p className={"d-flex justify-content-between"}> <strong>Discount:</strong>  0 {ValyutaReducer.valyutactiveName}</p>
                    </div>
                    <div className={'col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2 liniya'}> </div>
                    <div className={'col-5 col-sm-5 col-md-5 col-xl-5 col-lg-5'}>
                        <p className={"d-flex justify-content-between"}> <strong>Subtotal:</strong>  {jamixisob} {ValyutaReducer.valyutactiveName}</p>

                        <p className={"d-flex justify-content-between"}> <strong>Total:</strong>  {jamixisob} {ValyutaReducer.valyutactiveName}</p>
                    </div>
                </div>

            </div>
            <div className={'savdoOynaContainers'}>
                <div className="savdoNavbar">
                    <div className="navbarLeft d-flex">
                        <h5>{t('ProductList.8')}</h5>
                        <select name="" id="" className='bazaSelect1' onChange={setbranch} value={input.branch}>
                            {
                                users.users.branches.map(item => <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="navbarRigth d-flex overflow-hidden">
                        <select className={'sss2'} value={ValyutaReducer.valyutactiveID} onChange={changevalyuta}  id={'valuta'}  >
                            {
                                ValyutaReducer.valyuta.map(item=>
                                    <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                        <button className={'btn btn-outline-primary'} style={{lineHeight:'12px'}} onClick={toggle4}>{t('Trade.20')}</button>
                        {/*<button className={'btn btn-outline-primary'}>Hold*/}
                        <button className={'btn '} onClick={toggle} style={{lineHeight:'12px'}} data-tip="Bu menuda mijoz savdolari vaqtinchalik saqlanadi">{t('Trade.21')}</button>
                        <button onClick={toggle7} className={'btn btn-outline-primary'} style={{lineHeight:'12px'}}>+ {t('Trade.22')}</button>
                        <Modal isOpen={xarajat} toggle={toggle7}>
                            <ModalHeader>
                                {t('Trade.23')}
                            </ModalHeader>
                            <ModalBody>
                                <div className="co-md-12 d-flex">
                                    <div className="col-md-6">
                                        <label htmlFor={'baza'}>{t('ProductList.8')}</label>
                                        <select id={'b'} className={'form-control'} value={input.bazaxarajat} onChange={bazaxarajat}>
                                            {
                                                branchreducer.branch.map(item =>
                                                    input.bazaxarajat == '' ? input.bazaxarajat = item.id :
                                                        <option value={item.id}>{item.name}</option>)
                                            }
                                        </select>
                                        {
                                            input.bazaxarajat ? ""
                                            :
                                            <p className='pStyle'>{placeholders.xqBazalaceholder}</p>
                                        }

                                        <label htmlFor={'q'}>{t('Buttons.17')}</label>
                                        <textarea id={'q'} cols="5" rows="3" className={'form-control'} value={input.qisqaeslatmaxarajat} onChange={qisqaeslatmaxarajat} placeholder={placeholders.xqQisqaEslatmaPlaceholder}> </textarea>
                                        <label htmlFor={'tot'}>{t('Purchase.22')}</label>
                                        <input type="number" id='JamPlacID' className={'form-control'} value={input.jamisummaxarajat} placeholder={placeholders.xqJamiSummaPlaceholder} onChange={jamisummaxarajat} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor={'sana'}>{t('Trade.4')}</label>
                                        <input  type="date" value={input.sanaxarajat} onChange={sanaxarajat} className={'form-control'} />
                                        {
                                            input.sanaxarajat ? ""
                                            :
                                            <p className='pStyle'>{placeholders.xqSanaPlaceholder}</p>
                                        }
                                        <label htmlFor={'xturi'} className={'mt-3'}>{t('Trade.24')}</label>

                                        <select name={'xturi'} value={input.xarajatturisavdo} onChange={xarajatturisavdo} className={'form-control'}>
                                            {/*<option value="1">Tanlash</option>*/}
                                            {
                                                XarajatTurlariReducer.xarajatturlari.map(item =>
                                                    input.xarajatturisavdo == '' ? input.xarajatturisavdo = item.id :
                                                        <option value={item.id}>
                                                            {item.title}
                                                        </option>)
                                            }
                                        </select>
                                        {
                                            input.xarajatturisavdo ? ""
                                            :
                                            <p className='pStyle'>{placeholders.xqQisqaEslatmaPlaceholder}</p>
                                        }
                                        <label className={'mt-3'} htmlFor={'xqildi'}>{t('Trade.25')}</label>
                                        <select id={'xqildi'} className={'form-control'}>
                                            <option value={'Tanlash'}>Tanlash</option>
                                            <option value={'boshliq'}>Boshliq</option>
                                        </select>
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <button onClick={saqlaXarajat} className={'btn btn-outline-primary'}>{t('Buttons.6')}</button>
                                <button onClick={toggle7} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                            </ModalFooter>
                        </Modal>
                        <ReactTooltip />
                        <img className='headerImgStyle' src={img3} onClick={openCalcul} alt="" />

                        <img className='headerImgStyle' src={img5} onClick={toggle3} alt="" />
                        <Link to={'/headerthird'}><img className='headerImgStyle' src={img6} onClick={savdooynasi} alt="" /></Link>

                        <Modal isOpen={lastTradeActive} toggle={toggle4}>
                            <ModalHeader>
                                <p>{t('Trade.26')}</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className={'col-md-12 '}>
                                    <div className={'d-flex justify-content-between'}>
                                        <Link to={'/headerthird/turliTavar/final'}>
                                            <button className={'btn btn-success'}>{t('Trade.27')}</button>
                                        </Link>
                                        <Link to={'/headerthird/turliTavar/chegirma'}>
                                            <button className={'btn btn-success'}>{t('Trade.28')}</button>
                                        </Link>
                                        <Link to={'/headerthird/turliTavar/eslatma'}>
                                            <button className={'btn btn-success'}>{t('Trade.18')}</button>
                                        </Link>
                                    </div>
                                    <Switch>
                                        <Route path={'/headerthird/turliTavar/final'} component={Final} />
                                        <Route path={'/headerthird/turliTavar/chegirma'} component={Chegirma} />
                                        <Route path={'/headerthird/turliTavar/eslatma'} component={Eslatma} />
                                    </Switch>
                                    {
                                        TradeHistory.savdolar.map(item => <tr key={item?.id}>
                                            <td>{item?.name}</td>
                                        </tr>)
                                    }
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <button onClick={toggle4} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                <div className="savdoBlock">
                    <div className="savdoBlockLeft">
                        <div className="selectBox">
                            <select className="" value={input.baza} onChange={baza} name="" id="">
                                {
                                    MijozGuruxReducer.mijozgurux.map(item =>
                                        input.baza == '' ? input.baza = item.id :
                                            <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi}
                                autoFocus={true}
                                placeholder={'Mahsulot nomi yoki shtrix kodini yozing'} />


                            <button className={'addButton'} onClick={toggle5}>+</button>
                            <Modal isOpen={openModal} toggle={toggle5}>
                                <ModalHeader>
                                    {t('ProductEdit.1')}
                                </ModalHeader>
                                <ModalBody>
                                    <div className={'row'}>
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor={'mod'}>{t('ProductEdit.2')}</label>
                                            <input type="text" value={input.modalmahsulotnomi} placeholder={placeholders.mqMaxsulotNomiPlaceholder}
                                                onChange={modalmahsulotnomi} id={'mod'} className={'form-control mb-4'} />
                                            <div>

                                            </div>
                                            <label htmlFor={'ol'}>{t('ProductList.5')}</label>
                                            <select className={'form-control mb-4'} name="" id={'ol'}
                                                value={input.ulcovbirligi} onChange={ulcovbirligi}>
                                                <option value="tanlash">Tanlash</option>
                                                {/*    FIX ME*/}
                                                {
                                                    kgreducer.kg.map(item => <option
                                                        value={item.id}>{item.name}</option>)
                                                }
                                            </select>
                                            {
                                                input.ulcovbirligi ? ""
                                                    :
                                                    <p style={{color:"red", fontSize:"14px",margin:"0",position:"absolute",top:'163px'}}>{placeholders.mqOlchovBirligiPlaceholder}</p>

                                            }
                                            <label htmlFor={'bolim'}>{t('ProductList.4')}</label>
                                            <select name="" id={'bolim'} className={'form-control mb-4'} value={input.bolim}
                                                onChange={bolim}>
                                                <option value="tanlash">Tanlash</option>
                                                {/*    FIX ME*/}
                                                {
                                                    BolimReducer.bolimlar.map(item => <option
                                                        value={item.id}>{item.name}</option>)
                                                }
                                            </select>
                                            {
                                                input.bolim ? ""
                                                    :
                                                    <p style={{color:"red", fontSize:"14px",margin:"0",position:"absolute",top:'250px'}}>{placeholders.mqBolimPlaceholder}</p>

                                            }

                                            <label htmlFor={'sot'}>{t('ProductList.12')}</label>
                                            <input type="text" id='sn' className={'form-control mb-4 plceholdersStylSavdoOyna'} value={input.sotishnarxi} placeholder={placeholders.mqSotishNarxiPlaceholder}
                                                onChange={sotishnarxi} />
                                            <label htmlFor={'shtrix'}>{t('Trade.29')}</label>
                                            <input id='shtrixId' type="number" className={'form-control mb-4 plceholdersStylSavdoOyna'} value={input.shtrix} placeholder={placeholders.mqShtrixKodiPlaceholder}
                                                onChange={shtrix} />

                                            <label htmlFor={'firma'}>{t('ProductList.7')}</label>
                                            <select name="" id={'firma'} className={'form-control mb-4'} value={input.firma}
                                                onChange={firma}>
                                                {/*    FIX ME*/}
                                                <option value="barchasi">Tanlash</option>
                                                {
                                                    FirmaReducer.firmalar.map(item => <option
                                                        value={item.id}>{item.name}</option>)
                                                }
                                            </select>
                                            {
                                                input.firma ? ""
                                                    :
                                                    <p style={{color:"red", fontSize:"14px",margin:"0",position:"absolute",top:'508px'}}>{placeholders.mqFirmaPlaceholder}</p>

                                            }

                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor={'miqdor'}>{t('ProductEdit.7')}</label>
                                            <input type="number" id={'miqdor'} className={'form-control mb-4 plceholdersStylSavdoOyna'} placeholder={placeholders.mqMiqdorPlaceholder}
                                                value={input.miqdor} onChange={miqdor} />
                                            <label htmlFor={'sol'}>{t('Trade.30')}</label>
                                            <input type="number" className={'form-control mb-4 plceholdersStylSavdoOyna'} value={input.soliqsiznarx}
                                                onChange={soliqsiznarx} />
                                            <label htmlFor={'sol'}>{t('Trade.31')}</label>
                                            <input id='soliqBnNId' type="number" className={'form-control mb-4 plceholdersStylSavdoOyna'} value={input.soliqbnnarxi} placeholder={placeholders.mqSoliqBilanNarxiPlaceholder}
                                                onChange={soliqbnnarxi} />
                                            <label htmlFor={'fo'}>{t('Trade.32')}</label>
                                            <input id='foydaId' type="number" className={'form-control mb-4 plceholdersStylSavdoOyna'} value={input.foydafoiz} placeholder={placeholders.mqFoydaPlaceholder}
                                                onChange={foydafoiz} />
                                            <label htmlFor={''}>{t('Trade.33')}</label>
                                            <input id='sotishNSoliqsizId' type="number" className={'form-control mb-4 plceholdersStylSavdoOyna'} placeholder={placeholders.mqSotishNarxiPlaceholder}/> 
                                            <label htmlFor={'nn'}>{t('Purchase.21')}</label>
                                            <input id='sotibOliNId' type="number" value={input.sotibolishnarx} className={'form-control plceholdersStylSavdoOyna'} placeholder={placeholders.mqSotibOlishNarxiPlaceholder}
                                                onChange={sotibolishnarxi} />

                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className={'btn btn-outline-primary'} onClick={toggle5}>{t('Buttons.7')}</button>
                                    <button className={'btn btn-outline-primary'} onClick={saqla}>{t('Buttons.6')}</button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="table-responsive tbodyY">
                            <table className={'table '}>
                                <thead>
                                    <tr>
                                        <th>T/R</th>
                                        <th>{t('ProductList.1')}</th>
                                        <th className={'text-center'}>{t('ProductEdit.7')}</th>
                                        <th>{t('Trade.14')}</th>
                                        <th>. . .</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arr1.map((item, index) => <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td onClick={toggle6} className={'namepointer'} style={{ marginLeft: '10px' }}>{item.name}</td>
                                            <Modal isOpen={tahrir} toggle={toggle6}>
                                                <ModalHeader>
                                                    {t('Buttons.1')}
                                                </ModalHeader>
                                                <ModalBody>
                                                    <label htmlFor={'nar'}>{t('Trade.13')}</label>
                                                    <input id={'nar'} type="text" value={input.narxi} onChange={narxi} className={'form-control'} />
                                                    <div className="col-md-12 d-flex ">
                                                        <div className="col-md-6">
                                                            <label htmlFor={'a'}>Chegirma qilish</label>
                                                            <select name="" id={'a'} value={input.chegirmatartib} onChange={chegirmatartib} className={'form-control'}>

                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor={'m'}>{t('Trade.28')}</label>
                                                            <input type="number" value={input.chegirmamiqdor} onChange={chegirmamiqdor} className={'form-control'} />
                                                        </div>
                                                    </div>
                                                    <label htmlFor={'te'} className={'mt-2'}>{t('Trade.18')}</label>
                                                    <textarea name="" id={'te'} cols="10" rows="3" value={input.qisqanarx} onChange={qisqanarx} className={'form-control'}> </textarea>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button onClick={toggle6} className={'btn btn-outline-primary'}>Chiqish</button>
                                                </ModalFooter>
                                            </Modal>
                                            <td className={''}>
                                                <div className={'d-flex align-items-center justify-content-around p-0'}
                                                    style={{ width: '100%' }}>
                                                    <button disabled={item.disabled} onClick={() => sMinus(item.id)}
                                                        className={'btn btn-outline-danger rounded-circle border-3'}>-
                                                    </button>
                                                    {/*{item.counter}*/}
                                                    <input className={'form-control'} value={item.tradedQuantity} onChange={(e)=>changeCount(e.target.value,item.id)} type="number" style={{width:'100px',border:'1px solid darkred',padding:'0.5rem'}}/>
                                                    <button onClick={() => setCount(item.id)}
                                                        className={'btn btn-outline-primary rounded-circle border-3'}>+
                                                    </button>
                                                </div>
                                                {
                                                    item.active ? <p className={'text-danger text-center fw-2'}>Only {item.quantity} available !</p> : ''
                                                }
                                            </td>

                                            {/*  F I X  -  M E*/}

                                            <td>
                                                {item.tradedQuantity * Math.round((item.salePrice+Number.EPSILON)*100)/100}
                                                {ValyutaReducer.valyutactiveName}
                                            </td>
                                            {/*<td>{input.inputCounter * item.salePrice} so'm</td>*/}
                                            <td>
                                                <button onClick={() => deleteM(item.id)}
                                                    className={'btn btn-outline-dark border-2 rounded-circle'}>x
                                                </button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="maxSoniBox">
                            <h6 className='d-flex align-items-center'>{t('Trade.15')}:{xisob}</h6>
                            {/*<h6>Jami:{jamixisob}</h6>*/}
                            <h6>{t('Trade.14')}: {jamixisob} {ValyutaReducer.valyutactiveName}</h6>
                        </div>
                        <hr style={{ margin: '2px' }} />
                        <div className={'chegirmalarBox'}>
                            <div className='d-flex'>
                                <p>{t('Trade.28')}:</p>
                                <img src="" alt="" />
                                <p>0.00</p>
                            </div>
                            <div className='d-flex'>
                                <p>{t('ProductList.6')}:</p>
                                <img src="" alt="" />
                                <p>0.00</p>
                            </div>
                            <div className='d-flex'>
                                <p>{t('Purchase.30')}:</p>
                                <img src="" alt="" />
                                <p>0.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="savdoBlockRigth">
                        <div className="bazaBox">
                            <select name="" id="" onChange={setbrand} value={input.brand}>
                                <option value="barchasi">{t('Trade.34')}</option>
                                {
                                    FirmaReducer.firmalar.map(item => <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className={' maxsulotImgBlock'}>

                            {
                                MaxsulotlarRoyxariReducer.maxsulotlar.filter(val => {
                                    if (input.mahsulotnomi === '') {
                                        return val
                                    } else if (val.name.toUpperCase().includes(input.mahsulotnomi.toUpperCase())) {
                                        return val
                                    }
                                }).
                                    map(item => <div className={'maxsuImgBox'}
                                        key={item.id}>
                                        <div onClick={() => pushesh(item)}>
                                            {

                                                  item.photo.length > 0 ?

                                                      item.photo.map(valp=>
                                                          <Imagecom id={valp.id}/>
                                                      ):

                                                    <img className={'img-fluid bg-danger'} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uAJqm9dM-DzEqpAyyUVfJ1JnRppFw2QtMcNVOIOBEKqkSzsWmK-5btcDekYzmawDWfg&usqp=CAU`} alt="###"/>



                                            }
                                            <h6>{item.name}</h6>
                                            <p>{Math.round((item.salePrice+Number.EPSILON)*100)/100} {ValyutaReducer.valyutactiveName}</p>
                                        </div>
                                    </div>)
                            }
                        </div>

                    </div>

                </div>
                <div className="savBtnBox col-12">
                    <button className={'col-sm-6 btn btn-primary m-1'}>{t('Trade.18')}</button>
                    <button className={'col-6 btn btn-danger m-1'}>{t('Trade.28')}</button>
                    <button onClick={toggle8} className={'col-6 btn btn-warning m-1'}>{t('Trade.21')}</button>
                    <Modal isOpen={ushla2} toggle={toggle8}>
                        <ModalHeader>
                            {t('Trade.21')}
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'qisqa'}>{t('Trade.18')}</label>
                            <textarea className={'form-control'} id={'qisqa'} cols="20" rows="3" value={input.eslatma} onChange={eslatma}> </textarea>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={ushla} className={'btn btn-outline-primary'}>{t('Buttons.6')}</button>
                            <button onClick={toggle8} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <button onClick={kredit} className={'col-6 btn btn-outline-primary m-1'}>{t('Trade.35')}</button>
                    <Modal isOpen={activeModalkredit} toggle={kredit}>
                        <ModalHeader>{t('Trade.36')}</ModalHeader>
                        <ModalBody>
                            <h3> <strong>{t('Purchase.22')}:</strong>  {jamixisob} </h3>
                            <label htmlFor={'avans'}>{t('Trade.37')}</label>
                            <input value={input.birincitulovkredit} onChange={birincitulovkredit} type="text" className={'form-control'} />
                            <div>
                                <div>
                                    <h4>{t('Trade.38')}</h4>
                                    <div className={'d-flex justify-content-around'}>
                                        <div className={'input-group'}>
                                            <input type="text" className={'form-control'} value={input.yil} onChange={yil} />
                                            <select name="kreditsana" id="" value={input.kun} onChange={kun} className={'form-control'}>
                                                <option value="#">Tanlash</option>
                                                <option value="oy">Oy</option>
                                                <option value="yil">Yil</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button onClick={() => UzcardTolov(4)} className={'btn btn-outline-primary'}>
                                <ReactToPrint
                                    trigger={() => <p style={{ marginBottom: 0 }}>Sotish (Chek)</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>
                            {/*<button className={'btn btn-outline-primary'} onClick={UzcardTolov}>Sotish ( Chek )</button>*/}
                            <button className={'btn btn-outline-primary'} onClick={kredit}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <button className={'col-6 btn btn-outline-warning  m-1'} onClick={toggle9}>{t('Trade.39')}</button>

                    <Modal isOpen={turli} toggle={toggle9}>
                        <ModalHeader>
                            {t('Trade.39')}
                        </ModalHeader>
                        <ModalBody>
                            <div className={'d-flex'}>
                                <div className={'col-md-8'}>
                                    <label htmlFor={'turi'}>{t('Trade.40')}</label>
                                    <select className={'form-control'} value={input.tulovturi} onChange={tulovturi} id={'turi'}>
                                        {
                                            PayReducer.paymethod.map(item =>
                                                input.tulovturi == '' ? input.tulovturi = item.id :
                                                    <option value={item.id}>{item.type}</option>)
                                        }
                                    </select>
                                </div>

                                <div className={'col-md-4'}>
                                    <label htmlFor={'miqdor'}>{t('Trade.41')}</label>
                                    <input type="number" value={input.tulovmiqdori} placeholder={'0'} onChange={tulovmiqdori} className={'form-control'} />
                                </div>
                            </div>

                            <div style={{ width: '94%', marginLeft: '3%', marginTop: '15px' }}>
                                <button className={'btn btn-outline-primary form-control'} onClick={toggle10}>{t('Trade.42')}</button>

                            </div>

                            {
                                karta ?
                                    <div className={'d-flex mt-3'}>

                                        <div className={'col-md-8'}>
                                            <label htmlFor={'turi'}>{t('Trade.43')}</label>
                                            <select className={'form-control'} value={input.tulovturi2} onChange={tulovturi2} id={'turi'}>
                                                {

                                                    PayReducer.paymethod.map(item =>
                                                        input.tulovturi2 == '' ? input.tulovturi2 = item.id :
                                                            <option value={item.id}>
                                                                {item.type}
                                                            </option>)
                                                }
                                            </select>
                                        </div>

                                        <div className={'col-md-4'}>
                                            <label htmlFor={'miqdor'}>{t('Trade.44')}</label>
                                            <input type="number" value={input.tulovmiqdori2} placeholder={'0'} onChange={tulovmiqdori2} className={'form-control'} />
                                        </div>
                                    </div> : ''
                            }
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={() => UzcardTolovturli(1, 'Naqd')} className={'btn btn-outline-primary m-1'}>
                                <ReactToPrint
                                    trigger={() => <p className={'toprint '} style={{ marginBottom: '0' }}>{t('Buttons.6')}</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>

                            <button className={'btn btn-outline-primary'} onClick={toggle9}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <button onClick={qarz} className={'col-6 btn btn-info m-1'}>{t('Trade.45')}</button>
                    <Modal isOpen={activeqarz} toggle={qarz}>
                        <ModalHeader>
                            {t('Trade.45')}
                        </ModalHeader>
                        <ModalBody>
                            <h3> <strong>{t('Purchase.22')}:</strong>  {jamixisob} </h3>
                            <label htmlFor={'rrr'}>{t('Trade.37')}</label>
                            <input type="number" placeholder={'0'} className={'form-control'} id={'rrr'} value={input.qarzamount} onChange={qarzamount} />
                            <p data-tip="Avans sifatida to`lov qilishingiz shart emas (agar to`lov qilinmasa hammasi qarz sifatida yoziladi)" className={'btn btn-outline-primary mt-2 form-control'}>BATAFSIL</p>
                            <ReactTooltip />
                        </ModalBody>
                        <ModalFooter>
                            {/*<button className={'btn btn-outline-primary'}>Saqlash</button>*/}
                            <button onClick={() => UzcardTolovQarz(2)} className={'btn btn-outline-primary'}>
                                <ReactToPrint
                                    trigger={() => <p style={{ marginBottom: 0 }}>{t('Buttons.6')} (Chek)</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>
                            <button onClick={qarz} className={'btn btn-outline-primary'}>{t('Trade.7')}</button>
                        </ModalFooter>
                    </Modal>
                    {
                        PayReducer.paymethod.map(item=>
                            <button onClick={() => UzcardTolov(item.id)} className={'btn btn-success m-1'}>
                                <ReactToPrint
                                    trigger={() => <p className={'toprint '}>{item.type}</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>
                        )

                    }

                    <button className={'btn  btn-dark m-1'} onClick={() => UzcardTolov(1, "Uzcard")}>
                        <ReactToPrint
                            trigger={() => <p className={'toprint '}>UzCard</p>
                            }
                            content={() => componentRef.current}
                        />
                    </button>
                    <button onClick={() => UzcardTolov(2, "Humo")} className={'btn btn-warning m-1'}>
                        <ReactToPrint
                            trigger={() => <p className={'toprint'}>Humo</p>

                            }
                            content={() => componentRef.current}
                        /></button>
                    <button className='jamiTolov m-1'>{t('Purchase.22')}:  {Math.round(((jamixisob+Number.EPSILON)*100)/100)}
                         {ValyutaReducer.valyutactiveName}</button>
                    <button onClick={clear} className={'qchiqish btn btn-danger m-1'}>{t('Buttons.7')}</button>
                </div>
                <div className="">
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            {t('Trade.21')}
                        </ModalHeader>
                        <ModalBody>
                            <table className={'table'}>
                                <thead>
                                    <tr>
                                        <th>T/R</th>
                                        <th>{t('Trade.18')}</th>
                                        <th>{t('Trade.12')}</th>
                                        <th>{t('Trade.14')}</th>
                                        <th className={'text-center'}>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ushlabtur.map((item, index) => <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.description}</td>
                                            <td>{item.jamimiqdori}</td>
                                            <td>{item.jami} </td>
                                            <td>
                                                <button onClick={() => savdooynakochirish(item.id)} className={'kv'}> | </button>
                                                <button onClick={() => deleteushla(item.id)} className={'ocbutton'}>X</button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </ModalBody>
                        <ModalFooter>
                            {/*<button onClick={savdooynakochirish} className={'btn btn-outline-primary'}>Savdo oynasiga ko`chirish</button>*/}
                            <button className={'btn btn-outline-primary'} onClick={toggle}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={active2} toggle={toggle2}>
                        <ModalHeader>
                            Smenadagi xisobot
                        </ModalHeader>
                        <ModalBody>
                            Manba Topilmadi !!!
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={toggle2}>'{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={active3} toggle={toggle3}>
                        <ModalHeader>
                            Currency
                        </ModalHeader>
                        <ModalBody>
                            Manba Topilmadi !!!
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={toggle3}>'{t('Buttons.7')}</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className={'bbb'}>
                    {
                        openCalc ? <Calculator /> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default connect((kgreducer,ValyutaReducer, PayReducer,ValyutaReducer, XarajatlarReducer, XarajatTurlariReducer, PayReducer, TradeHistory, MaxsulotlarRoyxariReducer, BolimReducer, FirmaReducer, users, SavdoOynaReducer, MijozGuruxReducer, SavdoQoshishReducer, branchreducer), {
    getSavdo,
    saveXarajatlar,
    getValyuta,
    getSavdolarHistory,
    getXarajatlar,
    getFirma,
    getPay, getPay2,
    saveMaxsulotRuyxati,
    getBolim,
    saveSavdo,
    editSavdo,
    getMaxsulotRuyxati2,
    deleteSavdo,
    getMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    savdooynasi,
    getkg,
    getMijozGurux,
    saveSavdolar,
    getbranch,
    getXarajatlarTurlari,
    getMaxsulotRuyxatibranch,
    getMaxsulotRuyxati3,
    changeActivecur
})(SavdoOynasi)
