import Edit from '../../../../../img/Edit.png'
import Settings from '../../../../../img/settings.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import './bazalar.css'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {useForm} from "react-hook-form";
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import branchreducer,{getbranch,savebranch,editbranchs,deletebranchs} from "../../../../../reducer/branchreducer";
import users from "../../../../../reducer/users";
import {Link} from 'react-router-dom'
import addressReducer,{getaddress,saveaddress} from "../../../../../reducer/addressReducer";

function Bazalar({branchreducer,getbranch,users,savebranch,editbranchs,deletebranchs,addressReducer,getaddress,saveaddress}) {

    const [active, setActive] = useState(false)
    const [activeAddress, setActiveAddress] = useState(false)

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
        setEditID('')
    }
    function toggle2(){
        setActiveAddress(!activeAddress)
    }
    const {register,reset,setValue,handleSubmit,formState:{errors},resetField} = useForm();
    const {register:register1,reset:reset1,setValue:setValue1,handleSubmit:handleSubmit1,resetField:resetField1, formState:{errors:errors1}} = useForm();
    const [editID,setEditID] = useState('')

    function editbranch(id){
        toggle()
        setEditID(id)
      let a =  branchreducer.branch.filter(item=>item.id===id)
        setValue('name',a[0].name)
        setValue('percent',a[0].percent)
        setValue('addressId',a[0].address?.id)
    }

    function saveBranchToDB(data){
        savebranch({
            ...data,fifo:false,businessId:users.businessId
        })
        setEditID('')
        reset('')
    }




    useEffect(()=>{
        getbranch(users.businessId)
        getaddress()
    },[branchreducer.current,addressReducer.current])

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
    function onSubmit(data){
        if (editID === ""){
            saveBranchToDB(data)
        }
        else{
            editbranchs({
                ...data,businessId:users.businessId,id:editID,fifo:false
            })
        }
        setEditID('')
        resetField('name','')
        resetField('percent','')
        resetField('addressId','')
        toggle()
    }

    function AddAddress(data){
            saveaddress({
                ...data
            })
        toggle2()
        resetField1('home','')
        resetField1('district','')
        resetField1('city','')
        resetField1('street','')
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
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>
                        {
                            editID ? 'Taxrirlash' : "Qo'shish"
                        }
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input {...register('name',{required:true})}
                               placeholder={errors.name ? errors.name.type === 'required' && 'Name is required':'Branch Name'}
                               type="text" className={'form-control mb-3'} id={'nomi'}/>

                        <label htmlFor="basic-url" className="form-label">Address</label>
                        <div className="input-group mb-3">
                            <select {...register('addressId',{required:true})} className={'form-control'}>
                                {
                                    addressReducer.address.map(item=>
                                        <option value={item.id}>{item.city} shahar , {item.district} tuman , {item.street} ko'cha</option>)
                                }
                            </select>
                                <span onClick={toggle2} className="input-group-text" style={{fontWeight:'bold',fontSize:'24px'}} id="basic-addon2">+</span>
                        </div>


                        <label className={'mt-2'}>Foiz</label>
                        <input type="text" className={'form-control'} {...register('percent',{required:true})}
                               placeholder={errors.percent ? errors.percent.type === 'required' && 'Percent is required':'Percent'}/>

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
                        <button type={'submit'} className={'btn btn-outline-primary'}>Saqlash</button>
                        <button type={'button'}  className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                    </form>
                </Modal>
            </div>
            <div className="col-md-12">
                <Modal isOpen={activeAddress} toggle={toggle2}>
                    <form onSubmit={handleSubmit1(AddAddress)}>
                        <ModalHeader>
                            Add Address
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'city'}>City</label>
                            <input {...register1('city',{required:true})}
                                   placeholder={errors1.city ? errors1.city.type === 'required' && 'City is required':'City'}
                                   type="text" className={'form-control mb-3'} id={'city'}/>
                            <label htmlFor={'district'}>District</label>
                            <input {...register1('district',{required:true})}
                                   placeholder={errors1.district ? errors1.district.type === 'required' && 'District is required':'District'}
                                   type="text" className={'form-control mb-3'} id={'district'}/>
                            <label htmlFor={'street'}>Street</label>
                            <input {...register1('street',{required:true})}
                                   placeholder={errors1.street ? errors1.street.type === 'required' && 'Street is required':'Street'}
                                   type="text" className={'form-control mb-3'} id={'street'}/>
                            <label htmlFor={'home'}>Home</label>
                            <input {...register1('home',{required:true})}
                                   placeholder={errors1.home ? errors1.home.type === 'required' && 'Home is required':'Home'}
                                   type="text" className={'form-control mb-3'} id={'home'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button type={'submit'} className={'btn btn-outline-primary'}>Saqlash</button>
                            <button type={'button'}  className={'btn btn-outline-primary'} onClick={toggle2}>Chiqish</button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        </div>
    )
}
export default connect((branchreducer,users,addressReducer),{getbranch,savebranch,editbranchs,deletebranchs,getaddress,saveaddress}) (Bazalar)
