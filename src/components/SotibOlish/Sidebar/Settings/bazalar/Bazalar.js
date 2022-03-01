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

function Bazalar({branchreducer,getbranch,users,savebranch,editbranchs,deletebranchs}) {

    const [active, setActive] = useState(false)
    const [branchname,setbranchname]=useState('')
    const [branchd,setbranchd]=useState('')

    function nameofbranch(e){
        console.log(e.target.value)
        setbranchname(e.target.value)
    }

    const [list, setList] = useState([
        {
            name: 'Naqd'
        },
        {
            name: 'Plastik'
        },
        {
            name: 'Cheque'
        },
        {
            name: 'Bank Transfer'
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
                name:branchname,
                addressId:1,
                businessId:users.businessId
            })
        }
        else{
            editbranchs({
                name:branchname,
                addressId:1,
                businessId:users.businessId,
                id:branchd
            })
        }

        setbranchname('')
        setbranchd('')
        toggle()
    }

    function deleteb(id){
        deletebranchs(id)
    }

    useEffect(()=>{
        getbranch(users.businessId)
    },[branchreducer.current])




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
                                            <button className='ochirish' onClick={()=>deleteb(item.id)}><img src={Delete} alt=""/>Bazani o'chirish</button>
                                        </td>
                                    </tr>

                                )
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
            </div>
            <div className="col-md-12">
                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input onChange={nameofbranch} value={branchname} type="text" className={'form-control'} id={'nomi'}/>
                        <div className={'d-flex justify-content-between'}>
                            <div className="col-md-6">
                                <label htmlFor={'bazaid'}>Baza Idsi</label>
                                <input type="text" className={'form-control'} id={'bazaid'}/>
                                <label htmlFor={'bazaid2'}>Shahar</label>
                                <input type="text" className={'form-control'} id={'bazaid2'}/>
                                <label htmlFor={'bazaid3'}>Tel raqam</label>
                                <input type="text" className={'form-control'} id={'bazaid3'}/>
                                <label htmlFor={'bazaid4'}>Xisob faktura</label>
                                <select name="" id={'bazaid4'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                                <label htmlFor={'bazaid5'}>Sotish un faktura</label>
                                <select name="" id={'bazaid5'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor={'xudud'}>Xudud</label>
                                <input type="text" className={'form-control'} id={'xudud'}/>
                                <label htmlFor={'xudud2'}>Index</label>
                                <input type="text" className={'form-control'} id={'xudud2'}/>
                                <label htmlFor={'xudud3'}>Davlat</label>
                                <input type="text" className={'form-control'} placeholder={'Davlat'} id={'xudud3'}/>
                                <label htmlFor={'xudud4'}>Xisob faktura sxemasi</label>
                                <select name="" id={'xudud4'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                                <label htmlFor={'xudud5'}>Sotish narxlarning guruhlari</label>
                                <select name="" id={'xudud5'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                            </div>
                        </div>
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
export default connect((branchreducer,users),{getbranch,savebranch,editbranchs,deletebranchs}) (Bazalar)