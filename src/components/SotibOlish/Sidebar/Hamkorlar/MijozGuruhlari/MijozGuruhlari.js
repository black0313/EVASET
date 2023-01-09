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

    function name(e) {
        input.name = e.target.value
        let a = {...input}
        setInput(a)
    }

    function foiz(e) {
        input.foiz = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active, setactive] = useState(false)

    function toggle() {
        setactive(!active)
        input.name = ''
        let a = {...input}
        setInput(a)
    }

    function editM(id) {
        toggle()
        MijozlarGuruhReducer.mijozGuruh.map(item => {
            if (item.id === id) {
                input.name = item.name
                input.foiz = item.percent
                input.mId = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {
        if (input.mId !== '') {
            editMijozLarGurux({
                name: input.name,
                percent: input.foiz,
                id: input.mId
            })
        } else {
            saveMijozLarGurux({
                name: input.name,
                percent: parseInt(input.foiz),
                businessId: users.businessId
            })
            let a = {...input}
            setInput(a)
            setInput({
                name: '',
                foiz: ''
            })
        }
        toggle()
        let a = {...input}
        setInput(a)
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

    function onSubmit(data) {
        saqla()
        console.log(data)
    }

    return (
        <div className="col-md-12 mt-2 pt-4 pb-4">
            <div className="textHeaderMIG ">
                <h2>Mijozlar guruxlari</h2>
            </div>
            <div className="rowStyleMIG">
                <div className="qoshishMIG">
                    <h5>Barcha mijozlar guruxlari</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>

                <Modal isOpen={active} toggle={toggle}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            Guruh Qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'n'}>Guruh nomi</label>
                            <input type="text"
                                   {...register('name', {required: true})}
                                   placeholder={errors.name ? errors.name?.type === "required" && "Name is required" : 'name'}
                                   defaultValue={''}
                                   className={'form-control'} id={'n'}/>

                            <label className={'mt-3'} htmlFor={'foiz'}>Foiz %</label>
                            <input type="number" value={input.foiz} onChange={foiz} className={'form-control'}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </form>
                </Modal>

                <div className="izlashMIG">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
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
                        <th style={{fontSize: '17px'}}>Guruh Nomi</th>
                        <th style={{fontSize: '17px'}}>Fozida %</th>
                        <th style={{fontSize: '17px'}}>Amallar</th>
                        </thead>
                        <tbody>
                        {
                            MijozlarGuruhReducer.mijozGuruh.map(item => <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.percent}</td>
                                <td>
                                    <button className={'btnB'} onClick={() => editM(item.id)}>Tahrirlash</button>
                                    <button className={'btnB'} onClick={() => deleteModaltoggle(item.id)}>O`chirish
                                    </button>
                                </td>

                                <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                    <ModalBody>
                                        <h5>Ishonchingiz komilmi ?</h5>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button onClick={() => deleteFunc(item.id)}
                                                className={'btn btn-outline-primary'}>O`chirish
                                        </button>
                                        <button onClick={() => deleteModaltoggle('')}
                                                className={'btn btn-outline-primary'}>Chiqish
                                        </button>
                                    </ModalFooter>
                                </Modal>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
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