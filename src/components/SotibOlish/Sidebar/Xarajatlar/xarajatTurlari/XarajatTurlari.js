import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatTurlari.css'
import {useState, useEffect} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import XarajatTurlariReducer,{
    deleteXarajatlarTurlari,
    editXarajatlarTurlari,
    getXarajatlarTurlari,
    saveXarajatlarTurlari,

} from "../reducer/XarajatTurlariReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import XodimReducer from "../../Hodimlar/reducer/XodimReducer";
import users from "../../../../../reducer/users";
import XarajatlarReducer, {editXarajatlar, getXarajatlar, saveXarajatlar,} from "../reducer/XarajatlarReducer";

function XarajatTurlari({getXarajatlarTurlari,XarajatTurlariReducer,users, branchreducer,getbranch, xarajatturlari,saveXarajatlarTurlari, deleteXarajatlarTurlari}) {

    const [input, setInput] = useState(
        {
            view: '',
            izlash: '',
            nomi: '',
            kodi: ''
        }
    )

    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e) {
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function nomi(e) {
        input.nomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function kodi(e) {
        input.kodi = e.target.value
        let a = {...input}
        setInput(a)
        console.log('uuuuuhbbhu')
    }

    useEffect(() => {
        getXarajatlarTurlari(users.businessId)
    }, [XarajatTurlariReducer.counter])

    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }

    function saqla() {
        saveXarajatlarTurlari(
            {
                title: input.nomi,
                branchId: users.users.branches[0].id
            }
        )
        console.log(xarajatturlari);
        toggle()
    }

    function deletet(item){
        deleteXarajatlarTurlari(item.id)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteXarajatlarTurlari(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
        // deleteTaminot(item.id)
        console.log(item)
    }

    return (
        <div className="col-md-12 mt-4 mb-4">
            <div className="textHeaderXRT">
                <h2>Xarajat turlari</h2>
                <p>Xarajat turlari boshqarmasi</p>
            </div>
            <div className="rowStyleXRT ">
                <div className="qoshish">
                    <h5>Barcha turlash</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>
                <div className="izlashXRT">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select value={input.view} onChange={view} name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">1,000</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.izlash} onChange={izlash} placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar mb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Bo'limlar</th>
                            {/*<th>Bo'lim kodi</th>*/}
                            <th>Qisqa malumot</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        {/*{console.log(XarajatTurlariReducer.xarajatturlari)}*/}
                        <tbody>
                        {
                            XarajatTurlariReducer.xarajatturlari
                            //     .filter(val=>{
                            //     if (input.izlash===''){
                            //         return val
                            //     }else if (val.title.toUpperCase().includes(input.izlash.toUpperCase())){
                            //         return val
                            //     }
                            // })
                                .map(item => <tr key={item.id}>
                                <td>{item.title}</td>
                                    {/*<td></td>*/}
                                    {/*<td>{item.business.description}</td>*/}
                                    <td>-</td>
                                <td>
                                    <button onClick={toggle} className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                    </button>
                                    <button onClick={()=>deleteModaltoggle(item.id)} className='ochirish'><img src={Delete} alt=""/> O'chirish</button>

                                    <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                        <ModalBody>
                                            <h5>Ishonchingiz komilmi ?</h5>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>O`chirish</button>
                                            <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>Chiqish</button>
                                        </ModalFooter>
                                    </Modal>

                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>

                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input type="text" value={input.nomi} onChange={nomi} className={'form-control'} id={'nomi'}/>
                        <label htmlFor={'nomi2'} className={'mt-3'}>Kodi</label>
                        <input type="text" value={input.kodi} onChange={kodi} className={'form-control'} id={'nomi2'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>

            </div>
        </div>
    )
}

export default connect((XarajatTurlariReducer,branchreducer, XodimReducer,users,branchreducer,XarajatlarReducer),{editXarajatlar, getXarajatlar,getXarajatlarTurlari, saveXarajatlarTurlari,editXarajatlarTurlari,deleteXarajatlarTurlari,  getbranch,saveXarajatlar}) (XarajatTurlari)
