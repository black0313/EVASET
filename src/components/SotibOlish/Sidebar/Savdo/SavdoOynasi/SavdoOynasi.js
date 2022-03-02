import img1 from '../../../../../img/pause1.png'
import img2 from '../../../../../img/maximize2.png'
import img3 from '../../../../../img/calculator3.png'
import img4 from '../../../../../img/note4.png'
import img5 from '../../../../../img/clipboard-close5.png'
import img6 from '../../../../../img/backward6.png'
import img7 from '../../../../../img/people.svg'
import img8 from '../../../../../img/search-normal-1.svg'
import test from '../../../../../img/test.jpg'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import './savdoOynasi.css'
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../reducer/SavdoOynaReducer";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati
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
import Print from "./Print";
import MijozGuruxReducer, {getMijozGurux} from "../../Hamkorlar/reducer/MijozGuruxReducer";
import SavdoQoshishReducer,{saveSavdolar} from "../reducer/SavdoQoshishReducer";
function SavdoOynasi({
                         getSavdo,
                         deleteSavdo,
                         savdo,
                         getMaxsulotRuyxati,
                         MaxsulotlarRoyxariReducer,
                         deleteMaxsulotRuyxati,getMijozGurux,MijozGuruxReducer,SavdoQoshishReducer,saveSavdolar,
    users,savdooynasi
                     }) {

    const [input, setInput] = useState(
        {
            baza: '',
            mahsulotnomi: '',
            barchabrandlar: '',

        }
    )

    const [arr1, setarr1] = useState([

    ])
    const componentRef = useRef(

    );

    const [lastTradeActive, setlastTradeActive] = useState(false)

    function toggle4() {
        setlastTradeActive(!lastTradeActive)
    }

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [openCalc, setOpenCalc] = useState(false)
    const [pushmah,setPushmah] = useState('')
    const [pushbool,setPushbool] = useState(false)
    function openCalcul() {
        setOpenCalc(!openCalc)
    }

    function pushesh(val) {
        if(val.id==pushmah){
            setCount(val.id)
        }
        else{
            arr1.push({...val,counter:1})
            let a = [...arr1]
            setarr1(a)
        }
        setPushmah(val.id)
        console.log(arr1)
    }


    function setCount(id) {
        arr1.map(item => {
            if (item.id === id) {
                item.counter += 1
            }
        })
        let a = [...arr1]
        setarr1(a)
    }
    const history = useHistory()
    function sMinus(id) {
        arr1.map(item => {
            if (item.id === id) {
                item.counter -= 1
            }
        })
        let a = [...arr1]
        setarr1(a)
    }
    function deleteM(id) {

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
    }

    function barchabrandlar(e) {
        input.barchabrandlar = e.target.value
        let a = {...input}
        setInput(a)
    }
    function UzcardTolov(naqd){
        console.log('helll')
        arr1.map(item=>{
            saveSavdolar({
                customerId:input.baza,
                userId:users.businessId,
                productTraderDto:[
                    {
                        tradedQuantity:item.counter,
                        productTradeId:item.id
                    }                ],
                payDate:new Date().getDate(),
                branchId:item.branch.id,
                payMethodId:naqd,
                amountPaid:item.salePrice*item.counter,
                currencyId:1,
                addressId:1,
            })
        })
        setarr1([])
    }

    useEffect(() => {
        getMaxsulotRuyxati(users.businessId)
        getMijozGurux(users.businessId)
        // history.push('/headerthird/turliTavar/final')
    }, [])

    function toggle() {
        setActive(!active)
    }
    function toggle2() {
        setActive2(!active2)
    }

    function toggle3() {
        setActive3(!active3)
    }


    return (
        <div className={'savdoOynaContainers'}>
            <div className="savdoNavbar">
                <div className="navbarLeft">
                    <h5>Baza</h5>
                </div>
                <div className="navbarRigth">
                    <button onClick={toggle4}>Oxirgi savdolar</button>
                    <img src={img1} onClick={toggle} alt=""/>
                    {/*<img src={img2} onClick={toggle} alt="" />*/}
                    <img src={img3} onClick={openCalcul} alt=""/>
                    <img src={img4} onClick={toggle2} alt=""/>
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
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={toggle4} className={'btn btn-outline-primary'}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
            <div className="savdoBlock">
                <div className="savdoBlockLeft">
                    <div className="selectBox">
                        <select className="" value={input.baza} onChange={baza} name="" id="">
                            <option value="walk">Walk in-customer</option>
                            {
                                MijozGuruxReducer.mijozgurux.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                        <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi}
                               placeholder={'Mahsulot nomi yoki shtrix kodini yozing'}/>
                    </div>
                    <div className="table-responsive tbodyY">
                        <table className={'table '} ref={componentRef}>
                            <thead>
                            <tr>
                                <th>Mahsulot</th>
                                <th className={'text-center'}>Miqdori</th>
                                <th>Jami</th>
                                <th>. . .</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                arr1.filter(val => {
                                    if (input.mahsulotnomi === '') {
                                        return val
                                    } else if (val.name.toUpperCase().includes(input.mahsulotnomi.toUpperCase())) {
                                        return val
                                    }
                                })
                                    .map(item => <tr key={item.id}>
                                        <td style={{marginLeft: '10px'}}>{item.name}</td>
                                        <td className={'d-flex justify-content-between'}>
                                            <button onClick={() => setCount(item.id)}
                                                    className={'btn btn-outline-dark'}>+
                                            </button>
                                            {item.counter}
                                            <button onClick={() => sMinus(item.id)}
                                                    className={'btn btn-outline-dark'}>-
                                            </button>
                                        </td>
                                        <td>{item.buyPrice}</td>
                                        <td>
                                            <button onClick={() => deleteM(item.id)}
                                                    className={'btn btn-outline-dark'}>Delete
                                            </button>
                                        </td>
                                    </tr>)
                            }

                            </tbody>
                        </table>
                    </div>
                    <div className="maxSoniBox">

                        <h6>Maxsulot soni:200</h6>
                        <h6>Jami:5 000 000 so'm</h6>
                        {/* <h6 className='d-flex align-items-center '>Mahsulot soni: {
                            arr1.map(item => <tr key={item.id}>
                                <td>{item.id + " " + item.name + " -> "} </td>
                                <td style={{fontSize: '18px'}}>{item.counter}</td>
                                <td>Jami:0</td>ryry
                            </tr>)
                        }</h6> */}
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
                        <select name="" id="">
                            <option value="">Barcha brendlar</option>
                        </select>
                    </div>
                        <div className={' maxsulotImgBlock'}>
                        
                                {
                                    MaxsulotlarRoyxariReducer.maxsulotlar.map(item => <div className={'maxsuImgBox'}
                                                                                        key={item.id}>
                                        {/*<img style={{marginLeft:'15px'}} src="https://freepngimg.com/static/img/whatsapp.png"  alt="yuq"/>*/}
                                        {/*<div onClick={() => qoshil(item.id)} style={{cursor:'pointer'}}>*/}
                                        <div onClick={() => pushesh(item)}>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uAJqm9dM-DzEqpAyyUVfJ1JnRppFw2QtMcNVOIOBEKqkSzsWmK-5btcDekYzmawDWfg&usqp=CAU"
                                                alt="yuq"/>
                                            <h6>{item.name}</h6>
                                            <p>250000</p>
                                        </div>
                                    </div>)
                                }

                        </div>

                </div>

            </div>
            <div className="savBtnBox">
                <button className={'btn btn-primary m-1'}>Eslatma</button>
                <button className={'btn btn-danger m-1'}>Chegirma</button>
                <button className={'btn btn-warning m-1'}>Ushlab turish</button>
                <button className={'btn btn-outline-primary m-1'}>Kreditga sotish</button>
                <button className={'btn btn-outline-warning  m-1'}>Turli to`lovli</button>
                <button className={'btn btn-info m-1'}>Plastik</button>
                <button onClick={()=>UzcardTolov(1)} className={'btn btn-success m-1'}>Naqd</button>


                <button onClick={()=>UzcardTolov(2)}>
                    <ReactToPrint
                        trigger={() =>  <button  className={'btn btn-dark m-1'}>UzCard</button>
                        }
                        content={() => componentRef.current}
                    />
                </button>




                <ReactToPrint
                    trigger={() =>                    <button className={'btn btn-warning m-1'}>Humo</button>

                    }
                    content={() => componentRef.current}
                />
                <button className='jamiTolov m-1'>Jami to`lov: 1 200 000 000 so'm</button>
                <button className={'btn btn-danger m-1'}>Chiqish</button>
            </div>
            <div className="">

                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        USHLAB TURISH
                    </ModalHeader>
                    <ModalBody>
                        Manba Topilmadi !!!
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>'Chiqish</button>
                    </ModalFooter>
                </Modal>
                {/*<img style={{cursor:'pointer'}} onClick={toggle2} src={img2} alt=""/>*/}


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
    )
}

export default connect((MaxsulotlarRoyxariReducer, users,SavdoOynaReducer,MijozGuruxReducer,SavdoQoshishReducer), {
    getSavdo,
    saveSavdo,
    editSavdo,
    deleteSavdo,
    getMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    savdooynasi,
    getMijozGurux,
    saveSavdolar
})(SavdoOynasi)
