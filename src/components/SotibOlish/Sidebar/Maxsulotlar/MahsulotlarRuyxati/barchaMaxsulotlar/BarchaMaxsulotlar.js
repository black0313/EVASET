import './barchMaxsulotlar.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import Edit from '../../../../../../img/Edit.png'
import Korish from '../../../../../../img/Korish.png'
import Delete from '../../../../../../img/Delete.png'
import {Switch, Link, Route} from 'react-router-dom'
import {useState, useEffect} from "react";
import KorishM from '../Taxrirlash/Korish'
import {connect} from "react-redux";
import MaxsulotlarRoyxariReducer, {
    getMaxsulotRuyxati,
    getMaxsulotRuyxati3,
    saveMaxsulotRuyxati,
    editMaxsulotRuyxati,
    deleteMaxsulotRuyxati
} from '../../reducer/MaxsulotlarRoyxariReducer'
import users from "../../../../../../reducer/users";
import FirmaReducer, {getFirma} from "../../reducer/FirmaReducer";
import {useReactToPrint} from "react-to-print";
import {Modal, ModalBody, ModalFooter} from "reactstrap";


function BarchaMaxsulotlar({
                               users,
                               getMaxsulotRuyxati,
                               getMaxsulotRuyxati3,
                               maxsulotlar,
                               MaxsulotlarRoyxariReducer,
                               deleteMaxsulotRuyxati,
                               saveMaxsulotRuyxati,
                               match
                           }) {

    const [input, setInput] = useState(
        {
            view: '',
            izlash: '',
            maxsulot: '',
            checkbarcha: '',
            name: '',
            check: '',
            inputsearch: ''
        }
    )


    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function check(e) {
        // MaxsulotlarRoyxariReducer.maxsulotlar.map(item=>{
        //         if (e.target.value == item.id){
        //             item.active = e.target.checked
        //         }
        //     })
        // alert('ishladi')
    }

    function checkBarca(e) {
        input.checkbarcha = e.target.checked
        let a = {...input}
        setInput(a)
    }

    function izlash(e) {
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active, setActive] = useState(false)

    const [korishId,setkorishId] = useState('')
    function korishsh(id){
        setkorishId(id)
        toggle()
    }

    function toggle() {
        setActive(!active)
    }

    function deleteM(item) {
        deleteMaxsulotRuyxati(item.id)
    }

    useEffect(() => {
        getMaxsulotRuyxati(users.businessId)
    }, [MaxsulotlarRoyxariReducer.current])

    useEffect(() => {
        getFirma(users.businessId)
    }, [])

    const [mahsulot, setmahsulot] = useState(true)
    const [baza, setbaza] = useState(true)
    const [buy, setbuy] = useState(true)
    const [sell, setsell] = useState(true)
    const [qolgan, setqolgan] = useState(true)
    const [firma, setfirma] = useState(true)
    const [amallar, setamallar] = useState(true)

    const [headlist, setheadlist] = useState([
        {
            product: 'Mahsulot',
            baza: 'Baza',
            buyPrice: 'Sotib olish narxi',
            salePrice: 'Sotish narxi',
            qolganmahsulot: 'Qolgan mahsulot',
            firma: 'Firma',
            amallar: 'Amallar',
            ogoh:'Eslatma miqdori',
            yaroq: 'Muddati'
        }
    ])

    const [malkamay, setmalkamay] = useState(false)

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteMaxsulotRuyxati(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
        // deleteTaminot(item.id)
        console.log(item)
    }


    return (
        <div>
            <div className="row">
                <div className="rowStyleBR">
                    <div className="qoshish">
                        <h5>Barcha maxsulotlar</h5>
                        <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'}>
                            {
                                users.addproduct ?
                                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>:''
                            }
                        </Link>
                    </div>
                    {
                        users.viewproductadmin? <div>
                            <div className="izlashBR">
                                <div className="izlashBox1">
                                    <p>Ko'rsatildi</p>
                                    <select name="" id="" value={input.view} onChange={view}>
                                        <option value="">25</option>
                                        <option value="">All</option>
                                    </select>
                                    <button><img src={CSV} alt=""/> Export CSV</button>
                                    <button><img src={Excel} alt=""/> Export Excel</button>
                                    <button><img src={Print} alt=""/> Print</button>
                                    <button><img src={Pdf} alt=""/>Export PDF</button>
                                    <button onClick={() => setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni
                                        kamaytirish
                                    </button>

                                    {
                                        malkamay ? headlist.map(item => <ul className={'ul3'} key={item.id}>
                                            <li onClick={() => setmahsulot(!mahsulot)}
                                                className={'li2'}>{mahsulot ? item.product : item.product + ' <-'}</li>
                                            <li onClick={() => setbaza(!baza)}
                                                className={'li2'}>{baza ? item.baza : 'Baza ' + ' <-'}</li>
                                            <li onClick={() => setbuy(!buy)}
                                                className={'li2'}>{buy ? item.buyPrice : item.buyPrice + ' <-'}</li>
                                            <li onClick={() => setsell(!sell)}
                                                className={'li2'}>{sell ? item.salePrice : item.salePrice + ' <-'}</li>
                                            <li onClick={() => setamallar(!amallar)}
                                                className={'li2'}>{amallar ? item.amallar : item.amallar + ' <-'}</li>
                                        </ul>) : ''
                                    }

                                </div>
                                <div className="izlashBox2">
                                    <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                                </div>
                            </div>
                            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                {console.log(MaxsulotlarRoyxariReducer.maxsulotlar)}
                                <table className='table table-striped table-bordered mt-4'>
                                    <thead>
                                    {
                                        headlist.map(item => <tr key={item.id}>
                                            <th>T/R</th>
                                            <th><input checked={input.checkbarcha} onChange={checkBarca} type="checkbox"/></th>
                                            {
                                                mahsulot ? <th>{item.product}</th> : ''
                                            }
                                            {
                                                baza ? <th>{item.baza}</th> : ''
                                            }
                                            {
                                                buy ? <th>{item.buyPrice}</th> : ''
                                            }
                                            {
                                                sell ? <th>{item.salePrice}</th> : ''
                                            }
                                            {
                                                qolgan ? <th>{item.qolganmahsulot}</th> : ''
                                            }
                                            {
                                                firma ? <th>{item.firma}</th> : ''
                                            }
                                            <th>{item.ogoh}</th>
                                            <th>{item.yaroq}</th>
                                            {
                                                amallar ? <th className={'text-center'}>{item.amallar}</th> : ''
                                            }
                                        </tr>)
                                    }
                                    </thead>
                                    <tbody>
                                    {
                                        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val => {
                                            if (input.izlash === '') {
                                                return val
                                            } else if (val.name.toUpperCase().includes(input.izlash.toUpperCase())) {
                                                return val
                                            }
                                        }).splice(0,visible).map((item,index) => <tr key={item.id}>
                                                <td>{index+1}</td>
                                                <td><input value={item.id} onChange={check} type="checkbox"/></td>
                                                {
                                                    mahsulot ? <td>{item.name}</td>: ''
                                                }
                                                {
                                                    baza ? <td>{item.branch?.name}</td> : ''
                                                }
                                                {
                                                    buy ? <td>
                                                        {Math.round((item.buyPrice+Number.EPSILON)*100)/100}
                                                    </td> : ''
                                                }
                                                {
                                                    sell ? <td>
                                                        {Math.round((item.salePrice+Number.EPSILON)*100)/100}
                                                    </td> : ''
                                                }
                                                {
                                                    qolgan ? <td>{item.quantity}</td> : ''
                                                }
                                                {
                                                    firma ? <td>{item.brand?.name}</td> : ''
                                                }
                                                <td>{item.minQuantity}</td>
                                                <td>{item.expireDate}</td>
                                                {
                                                    amallar ? <td>
                                                        {
                                                            users.editproduct? <Link
                                                                to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash/' + item.id}>
                                                                <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                                                </button>
                                                            </Link>:''
                                                        }

                                                        <button onClick={()=>korishsh(item.id)} className='korish'><img src={Korish}
                                                                                                                        alt=""/> Ko'rish
                                                        </button>
                                                        {
                                                            users.deleteproduct? <button onClick={() => deleteModaltoggle(item.id)} className='ochirish'><img
                                                                src={Delete} alt=""/> O'chirish
                                                            </button>:''
                                                        }

                                                        <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                                            <ModalBody>
                                                            <h5>( X ) Ishonchingiz komilmi ?</h5>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>O`chirish</button>
                                                                <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>Chiqish</button>
                                                            </ModalFooter>
                                                        </Modal>

                                                    </td> : ''
                                                }
                                            </tr>)
                                    }
                                    </tbody>
                                </table>
                                <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                            </div>
                            {
                                active ? <KorishM active={active} toggle={toggle} mahsulot={korishId}/> : ''
                            }
                            <div className="btnBoshqarish mt-3">
                                <button className='btn btn-danger buttonPage'>Belgilanganlarni o'chirish</button>
                                <button className='btn btn-success buttonPage'>Boshqa bazaga surish</button>
                                <button className='btn btn-primary buttonPage'>Bazadan olib tashlash</button>
                                <button className='btn btn-warning buttonPage'>Belgilanganlarni vaqtinchalik o'chirish</button>
                            </div>

                        </div>:''
                    }
                </div>
            </div>
        </div>
    )
}


export default connect((MaxsulotlarRoyxariReducer, users, FirmaReducer), {
    getMaxsulotRuyxati,
    getMaxsulotRuyxati3,
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati,
    getFirma
})(BarchaMaxsulotlar)
