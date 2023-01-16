import "./taminotchilar.css"
import { Link } from "react-router-dom"
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import { useEffect } from "react";
import { connect } from "react-redux";
import TaminotReducer, {
    getTaminot,
    saveTaminot,
    editTaminot,
    deleteTaminot,
    qarzuzishTaminot,
    getTaminot2
} from "../reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import QarzuzishTaminotReducer from "../reducer/QarzuzishTaminotReducer";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

function Taminotchilar({ getTaminot, saveTaminot,getTaminot2, QarzuzishTaminotReducer, qarzuzishTaminot, editTaminot, deleteTaminot, taminot, users, TaminotReducer }) {

    useEffect(() => {
        getTaminot(users.businessId)
    }, [TaminotReducer.current])


    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active)
    }

    const [input, setInput] = useState(
        {
            inputsearch: '',
            qarzuzish: '',
            branchId: [],
            selectSupplier:'',
        },
    );

    function changeizlash(e) {
        input.inputsearch = e.target.value
        let a = { ...input }
        setInput(a)
    }
    function qarzuzish(e) {
        input.qarzuzish = e.target.value
        let a = { ...input }
        setInput(a)
    }

    const [editId,setEditId]=useState('')

    function editt(id) {
        setEditId(id)
        let a = TaminotReducer.taminot.filter(item=>item.id === id)
        console.log(a)
        toggle()

        setValue('name', a[0].name)
        setValue('phoneNumber', a[0].phoneNumber)
        setValue('telegram', a[0].telegram)
        setValue('supplierType', a[0].supplierType)
    }

    let [jamixisob, setjamixisob] = useState(0)

    const [qarz, setqarz] = useState(false)
    const [qarzID,setqarzID] = useState('')
    const {t} =  useTranslation()

    function debt2(id){
        setqarzID(id)
        toggle3()
    }

    function toggle3() {
        setqarz(!qarz)
    }

    function saqlaQarz() {
        qarzuzishTaminot({
            repayment: input.qarzuzish,
            id: qarzID
        })
        input.qarzuzish = ''
        let a = { ...input }
        setInput(a)
        setqarzID('')
        toggle3()
    }

    const {register, setValue,reset, handleSubmit, resetField, formState: {errors}} = useForm()

    const [ismi, setismi] = useState(true)
    const [telraqam, settelraqam] = useState(true)
    const [telegram, settelegram] = useState(true)
    const [suplier, setsuplier] = useState(true)
    const [debt,setdebt] = useState(true)
    const [amallar, setamallar] = useState(true)

    const [headlist, setheadlist] = useState([
        {
            name: t('Buttons.13'),
            phone: t('Buttons.14'),
            telegram: t('Buttons.15'),
            supplier: t('Supplier.5'),
            debt: t('Supplier.8'),
            amallar: t('Third.5')
        }
    ])

    function malumotkamayname() {
        setismi(!ismi)
    }

    function toggle2() {
        setmalkamay(!malkamay)
    }

    const [malkamay, setmalkamay] = useState(false)

    const [visible, setvisible] = useState(5)

    function koproq() {
        setvisible(prev => prev + 5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteTaminot(deleteID)
        deleteModaltoggle('')
    }

    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    function onSubmit(data){
        if(editId === ''){
            save(data)
            reset('')
        }
        else{
            editTaminot({
                ...data,businessId: users.businessId,id:editId
            })
            toggle()
            reset('')
            setEditId('')
        }
    }

    function save(data){
        saveTaminot(
            {
                ...data, businessId: users.businessId
            }
        )
        toggle()
    }

    return (
        <div>
            <div className="col-md-12 pt-4 pb-4 mt-2">


                <div className="textHeaderTM">
                    <h2>{t('Supplier.1')} </h2>
                    <p>{t('Supplier.1')}</p>
                </div>
                <div className="rowStyleTM">
                    <div className="qoshishTM">
                        <h5>{t('Supplier.2')}</h5>
                        {
                            users.addsupplier ? <button onClick={toggle} className='btn btn-primary'>+{t('Buttons.2')}</button> : ''
                        }
                    </div>
                    {
                        users.viewsupplier ? <div>
                            <div className="izlashTM">
                                <div className="izlashBox1">
                                    <p>{t('Supplier.8')}</p>
                                    <select name="" id="">
                                        <option value="">25</option>
                                        <option value="">All</option>
                                    </select>
                                    <button><img src={CSV} alt="" /> Export CSV</button>
                                    <button><img src={Excel} alt="" /> Export Excel</button>
                                    <button><img src={Print} alt="" /> Print</button>
                                    <button><img src={Pdf} alt="" />Export PDF</button>
                                    <button className={'posrel'} onClick={toggle2}><img src={Data} alt="" />Malumotlarni kamaytirish</button>

                                    {
                                        malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                            <li onClick={malumotkamayname} className={'li2'}>{ismi ? item.name : item.name + ' <-'}</li>
                                            <li onClick={() => settelraqam(!telraqam)} className={'li2'}>{telraqam ? item.phone : 'Tel raqam ' + ' <-'}</li>
                                            <li onClick={() => settelegram(!telegram)} className={'li2'}>{telegram ? item.telegram : item.telegram + ' <-'}</li>
                                            <li onClick={() => setsuplier(!suplier)} className={'li2'}>{suplier ? item.supplier : 'Taminotchi ' + ' <-'}</li>
                                            <li onClick={() => setdebt(!debt)} className={'li2'}>{debt ? item.debt : 'Qarz ' + ' <-'}</li>
                                            <li onClick={() => setamallar(!amallar)} className={'li2'}>{amallar ? item.amallar : item.amallar + ' <-'}</li>
                                        </ul>) : ''
                                    }

                                </div>
                                <div className="izlashBox2">
                                    <input type="text"

                                           // value={input.inputsearch} onChange={changeizlash}
                                        placeholder='Izlash...' />
                                </div>

                            </div>
                            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                <div className={'mt-3 d-flex justify-content-around'}><h4>{t('Buttons.10')}: {jamixisob} {t('Third.5')}</h4></div>
                                <table className='table table-striped table-hover table-condensed  table-bordered mt-4'>
                                    <thead className={'fix'}>
                                        {
                                            headlist.map(item => <tr key={item.id}>
                                                <th>T/R</th>
                                                {
                                                    ismi ? <th>{item.name}</th> : ''
                                                }
                                                {
                                                    telraqam ? <th>{item.phone}</th> : ''
                                                }
                                                {
                                                    telegram ? <th>{item.telegram}</th> : ''
                                                }
                                                {
                                                    suplier ? <th>{item.supplier}</th> : ''
                                                }
                                                {
                                                    debt?<th>{item.debt}</th>:''
                                                }
                                                {
                                                    amallar ? <th className={'text-center'}>{item.amallar}</th> : ''
                                                }
                                            </tr>)
                                        }

                                    </thead>

                                    <tbody >
                                        {
                                            TaminotReducer.taminot.filter(val => {
                                                if (input.inputsearch === '') {
                                                    return val
                                                } else if (val.name.toUpperCase().includes(input.inputsearch.toUpperCase())) {
                                                    return val
                                                }
                                            }).splice(0, visible).map((item, index) => <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                {
                                                    ismi ? <td>{item.name}</td> : ''
                                                }
                                                {
                                                    telraqam ? <td>{item.phoneNumber}</td> : ''
                                                }
                                                {
                                                    telegram ? <td>{item.telegram}</td> : ''
                                                }
                                                {
                                                    suplier ? <td>{item.supplierType}</td> : ''
                                                }
                                                {
                                                    debt?<td>{item.storeDebt}</td>:''
                                                }
                                                {
                                                    amallar ? <td className={'text-center'}>
                                                        {
                                                            users.editsupplier ?
                                                                <button onClick={() => editt(item.id)} className='taxrirlash'><img
                                                                    src={Edit}
                                                                    alt="" /> {t('Buttons.1')}
                                                                </button>: ''
                                                        }

                                                        <Link
                                                            to={'/headerthird/taminotchilar/view/' + item.name + '/' + item.phone + '/' + item.telegram + '/' + item.supplier}>
                                                            <button className='korish'><img src={Korish} alt="" /> {t('Buttons.4')}</button>
                                                        </Link>
                                                        {

                                                            users.deletesupplier ?
                                                                <button onClick={() => deleteModaltoggle(item.id)} className='ochirish'><img
                                                                    src={Delete} alt="" /> {t('Buttons.3')}
                                                                </button> : ''
                                                        }

                                                        <button className={'btnB2'} onClick={()=>debt2(item.id)}>{t('Buttons.11')}</button>

                                                        {/*QARZ UZISH*/}
                                                        <Modal isOpen={qarz} toggle={toggle3}>
                                                            <ModalHeader>
                                                                {t('Buttons.11')}
                                                            </ModalHeader>
                                                            <ModalBody>
                                                                <label htmlFor={'m'}>{t('Buttons.11')}</label>
                                                                <input type="text" className={'form-control'} value={input.qarzuzish} onChange={qarzuzish} />
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <button className={'btn btn-outline-primary'} onClick={saqlaQarz}>{t('Buttons.6')}</button>
                                                                <button className={'btn btn-outline-primary'} onClick={toggle3}>{t('Buttons.7')}</button>
                                                            </ModalFooter>
                                                        </Modal>

                                                        {/*IShonch komilmi DELETE*/}

                                                        <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                                            <ModalBody>
                                                                <h5>{t('Buttons.12')} ?</h5>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>{t('Buttons.3')}</button>
                                                                <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                                                            </ModalFooter>
                                                        </Modal>
                                                    </td> : ''
                                                }
                                            </tr>)
                                        }
                                    </tbody>
                                </table>

                                <button onClick={koproq} className={'bn '}>{t('Buttons.5')}
                                    <span className={'bn2'}> </span>
                                </button>

                                {/*<button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>*/}
                            </div>
                            <div className={'d-flex mt-3 justify-content-around'}>
                                {/*{console.log(TaminotReducer.taminot.map(item=> item.storeDebt))}*/}

                                {
                                    TaminotReducer.taminot.map(item => {
                                        jamixisob += item.storeDebt
                                    })
                                }

                            </div>

                        </div> : ''
                    }

                </div>

                {active ?
                    <Modal isOpen={active} toggle={toggle}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            {t('Supplier.4')}
                        </ModalHeader>
                        <ModalBody>
                                <div className="row">
                                    <div className={'col-md-6 col-sm-12 mb-3'}>
                                        <label htmlFor="">{t('Supplier.3')}</label>
                                        <select name="" id="" className={'form-control'} >
                                            <option value="">Tanlash</option>
                                        </select>
                                    </div>
                                    <div className="in col-md-6 col-sm-12 mb-3">
                                        <label htmlFor={'turi'}>{t('Supplier.5')}</label>
                                        <input type="text"
                                            {...register('supplierType', {required: true})}
                                            placeholder={errors.supplierType ? errors.supplierType?.type === "required" && "SupplierType is required":'supplierType'}
                                               defaultValue={''}
                                               className={'form-control'} />
                                    </div>
                                </div>

                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <label htmlFor={'log1'}>{t('Employ.7')}</label>
                                    <input type="text"

                                        className={'form-control'}
                                        id={'log1'} />
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <label htmlFor={'ism'}>{t('Employ.8')}</label>
                                    <input  type="text" id={'ism'}
                                        {...register('name',{required:true})}
                                        placeholder={errors.name ? errors.name?.type === "required" && "Name is required": 'name'}
                                            defaultValue={''}
                                         className={'form-control'}
                                        required="required" />
                                </div>
                            </div>
                            <div className="row">
                                <div className={'col-md-6 col-sm-12 mb-3'}>
                                    <label htmlFor={'ot'}>{t('Supplier.6')}</label>
                                    <input
                                        {...register('telegram',{required:true})}
                                        placeholder={errors.telegram ? errors.telegram?.type === "required" && "Telegram is required": 'telegram'}
                                        id={'telegram'} type="text"
                                        className={'form-control'} />
                                </div>
                                <div className={'col-md-6 col-sm-12 mb-3'}>
                                    <label htmlFor={'ot'}>{t('Supplier.7')}</label>
                                    <input  type="text"
                                        {...register('phoneNumber',{required:true})}
                                        placeholder={errors.phoneNumber ? errors.phoneNumber?.type === "required" && "Phone Num is required": 'phoneNumber'}
                                        className={'form-control'} />
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'}
                                    type={"submit"}
                            >SAVE</button>
                            <button type={"button"} className={'btn btn-outline-primary'} onClick={toggle}>{t('Buttons.7')}</button>
                        </ModalFooter>
                        </form>
                    </Modal> : ''
                }

            </div>
        </div>
    )
}

export default connect((TaminotReducer, QarzuzishTaminotReducer, users), {
    getTaminot,
    getTaminot2,
    qarzuzishTaminot,
    saveTaminot,
    editTaminot,
    deleteTaminot
})(Taminotchilar)
