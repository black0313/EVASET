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


function MijozGuruhlariii({getMijozLarGuruh,users,MijozlarGuruhReducer,editMijozLarGurux,saveMijozLarGurux}){

    const [input,setInput] = useState({
        inputsearch:'',
        name:'',
    })

    function name(e){
        input.name = e.target.value
        let a = {...input}
        setInput(a)
    }
    function search(e){
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active,setactive] = useState(false)

    function toggle(){
        setactive(!active)
        input.name = ''
        let a = {...input}
        setInput(a)
    }

    function saqla(){

    }
    useEffect(()=>{
        getMijozLarGuruh(users.businessId)
    },[])

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
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
                    <ModalHeader>
                        Guruh Qo`shish
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'n'}>Guruh nomi</label>
                        <input type="text" value={input.name} onChange={name} className={'form-control'} id={'n'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
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
                        <button ><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.inputsearch} onChange={search} placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className='table table-striped  mt-4'>
                        <thead>
                            <th style={{fontSize:'17px'}}>Guruh Nomi</th>
                            <th style={{fontSize:'17px'}}>Fozida %</th>
                            <th style={{fontSize:'17px'}}>Sotuv narxini guruhlash</th>
                            <th style={{fontSize:'17px'}}>Amallar</th>
                        </thead>
                        <tbody>
                            LA LA KU
                        </tbody>
                    </table>
                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                </div>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>

            </div>
        </div>
    )
}

export default connect((MijozGuruxReducer, users,MijozlarGuruhReducer), {
    getMijozGurux,
    getMijozLarGuruh,
    saveMijozLarGurux,
    editMijozLarGurux,
    deleteMijozLarGuruh,
    saveMijozGurux,
    editMijozGurux,
    deleteMijozGurux

})(MijozGuruhlariii)