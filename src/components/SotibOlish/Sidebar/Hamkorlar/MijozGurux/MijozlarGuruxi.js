import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import './mijozlarGuruxi.css'
import {useState, useEffect} from 'react'
import {connect} from "react-redux";
import MijozGuruxReducer, {
    getMijozGurux,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux
} from "../reducer/MijozGuruxReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import users from "../../../../../reducer/users";
import QarzuzishReducer, {qarzuzishCustomer} from "../reducer/QarzuzishReducer";

function Mijozlarguruxi({
                            getMijozGurux,
                            saveMijozGurux,
                            editMijozGurux,
                            deleteMijozGurux,
                            users,
                            MijozGuruxReducer
                            ,qarzuzishCustomer
                        }) {



    const [active, setActive] = useState(false);

    const [plaseholders,setPlaseholders] = useState(
        {
            guruhNomiPlaseholders:'',
            phonePlaseholders:'',
            telegramPlaseholders:'',
        }
    )

    const [input, setInput] = useState(
        {
            guruhnomi: '',
            selectfoiz: '',
            foizda: '',
            inputsearch: '',
            phone: '',
            mId: '',
            qarzuzish:''
        }
    )

    function phone(e) {
        input.phone = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qarzuzish(e) {
        input.qarzuzish = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    function deleteM(item) {
        console.log(item)
        deleteMijozGurux(item.id)
        setTimeout(()=>{
            getMijozGurux(1)
        },100)
    }

    function changeguruxnomi(e) {
        input.guruhnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changeselectfoiz(e) {
        input.selectfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changefoizda(e) {
        input.foizda = e.target.value
        let a = {...input}
        setInput(a)
    }

    function editM(id) {
        toggle()
        MijozGuruxReducer.mijozgurux.map(item => {
            if (item.id === id) {
                input.guruhnomi = item.name
                input.phone = item.phoneNumber
                input.foizda = item.telegram
                input.mId = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqlaqarz(item){
        qarzuzishCustomer({
            repayment: input.qarzuzish,
            id:item.id
        })
        toggle2()
        input.qarzuzish = ''
        let a = {...input}
        setInput(a)
    }

    function saqla() {
       if(input.guruhnomi !=="" && input.phone !=="" && input.foizda !==""){
         
        if (input.mId !== '') {
            editMijozGurux({
                name: input.guruhnomi,
                phoneNumber: input.phone,
                telegram: input.foizda,
                businessId: 1,
                id: input.mId
            })
        } else {
            saveMijozGurux({
                name: input.guruhnomi,
                phoneNumber: input.phone,
                telegram: input.foizda,
                repayment: input.qarzuzish,
                businessId: 1
            })
        }
        setPlaseholders(
            {
                guruhNomiPlaseholders:'',
                phonePlaseholders:'',
                telegramPlaseholders:''
            }
        )
        
        input.guruhnomi = ''
        input.phone = ''
        input.selectfoiz = ''
        input.foizda = ''
        input.mId=''
        let a ={...input}
        setInput(a)
        toggle()
       }
       else{
        setPlaseholders(
            {
                guruhNomiPlaseholders:'Guruh nomini kiriting...',
                phonePlaseholders:'Telefon raqam kiriting...',
                telegramPlaseholders:'Telegram guruh nomi... '
            }
        )
       }
    }


    const [nomi,setnomi] = useState(true)
    const [telraqam,settelraqam] = useState(true)
    const [foizda,setfoizda] = useState(true)
    const [telegram,settelegram] = useState(true)
    const [amallar,setamallar] = useState(true)

    const [headlist, setheadlist] = useState([
        {
            name: 'Nomi',
            phone: 'Tel raqami',
            foiz:'Foiz %',
            telegram: 'Telegram',
            amallar: 'Amallar'
        }
    ])

    const [malkamay,setmalkamay] = useState(false)

    const [xisob,setxisob] = useState(0)
    let [jamixisob,setjamixisob] = useState(0)

    function toggle() {
        setActive(!active)
        setInput(
            {
                guruhnomi: '',
                selectfoiz: '',
                foizda: '',
                inputsearch: '',
                phone: '',
                mId: ''
            }
        )
        setPlaseholders(
            {
                guruhNomiPlaseholders:'',
                phonePlaseholders:'',
                telegramPlaseholders:''
            }
        )
    }

    useEffect(() => {
        getMijozGurux()
    }, [MijozGuruxReducer.current])

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [qarzuz,setqarzuz] = useState(false)

    function toggle2(){
        setqarzuz(!qarzuz)
    }

    return (
        <div className="col-md-12 mt-2 pt-4 pb-4">
            <div className="textHeaderMIG">
                <h2 className={'text-center'}>Barcha Mijozlar</h2>
            </div>
            <div className="rowStyleMIG">
                <div className="qoshishMIG">
                    <h5>Barcha mijozlar</h5>
                    {
                        users.addcustomer?  <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>:''
                    }
                </div>

                {
                    users.viewcustomer? <div>
                        <div className="izlashMIG">
                            <div className="izlashBox1">
                                <p>Ko'rsatildi</p>
                                <select name="" id="">
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">All</option>
                                </select>
                                <button><img src={CSV} alt=""/> Export CSV</button>
                                <button><img src={Excel} alt=""/> Export Excel</button>
                                <button><img src={Print} alt=""/> Print</button>
                                <button><img src={Pdf} alt=""/>Export PDF</button>
                                <button onClick={()=>setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                                {
                                    malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                        <li onClick={()=>setnomi(!nomi)} className={'li2'}>{nomi? item.name: item.name+' <-'}</li>
                                        <li onClick={()=>settelraqam(!telraqam)} className={'li2'}>{telraqam? item.phone:'Tel raqam '+' <-'}</li>
                                        <li onClick={()=>setfoizda(!foizda)} className={'li2'}>{foizda? item.foiz:item.foiz+' <-'}</li>
                                        <li onClick={()=>settelegram(!telegram)} className={'li2'}>{telegram? item.telegram:item.telegram+' <-'}</li>
                                        <li onClick={()=>setamallar(!amallar)} className={'li2'}>{amallar?item.amallar:item.amallar+ ' <-'}</li>
                                    </ul>) : ''
                                }
                            </div>

                            <div className="izlashBox2">
                                <input type="text" value={input.inputsearch} onChange={search} placeholder='Izlash...'/>
                            </div>
                        </div>
                        <div className={'d-flex mt-3 justify-content-center'}>
                            {/*{console.log(TaminotReducer.taminot.map(item=> item.storeDebt))}*/}

                            {
                                MijozGuruxReducer.mijozgurux.map(item=> {
                                    jamixisob+=item.debt
                                })
                            }
                            {/*<div><h4>Maxsulotlar soni: {xisob}</h4></div>*/}
                            <div><h4>Jami Qarz: {jamixisob}  So`m</h4></div>
                        </div>
                        <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">

                            <table className='table table-hover  table-striped table-bordered mt-4'>
                                <thead>
                                {
                                    headlist.map(item=><tr key={item.id}>
                                        <th>T/R</th>
                                        {
                                            nomi?<th>{item.name}</th>:''
                                        }
                                        {
                                            telraqam?<th>{item.phone}</th>:''
                                        }
                                        {
                                            telegram?<th>{item.telegram}</th>:''
                                        }
                                        <th>Qarz</th>
                                        {/*<th>Qarz uzish</th>*/}
                                        {
                                            amallar?<th className={'text-center'}>{item.amallar}</th>:''
                                        }
                                    </tr>)
                                }
                                </thead>

                                <tbody>
                                {
                                    MijozGuruxReducer.mijozgurux.filter(val => {
                                        if (input.inputsearch === '') {
                                            return val
                                        } else if (val.name.toUpperCase().includes(input.inputsearch.toUpperCase())) {
                                            return val
                                        }
                                    }).splice(0,visible).map((item,index) => <tr key={item.id}>
                                            <td>{index+1}</td>
                                            {
                                                nomi?<td>{item.name}</td>:''
                                            }
                                            {
                                                telraqam?<td>{item.phoneNumber}</td>:''
                                            }
                                            {
                                                telegram?<td>{item.telegram}</td>:''
                                            }
                                            <td>{item.debt}</td>

                                            <Modal isOpen={qarzuz} toggle={toggle2}>
                                                <ModalHeader>
                                                    Qarz uzish
                                                </ModalHeader>
                                                <ModalBody>
                                                    <label htmlFor={'l'}>Qarz uzish</label>
                                                    <input type="text" className={'form-control'} value={input.qarzuzish} onChange={qarzuzish}/>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className={'btn btn-outline-primary'} onClick={()=>saqlaqarz(item)}>Saqlash</button>
                                                    <button className={'btn btn-outline-primary'} onClick={toggle2}>Chiqish</button>
                                                </ModalFooter>
                                            </Modal>
                                            {
                                                amallar?<td className={'d-flex justify-content-center'}>
                                                    {
                                                        users.editcustomer?
                                                            <button className={'btnB m-1'}
                                                                    onClick={() => editM(item.id)}>Taxrirlash
                                                            </button>:''
                                                    }
                                                    {
                                                        users.deletecustomer? <button className={'btnB  m-1'}
                                                                                      onClick={() => deleteM(item)}>O`chirish
                                                        </button>:''
                                                    }
                                                    <td><button className={'btnB mt-1'} onClick={toggle2}>Qarz uzish</button></td>
                                                </td>:''
                                            }
                                        </tr>)
                                }
                                </tbody>
                            </table>
                            <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                        </div>

                    </div>:''
                }



                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi guruh qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input value={input.guruhnomi} onChange={changeguruxnomi} id={'nomi'} type="text"
                              placeholder={plaseholders.guruhNomiPlaseholders}  className={'form-control mb-3 mt-1'}/>

                        <label htmlFor={'tel'}>Telefon raqam</label>
                        <input type="text" id='phoneNumberInput' placeholder={plaseholders.phonePlaseholders} className={'form-control mb-3 mt-1'} value={input.phone} onChange={phone}/>
                        <label htmlFor={'foizda'}>Telegram</label>
                        <input type="text" value={input.foizda}  placeholder={plaseholders.telegramPlaseholders} onChange={changefoizda} className={'form-control mb-3 mt-1'}
                               id={'foizda'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-primary'} onClick={saqla}>SAQLASH</button>
                        <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                    </ModalFooter>
                </Modal>

            </div>
        </div>
    )
}

export default connect((MijozGuruxReducer,QarzuzishReducer, users), {
    getMijozGurux,
    qarzuzishCustomer,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux
})(Mijozlarguruxi)