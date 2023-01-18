import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './xarajatlarRoyxati.css'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import XarajatlarReducer, {deleteXarajatlar, editXarajatlar,getXarajatlar2,getXarajatlar3, getXarajatlar, saveXarajatlar} from "../reducer/XarajatlarReducer";
import users from '../../../../../reducer/users'
import branchreducer ,{getbranch} from '../../../../../reducer/branchreducer'
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {useTranslation} from "react-i18next";

function XarajatlarRoyxati({getXarajatlar,getXarajatlar2,getXarajatlar3, users,branchreducer,getbranch, saveXarajatlar, deleteXarajatlar, xarajatlar,XarajatlarReducer}) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            baza: '',
            xarajatqildi: '',
            aloqa: '',
            xarajatturi: '',
            sana: '',
            obuna: '',
            view: '',
            izlash: '',
        }
    )

    function baza(e) {
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
        if(input.baza !=='barcasi'){
            getXarajatlar2(input.baza)
        }else{
            getXarajatlar(users.businessId)
        }
    }

    function xarajatqildi(e) {
        input.xarajatqildi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function aloqa(e) {
        input.aloqa = e.target.value
        let a = {...input}
        setInput(a)
    }
    function xarajatturi(e) {
        input.xarajatturi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sana(e) {
        input.sana = e.target.value
        let a = {...input}
        setInput(a)
        
        getXarajatlar3({
            date:input.sana,
            id:input.baza
        })
    }
    function obuna(e) {
        input.obuna = e.target.value
        let a = {...input}
        setInput(a)
    }
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

    useEffect(() => {
        getXarajatlar(users.businessId)
        getXarajatlar2(users.businessId)
        getbranch(users.businessId)
        // getbranch(users.businessId)
    }, [XarajatlarReducer.counter])

    function deleteXarajat(item){
        deleteXarajatlar(item.id)
    }

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteXarajatlar(deleteID)
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
            <div className="textHeaderHRR">
                <h2>{t('Expenses.1')}</h2>
            </div>
            <div className="rowStyleHRR">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('ProductList.8')}:</h6>
                        <select name="" value={input.baza} onChange={baza} id="">
                            <option value="barcasi">Barchasi</option>
                           {
                               branchreducer.branch.map(item=><option value={item.id}>{item.name}</option>)
                           }
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('Trade.25')}:</h6>
                        <select name="" id="" value={input.xarajatqildi} onChange={xarajatqildi}>
                            <option value="">Barchasi</option>

                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('Expenses.2')}:</h6>
                        <select name="" id="" value={input.aloqa} onChange={aloqa}>
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('Expenses.3')}:</h6>
                        <select name="" id="" value={input.xarajatturi} onChange={xarajatturi}>
                            <option value="">Barchasi</option>
                            <option value="">To'lov muddati o'tgan</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="sana">
                            <h6>{t('Trade.3')}:</h6>
                           
                           {
                                <input type="date" value={input.sana+"/"+branchreducer.branch.id} onChange={sana}/>
                           }
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>{t('Expenses.4')}:</h6>
                        <select name="" id="" value={input.obuna} onChange={obuna}>
                            <option value="">Barchasi</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rowStyleHRR2">
                <div className="qoshish">
                    <h5>{t('Expenses.1')}</h5>
                    <Link to={'/headerthird/xarajatQoshish'}>
                        <button className='btn btn-primary'>+{t('Buttons.2')}</button>
                    </Link>
                </div>
                <div className="izlashHRR2">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>{t('Buttons.18')}</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                    </div>
                    
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar mb-4">
                    <table className='table table-striped table-bordered mt-4 '>
                        <thead>
                        <tr>
                            <th>{t('Trade.4')}</th>
                            <th>{t('Trade.5')}</th>
                            <th>{t('ProductList.8')}</th>
                            <th>{t('Purchase.4')}</th>
                            {/*<th>To'lov usuli</th>*/}
                            {/*<th>Jami summa</th>*/}
                            <th>{t('Expenses.5')}</th>
                            <th>{t('Supplier.8')}</th>
                            {/*<th>Yetkazish statusi</th>*/}
                            <th>{t('Expenses.6')}</th>
                            <th>{t('Expenses.7')}</th>
                            <th>{t('Expenses.8')}</th>
                            {/*<th>Yetkazish manzili</th>*/}
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {   
                            XarajatlarReducer.xarajatlar.filter(val => {
                                if (input.izlash === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.izlash.toUpperCase())) {
                                    return val
                                }
                                
                            }).map(item => <tr key={item.id}>
                                <td>{item.date}</td>
                                <td>{item.id}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{item.totalSum}</td>
                                {/*<td>{item.spender.firstName}</td>*/}
                                <td>- </td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={'/headerthird/xarajatQoshish/'+item.id}>
                                        <button className='taxrirlash'><img src={Edit} alt=""/> {t('Buttons.1')}</button>
                                    </Link>
                                    <button className='ochirish' onClick={()=>deleteModaltoggle(item.id)}><img src={Delete} alt=""/> {t('Buttons.3')}</button>

                                    <Modal isOpen={deletemodal} toggle={deleteModaltoggle}>
                                        <ModalBody>
                                            <h5>{t('Buttons.12')} ?</h5>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button onClick={() => deleteFunc(item.id) } className={'btn btn-outline-primary'}>{t('Buttons.3')}</button>
                                            <button onClick={()=>deleteModaltoggle('')} className={'btn btn-outline-primary'}>{t('Buttons.7')}</button>
                                        </ModalFooter>
                                    </Modal>
                                </td>
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

export default connect((XarajatlarReducer,users,branchreducer), {
    getXarajatlar,
    saveXarajatlar,
    editXarajatlar,
    getbranch,
    getXarajatlar2,
    getXarajatlar3,
    deleteXarajatlar
})(XarajatlarRoyxati)