import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './haridlarRoyxati.css'
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import XaridReducer, {
    deleteXarid,
    editXarid,
    getXarid,
    getXarid2,
    getXarid3,
    getXarid4,
    saveXarid
} from "../reducer/XaridReducer";
import TaminotReducer, {getTaminot} from "../../Hamkorlar/reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import tolovreducer, {gettolovholati} from "../../../../../reducer/tolovreducer";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {useTranslation} from "react-i18next";

function HaridlarRoyxati({getXarid,getTaminot,getXarid3,gettolovholati,tolovreducer, branchreducer,getbranch,getXarid2, deleteXarid, saveXarid,XaridReducer,TaminotReducer,users}) {

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            baza: '',
            diller: '',
            xaridstatus: '',
            tulovstatus: '',
            sana: '',
            view: '',
            search: '',
        }
    )

    function baza(e) {
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function diller(e) {
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
        if (input.diller !== 'barcasi'){
            getXarid3(input.diller)
        }
        else{
            getXarid3(users.businessId)
        }
    }
    function xaridstatus(e) {
        input.xaridstatus = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovstatus(e) {
        input.tulovstatus = e.target.value
        let a = {...input}
        setInput(a)
        if (input.tulovstatus !== 'to`langan'){
            getXarid4(input.tulovstatus)
        }else {
            getXarid4(users.businessId)
        }
    }
    function sana(e) {
        input.sana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function search(e) {
        input.search = e.target.value
        let a = {...input}
        setInput(a)
    }
    function deleteX(item) {
        deleteXarid(item.id)
            getXarid(users.businessId)
    }

    useEffect(() => {
        ommabop()
        getXarid(users.businessId)
        getTaminot(users.businessId)
        getbranch(users.businessId)
        gettolovholati(users.businessId)
    },[XaridReducer.current])

    const [sana3,setsana3]= useState(true)
    const [baza3,setbaza3]=useState(true)
    const [diller3,setdiller3]=useState(true)
    const [xaridstatus3,setxaridstatus3]=useState(true)
    const [donanarxi,setdonanarxi]=useState(true)
    const [jammisumma,setjamisumma]=useState(true)
    const [qisqaeslatma,setqisqaeslatma]=useState(true)
    const [amallar,setamallar]=useState(true)

    const [headlist,setheadlist] = useState([
        {
            sana: t('Purchase.7'),
            baza: t('ProductList.10'),
            diller: t('Purchase.2'),
            xaridstatus: t('Purchase.3'),
            donanarxi: t('Purchase.8'),
            jamisumma: t('Purchase.9'),
            qisqaeslatma: t('Buttons.17'),
            amallar:'Amallar'
        }
    ])

    const [malkamay, setmalkamay] = useState(false)


    const [pages,setpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function ommabop() {

        let d = XaridReducer.xaridlar.length/7
        setpages(d)
    }
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * 7 - 7;
        const endIndex = startIndex + 7;
        return XaridReducer.xaridlar.slice(startIndex, endIndex);
    };
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 1) * 1;
        return new Array(1).fill().map((_, idx) => start + idx + 1);
    };

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteXarid(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
        // deleteTaminot(item.id)
        console.log(item)
    }

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeaderHarid">
                <h2>{t('Purchase.1')}</h2>
            </div>
            <div className="rowStyleHarid">
                <div className="qoshish">
                    <h5>{t('Buttons.16')}</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>{t('ProductList.8')}:</h6>
                        <select name="" value={input.baza} onChange={baza} id="">
                            {
                                branchreducer.branch.map(item=><option value="barcasi">{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Purchase.2')}:</h6>
                        <select name="" id="" value={input.diller} onChange={diller}>
                            <option value="barcasi">Barchasi</option>
                            {
                                TaminotReducer.taminot.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>{t('Purchase.3')}:</h6>
                        <select name="" id="" value={input.xaridstatus} onChange={xaridstatus}>
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>{t('Purchase.4')}:</h6>
                        <select name="" value={input.tulovstatus} onChange={tulovstatus} id="">
                            {
                                tolovreducer.tolovholati.map(item=><option value={item.id}>{item.status}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="sana">
                            <h6>{t('Purchase.5')}:</h6>
                            <input type="date" onChange={sana} value={input.sana}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowStyleBH">
                <div className="qoshishBH">
                    <h5>{t('Purchase.6')}</h5>
                    <Link to={'/headerthird/xaridQilish'}>
                        <button className='btn btn-primary'>+{t('Buttons.2')}</button>
                    </Link>
                </div>
                <div className="izlashBH">
                    <div className="izlashBox1">
                        <p>{t('Buttons.8')}</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button onClick={()=>setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                        {
                            malkamay ? headlist.map(item => <ul className={'ul23'} key={item.id}>
                                <li onClick={()=>setsana3(!sana3)} className={'li23'}>{sana3? item.sana: item.sana+' <-'}</li>
                                <li onClick={()=>setbaza3(!baza3)} className={'li23'}>{baza3? item.baza:item.baza +' <-'}</li>
                                <li onClick={()=>setdiller3(!diller3)} className={'li23'}>{diller3? item.diller:item.diller+' <-'}</li>
                                <li onClick={()=>setxaridstatus3(!xaridstatus3)} className={'li23'}>{xaridstatus3? item.xaridstatus:item.xaridstatus+' <-'}</li>
                                <li onClick={()=>setdiller3(!donanarxi)} className={'li23'}>{donanarxi? item.donanarxi:item.donanarxi+' <-'}</li>
                                <li onClick={()=>setamallar(!amallar)} className={'li23'}>{amallar?item.amallar:item.amallar+ ' <-'}</li>
                            </ul>) : ''
                        }

                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' onChange={search} value={input.search}/>
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table  table-striped table-bordered mt-4'>
                        <thead>

                            {
                                headlist.map(item=><tr key={item.id}>
                                    <th>T/R</th>
                                    {
                                        sana3?<th>{item.sana}</th>:''
                                    }
                                    {
                                        baza3?<th>{item.baza}</th>:''
                                    }
                                    {
                                        diller3?<th>{item.diller}</th>:''
                                    }
                                    {
                                        xaridstatus3?<th>{item.xaridstatus}</th>:''
                                    }
                                    {
                                        donanarxi?<th>{item.donanarxi}</th>:''
                                    }
                                    {
                                        jammisumma?<th>{item.jamisumma}</th>:''
                                    }
                                    {
                                        qisqaeslatma?<th>{item.qisqaeslatma}</th>:''
                                    }
                                    {
                                        amallar?<th>{item.amallar}</th>:''
                                    }
                                </tr>)
                            }

                        </thead>

                        <tbody>
                        {
                            getPaginatedData().filter(val => {
                                if (input.search === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                    return val
                                }
                            }).splice(0,visible).map((item,index) => <tr key={index}>
                                <td>{index+1}</td>
                                {
                                    sana3?<td>{item.date}</td>:''
                                }
                                {
                                    baza3?<td>{item.branch.name}</td>:''
                                }
                                {
                                    diller3?<td>{item.dealer.name}</td>:''
                                }
                                {
                                    xaridstatus3?<td>{item.purchaseStatus.status}</td>:''
                                }
                                {/*<td></td>*/}
                                {
                                    donanarxi?<td></td>:''
                                }
                                {
                                    jammisumma?<td>{item.totalSum}</td>:''
                                }
                                {
                                    qisqaeslatma?<td>{item.description}</td>:''
                                }
                                {
                                    amallar?<td>
                                        <Link to={'/headerthird/xaridQilish/'+item.id}>
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

                                    </td>:''

                                }
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

export default connect((TaminotReducer,XaridReducer,users,branchreducer,tolovreducer),{getXarid,getbranch,gettolovholati,getXarid4,getTaminot,getXarid2,getXarid3,saveXarid,editXarid,deleteXarid}) (HaridlarRoyxati)
