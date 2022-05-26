import './soliq.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SoliqReducer, {deleteSoliq, editSoliq, getSoliq, saveSoliq} from "../reducers/SoliqReducer";
import users from "../../../../../../reducer/users";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ValyutaReducer, {deleteValyuta, editValyuta, getValyuta, saveValyuta} from "../reducers/ValyutaReducer";
import {deleteTaminot} from "../../../Hamkorlar/reducer/TaminotReducer";


function Soliq({SoliqReducer,ValyutaReducer,editSoliq,editValyuta,deleteValyuta,getValyuta,saveValyuta,getSoliq,saveSoliq,users,deleteSoliq}){

    const [input,setInput] = useState({
        valyutanomi:'',
        valyutakursi:'',
        vaqtzonasi:'',
        soliqnomi:'',
        soliqfoiz:'',
        soliqraqam:'',
        tID:'',
        activevalyuta: false,
        sId:'',
    })


    function soliqfoiz(e){
        input.soliqfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function valyutakursi(e){
        input.valyutakursi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function valyutanomi(e){
        input.valyutanomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function soliqnomi(e){
        input.soliqnomi = e.target.value
        let a = {...input}
        setInput(a)
    }


    function saqla(){

        if (input.sId !==''){
            editSoliq({
                name: input.soliqnomi,
                percent: input.soliqfoiz,
                businessId: users.businessId
            })
        }else {
            saveSoliq({
                name: input.soliqnomi,
                percent: input.soliqfoiz,
                businessId: users.businessId
            })
        }



        input.soliqnomi = ''
        input.soliqfoiz = ''

        let a = {...input}
        setInput(a)
        toggle()
    }

    function saqlaValyuta(){

        if (input.tID !==''){
            editValyuta({
                name: input.valyutanomi,
                currentCourse: input.valyutakursi,
                businessId: users.businessId,
                active: true
            })
        }else {
            saveValyuta({
                name: input.valyutanomi,
                currentCourse: input.valyutakursi,
                businessId: users.businessId,
                active: true
            })
        }

        let b = { ...input }
        setInput(b)

        input.valyutanomi = ''
        input.valyutakursi = ''
        let a = {...input}
        setInput(a)

        toggle2()
    }

    const [active,setactive] = useState(false)

    function toggle(){
        setactive(!active)
    }

    const [active2,setactive2] = useState(false)

    function toggle2(){
        setactive2(!active2)
    }

    useEffect(()=>{
        getSoliq(users.businessId)
        getValyuta(users.businessId)
    },[SoliqReducer.current,ValyutaReducer.current])

    function editValyutaa(id) {
        toggle()
        ValyutaReducer.valyuta.map(item => {
            if (item.id === id) {
                input.valyutanomi = item.name
                input.valyutakursi = item.currentCourse
                users.businessId = item.businessId
                input.activevalyuta = true
                input.tID = id
                let a = { ...input }
                setInput(a)
            }
        })
    }

    function editsoliq(id){
        toggle2()
        SoliqReducer.soliq.map(item=>{
            if (item.id === id){
                input.soliqnomi = item.name
                input.soliqfoiz = item.percent
                users.businessId = item.businessId
                input.sId = id
                let a = {...input}
                setInput(a)
            }
        })
        console.log(SoliqReducer.soliq)
    }

    const [deletemodal, setdeletemodal] = useState(false)
    const [deleteID, setdeletID] = useState('')

    function deleteFunc(){
        deleteValyuta(deleteID)
        deleteModaltoggle('')
    }


    function deleteModaltoggle(item) {
        setdeletemodal(!deletemodal)
        setdeletID(item)
    }

    const [deletemodalsoliq, setdeletemodalsoliq] = useState(false)
    const [deleteIDsoliq, setdeletIDsoliq] = useState('')

    function deleteFuncsoliq(){
        deleteSoliq(deleteIDsoliq)
        deleteModaltogglesoliq('')
    }


    function deleteModaltogglesoliq(item) {
        setdeletemodalsoliq(!deletemodalsoliq)
        setdeletIDsoliq(item)
    }

    const [visible, setvisible] = useState(5)

    function koproq() {
        setvisible(prev => prev + 5)
    }

    const [visiblevalyuta, setvisiblevalyuta] = useState(5)

    function koproqvalyuta() {
        setvisiblevalyuta(prev => prev + 5)
    }


    return(
            <div className="soliqCont">
                    <h3 className='text-center pb-3'>Soliq sozlamalari</h3>
                <div className="row">

                    <button className={'btn btn-outline-danger'} onClick={toggle}>+ Soliq qo`shish</button>
                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Soliq Qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="">Soliq nomi</label>
                            <input type="text" value={input.soliqnomi} onChange={soliqnomi} className={'form-control'}/>
                            <label className={'mt-2'} htmlFor="">foiz</label>
                            <input type="number" value={input.soliqfoiz} onChange={soliqfoiz} className={'form-control'}/>

                            <div className={'mt-3 d-flex justify-content-between'}>
                                <input style={{width:'20px',height:'20px'}} type="checkbox" id={'sot'} className='check'/>
                                <label  className='d-block ' style={{cursor:'pointer'}} htmlFor={'sot'}>Sotib va sotishda ichki soliq</label>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>

                    <div className={'table-responsive table-wrapper-scroll-y my-custom-scrollbar'}>

                        <table className={'table table-bordered table-hover mt-4'}>
                            <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Name</th>
                                <th>Foiz</th>
                                <th>Amallar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                SoliqReducer.soliq.map((item,index)=><tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.percent}</td>
                                    <td>
                                        <button className={'btnB'} onClick={()=>editsoliq(item.id)}>Tahrirlash</button>
                                        <button className={'btnB'} onClick={()=>deleteModaltogglesoliq(item.id)}>O`chirish</button>

                                        <Modal isOpen={deletemodalsoliq} toggle={deleteModaltogglesoliq}>
                                            <ModalBody>
                                                <h5>Ishonchingiz komilmi ?</h5>
                                            </ModalBody>
                                            <ModalFooter>
                                                <button onClick={() => deleteFuncsoliq(item.id) } className={'btn btn-outline-primary'}>O`chirish</button>
                                                <button onClick={()=>deleteModaltogglesoliq('')} className={'btn btn-outline-primary'}>Chiqish</button>
                                            </ModalFooter>
                                        </Modal>
                                    </td>
                                </tr>)

                            }

                            </tbody>

                        </table>

                        <button onClick={koproq} className={'bn '}>Ko`proq ko`rish
                            <span className={'bn2'}> </span>
                        </button>
                    </div>

                </div>
<hr/>
                <div className="row">

                    <br/>

                    <h2 className={'text-center mt-2'}>VALYUTA / USSD & UZS</h2>

                    <button className={'btn btn-outline-primary mt-2'} onClick={toggle2}>+ Valyuta qo`shish</button>

                    <Modal isOpen={active2} toggle={toggle2}>
                        <ModalHeader>
                            Valyuta Qo`shish
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="">Valyuta nomi</label>
                            <input type="text" className={'form-control'} value={input.valyutanomi} onChange={valyutanomi}/>
                            <label className={'mt-2'} htmlFor="">Valyuta kursi</label>
                            <input type="text" className={'form-control'} value={input.valyutakursi} onChange={valyutakursi}/>

                            <label className={'mt-2'} htmlFor="">Vaqt zonasi</label>
                            <select name="" className={'form-control'} id="">
                                <option value="">Tashkent</option>
                            </select>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-outline-primary'} onClick={saqlaValyuta}>Saqlash</button>
                            <button className={'btn btn-outline-primary'} onClick={toggle2}>Chiqish</button>
                        </ModalFooter>
                    </Modal>

                    <div className={'table-responsive table-wrapper-scroll-y my-custom-scrollbar'}>

                        <table className={'table table-hover table-bordered mt-4'}>
                            <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Name</th>
                                <th>Kurs</th>
                                <th>Amallar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                ValyutaReducer.valyuta.map((item,index)=><tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.currentCourse}</td>
                                    <td>
                                        <button className={'btnB'} onClick={()=>editValyutaa(item.id)}>Tahrirlash</button>
                                        <button className={'btnB'} onClick={()=>deleteModaltoggle(item.id)}>O`chirish</button>

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
                                </tr>)
                            }
                            </tbody>

                        </table>

                        <button onClick={koproqvalyuta} className={'bn '}>Ko`proq ko`rish
                            <span className={'bn2'}> </span>
                        </button>

                    </div>
                </div>
            </div>
    )
}

export default connect((SoliqReducer,ValyutaReducer ,users), {
    saveSoliq,
    getValyuta,
    editSoliq,
    saveValyuta,
    deleteValyuta,
    editValyuta,
    getSoliq,
    deleteSoliq,
})(Soliq)
