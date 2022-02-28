import img1 from '../../../../../img/pause1.png'
import img2 from '../../../../../img/maximize2.png'
import img3 from '../../../../../img/calculator3.png'
import img4 from '../../../../../img/note4.png'
import img5 from '../../../../../img/clipboard-close5.png'
import img6 from '../../../../../img/backward6.png'
import img7 from '../../../../../img/people.svg'
import img8 from '../../../../../img/search-normal-1.svg'
import test from '../../../../../img/test.jpg'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import './savdoOynasi.css'
import SavdoOynaReducer, { deleteSavdo, editSavdo, getSavdo, saveSavdo } from "../reducer/SavdoOynaReducer";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Calculator from "../../../header/Calculator/Calculator";

function SavdoOynasi({ getSavdo, deleteSavdo, savdo, getMaxsulotRuyxati, MaxsulotlarRoyxariReducer, deleteMaxsulotRuyxati }) {

    const [input, setInput] = useState(
        {
            baza: '',
            mahsulotnomi: '',
            barchabrandlar: ''
        }
    )

    const [arr1, setarr1] = useState([
        {
            name: 'CR7',
            id: '',
            counter: 0
        }
    ])

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [openCalc, setOpenCalc] = useState(false)
    function openCalcul() {
        setOpenCalc(!openCalc)
    }

    function pushesh(name, id) {
        arr1.push({ name: name, id: id, counter: 0 })
        let a = [...arr1]
        setarr1(a)
        console.log('sss');
    }
    function deleteM(id) {
        console.log(id);
        console.log(arr1);
        let a = arr1
        a.slice(id, 1)
        setarr1(a)
        console.log(arr1);
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
    }
    function barchabrandlar(e) {
        input.barchabrandlar = e.target.value
        let a = { ...input }
        setInput(a)
    }

    useEffect(() => {
        getMaxsulotRuyxati()
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

    function deleteMaxsulot(item) {
        deleteMaxsulotRuyxati(item.id)
        console.log('Deleted');
    }

    const [count, setCounter] = useState(0)

    function setCount(id) {
        arr1.map(item => {
            if (item.id === id) {
                item.counter += 1
            }
        })
        let a = [...arr1]
        setarr1(a)
    }

    function sMinus(id) {
        arr1.map(item => {
            if (item.id === id) {
                item.counter -= 1
            }
        })
        let a = [...arr1]
        setarr1(a)
    }

    return (
        <div className={'savdoOynaContainers'}>
            <div className="savdoNavbar">
                <div className="navbarLeft">
                    <h5>Baza</h5>
                </div>
                <div className="navbarRigth">
                    <button>Oxirgi savdolar</button>
                    <img src={img1} onClick={toggle} alt="" />
                    <img src={img2} onClick={toggle} alt="" />
                    <img src={img3} onClick={toggle} alt="" />
                    <img src={img4} onClick={toggle} alt="" />
                    <img src={img5} onClick={toggle} alt="" />
                    <img src={img6} onClick={toggle} alt="" />
                </div>
            </div>
            <div className="savdoBlock">
                <div className="savdoBlockLeft">
                    <div className="selectBox">
                        <select className="" value={input.baza} onChange={baza} name="" id="">
                            <option value="1">Walk in-customer</option>
                            {/*<option value="2">Walk in-seller</option>*/}
                        </select>
                        <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi} placeholder={'Mahsulot nomi yoki shtrix kodini yozing'} />
                        {/* <img src={img8} alt="" style={{cursor:'pointer'}}/> */}
                    </div>
                    <div className="table-responsive tbodyY">
                        <table className={'table'}>
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
                                    arr1.filter(val => {
                                        if (input.mahsulotnomi === '') {
                                            return val
                                        } else if (val.name.toUpperCase().includes(input.mahsulotnomi.toUpperCase())) {
                                            return val
                                        }
                                    })
                                        .map(item => <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td style={{ marginLeft: '10px' }}>{item.name}</td>
                                            <td className={'d-flex justify-content-between'}>
                                                <button onClick={() => setCount(item.id)} className={'btn btn-outline-dark'}>+</button>
                                                {item.counter}
                                                <button onClick={() => sMinus(item.id)} className={'btn btn-outline-dark'}>-</button>
                                            </td>
                                            <td> </td>
                                            <td>
                                                <button onClick={() => deleteM(item.id)} className={'btn btn-outline-dark'}>Delete</button>
                                            </td>
                                        </tr>)
                                }
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="maxSoniBox">

                        <h6 className='d-flex align-items-center '>Mahsulot soni: {
                            arr1.map(item => <tr key={item.id}>
                                <td>{item.id + " " + item.name}- </td>
                                <td style={{ fontSize: '18px' }}>{item.counter}</td>
                                {/*<tr><td>JAMI {item.counter}</td></tr>*/}
                            </tr>)
                        }</h6>
                        <h6>Jami:{0}</h6>
                    </div>
                    <hr style={{ margin: '2px' }} />
                    <div className={'chegirmalarBox'}>
                        <div className='d-flex'>
                            <p>Chegirma:</p>
                            <img src="" alt="" />
                            <p>0.00</p>
                        </div>
                        <div className='d-flex'>
                            <p>Soliq:</p>
                            <img src="" alt="" />
                            <p>0.00</p>
                        </div>
                        <div className='d-flex'>
                            <p>Yetkazib berish:</p>
                            <img src="" alt="" />
                            <p>0.00</p>
                        </div>
                    </div>
                </div>

                <div className="savdoBlockRigth">
                        <div className="bazaBox">
                            <select name="" id="">
                                <option value="">Barcha brendlar</option>
                                <option value=""></option>
                            </select>
                        </div>
                            <div className="maxsulotImgBlock">
                                <div className="maxsuImgBox">
                                    <img src={test} alt="" />
                                    <h6>erkaklar oyoq kiyimijkn</h6>
                                    <p>2500000 so'm</p>
                                </div>
                            </div>
                </div>
                
            </div>
            <div className="savBtnBox">
                        <button className={'btn btn-primary m-1'}>Eslatma</button>
                        <button className={'btn btn-danger m-1'}>Chegirma</button>
                        <button className={'btn btn-warning m-1'}>Ushlab turish</button>
                        <button className={'btn btn-outline-primary m-1'}>Kreditga sotish</button>
                        <button className={'btn btn-outline-warning m-1'}>Turli to`lovli</button>
                        <button className={'btn btn-info m-1'}>Plastik</button>
                        <button className={'btn btn-success m-1'}>Naqd</button>
                        <button className={'btn btn-dark m-1'}>UzCard</button>
                        <button className={'btn btn-warning m-1'}>Humo</button>
                        <button className='jamiTolov m-1'>Jami to`lov: 0</button>
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
                                openCalc ? <Calculator /> : ''
                            }
            </div>





            <div className={'d-flex'}>
                    <div className="col-md-12">
                        <div className="block col-md-12 d-flex flex-wrap justify-content-between ">

                            {
                                MaxsulotlarRoyxariReducer.maxsulotlar.map(item => <div className={'bImg '} key={item.id}>

                                    {/*<img style={{marginLeft:'15px'}} src="https://freepngimg.com/static/img/whatsapp.png"  alt="yuq"/>*/}
                                    <div onClick={() => pushesh(item.name, item.id)} className=" mt-2 ddd">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uAJqm9dM-DzEqpAyyUVfJ1JnRppFw2QtMcNVOIOBEKqkSzsWmK-5btcDekYzmawDWfg&usqp=CAU" alt="yuq" />
                                    </div>
                                    <div className={'bText'}>{item.name}</div>
                                </div>)
                            }

                        </div>
                    </div>

                   

                </div>
            </div>
    )
}
export default connect((MaxsulotlarRoyxariReducer, SavdoOynaReducer), { getSavdo, saveSavdo, editSavdo, deleteSavdo, getMaxsulotRuyxati, deleteMaxsulotRuyxati })(SavdoOynasi)
