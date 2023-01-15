import MijozGuruhlari from './MijozGuruhlari.css'
import CSV from "../../../../../img/CSV.png";
import Excel from "../../../../../img/Excel.png";
import Print from "../../../../../img/Print.png";
import Pdf from "../../../../../img/PDF.png";
import Data from "../../../../../img/Data.png";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import MijozGuruxReducer, {
    deleteMijozGurux,
    editMijozGurux,
    getMijozGurux,
    saveMijozGurux
} from "../reducer/MijozGuruxReducer";
import users from "../../../../../reducer/users";
import MijozlarGuruhReducer, {
    deleteMijozLarGuruh,
    editMijozLarGurux,
    getMijozLarGuruh,
    saveMijozLarGurux
} from "../reducer/MijozlarGuruhReducer";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

function MijozGuruhlariii({
                              getMijozLarGuruh,
                              users,
                              MijozlarGuruhReducer,
                              deleteMijozLarGuruh,
                              editMijozLarGurux,
                              saveMijozLarGurux
                          }) {

    const [input, setInput] = useState({
        inputsearch: '',
        name: '',
        foiz: '',
        mId: ''
    })


    function search(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    const {t} = useTranslation()
    const [active, setactive] = useState(false)

    function toggle() {
        setactive(!active)
        input.name = ''
        let a = {...input}
        setInput(a)
    }

    const [saveId,setSaveId] = useState('')
    function editM(id) {
        setSaveId(id)
        toggle()
        let a = MijozlarGuruhReducer.mijozGuruh.filter(i=>i.id===id)
        setValue('name', a[0].name)
        setValue('percent', a[0].percent)
        setValue('businessId', a[0].businessId)
    }

    useEffect(() => {
        getMijozLarGuruh()
    }, [MijozlarGuruhReducer.current])

    const [visible, setvisible] = useState(5)

    function koproq() {
        setvisible(prev => prev + 5)
    }

    function deleteGroup(item) {
        deleteMijozLarGuruh(item.id)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc() {
        deleteMijozLarGuruh(deleteID)
        deleteModaltoggle('')
    }

    const {register, setValue, resetField, reset, handleSubmit, formState: {errors}} = useForm()

    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    function save(data){
        saveMijozLarGurux({
            ...data,businessId:users.businessId
        })
        reset('')
        toggle()
    }
    function onSubmit(data) {
        if (saveId === ''){
            save(data)
        }else {
            editMijozLarGurux({
                ...data, businessId:users.businessId
            })
            toggle()
        }
        resetField('name','')
        resetField('percent','')
        console.log(data)
    }

    return (
        <div className="col-md-12 mt-2 pt-4 pb-4">
            <div className="textHeaderMIG ">
                <h2>{t('CustomGroup.1')}</h2>
            </div>
            <div className="rowStyleMIG">
                <div className="qoshishMIG">
                    <h5>{t('CustomGroup.2')}</h5>
                    <button onClick={toggle} className='btn btn-primary'>+{t('Buttons.2')}</button>
                </div>

                <Modal isOpen={active} toggle={toggle}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            {t('CustomGroup.3')}
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'n'}>{t('CustomGroup.4')}</label>
                            <input type="text"
                                   {...register('name', {required: true})}
                                   placeholder={errors.name ? errors.name?.type === "required" && "Name is required" : 'name'}
                                   defaultValue={''}
                                   className={'form-control'} id={'n'}/>

                            <label className={'mt-3'} htmlFor={'foiz'}>{t('CustomGroup.5')} %</label>
                            <input type="number"
                                   {...register('percent', {required:true})}
                                    placeholder={errors.name ? errors.name?.type === "required" && "Percent is required":'percent'}
                                   className={'form-control'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} type={"submit"}>{t('Buttons.6')}</button>
                            <button className={'btn btn-outline-primary'} type={"button"} onClick={toggle}>{t('Buttons.7')}</button>
                        </ModalFooter>
                    </form>
                </Modal>

                <div className="izlashMIG">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="">
                            <option value="">25</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.inputsearch} onChange={search} placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table table-striped table-hover mt-4'>
                        <thead>
                        <th style={{fontSize: '17px'}}>{t('CustomGroup.6')}</th>
                        <th style={{fontSize: '17px'}}>{t('CustomGroup.5')} %</th>
                        <th style={{fontSize: '17px'}}>{t('Buttons.9')}</th>
                        </thead>
                        <tbody>
                        {
                            MijozlarGuruhReducer.mijozGuruh.map(item => <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.percent}</td>
                                <td>
                                    <button className={'btnB'} onClick={() => editM(item.id)}>{t('Buttons.1')}</button>
                                    <button className={'btnB'} onClick={() => deleteModaltoggle(item.id)}>{t('Buttons.3')}
                                    </button>
                                </td>

                                <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                    <ModalBody>
                                        <h5>{t('Buttons.12')} ?</h5>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button onClick={() => deleteFunc(item.id)}
                                                className={'btn btn-outline-primary'}>{t('Buttons.3')}
                                        </button>
                                        <button onClick={() => deleteModaltoggle('')}
                                                className={'btn btn-outline-primary'}>{t('Buttons.7')}
                                        </button>
                                    </ModalFooter>
                                </Modal>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                </div>

            </div>
        </div>
    )
}

export default connect((MijozGuruxReducer, users, MijozlarGuruhReducer), {
    getMijozGurux,
    getMijozLarGuruh,
    saveMijozLarGurux,
    editMijozLarGurux,
    deleteMijozLarGuruh,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux

})(MijozGuruhlariii)