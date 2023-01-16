import React from 'react'
import {useForm} from 'react-hook-form'
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
import {deleteMijozhisobot} from "../../Xisobotlar/reducer/MijozHisobotiReducer";
import MijozlarGuruhReducer, {getMijozLarGuruh} from "../reducer/MijozlarGuruhReducer";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import {useTranslation} from "react-i18next";

function Mijozlarguruxi({
                            getMijozGurux,
                            saveMijozGurux,
                            editMijozGurux,
                            deleteMijozGurux,
                            users,
                            getbranch,
                            getMijozLarGuruh,
                            MijozlarGuruhReducer,
                            MijozGuruxReducer,
                            qarzuzishCustomer,
                            branchreducer
                        }) {



    const [active, setActive] = useState(false);
    const {t} = useTranslation()
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
            qarzuzish:'',
            mijozguruhnomi:'',
            branchId: ''
        }
    )

    const {register,setValue,resetField, reset,handleSubmit, formState:{errors}} = useForm()

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

    const [editId, setEditId] = useState('')

    function editM(id) {
        toggle()
        setEditId(id)
        let a = MijozGuruxReducer.mijozgurux.filter(item=>item.id===id)
        setValue('name',a[0].name)
        setValue('phoneNumber',a[0].phoneNumber)
        setValue('telegram',a[0].telegram)
        setValue('customerGroupId',a[0].customerGroupId)
        setValue('businessId',a[0].businessId)
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


    const [nomi,setnomi] = useState(true)
    const [telraqam,settelraqam] = useState(true)
    const [foizda,setfoizda] = useState(true)
    const [telegram,settelegram] = useState(true)
    const [amallar,setamallar] = useState(true)

    const [headlist, setheadlist] = useState([
        {
            name: t('Buttons.13'),
            phone: t('Buttons.14'),
            foiz:t('CustomGroup.5'),
            telegram: t('Buttons.15'),
            guruh: t('CustomAll.7'),
            amallar: 'Amallar'
        }
    ])

    const [malkamay,setmalkamay] = useState(false)

    let [jamixisob,setjamixisob] = useState(0)

    function toggle() {
        console.log(branchreducer.branch)
        console.log(MijozlarGuruhReducer.mijozGuruh)
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
        getMijozGurux(users.businessId)
        getMijozLarGuruh(users.businessId)
        getbranch(users.businessId)
    }, [MijozGuruxReducer.current])

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [qarzuz,setqarzuz] = useState(false)

    function toggle2(){
        setqarzuz(!qarzuz)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteMijozGurux(deleteID)
        deleteModaltoggle('')
    }

    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    function save(data){
        saveMijozGurux({
            ...data, businessId: users.businessId
        })
        reset('')
    }

    function onSubmit(data){
        if (editId === ''){
            save(data)
        }else {
            editMijozGurux({
                ...data,businessId: users.businessId,id:editId
            })
            toggle()
        }
        setEditId('')
        resetField('name','')
        resetField('phoneNumber','')
        resetField('telegram','')
    }

    return (
        <div className="col-md-12 mt-2 pt-4 pb-4">
            <div className="textHeaderMIG">
                <h2 className={'text-center'}>{t('CustomAll.1')}</h2>
            </div>
            <div className="rowStyleMIG">
                <div className="qoshishMIG">
                    <h5>{t('CustomAll.1')}</h5>
                    {
                        users.addcustomer?  <button onClick={toggle} className='btn btn-primary'>+{t('Buttons.2')}</button>:''
                    }
                </div>

                {
                    users.viewcustomer? <div>
                        <div className="izlashMIG">
                            <div className="izlashBox1">
                                <p>{t('Buttons.8')}</p>
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

                            {
                                MijozGuruxReducer.mijozgurux.map(item=> {
                                    jamixisob+=item.debt
                                })
                            }
                            {/*<div><h4>Maxsulotlar soni: {xisob}</h4></div>*/}
                            <div><h4>{t('CustomAll.2')}: {jamixisob}  {t('Third.5')}</h4></div>
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
                                        <th>{t('Supplier.8')}</th>
                                        <th>{item.guruh}</th>
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
                                                t('Buttons.13')?<td>{item.name}</td>:''
                                            }
                                            {
                                                t('Buttons.14')?<td>{item.phoneNumber}</td>:''
                                            }
                                            {
                                                t('Buttons.15')?<td>{item.telegram}</td>:''
                                            }
                                            <td>{item.debt}</td>
                                            <td>{input.mijozguruhnomi}</td>
                                            <Modal isOpen={qarzuz} toggle={toggle2}>
                                                <ModalHeader>
                                                    {t('CustomAll.3')}
                                                </ModalHeader>
                                                <ModalBody>
                                                    <label htmlFor={'l'}>{t('CustomAll.3')}</label>
                                                    <input type="text" className={'form-control'} value={input.qarzuzish} onChange={qarzuzish}/>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className={'btn btn-outline-primary'} onClick={()=>saqlaqarz(item)}>{t('Buttons.6')}</button>
                                                    <button className={'btn btn-outline-primary'} onClick={toggle2}>{t('Buttons.7')}</button>
                                                </ModalFooter>
                                            </Modal>
                                            {
                                                amallar?<td className={'d-flex justify-content-center'}>
                                                    {
                                                        users.editcustomer?
                                                            <button className={'btnB m-1'}
                                                                    onClick={() => editM(item.id)}>{t('Buttons.1')}
                                                            </button>:''
                                                    }
                                                    {
                                                        users.deletecustomer? <button className={'btnB  m-1'}
                                                                                      onClick={() => deleteModaltoggle(item.id)}>{t('Buttons.3')}
                                                        </button>:''
                                                    }

                                                    <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                                        <ModalBody>
                                                            <h5>{t('Buttons.12')} ?</h5>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>{t('Buttons.3')}</button>
                                                            <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                                                        </ModalFooter>
                                                    </Modal>

                                                    <td><button className={'btnB mt-1'} onClick={toggle2}>{t('Buttons.3')}</button></td>
                                                </td>:''
                                            }
                                        </tr>)
                                }
                                </tbody>
                            </table>
                            <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                        </div>

                    </div>:''
                }




                <Modal isOpen={active} toggle={toggle}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>
                        {t('CustomAll.4')}
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>{t('Buttons.13')}</label>
                        <input
                            {...register('name', {required: true})}
                            placeholder={errors.name ? errors.name?.type === "required" && "Name is required": 'name'}
                            defaultValue={''}
                            id={'nomi'} type="text"
                            className={'form-control mb-3 mt-1'}/>
                        <label className={'mt-1'} htmlFor={'filial'}>{t('CustomAll.5')}</label>
                        <select name="" className={'form-control'} {...register('branchId', {required:true})}   >
                            {
                                branchreducer.branch.map(item=>
                                    <option  value={item.id}>{item.name}</option>)
                            }
                        </select>
                        <label className={'mt-2'} htmlFor={'tel'}>{t('Buttons.14')}</label>
                        <input type="text" id='phoneNumberInput'
                               {...register('phoneNumber',{required:true})}
                            placeholder={errors.phoneNumber ? errors.phoneNumber?.type === "required" && "Phone num is required": 'phoneNumber'}
                               defaultValue={''}
                                className={'form-control mb-3 mt-1'} />
                        <label htmlFor={'foizda'}>{t('Buttons.15')}</label>
                        <input type="text"
                               {...register('telegram', {required:true})}
                            placeholder={errors.telegram ? errors.telegram?.type === "required" && "Telegram is required": 'telegram'}
                               defaultValue={''}
                               className={'form-control mb-3 mt-1'}
                               id={'foizda'}/>

                        <label htmlFor={'m'}>{t('CustomAll.6')}</label>
                        <select id={'m'}
                                {...register('customerGroupId', {required:true})}
                                className={'form-control'}>
                            {
                                MijozlarGuruhReducer.mijozGuruh.map(item=>
                                    <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </select>

                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-primary'} type={"submit"}>{t('Buttons.6')}</button>
                        <button className={'btn btn-primary'} type={"button"} onClick={toggle}>{t('Buttons.7')}</button>
                    </ModalFooter>
                    </form>
                </Modal>

            </div>
        </div>
    )
}

export default connect((MijozGuruxReducer,QarzuzishReducer,branchreducer,MijozlarGuruhReducer, users), {
    getMijozGurux,
    qarzuzishCustomer,
    getMijozLarGuruh,
    saveMijozGurux,
    editMijozGurux,
    getbranch,
    deleteMijozGurux
})(Mijozlarguruxi)