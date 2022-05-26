import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './IchkiBolim.css'
import {useState, useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import BolimReducer, {deleteBolim, bolimlar, editBolim, getBolim, saveBolim,} from "../reducer/BolimReducer";
import users from "../../../../../reducer/users";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import ichkibolimred,{getichki} from "../reducer/Ichkibolimred";
import Ichkibolimred from "../reducer/Ichkibolimred";

function Bolimlar({editBolim,Ichkibolimred ,getBolim, bolimlar, saveBolim, deleteBolim, BolimReducer, users,getichki,ichkibolimred}) {

    const [input, setInput] = useState(
        {
            bolim2:'',
            ichkibolimnomi:'',
            ichkibolimdescription:'',
            asosiybolim:'',
        }
    )


    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function asosiybolim(e) {
        input.asosiybolim = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ichkibolimnomi(e) {
        input.ichkibolimnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ichkibolimdescription(e) {
        input.ichkibolimdescription = e.target.value
        let a = {...input}
        setInput(a)
    }


    function search(e) {
        input.search = e.target.value
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


    function saqla2(){

        toggle10()
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
    }

    const [active10,setactive10] = useState( false)

    function toggle10(){
        setactive10(!active10)
    }


    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }


    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    useEffect(()=>{
        getichki(users.businessId)
    },[Ichkibolimred.current])

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderBL">
                <h2>Bo'limlar</h2>
                <p>Bo'limlar boshqaruvi</p>
            </div>
            <div className="rowStyleBL">
                <div className="qoshish">
                    <h5>Bo'limlar</h5>
                    <button onClick={toggle} className='btn btn-outline-dark' style={{marginLeft:'550px'}}>+ Bo`lim Qo'shish</button>
                    <button onClick={toggle10} className='btn btn-outline-primary'>+ Ichki bo`lim Qo'shish</button>
                </div>

                <Modal isOpen={active10} toggle={toggle10}>
                    <ModalHeader>
                        Bo`lim ichida bo`lim
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor="">Asosiy bo`limni tanlang</label>
                        <select value={input.asosiybolim} onChange={asosiybolim} className={'form-control'} id="">
                            {
                                BolimReducer.bolimlar.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>

                        <label htmlFor={''} className={'mt-3'}>Ichki bo`lim nomi</label>
                        <input type="text" className={'form-control'} value={input.ichkibolimnomi} onChange={ichkibolimnomi}/>

                        <label className={'mt-3'} htmlFor={''}>Izoh</label>
                        <input type="text" className={'form-control'} value={input.ichkibolimdescription} onChange={ichkibolimdescription}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={saqla2}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle10}>Chiqish</button>
                    </ModalFooter>
                </Modal>

                <div className="izlashBL">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" value={input.view} onChange={view} id="">
                            <option value="">25</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>


                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' onChange={search} value={input.search}/>
                    </div>
                </div>

                <Link to={'/headerthird/bolimlar'}><button className={'btn btn-danger mt-2'}>Bo`limlar</button></Link>
                <Link to={'/headerthird/ichkibolimlar'}><button style={{marginLeft:'10px'}} className={'btn btn-primary mt-2'}>Ichki Bo`limlar</button></Link>

                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar mb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Izoh</th>
                            </tr>
                        </thead>
                        {
                            // console.log(BolimReducer.bolimlar)
                        }
                        <tbody>
                        {
                            // Ichkibolimred.ichkibolim.map(item=>
                            //     <tr>
                            //         <td> </td>
                            //     </tr>
                            // )
                        }
                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                </div>


            </div>
        </div>
    )
}

// export default connect((BolimReducer), {getBolim, saveBolim, editBolim,deleteBolim})(Bolimlar)

export default connect((BolimReducer, users,Ichkibolimred), {
    getBolim,
    saveBolim,
    deleteBolim,
    editBolim,
    getichki
})(Bolimlar)
