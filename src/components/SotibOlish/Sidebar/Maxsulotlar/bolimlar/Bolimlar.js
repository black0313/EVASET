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
import {useForm} from "react-hook-form";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import BolimReducer, {deleteBolim, bolimlar, editBolim, getBolim, saveBolim,} from "../reducer/BolimReducer";
import users from "../../../../../reducer/users";
import ichkibolimred, {saveichkibolim, getichki} from "../reducer/Ichkibolimred";
import {useTranslation} from "react-i18next";

function Bolimlar({
                      editBolim,
                      getBolim,
                      bolimlar,
                      saveBolim,
                      deleteBolim,
                      BolimReducer,
                      users,
                      saveichkibolim,
                      getichki
                  }) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            view: '',
            search: '',
            bId: '',
            bolim2: '',
            ichkibolimnomi: '',
            ichkibolimdescription: '',
            asosiybolim: '',
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

    const {resetField,reset, setValue, handleSubmit, register, formState: {errors}} = useForm()

    function saqla2() {

        toggle10()

        saveichkibolim(
            {
                name: input.ichkibolimnomi,
                description: input.ichkibolimdescription,
                businessId: users.businessId,
                parentCategory: input.asosiybolim,
            }
        )
    }

    function toggle() {
        setActive(!active)
    }

    const [editId, setEditId] = useState('')

    function editBolimF(id) {
        toggle()
        setEditId(id)
        let a = BolimReducer.bolimlar.filter(i => i.id === id)
        console.log(a)

        setValue('name', a[0].name)
        setValue('description', a[0].description)
    }

    const [active10, setactive10] = useState(false)

    function toggle10() {
        setactive10(!active10)
    }


    useEffect(() => {
        getBolim(users.businessId)
    }, [BolimReducer.current])

    const [headlist, setheadlist] = useState([
        {
            bolim: t('ProductList.4'),
            bolimkod: t('Sections.7'),
            qisqa: t('Buttons.17'),
            amallar: 'Amallar'
        }
    ])

    const [korishId, setkorishId] = useState('')

    function korishsh(id) {
        setkorishId(id)
        toggle7()
    }

    function toggle7() {
        setActive(!active)
    }

    const [visible, setvisible] = useState(5)

    function koproq() {
        setvisible(prev => prev + 5)
    }

    const [bolimlar2, setbolimlar2] = useState(true)
    const [bolimkodi2, setbolimkodi2] = useState(true)
    const [qisqa, setbqisqa] = useState(true)
    const [amallar, setamallar] = useState(true)

    const [malkamay, setmalkamay] = useState(false)

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc() {
        deleteBolim(deleteID)
        deleteModaltoggle('')
    }

    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    function onSubmit(data) {
        if (editId === '') {
            save(data)
        }else {
            editBolim({
                ...data, businessId: users.businessId,id:editId
            })
            resetField('name','')
            resetField('description','')
            setEditId('')
            toggle()
        }
        console.log(data)
        console.log(editId)
        resetField('name', '')
        resetField('description', '')
    }

    function save(data) {

        saveBolim({
            ...data, businessId: users.businessId
        })
        toggle()
    }

    return (
        <div className="col-md-12 mt-4 mb-4">

            <div className="textHeaderBL">
                <h2>{t('ProductList.4')}</h2>
                <p>{t('Sections.1')}</p>
            </div>
            <div className="rowStyleBL">
                <div className="qoshish">
                    <h5>{t('ProductList.4')}</h5>
                    <button onClick={toggle} className='btn btn-outline-dark' style={{marginLeft: '550px'}}>+ {t('Buttons.2')}
                    </button>
                    <button onClick={toggle10} className='btn btn-outline-primary'>+ {t('Sections.2')}</button>
                </div>

                <Modal isOpen={active10} toggle={toggle10}>
                    <ModalHeader>
                        {t('Sections.2')}
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor="">{t('Sections.3')}</label>
                        <select value={input.asosiybolim} onChange={asosiybolim} className={'form-control'} id="">
                            {
                                BolimReducer.bolimlar.map(item => <option value={item.id}>{item.name}</option>)
                            }
                        </select>

                        <label htmlFor={''} className={'mt-3'}>{t('Sections.4')}</label>
                        <input type="text" className={'form-control'} value={input.ichkibolimnomi}
                               onChange={ichkibolimnomi}/>

                        <label className={'mt-3'} htmlFor={''}>{t('Sections.5')}</label>
                        <input type="text" className={'form-control'} value={input.ichkibolimdescription}
                               onChange={ichkibolimdescription}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={saqla2}>{t('Buttons.6')}</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle10}>{t('Buttons.7')}</button>
                    </ModalFooter>
                </Modal>

                <div className="izlashBL">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
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
                                <li onClick={() => setbolimlar2(!bolimlar2)}
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

                <Link to={'/headerthird/bolimlar'}>
                    <button className={'btn btn-danger mt-2'}>{t('ProductList.4')}</button>
                </Link>
                <Link to={'/headerthird/ichkibolimlar'}>
                    <button style={{marginLeft: '10px'}} className={'btn btn-primary mt-2'}>{t('Sections.6')}</button>
                </Link>

                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar mb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        {
                            headlist.map(item => <tr key={item.id}>
                                <th>T/R</th>
                                {
                                    bolimlar2 ? <th>{item.bolim}</th> : ''
                                }

                                {
                                    qisqa ? <th>{item.qisqa}</th> : ''
                                }
                                {
                                    amallar ? <th>{item.amallar}</th> : ''
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
                            }).splice(0, visible).map((item, index) => <tr key={item.id}>
                                <td>{index + 1}</td>
                                {
                                    bolimlar2 ? <td>{item.name}</td> : ''
                                }

                                {
                                    qisqa ? <td>{item.description}</td> : ''
                                }
                                {
                                    amallar ? <td>
                                        <Link>
                                            <button onClick={() => editBolimF(item.id)} className='taxrirlash'><img
                                                src={Edit}
                                                alt=""/> {t('Buttons.1')}
                                            </button>
                                        </Link>
                                        <button className='ochirish' onClick={() => deleteModaltoggle(item.id)}><img
                                            src={Delete}
                                            alt=""/> {t('Buttons.3')}
                                        </button>

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

                                    </td> : ''
                                }
                            </tr>)
                        }

                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                </div>

                <Modal isOpen={active} toggle={toggle}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            {t('Sections.8')}
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'bnomi'}>{t('Sections.9')}</label>
                            <input type="text" className={'form-control '}
                                   {...register('name', {required: true})}
                                   placeholder={errors.name ? errors.name?.type === "required" && "Name is required" : 'name'}
                                   id={'bnomi'}/>

                            <label className={'mt-3'} htmlFor={'area'}>{t('Buttons.17')}</label>
                            <textarea
                                {...register('description', {required: true})}
                                // placeholder={errors.description ? errors.description?.type === "required" && "Description is required" : 'description'}
                                className={'form-control'} name="" id={'area'} cols="30" rows="4" > </textarea>

                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} type={"submit"}>{t('Buttons.6')}</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle} type={"button"}>{t('Buttons.7')}
                            </button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        </div>
    )
}

export default connect((BolimReducer, users, ichkibolimred), {
    getBolim,
    saveBolim,
    deleteBolim,
    editBolim,
    getichki,
    saveichkibolim
})(Bolimlar)
