import Edit from '../../../../../img/Edit.png'
import Settings from '../../../../../img/settings.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import './bazalar.css'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import branchreducer,{getbranch,savebranch,editbranchs,deletebranchs} from "../../../../../reducer/branchreducer";
import users from "../../../../../reducer/users";
import {Link} from 'react-router-dom'
import addressReducer,{getaddress} from "../../../../../reducer/addressReducer";

function Bazalar({branchreducer,getbranch,users,savebranch,editbranchs,deletebranchs,addressReducer,getaddress}) {

    const [active, setActive] = useState(false)
    const [branchname,setbranchname]=useState('')
    const [branchd,setbranchd]=useState('')

    function nameofbranch(e){
        setbranchname(e.target.value)
    }

    const [input,setInput] = useState({
        branchname: '',
        addresId: '',
        percent:'',
        fifo: false,
    })


    function branchname2(e){
        input.branchname = e.target.value
        let a = {...input}
        setInput(a)
    }
    function branchaddresId(e){
        input.addresId = e.target.value
        let a = {...input}
        setInput(a)
    }
    function branchpercent(e){
        input.percent = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [list, setList] = useState([
        {
            name: 'Naqd'
        },
        {
            name: 'Uzcard'
        },
        {
            name: 'Humo'
        },
    ])

    function toggle() {
        setActive(!active)
    }

    function editbranch(id){
        toggle()
        branchreducer.branch.map(item=>{
            if(item.id == id){
                setbranchname(item.name)
                setbranchd(id)
            }
        })
    }

    function saqla(){
        if (branchd===''){
            savebranch({
                name:input.branchname,
                addressId: input.addresId === "" ? addressReducer.address[0].id : input.addresId,
                businessId:users.businessId,
                percent: input.percent,
                fifo: false
            })
        }
        else{
            editbranchs({
                name:input.branchname,
                addressId:1,
                businessId:users.businessId,
                id:branchd,
            })
        }

        input.branchname = ''
        input.percent = ''
        let a = {...input}
        setInput(a)
        toggle()
    }


    useEffect(()=>{
        getbranch(users.businessId)
        getaddress()
    },[branchreducer.current])

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deletebranchs(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }


    return (
        <div>
            <div className="col-md-12 mt-4 mb-4">
                <div className="textHeaderBaza">
                    <h2>Bazalar</h2>
                    <p> boshqaruvi</p>
                </div>
                <div className="rowStyleBaza">
                    <div className="qoshish">
                        <h5>Sizning bazalaringiz</h5>
                        <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                    </div>

                    <div className="izlashBaza">
                        <input type="text" placeholder='Izlash...'/>
                    </div>
                    <div className="table-responsive">
                        <table className='table table-striped table-bordered mt-4'>
                            <thead>
                            <tr>
                                <th>Nomi</th>
                                <th>Baza IDsi</th>
                                <th>Hudud</th>
                                <th>Index</th>
                                <th>Amallar</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                branchreducer.branch.map(item=>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.address.city}</td>
                                        <td></td>
                                        <td>
                                            <button onClick={()=>editbranch(item.id)} className='taxrirlash'><img src={Edit} alt=""/>Taxrirlash
                                            </button>
                                            <Link to={'/headerthird/bazaSozlama'}><button className='korish'><img src={Settings} alt=""/>Sozlamalar</button></Link>
                                            <button className='ochirish' onClick={()=>deleteModaltoggle(item.id)}><img src={Delete} alt=""/>Bazani o'chirish</button>

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
                                    </tr>

                                )
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="col-md-12">
                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input onChange={branchname2} value={input.branchname} type="text" className={'form-control'} id={'nomi'}/>

                        <label className={'mt-2'} htmlFor="">Adress</label>
                        <select className={'form-control'} value={input.addresId} onChange={branchaddresId} >
                            {
                                addressReducer.address.map(item=>
                                    <option value={item.id}>{item.city} shahar , {item.district} tuman , {item.street} ko'cha</option>)
                            }
                        </select>
                        {/*<label className={'mt-2'} htmlFor="">Addres</label>*/}
                        {/*<input type="text" value={input.addresId} onChange={branchaddresId} className={'form-control'}/>*/}

                        <label className={'mt-2'}>Foiz</label>
                        <input type="text" className={'form-control'} value={input.percent} onChange={branchpercent}/>

                        <hr/>
                        <label htmlFor={'sotuv'}>Sotuv oynasida ko`p sotiladigan mahsulotlarni belgilash</label>
                        <input type="text" className={'form-control'} id={'sotuv'} placeholder={'enter character'}/>
                        <hr/>
                        <h5>To`lov usullari</h5>
                        <div className="table-responsive">
                        <table className={'table table-bordered'}>
                            <thead>
                            <tr>
                                <th>To`lov usullari</th>
                                <th>Yoqish</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list.map((item,index) => 
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <input type="checkbox" style={{width:'15px',height:'15px'}}/>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>

                        </table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={saqla} className={'btn btn-outline-primary'}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
export default connect((branchreducer,users,addressReducer),{getbranch,savebranch,editbranchs,deletebranchs,getaddress}) (Bazalar)