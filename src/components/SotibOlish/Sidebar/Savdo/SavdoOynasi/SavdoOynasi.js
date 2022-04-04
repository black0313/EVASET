import img1 from '../../../../../img/pause1.png'
import img3 from '../../../../../img/calculator3.png'
import ReactTooltip from 'react-tooltip';
import img4 from '../../../../../img/note4.png'
import img5 from '../../../../../img/clipboard-close5.png'
import img6 from '../../../../../img/backward6.png'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import './savdoOynasi.css'
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../reducer/SavdoOynaReducer";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati, getMaxsulotRuyxati2, saveMaxsulotRuyxati,getMaxsulotRuyxatibranch,getMaxsulotRuyxati3
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Calculator from "../../../header/Calculator/Calculator";
import {Link, Route, Switch, useHistory} from 'react-router-dom'
import Final from "./Final/Final";
import Chegirma from "./Final/Chegirma";
import Eslatma from "./Final/Eslatma";
import users from "../../../../../reducer/users";
import {savdooynasi} from "../../../../../reducer/users";
import ReactToPrint from 'react-to-print';
import {useRef} from "react";
import MaxsulotQoshish from '../../Maxsulotlar/MahsulotlarRuyxati/Taxrirlash/Taxrirlash'
import Print from "./Print";
import MijozGuruxReducer, {getMijozGurux} from "../../Hamkorlar/reducer/MijozGuruxReducer";
import SavdoQoshishReducer, {saveSavdolar} from "../reducer/SavdoQoshishReducer";
import BolimReducer, {getBolim} from "../../Maxsulotlar/reducer/BolimReducer";
import FirmaReducer, {getFirma} from "../../Maxsulotlar/reducer/FirmaReducer";
import kgreducer, {getkg} from "../../../../../reducer/kgreducer";
import PayReducer, {getPay,getPay2} from "../../../../../reducer/PayReducer";
import branchreducer,{getbranch} from "../../../../../reducer/branchreducer";
import TradeHistory, {getSavdolarHistory} from "../reducer/TradeHistory";
import {toast} from "react-toastify";
import XarajatlarReducer, {getXarajatlar, saveXarajatlar} from "../../Xarajatlar/reducer/XarajatlarReducer";
import XarajatTurlariReducer, {getXarajatlarTurlari} from "../../Xarajatlar/reducer/XarajatTurlariReducer";
function SavdoOynasi({
                         saveXarajatlar,
                         getXarajatlar,
                         XarajatTurlariReducer,
                         getMaxsulotRuyxati,
                         BolimReducer, getBolim,
                         getPay,getPay2, PayReducer,
                         FirmaReducer, getFirma, saveMaxsulotRuyxati,getMaxsulotRuyxati3,
                         MaxsulotlarRoyxariReducer,
                         getMijozGurux, MijozGuruxReducer, saveSavdo, SavdoQoshishReducer, saveSavdolar,
                         users, savdooynasi, getkg, kgreducer,branchreducer,getbranch,getMaxsulotRuyxatibranch,
                         getSavdolarHistory,TradeHistory,
                        XarajatlarReducer,
                     }) {

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
            branch:'',
            brand:'',
            narxi:'',
            chegirmatartib:'',
            chegirmamiqdor:'',
            qisqanarx:'',
            kun:'',
            yil:'',
            birincitulovkredit:'',
            qarzamount:'',
            naqdId:'',
            jamisummaxarajat:'',
            bazaxarajat:'',
            qisqaeslatmaxarajat:'',
            sanaxarajat:'',
            eslatma:''
        }
    )

    function jamisummaxarajat(e){
        input.jamisummaxarajat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function eslatma(e){
        input.eslatma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bazaxarajat(e){
        input.bazaxarajat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqaeslatmaxarajat(e){
        input.qisqaeslatmaxarajat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sanaxarajat(e){
        input.sanaxarajat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function modalmahsulotnomi(e) {
        input.modalmahsulotnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function narxi(e){
        input.narxi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function chegirmatartib(e){
        input.chegirmatartib = e.target.value
        let a = {...input}
        setInput(a)
    }
    function chegirmamiqdor(e){
        input.chegirmamiqdor = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqanarx(e){
        input.qisqanarx = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qarzamount(e){
        console.log(e.target.value)
            input.qarzamount = e.target.value
            let a = {...input}
            setInput(a)

    }
    function shtrix(e) {
        input.shtrix = e.target.value
        let a = {...input}
        setInput(a)
    }
    function birincitulovkredit(e) {
        input.birincitulovkredit = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ulcovbirligi(e) {
        input.ulcovbirligi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function firma(e) {
        input.firma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolim(e) {
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
    }
    function miqdor(e) {
        input.miqdor = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sotibolishnarxi(e) {
        input.sotibolishnarx = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sotishnarxi(e) {
        input.sotishnarxi = e.target.value
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
    function soliqbnnarxi(e) {
        input.soliqbnnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function kun(e) {
        input.kun = e.target.value
        let a = {...input}
        setInput(a)
    }
    function yil(e) {
        input.yil = e.target.value
        let a = {...input}
        setInput(a)
    }

    function setbranch(e){
        input.branch = e.target.value
        let a = {...input}
        setInput(a)
        if (input.branch !== 'barchasi'){
            getMaxsulotRuyxatibranch(input.branch)
        }
        else{
            getMaxsulotRuyxati(users.businessId)

        }
    }
    function setbrand(e){
        input.brand = e.target.value
        let a = {...input}
        setInput(a)
        if (input.brand !== 'barchasi'){
            getMaxsulotRuyxati3(input.brand)
        }
        else{
            getMaxsulotRuyxati(users.businessId)

        }
    }

    const [arr1, setarr1] = useState([])
    const [lastTradeActive, setlastTradeActive] = useState(false)
    const [printactive,setprintactive] = useState(false)

    function printtoggle(){
        setprintactive(!printactive)
    }

    function toggle4() {
        setlastTradeActive(!lastTradeActive)
    }

    const [openModal, setOpenModal] = useState(false)

    function toggle5() {
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

    const [ushlabtur,setushlabtur] = useState([])
    const [countId,setcountId] = useState(1)

    const [ushla2,setushla2] = useState(false)
    function toggle8(){
        setushla2(!ushla2)
    }

    function ushla(){
        ushlabtur.push({id:countId,array:arr1,description:input.eslatma})
        let a = [...ushlabtur]
        setushlabtur(a)
        setarr1([])
        setcountId(p=>p+1)
        toast.success('Mahsulot kutish xonasida')
        console.log(ushlabtur)
        toggle8()
    }

    function savdooynakochirish(){
        setarr1(ushlabtur)
        setushlabtur([])
        toast.warning('Mahsulot Savdo bo`limida ')
        toggle()
    }

    function pushesh(val) {
        let order = false
        arr1.map(item=>{
            if(item.id === val.id){
                order = true
           }
        })
        if (order === true){
            setCount(val.id)
        }
       else{
            arr1.push({...val, counter: 1, disabled: false,active:false})
            order = false
        }
       let b = [...arr1]
        setarr1(b)

        let a = 0
        let c = 0
        arr1.map(item => {
            a += item.counter
            c += (item.counter * item.salePrice)
        })
        setxisob(a)
        setjamixisob(c)
    }

    function setCount(id) {
        arr1.map(item => {
            if (item.id === id) {

                if(item.counter >= item.quantity){
                    item.counter += 1
                    item.active = true
                    item.disabled = false
                }
                else{
                    item.counter += 1
                    item.disabled = false
                    item.active = false
                }
            }
        })
        let a = [...arr1]
        setarr1(a)
        let b = 0
        let c = 0
        arr1.map(item => {
            b += item.counter
            c += (item.counter * item.salePrice)
        })
        setxisob(b)
        setjamixisob(c)
    }

    function sMinus(id) {
        arr1.map(item => {
            if (item.id === id) {
                if (item.counter >= 1) {
                    item.counter -= 1
                    if(item.counter <= item.quantity){
                        item.active = false
                    }
                    else{
                       item.active = true
                    }

                } else {
                    item.disabled = true
                    if(item.counter <= item.quantity){
                        item.active = false
                    }
                    else{
                        item.active = true
                    }
                }
            }
        })
        let a = [...arr1]
        setarr1(a)


        let b = 0
        let c = 0
        arr1.map(item => {
            b += item.counter
            c += (item.counter * item.salePrice)

        })
        setxisob(b)
        setjamixisob(c)

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
        arr1.map(item => {
            b += item.counter
            c += (item.counter * item.salePrice)

        })

        setxisob(b)
        setjamixisob(c)
    }
    function baza(e) {
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }

    function mahsulotnomi(e) {
        input.mahsulotnomi = e.target.value
        let a = {...input}
        setInput(a)
        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val=>{
            if (val.name === input.mahsulotnomi){
                pushesh(val)
                input.mahsulotnomi = ''
                let a = {...input}
                setInput(a)
            }else if (input.mahsulotnomi == val.barcode){
                pushesh(val)
                input.mahsulotnomi = ''
                let a = {...input}
                setInput(a)
            }
        })
    }

    function barchabrandlar(e) {
        input.barchabrandlar = e.target.value
        let a = {...input}
        setInput(a)
    }

    function UzcardTolov(naqd,type) {

        if (naqd == 4){
            kredit()
        }

        arr1.map(item => {
            if (baza !== '') {
                saveSavdolar({
                    customerId: input.baza,
                    userId: users.businessId,
                    productTraderDto: [
                        {
                            tradedQuantity: item.counter,
                            productTradeId: item.id
                        }],
                    payDate: new Date().getDate(),
                    branchId: item.branch.id,
                    payMethodId: naqd,
                    amountPaid: item.salePrice * item.counter,
                    currencyId: 1,
                    addressId: 1,
                })
            } else {
                alert('MIJOZ QOSHIN')
            }
        })

        setarr1([])

        setxisob(0)
        setjamixisob(0)

    }

    function UzcardTolovQarz(naqd) {
            console.log(input.qarzamount)
        if (naqd == 4){
            kredit()
        }
        if (input.qarzamount === ''){
            input.qarzamount = 0
            let a = {...input}
            setInput(a)
        }

        printtoggle()
        arr1.map(item => {
            if (baza !== '') {
                saveSavdolar({
                    customerId: input.baza,
                    userId: users.businessId,
                    productTraderDto: [
                        {
                            tradedQuantity: item.counter,
                            productTradeId: item.id
                        }],
                    payDate: new Date().getDate(),
                    branchId: item.branch.id,
                    payMethodId: naqd,
                    amountPaid: input.qarzamount,
                    currencyId: 1,
                    addressId: 1,
                })
            } else {
                alert('MIJOZ QOSHIN')
            }
        })
        setarr1([])
        console.log(input.qarzamount)
        setxisob(0)
        setjamixisob(0)
        input.qarzamount=''
        let a = {...input}
        setInput(a)
        qarz()
    }

    const [activeqarz,setactiveqarz] = useState(false)

    function qarz(){
        setactiveqarz(!activeqarz)
        input.qarzamount=''
        let a = {...input}
        setInput(a)
    }

    function saqla() {
        saveMaxsulotRuyxati({
            name: input.modalmahsulotnomi,
            quantity: input.miqdor,                                 /*input.foydafoiz,*/
            barcode: input.shtrix,
            brandId: input.firma,                      /*input.ferma,*/
            categoryId: input.bolim,                     /*  input.bolim,*/
            measurementId: input.ulcovbirligi,             /*  input.ulcovbirligi,*/
            photoIds: [1],
            minQuantity: input.foydafoiz,
            /*   input.foydafoiz,*/
            buyPrice: input.sotibolishnarxi,               /*   input.sotishnarxi,*/
            salePrice: input.sotishnarxi,
            tax: input.soliqbnnarxi,         /* input.amaldagisoliq,*/
            branchId: [1],
            expireDate: null,
            dueDate: null
        })
        console.log(MaxsulotlarRoyxariReducer.maxsulotlar)
        toggle5()
        getMaxsulotRuyxati(users.businessId)
    }
    useEffect(() => {
        getbranch(users.businessId)
        getMaxsulotRuyxati(users.businessId)
        getMijozGurux(users.businessId)
        getBolim(users.businessId)
        getFirma(users.businessId)
        getXarajatlar(users.businessId)
        getkg(users.businessId)
        getPay(users.businessId)
        // history.push('/headerthird/turliTavar/final')
    }, [MaxsulotlarRoyxariReducer.current])

    function toggle() {
        setActive(!active)
    }
    function toggle2() {
        setActive2(!active2)
    }
    function toggle3() {
        setActive3(!active3)
    }
    function toggle6(){
        settahrir(!tahrir)
    }
    function toggle7(){
        setxarajat(!xarajat)
    }
    function saqlaXarajat(){
        saveXarajatlar(
            {
                outlayCategoryId: 1,
                totalSum: input.jamisummaxarajat,
                branchId: input.bazaxarajat,
                spenderId: 1,
                description: input.qisqaeslatmaxarajat,
                date: input.sanaxarajat
            }
        )
        toggle7()
    }
    const [xarajat,setxarajat] = useState(false)
    const [tahrir,settahrir] = useState(false)

    function clear(){
        setarr1([])
    }

    const [activeModalkredit,setactiveModalkredit] = useState(false)

    function kredit(){
        setactiveModalkredit(!activeModalkredit)
    }

    useEffect(()=>{
        getSavdolarHistory(users.businessId)
        getXarajatlarTurlari(users.businessId)
    },[])

    const componentRef = useRef();

    return (
        <div className={"shopping"}>
            <div className={'shoppingmodal p-5'} ref={componentRef}>
                <h1 className={'text-center'}>Chek</h1>
                <h6 className={'text-center'}>Tekshiruv qog`ozi</h6>
                <br/>
                <h2 className={'text-center'}>Invoice</h2>
                <div className={'d-flex justify-content-between'}>
                    <div className={'d-flex justify-content-around'}><strong>Invoice No.</strong> <p> 0025</p></div>
                    <div className={'d-flex justify-content-around'}><strong>Date</strong>  <p className={'ms-2'}>
                        {
                            // Date.now()
                            new Date().getDate()+"/ "+ new Date().getMonth()+"/ "+ new Date().getFullYear()
                        }
                    </p></div>
                </div>
                <div className={'d-flex'}><strong>Customer</strong> <p className={'ms-2'}>
                    {
                        MijozGuruxReducer.mijozgurux.filter(val => {
                            if (val.id == input.baza){
                                return val
                            }
                        }).map(item=> <p>{item.name}</p>)

                    }

                </p></div>
                {/*{console.log(arr1)}*/}
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
                            arr1.map(item=> <tr>
                                <td>{item.name}</td>
                                <td>{item.counter}  {item.measurement.name}</td>
                                <td>{item.salePrice}</td>
                                <td>{item.counter*item.salePrice} so'm</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            <hr/>
                <br/>

                <div className={'d-flex col-12'}>
                    <div  className={'col-5'}>
                        <p className={"d-flex justify-content-between"}> <strong>Total paid:</strong>  {jamixisob} so'm</p>
                        <p className={"d-flex justify-content-between"}> <strong>Discount:</strong>  0 so'm</p>
                    </div>
                    <div className={'col-2 liniya'}> </div>
                    <div className={'col-5'}>
                        <p className={"d-flex justify-content-between"}> <strong>Subtotal:</strong>  {jamixisob} so'm</p>

                        <p className={"d-flex justify-content-between"}> <strong>Total:</strong>  {jamixisob} so'm</p>

                    </div>
                </div>

            </div>
            <div className={'savdoOynaContainers'}>
                <div className="savdoNavbar">
                    <div className="navbarLeft d-flex">
                        <h5>Baza</h5>
                        <select name="" id="" onChange={setbranch} value={input.branch}>
                            <option value="barchasi">Barchasi</option>
                            {
                                branchreducer.branch.map(item=> <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="navbarRigth">
                        <button className={'btn btn-outline-primary'} onClick={toggle4}>Oxirgi savdolar</button>
                        {/*<button className={'btn btn-outline-primary'}>Hold*/}
                        <button className={'btn '} onClick={toggle} data-tip="Bu menuda mijoz savdolari vaqtinchalik saqlanadi">Ushlab turish</button>
                        <button onClick={toggle7} className={'btn btn-outline-primary'}>+ Xarajat</button>
                        <Modal isOpen={xarajat} toggle={toggle7}>
                            <ModalHeader>
                                Xarajat qo`shish
                            </ModalHeader>
                            <ModalBody>
                                <div className="co-md-12 d-flex">
                                    <div className="col-md-6">
                                        <label htmlFor={'baza'}>Baza</label>
                                        <input type="text" className={'form-control'} onChange={bazaxarajat} value={input.bazaxarajat}/>
                                        <label htmlFor={'q'}>Qisqa eslatma</label>
                                        <textarea id={'q'} cols="5" rows="3" className={'form-control'} value={input.qisqaeslatmaxarajat} onChange={qisqaeslatmaxarajat}> </textarea>
                                        <label htmlFor={'tot'}>Jami summa</label>
                                        <input type="text" className={'form-control'} value={input.jamisummaxarajat} onChange={jamisummaxarajat}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor={'sana'}>Sana</label>
                                        <input type="date" value={input.sanaxarajat} onChange={sanaxarajat} className={'form-control'}/>
                                        <label htmlFor={'xturi'} className={'mt-3'}>Xarajat turi</label>
                                        {console.log(XarajatTurlariReducer.xarajatturlari)}
                                        <select name={'xturi'} className={'form-control'}>
                                            <option value="1">Tanlash</option>
                                            {
                                                XarajatTurlariReducer.xarajatturlari.map(item=> <option value={item.id}>
                                                    {item.title}
                                                </option>)
                                            }
                                        </select>
                                        <label className={'mt-3'} htmlFor={'xqildi'}>Xarajat qildi</label>
                                        <select id={'xqildi'} className={'form-control'}>
                                            <option value={'Tanlash'}>Tanlash</option>
                                            <option value={'boshliq'}>Boshliq</option>
                                        </select>
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <button onClick={saqlaXarajat} className={'btn btn-outline-primary'}>Saqlash</button>
                                <button onClick={toggle7} className={'btn btn-outline-primary'}>Chiqish</button>
                            </ModalFooter>
                        </Modal>
                        <ReactTooltip />
                        <img src={img3} onClick={openCalcul} alt=""/>
                        {/*<img src={img1} onClick={toggle} alt=""/>*/}
                        {/*</button>*/}
                        {/*<img src={img2} onClick={toggle} alt="" />*/}
                        {/*<img src={img4} onClick={toggle2} alt=""/>*/}
                        <img src={img5} onClick={toggle3} alt=""/>
                        <Link to={'/headerthird'}><img src={img6} onClick={savdooynasi} alt=""/></Link>

                        <Modal isOpen={lastTradeActive} toggle={toggle4}>
                            <ModalHeader>
                                <p>OXIRGI SAVDOLAR</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className={'col-md-12 '}>
                                    <div className={'d-flex justify-content-between'}>
                                        <Link to={'/headerthird/turliTavar/final'}>
                                            <button className={'btn btn-success'}>Final</button>
                                        </Link>
                                        <Link to={'/headerthird/turliTavar/chegirma'}>
                                            <button className={'btn btn-success'}>Chegirma</button>
                                        </Link>
                                        <Link to={'/headerthird/turliTavar/eslatma'}>
                                            <button className={'btn btn-success'}>Eslatma</button>
                                        </Link>
                                    </div>
                                    <Switch>
                                        <Route path={'/headerthird/turliTavar/final'} component={Final}/>
                                        <Route path={'/headerthird/turliTavar/chegirma'} component={Chegirma}/>
                                        <Route path={'/headerthird/turliTavar/eslatma'} component={Eslatma}/>
                                    </Switch>

                                        {
                                            TradeHistory.savdolar.map(item=><tr key={item?.id}>
                                                <td>{item?.name}</td>
                                            </tr>)
                                        }

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <button onClick={toggle4} className={'btn btn-outline-primary'}>Chiqish</button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                {/*{console.log(PayReducer.paymethod)}*/}
                <div className="savdoBlock">
                    <div className="savdoBlockLeft">
                        <div className="selectBox">
                            {/*{console.log(MijozGuruxReducer.mijozgurux[0]?.id)}*/}
                            <select className="" value={input.baza} onChange={baza} name="" id="">
                                {
                                    MijozGuruxReducer.mijozgurux.map(item =>
                                        input.baza==''?input.baza = item.id:
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi}
                                   placeholder={'Mahsulot nomi yoki shtrix kodini yozing'}/>
                            <button className={'addButton'} onClick={toggle5}>+</button>
                            <Modal isOpen={openModal} toggle={toggle5}>
                                <ModalHeader>
                                    Maxsulot qoshish
                                </ModalHeader>
                                <ModalBody>
                                    <div className={'col-md-12'}>
                                        <div className={'d-flex'}>
                                            <div className="col-md-6">
                                                <label htmlFor={'mod'}>Mahsulot name</label>
                                                <input type="text" value={input.modalmahsulotnomi}
                                                       onChange={modalmahsulotnomi} id={'mod'} className={'form-control'}/>
                                                <label htmlFor={'ol'}>O`lchov birligi</label>
                                                <select className={'form-control'} name="" id={'ol'}
                                                        value={input.ulcovbirligi} onChange={ulcovbirligi}>
                                                    <option value="tanlash">Tanlash</option>
                                                    {/*    FIX ME*/}
                                                    {
                                                        kgreducer.kg.map(item => <option
                                                            value={item.id}>{item.name}</option>)
                                                    }
                                                </select>
                                                <label htmlFor={'bolim'}>Bo`lim</label>
                                                <select name="" id={'bolim'} className={'form-control'} value={input.bolim}
                                                        onChange={bolim}>
                                                    <option value="tanlash">Tanlash</option>
                                                    {/*    FIX ME*/}
                                                    {
                                                        BolimReducer.bolimlar.map(item => <option
                                                            value={item.id}>{item.name}</option>)
                                                    }
                                                </select>
                                                <label htmlFor={'sot'}>Sotish narxi</label>
                                                <input type="text" className={'form-control'} value={input.sotishnarxi}
                                                       onChange={sotishnarxi}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor={'shtrix'}>Shtrix kod</label>
                                                <input type="number" className={'form-control'} value={input.shtrix}
                                                       onChange={shtrix}/>
                                                <label htmlFor={'firma'}>Firma</label>
                                                <select name="" id={'firma'} className={'form-control'} value={input.firma}
                                                        onChange={firma}>
                                                    {/*    FIX ME*/}
                                                    <option value="barchasi">Tanlash</option>
                                                    {
                                                        FirmaReducer.firmalar.map(item => <option
                                                            value={item.id}>{item.name}</option>)
                                                    }
                                                </select>
                                                <label htmlFor={'miqdor'}>Miqdor</label>
                                                <input type="number" id={'miqdor'} className={'form-control'}
                                                       value={input.miqdor} onChange={miqdor}/>
                                            </div>
                                        </div>
                                        <div className={'d-flex'}>
                                            <div className="col-md-6">
                                                <label htmlFor={'sol'}>Soliqsiz narx</label>
                                                <input type="text" className={'form-control'} value={input.soliqsiznarx}
                                                       onChange={soliqsiznarx}/>
                                                <label htmlFor={'sol'}>Soliq bn narxi</label>
                                                <input type="text" className={'form-control'} value={input.soliqbnnarxi}
                                                       onChange={soliqbnnarxi}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor={'fo'}>Foyda foizda</label>
                                                <input type="text" className={'form-control'} value={input.foydafoiz}
                                                       onChange={foydafoiz}/>
                                                <label htmlFor={''}>Sotish narxi soliqsiz</label>
                                                <input type="text" className={'form-control'}/>
                                                <label htmlFor={'nn'}>Sotib olish narxi</label>
                                                <input type="text" value={input.sotibolishnarx} className={'form-control'}
                                                       onChange={sotibolishnarxi}/>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className={'btn btn-outline-primary'} onClick={toggle5}>Chqish</button>
                                    <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="table-responsive tbodyY">
                            <table className={'table '}>
                                <thead>
                                <tr>
                                    <th>T/R</th>
                                    <th>Mahsulot</th>
                                    <th className={'text-center'}>Miqdori</th>
                                    <th>Jami</th>
                                    <th>. . .</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    arr1.map((item,index) => <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td onClick={toggle6} className={'namepointer'} style={{marginLeft: '10px'}}>{item.name}</td>
                                        <Modal isOpen={tahrir} toggle={toggle6}>
                                            <ModalHeader>
                                                Tahrir
                                            </ModalHeader>
                                            <ModalBody>
                                                <label htmlFor={'nar'}>Narxi</label>
                                                <input id={'nar'} type="text" value={input.narxi} onChange={narxi} className={'form-control'}/>
                                                <div className="col-md-12 d-flex ">
                                                    <div className="col-md-6">
                                                        <label htmlFor={'a'}>Chegirma qilish</label>
                                                        <select name="" id={'a'} value={input.chegirmatartib} onChange={chegirmatartib} className={'form-control'}>
                                                            
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor={'m'}>Chegirma miqdori</label>
                                                        <input type="number" value={input.chegirmamiqdor} onChange={chegirmamiqdor} className={'form-control'}/>
                                                    </div>
                                                </div>
                                                <label htmlFor={'te'} className={'mt-2'}>Qisqa eslatma</label>
                                                <textarea name="" id={'te'} cols="10" rows="3" value={input.qisqanarx} onChange={qisqanarx} className={'form-control'}> </textarea>
                                            </ModalBody>
                                            <ModalFooter>
                                                <button onClick={toggle6} className={'btn btn-outline-primary'}>Chiqish</button>
                                            </ModalFooter>
                                        </Modal>
                                        <td className={''}>
                                            <div className={'d-flex align-items-center justify-content-around p-0'}
                                                 style={{width: '100%'}}>
                                                <button disabled={item.disabled} onClick={() => sMinus(item.id)}
                                                        className={'btn btn-outline-danger rounded-circle border-3'}>-
                                                </button>
                                                {item.counter}
                                                <button onClick={() => setCount(item.id)}
                                                        className={'btn btn-outline-primary rounded-circle border-3'}>+
                                                </button>
                                            </div>
                                            {
                                                item.active ? <p className={'text-danger text-center fw-2'}>Only {item.quantity} available !</p>:''
                                            }
                                        </td>
                                        <td>{item.counter * item.salePrice}</td>
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
                            <h6 className='d-flex align-items-center'>Mahsulot soni:{xisob}</h6>
                            <h6>Jami:{jamixisob}</h6>
                        </div>
                        <hr style={{margin: '2px'}}/>
                        <div className={'chegirmalarBox'}>
                            <div className='d-flex'>
                                <p>Chegirma:</p>
                                <img src="" alt=""/>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex'>
                                <p>Soliq:</p>
                                <img src="" alt=""/>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex'>
                                <p>Yetkazib berish:</p>
                                <img src="" alt=""/>
                                <p>0.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="savdoBlockRigth">
                        <div className="bazaBox">
                            <select name="" id="" onChange={setbrand} value={input.brand}>
                                <option value="barchasi">Barcha brendlar</option>
                                {
                                    FirmaReducer.firmalar.map(item=> <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className={' maxsulotImgBlock'}>

                            {
                                MaxsulotlarRoyxariReducer.maxsulotlar.map(item => <div className={'maxsuImgBox'}
                                                                                       key={item.id}>
                                    <div onClick={() => pushesh(item)}>
                                        <img className={'hoverimg'}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uAJqm9dM-DzEqpAyyUVfJ1JnRppFw2QtMcNVOIOBEKqkSzsWmK-5btcDekYzmawDWfg&usqp=CAU"
                                            alt="yuq"/>
                                        <h6>{item.name}</h6>
                                        <p>{item.salePrice}</p>
                                    </div>
                                </div>)
                            }

                        </div>

                    </div>

                </div>
                <div className="savBtnBox col-12">
                    <button className={'col-sm-6 btn btn-primary m-1'}>Eslatma</button>
                    <button className={'col-6 btn btn-danger m-1'}>Chegirma</button>
                    <button onClick={toggle8} className={'col-6 btn btn-warning m-1'}>Ushlab turish</button>
                    <Modal isOpen={ushla2} toggle={toggle8}>
                        <ModalHeader>
                            Ushlab turish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'qisqa'}>ESLATMA</label>
                            <textarea className={'form-control'} id={'qisqa'} cols="20" rows="3" value={input.eslatma} onChange={eslatma}> </textarea>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={ushla} className={'btn btn-outline-primary'}>Saqlash</button>
                            <button onClick={toggle8} className={'btn btn-outline-primary'}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                    <button onClick={kredit} className={'col-6 btn btn-outline-primary m-1'}>Kreditga sotish</button>
                    <Modal isOpen={activeModalkredit} toggle={kredit}>
                        <ModalHeader>Kredit bo`limi </ModalHeader>
                        <ModalBody>
                            <h3> <strong>Jami summa:</strong>  {jamixisob} </h3>
                            <label htmlFor={'avans'}>Birinchi to`lov</label>
                            <input value={input.birincitulovkredit} onChange={birincitulovkredit} type="text" className={'form-control'}/>
                            <div>  
                                <div>
                                    <h4>Muddatni kiriting</h4>
                                    <div className={'d-flex justify-content-around'}>
                                        <div className={'input-group'}>
                                            <input type="text" className={'form-control'} value={input.yil} onChange={yil}/>
                                            <select name="kreditsana" id="" value={input.kun} onChange={kun}  className={'form-control'}>
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
                                    trigger={() => <p style={{marginBottom:0}}>Sotish (Chek)</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>
                            {/*<button className={'btn btn-outline-primary'} onClick={UzcardTolov}>Sotish ( Chek )</button>*/}
                            <button className={'btn btn-outline-primary'} onClick={kredit}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                    <button className={'col-6 btn btn-outline-warning  m-1'}>Turli to`lovli</button>
                    <button onClick={qarz} className={'col-6 btn btn-info m-1'}>Qarzga sotish</button>
                    <Modal isOpen={activeqarz} toggle={qarz}>
                        <ModalHeader>
                            Qarzga savdo qilish bo`limi
                        </ModalHeader>
                        <ModalBody>
                            <h3> <strong>Jami summa:</strong>  {jamixisob} </h3>
                            <label htmlFor={'rrr'}>Birinchi to`lov summasini kiriting</label>
                            <input type="number" placeholder={'0'} className={'form-control'} id={'rrr'} value={input.qarzamount} onChange={qarzamount}/>
                            <p data-tip="Avans sifatida to`lov qilishingiz shart emas (agar to`lov qilinmasa hammasi qarz sifatida yoziladi)" className={'btn btn-outline-primary mt-2 form-control'}>BATAFSIL</p>
                            <ReactTooltip />
                        </ModalBody>
                        <ModalFooter>
                            {/*<button className={'btn btn-outline-primary'}>Saqlash</button>*/}
                            <button onClick={() => UzcardTolovQarz(2)} className={'btn btn-outline-primary'}>
                                <ReactToPrint
                                    trigger={() => <p style={{marginBottom:0}}>Saqlash (Chek)</p>
                                    }
                                    content={() => componentRef.current}
                                />
                            </button>
                            <button onClick={qarz} className={'btn btn-outline-primary'}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                    <button onClick={() => UzcardTolov(1,'Naqd')} className={'btn btn-success m-1'}>
                        <ReactToPrint
                            trigger={() => <p className={'toprint '}>Naqd</p>
                            }
                            content={() => componentRef.current}
                        />
                    </button>

                    <button className={'btn  btn-dark m-1'} onClick={() => UzcardTolov(2,"Uzcard")}>
                        <ReactToPrint
                            trigger={() => <p className={'toprint '}>UzCard</p>
                            }
                            content={() => componentRef.current}
                        />
                    </button>
                    <button onClick={() => UzcardTolov(3,"Humo")} className={'btn btn-warning m-1'}>
                        <ReactToPrint
                            trigger={() => <p className={'toprint'}>Humo</p>

                            }
                            content={() => componentRef.current}
                        /></button>
                    <button className='jamiTolov m-1'>Jami to`lov: {jamixisob} so'm</button>
                    <button onClick={clear} className={'qchiqish btn btn-danger m-1'}>Chiqish</button>
                </div>
                <div className="">

                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            USHLAB TURISH
                        </ModalHeader>
                        <ModalBody>
                            <table className={'table'}>
                                <thead>
                                    <tr>
                                        <th>T/R</th>
                                        <th>Mahsulot</th>
                                        <th>Miqdori</th>
                                        <th>Jami</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    ushlabtur.map((item,index)=><tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.counter}</td>
                                        <td>{item.counter*item.salePrice}</td>
                                    </tr>)
                                }
                                </tbody>
                            </table>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={savdooynakochirish} className={'btn btn-outline-primary'}>Savdo oynasiga ko`chirish</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
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
                            <button className={'btn btn-outline-primary'} onClick={toggle2}>'Chiqish</button>
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
                            <button className={'btn btn-outline-primary'} onClick={toggle3}>'Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className={'bbb'}>
                    {
                        openCalc ? <Calculator/> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default connect((kgreducer,XarajatlarReducer,XarajatTurlariReducer ,PayReducer,TradeHistory, MaxsulotlarRoyxariReducer, BolimReducer, FirmaReducer, users, SavdoOynaReducer, MijozGuruxReducer, SavdoQoshishReducer,branchreducer), {
    getSavdo,
    saveXarajatlar,
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
    getMaxsulotRuyxati3
})(SavdoOynasi)
