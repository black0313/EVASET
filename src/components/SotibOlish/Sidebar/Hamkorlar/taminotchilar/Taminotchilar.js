import "./taminotchilar.css"
import {Link} from "react-router-dom"
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import {useEffect} from "react";
import {connect} from "react-redux";
import TaminotReducer, {getTaminot, saveTaminot, editTaminot, taminot, deleteTaminot} from "../reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import {useState} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {red} from "@mui/material/colors"
// import {ccc} from '../../../../../img/flash-1.svg'


function Taminotchilar({getTaminot, saveTaminot, editTaminot, deleteTaminot, taminot, users, TaminotReducer}) {

    useEffect(() => {
        getTaminot(users.businessId)
    }, [TaminotReducer.current])

    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active)
    }


    const [input, setInput] = useState(
        {
            langv1: '',
            telegram: '',
            dukon: '',
            idraqam: '',
            login: '',
            idplaceholder: 'ID raqami',
            loginplaceholder: 'Mr/Mrs/Mis',
            ismplaceholder: 'Ismi',
            telegramLinkPlaceholder: 'Telegram link',
            telefonRaqamPlaceholder: 'Telefon raqam',
            ismi: '',
            otaismi: '',
            familiyasi: '',
            inputsearch: '',
            tID: '',
        },
    );

    function changeizlash(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.inputsearch)
    }

    function changelangv1(e) {
        input.langv1 = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changedukon(e) {
        input.dukon = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changeidraqam(e) {
        input.idraqam = e.target.value
        let a = {...input}
        setInput(a)
    }

    function TELEGRAM(e) {
        input.telegram = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changelogin(e) {
        input.login = e.target.value
        let a = {...input}
        setInput(a)

    }

    function changeismi(e) {
        input.ismi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changeotaismi(e) {
        input.telegram = e.target.value
        let a = {...input}
        setInput(a)
    }

    function changefamiliyasi(e) {
        input.familiyasi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function deleteTaminot2(item) {
        console.log(item)
        deleteTaminot(item.id)
        getTaminot(users.businessId)
    }

    function editt(id) {
        toggle()
        TaminotReducer.taminot.map(item => {
            if (item.id === id) {
                input.ismi = item.name
                input.familiyasi = item.phoneNumber
                input.telegram = item.telegram
                input.login = item.login
                input.tID = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {
        // if(input.idraqam === ""){
        //     input.idplaceholder = "ID kiriting..."
        //     var b = document.getElementById('idRaqam')
        //     let a = {...input}
        //     setInput(a)
        //     console.log(input);
        //     b.classList.add('pcolor')
        // }
        //  if(input.login === ""){
        //     input.loginplaceholder = "Ma'lumot kiriting..."
        //     var b = document.getElementById('log1')
        //     let a ={...input}
        //     setInput(a)
        //     b.classList.add('pcolor')
        // }
        if (input.ismi === "" || input.telegram === "" || input.familiyasi === "") {
            input.ismplaceholder = "Ism kiriting..."
            var b = document.getElementById('ism')
            input.telefonRaqamPlaceholder = "Telefon raqam kiriting..."
            var c = document.getElementById('telefon')
            input.telegramLinkPlaceholder = "Link kiriting..."
            var d = document.getElementById('telegram')
            let a = {...input}
            setInput(a)
            b.classList.add('pcolor')
            c.classList.add('pcolor')
            d.classList.add('pcolor')
        }
            // else if(input.telegram === ""){
            //     input.telegramLinkPlaceholder = "Link kiriting..."
            //     var b = document.getElementById('telegram')
            //     let a = {...input}
            //     setInput(a)
            //     b.classList.add('pcolor')
            // }
            // else if(input.familiyasi === ""){
            //     input.telefonRaqamPlaceholder = "Telefon raqam kiriting..."
            //     var b = document.getElementById('telefon')
            //     let a = {...input}
            //     setInput(a)
            //     b.classList.add('pcolor')
        // }


        else {

            if (input.tID !== '') {
                editTaminot(
                    {
                        name: input.ismi,
                        phoneNumber: input.familiyasi,
                        telegram: input.telegram,
                        supplierType: '',
                        businessId: 1,
                        id: input.tID
                    }
                )
                console.log('edit')
            } else {
                saveTaminot({
                    name: input.ismi,
                    phoneNumber: input.familiyasi,
                    telegram: input.telegram,
                    supplierType: '',
                    businessId: 1,
                })
                console.log('save')
            }

            toggle()
            let a = {...input}
            setInput(a)
            console.log(input);
            let v = {...input}
            setInput({
                langv1: '',
                telegram: '',
                dukon: '',
                idraqam: '',
                login: '',
                idplaceholder: 'ID raqami',
                loginplaceholder: 'Mr/Mrs/Mis',
                ismplaceholder: 'Ismi',
                telegramLinkPlaceholder: 'Telegram link',
                telefonRaqamPlaceholder: 'Telefon raqam',
                ismi: '',
                otaismi: '',
                familiyasi: '',
                inputsearch: '',
                tID: '',
            })
        }
    }

    const [ismi,setismi] = useState(true)
    const [telraqam,settelraqam] = useState(true)
    const [telegram,settelegram] = useState(true)
    const [suplier,setsuplier] = useState(true)
    const [amallar,setamallar] = useState(true)

    const [headlist, setheadlist] = useState([
        {
            name: 'Ismi',
            phone: 'Telefon raqami',
            telegram: 'Telegram',
            supplier: 'Taminotchi turi',
            amallar: 'Amallar'
        }
    ])

    function malumotkamayname() {
        setismi(!ismi)
    }

    function toggle2() {
        setmalkamay(!malkamay)
    }

    const [malkamay, setmalkamay] = useState(false)

    return (

        <div>
            <div className="col-md-12 pt-4 pb-4 mt-2">
                <div className="textHeaderTM">
                    <h2>Taminotchilar/Diller </h2>
                    <p>Barcha Taminotchilar/Diller</p>
                </div>
                <div className="rowStyleTM">
                    <div className="qoshishTM">
                        <h5>Barcha Taminotchilar</h5>
                        <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                    </div>

                    <div className="izlashTM">
                        <div className="izlashBox1">
                            <p>Ko'rsatildi</p>
                            <select name="" id="">
                                <option value="">25</option>
                                <option value="">1,000</option>
                                <option value="">All</option>
                            </select>
                            <button><img src={CSV} alt=""/> Export CSV</button>
                            <button><img src={Excel} alt=""/> Export Excel</button>
                            <button><img src={Print} alt=""/> Print</button>
                            <button><img src={Pdf} alt=""/>Export PDF</button>
                            <button className={'posrel'} onClick={toggle2}><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                            {
                                malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                    <li onClick={malumotkamayname} className={'li2'}>{ismi? item.name: item.name+' <-'}</li>
                                    <li onClick={()=>settelraqam(!telraqam)} className={'li2'}>{telraqam? item.phone:'Tel raqam '+' <-'}</li>
                                    <li onClick={()=>settelegram(!telegram)} className={'li2'}>{telegram? item.telegram:item.telegram+' <-'}</li>
                                    <li onClick={()=>setsuplier(!suplier)} className={'li2'}>{suplier? item.supplier:'Taminotchi '+' <-'}</li>
                                    <li onClick={()=>setamallar(!amallar)} className={'li2'}>{amallar?item.amallar:item.amallar+ ' <-'}</li>
                                </ul>) : ''
                            }

                        </div>
                        <div className="izlashBox2">
                            <input type="text" value={input.inputsearch} onChange={changeizlash}
                                   placeholder='Izlash...'/>
                        </div>

                    </div>
                    <div className="table-responsive">
                        <table className='table table-striped table-bordered mt-4'>
                            <thead>
                            {/*<tr>*/}
                            {
                                headlist.map(item => <tr key={item.id}>
                                    {
                                        ismi?<th>{item.name}</th>:''
                                    }
                                    {
                                        telraqam?<th>{item.phone}</th>:''
                                    }
                                    {
                                        telegram?<th>{item.telegram}</th>:''
                                    }
                                    {
                                        suplier?<th>{item.supplier}</th>:''
                                    }
                                    {
                                        amallar?<th className={'text-center'}>{item.amallar}</th>:''
                                    }
                                </tr>)
                            }

                            </thead>
                            <tbody>
                            {
                                TaminotReducer.taminot.filter(val => {
                                    if (input.inputsearch === '') {
                                        return val
                                    } else if (val.name.toUpperCase().includes(input.inputsearch.toUpperCase())) {
                                        return val
                                    }
                                }).map(item => <tr key={item.id}>
                                    {
                                        ismi?<td>{item.name}</td>:''
                                    }
                                    {
                                        telraqam?<td>{item.phoneNumber}</td>:''
                                    }
                                    {
                                        telegram?<td>{item.telegram}</td>:''
                                    }
                                    {
                                        suplier?<td>{item.supplierType}</td>:''
                                    }
                                    {
                                        amallar?<td className={'text-center'}>
                                            <Link to={'/headerthird/taminotchilar/taxrirlash'}>
                                                <button onClick={() => editt(item.id)} className='taxrirlash'><img
                                                    src={Edit}
                                                    alt=""/> Taxrirlash
                                                </button>
                                            </Link>
                                            <Link
                                                to={'/headerthird/taminotchilar/view/' + input.name + '/' + input.tel + '/' + input.telegram + '/' + input.taminot}>
                                                <button className='korish'><img src={Korish} alt=""/> Ko'rish</button>
                                            </Link>
                                            <button onClick={() => deleteTaminot2(item)} className='ochirish'><img
                                                src={Delete} alt=""/> O'chirish
                                            </button>

                                        </td>:''
                                    }

                                </tr>)
                            }

                            </tbody>
                        </table>
                    </div>

                    <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                    <div className='sahifalar'>
                        <button>Ortga</button>
                        <button>1</button>
                        <button>Oldinga</button>
                    </div>
                </div>

                {active ?
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Yangi Qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="">Taminotchi turi</label>
                            <select name="" id="" className={'p-1'} style={{marginLeft: '20px'}}>
                                <option value="">Tanlash</option>
                                <option value="">Taminotchilar</option>
                                <option value="">Mijozlar</option>
                                <option value="">(ikkisi ham) Taminotchi ha Mijoz</option>
                            </select>
                            <div className="in d-flex align-items-center justify-content-sm-around mt-3">
                                <input type="radio" checked={input.langv1} onChange={changelangv1} name={'radio'}
                                       id={'in1'}/>
                                <label htmlFor={'in1'}>
                                    lang_v1.induvidial
                                </label>
                                <input type="radio" checked={input.dukon} onChange={changedukon} name={'radio'}
                                       id={'in2'}/>
                                <label htmlFor={'in2'}>
                                    Do`kon
                                </label>
                            </div>
                            <label htmlFor={'idRaqam'}>ID Raqami</label>
                            <input value={input.idraqam} onChange={changeidraqam} type="text" id={'idRaqam'}
                                   placeholder={input.idplaceholder} className={'form-control'}/>
                            lang_v1.leave_empty_to_autogenerate
                            <div className="in d-flex mt-3">
                                <div>
                                    <label htmlFor={'log1'}>Login</label>
                                    <input type="text" value={input.login} onChange={changelogin}
                                           className={'form-control'} placeholder={input.loginplaceholder}
                                           id={'log1'}/>
                                </div>
                                <div>
                                    <label htmlFor={'ism'}>Ismi</label>
                                    <input onChange={changeismi} value={input.ismi} type="text" id={'ism'}
                                           placeholder={input.ismplaceholder} className={'form-control'}
                                           required="required"/>
                                </div>
                            </div>
                            <div className="in d-flex">
                                <div className={'mt-3'}>
                                    <label htmlFor={'ot'}>Telegram link</label>
                                    <input value={input.telegram} onChange={changeotaismi} id={'telegram'} type="text"
                                           className={'form-control'} placeholder={input.telegramLinkPlaceholder}/>
                                </div>
                                <div className={'mt-3'}>
                                    <label htmlFor={'ot'}>Telefon raqam</label>
                                    <input value={input.familiyasi} onChange={changefamiliyasi} type="number"
                                           placeholder={input.telefonRaqamPlaceholder} id={'telefon'}
                                           className={'form-control'}/>
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={saqla}>SAVE</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>CHIQISH</button>
                        </ModalFooter>
                    </Modal> : ''
                }
            </div>
        </div>
    )
}

export default connect((TaminotReducer, users), {
    getTaminot,
    saveTaminot,
    editTaminot,
    deleteTaminot
})(Taminotchilar)