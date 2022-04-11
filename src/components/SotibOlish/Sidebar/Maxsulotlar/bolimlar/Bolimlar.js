import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './bolimlar.css'
import {useState, useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import BolimReducer, {deleteBolim, bolimlar, editBolim, getBolim, saveBolim,} from "../reducer/BolimReducer";
import users from "../../../../../reducer/users";

function Bolimlar({editBolim, getBolim, bolimlar, saveBolim, deleteBolim, BolimReducer, users}) {

    const [input, setInput] = useState(
        {
            view: '',
            search: '',
            bolimnomi: '',
            bolimkodi: '',
            qisqacamalumot: '',
            bId: '',
        }
    )

    const [placeholders, setPlaceholders] = useState(
        {
            bolimNomiPlaceholder: ''
        }
    )


    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.search = e.target.value
        let a = {...input}
        setInput(a)
    }

    function bolimnomi(e) {
        input.bolimnomi = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.bolimnomi)
    }

    function bolimkodi(e) {
        input.bolimkodi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function qisqacamalumot(e) {
        input.qisqacamalumot = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active, setActive] = useState(false)

    function editB(id) {
        toggle()
        BolimReducer.bolimlar.map(item => {
            if (item.id === id) {
                input.bolimnomi = item.name
                input.bId = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {

        if (input.bolimnomi !== "") {
            if (input.bId !== '') {
                editBolim(
                    {
                        name: input.bolimnomi,
                        businessId: users.businessId,
                        id: input.bId
                    }
                )

            } else {
                saveBolim({
                    name: input.bolimnomi,
                    businessId: users.businessId,
                })
            }


            input.bolimkodi = ''
            input.bolimnomi = ''
            input.qisqacamalumot = ''
            input.bId = ''
            let a = {...input}
            setInput(a)

            setPlaceholders(
                {
                    bolimNomiPlaceholder: ""
                }
            )

            toggle()


        } else {
            setPlaceholders(
                {
                    bolimNomiPlaceholder: "Bo'lim nomini kiriting..."
                }
            )
        }
    }

    function deleteB(item) {
        deleteBolim(item.id)
        console.log('Deleted')
    }

    function toggle() {
        setActive(!active)
        setInput(
            {
                view: '',
                search: '',
                bolimnomi: '',
                bolimkodi: '',
                qisqacamalumot: '',
                bId: '',
            }
        )

        setPlaceholders(
            {
                bolimNomiPlaceholder: ""
            }
        )
    }


    useEffect(() => {
        getBolim(users.businessId)
    }, [BolimReducer.current])

    const [headlist,setheadlist] = useState([
        {
            bolim: 'Bo`limlar',
            bolimkod:'Bo`lim kodi',
            qisqa: 'Qisqa malumot',
            amallar:'Amallar'
        }
    ])

    const [korishId,setkorishId] = useState('')
    function korishsh(id){
        setkorishId(id)
        toggle7()
    }

    function toggle7() {
        setActive(!active)
    }
    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [bolimlar2, setbolimlar2] = useState(true)
    const [bolimkodi2, setbolimkodi2] = useState(true)
    const [qisqa, setbqisqa] = useState(true)
    const [amallar, setamallar] = useState(true)

    const [malkamay, setmalkamay] = useState(false)

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderBL">
                <h2>Bo'limlar</h2>
                <p>Bo'limlar boshqaruvi</p>
            </div>
            <div className="rowStyleBL">
                <div className="qoshish">
                    <h5>Bo'limlar</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>
                <div className="izlashBL">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" value={input.view} onChange={view} id="">
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">1,000</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button onClick={() => setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni kamaytirish
                        </button>

                        {
                            malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                <li onClick={()=>setbolimlar2(!bolimlar2)}
                                    className={'li2'}>{bolimlar2 ? item.bolim : item.bolim + ' <-'}</li>
                                <li onClick={() => setbolimkodi2(!bolimkodi2)}
                                    className={'li2'}>{bolimkodi2 ? item.bolimkod : 'Bo`lim kod ' + ' <-'}</li>
                                <li onClick={() => setbqisqa(!qisqa)}
                                    className={'li2'}>{qisqa ? item.qisqa : item.qisqa + ' <-'}</li>
                                <li onClick={() => setamallar(!amallar)}
                                    className={'li2'}>{amallar ? item.amallar : item.amallar + ' <-'}</li>
                            </ul>) : ''
                        }

                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' onChange={search} value={input.search}/>
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar mb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        {
                            headlist.map(item=><tr key={item.id}>
                                <th>T/R</th>
                                {
                                    bolimlar2?<th>{item.bolim}</th>:''
                                }
                                {
                                    bolimkodi2?<th>{item.bolimkod}</th>:''
                                }
                                {
                                    qisqa?<th>{item.qisqa}</th>:''
                                }
                                {
                                    amallar?<th>{item.amallar}</th>:''
                                }
                            </tr>)
                        }
                        </thead>
                        <tbody>
                        {
                            BolimReducer.bolimlar.filter(val => {
                                if (input.search === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                    return val
                                }
                            }).splice(0,visible).map((item,index) => <tr key={item.id}>
                                <td>{index+1}</td>
                                {
                                    bolimlar2?<td>{item.name}</td>:''
                                }
                                {
                                    bolimkodi2?<td></td>:''
                                }
                                {
                                    qisqa?<td></td>:''
                                }
                                {
                                    amallar?<td>
                                        <Link>
                                            <button onClick={() => editB(item.id)} className='taxrirlash'><img src={Edit}
                                                                                                               alt=""/> Taxrirlash
                                            </button>
                                        </Link>
                                        <button className='ochirish' onClick={() => deleteB(item)}><img src={Delete}
                                                                                                        alt=""/> O'chirish
                                        </button>
                                    </td>:''
                                }
                            </tr>)
                        }

                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                </div>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>
                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi Qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'bnomi'}>Bo`lim nomi</label>
                        <input type="text" className={'form-control '} placeholder={placeholders.bolimNomiPlaceholder}
                               id={'bnomi'} onChange={bolimnomi}
                               value={input.bolimnomi}/>
                        <label className={'mt-4'} htmlFor={'bkodi'}>Bo`lim kodi</label>
                        <input type="text" className={'form-control'} value={input.bolimkodi} onChange={bolimkodi}
                               id={'bkodi'}/>
                        bo`limni izlashga oson bol`ishi uchun bironta belgi kiritng
                        <label className={'mt-3'} htmlFor={'area'}>Qisqacha malumot</label>
                        <textarea className={'form-control'} name="" id={'area'} cols="30" rows="4"> </textarea>
                    </ModalBody>
                    <ModalFooter>
                        {/*<Link to={'/headerthird/bolimlar'}>*/}
                        <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                        {/*</Link>*/}
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

// export default connect((BolimReducer), {getBolim, saveBolim, editBolim,deleteBolim})(Bolimlar)

export default connect((BolimReducer, users), {
    getBolim,
    saveBolim,
    deleteBolim,
    editBolim
})(Bolimlar)
