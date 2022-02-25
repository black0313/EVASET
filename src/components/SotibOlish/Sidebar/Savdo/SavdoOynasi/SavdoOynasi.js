import img from '../../../../../img/pause.svg'
import img2 from '../../../../../img/maximize-3.svg'
import img3 from '../../../../../img/calculator.svg'
import img4 from '../../../../../img/note.svg'
import img5 from '../../../../../img/clipboard-text.svg'
import img6 from '../../../../../img/backward-10-seconds.svg'
import img7 from '../../../../../img/people.svg'
import img8 from '../../../../../img/search-normal-1.svg'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import './savdoOynasi.css'
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../reducer/SavdoOynaReducer";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Calculator from "../../../header/Calculator/Calculator";

function SavdoOynasi({getSavdo,deleteSavdo,savdo,getMaxsulotRuyxati,MaxsulotlarRoyxariReducer,deleteMaxsulotRuyxati}){

    const [input,setInput] = useState(
        {
            baza:'',
            mahsulotnomi:'',
            barchabrandlar:''
        }
    )

    const [arr1,setarr1] = useState([
        {
            name: 'CR7',
            id:'',
            counter:0
        }
    ])

    const [active,setActive] = useState(false)
    const [active2,setActive2] = useState(false)
    const [active3,setActive3] = useState(false)
    const [openCalc,setOpenCalc] = useState(false)
    function openCalcul(){
        setOpenCalc(!openCalc)
    }

    function pushesh(name,id){
       arr1.push({name: name,id:id,counter:0})
        let a = [...arr1]
        setarr1(a)
        console.log('sss');
    }
    function deleteM(id){
        console.log(id);
        console.log(arr1);
        let a = arr1
        a.slice(id,1)
        setarr1(a)
        console.log(arr1);
    }
    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function mahsulotnomi(e){
        input.mahsulotnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function barchabrandlar(e){
        input.barchabrandlar = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getMaxsulotRuyxati()
    },[])

    function toggle(){
        setActive(!active)
    }
    function toggle2(){
        setActive2(!active2)
    }
    function toggle3(){
        setActive3(!active3)
    }

    function deleteMaxsulot(item){
        deleteMaxsulotRuyxati(item.id)
        console.log('Deleted');
    }

    const [count,setCounter] = useState(0)

    function setCount(id){
           arr1.map(item=>{
                if (item.id===id){
                    item.counter+=1
                }
            })
        let a =[...arr1]
        setarr1(a)
    }

    function sMinus(id){
        arr1.map(item=>{
            if (item.id === id){
                item.counter-=1
            }
        })
        let a = [...arr1]
        setarr1(a)
    }
    return(
        <div className={'row p-5 '} >

            <div className={'col-md-12'}>
                <div className="brendBox">
                    <label htmlFor={'brand'}>Barcha brandlar: </label>
                    <select name="" className={'form-control'} id={'brand'} value={input.barchabrandlar} onChange={barchabrandlar}>
                        <option value="#">Barcha brandlar</option>
                    </select>
                </div>

                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>NAME :</th>
                            <th>ICON :</th>
                            {/*<th>X :</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        MaxsulotlarRoyxariReducer.maxsulotlar.map(item=><tr key={item.id}>

                                <td className={'tdd'} onClick={()=>pushesh(item.name,item.id)}>{item.name}

                                </td>
                                <td>-</td>
                                {/*<td><button onClick={()=>deleteMaxsulot(item)} className={'btn btn-outline-danger'}>Delete</button></td>*/}

                        </tr>)
                    }

                    </tbody>
                </table>

            </div>

            <div className={'colorbackj ps-4 pe-4 mt-4'}>
                <div className="navBlock">
                    {/* <button className={'btn btn-outline-primary'}>Oxirgi savdolar</button> */}
                    <div className="navBox1">
                        <label htmlFor={'baza'}>BAZA : </label>
                            <select className="" value={input.baza} onChange={baza} name="" id="">
                                <option value="">Walk in-customer</option>
                                <option value="">Walk in-seller</option>
                            </select>
                    </div>
                    <div className="navBox2">
                        <img style={{cursor:'pointer'}} onClick={toggle} src={img} alt=""/>
                        <Modal isOpen={active} toggle={toggle}>
                            <ModalHeader>
                                USHLAB TURISH
                            </ModalHeader>
                            <ModalBody>
                                Manba Topilmadi !!!
                            </ModalBody>
                            <ModalFooter>
                                <button className={'btn btn-outline-primary'} onClick={toggle}>'Chiqish</button>
                            </ModalFooter>
                        </Modal>
                        {/*<img style={{cursor:'pointer'}} onClick={toggle2} src={img2} alt=""/>*/}
                        <img onClick={openCalcul} style={{cursor:'pointer'}} src={img3} alt=""/>



                        <img style={{cursor:'pointer'}} onClick={toggle2} src={img4} alt=""/>

                        <Modal isOpen={active2} toggle={toggle2}>
                            <ModalHeader>
                                Smenadagi xisobot
                            </ModalHeader>
                            <ModalBody>
                                Manba Topilmadi !!!
                            </ModalBody>
                            <ModalFooter>
                                <button className={'btn btn-outline-primary'} onClick={toggle2}>'Chiqish</button>
                            </ModalFooter>
                        </Modal>
                        <img style={{cursor:'pointer'}} onClick={toggle3} src={img5} alt=""/>
                        <Modal isOpen={active3} toggle={toggle3}>
                            <ModalHeader>
                                Currency
                            </ModalHeader>
                            <ModalBody>
                                Manba Topilmadi !!!
                            </ModalBody>
                            <ModalFooter>
                                <button className={'btn btn-outline-primary'} onClick={toggle3}>'Chiqish</button>
                            </ModalFooter>
                        </Modal>
                        <img src={img6} alt=""/>
                    </div>
                </div>
                <div className="block2">

                            <div className="mahsulotBox" style={{marginLeft:'60px'}}>
                                <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi} placeholder={'mahsulot nomini yozing'}/>
                                <img src={img8} alt="" style={{cursor:'pointer'}}/>
                            </div>
                </div>
                <div className="">
                                <div className="table-responsive">
                                    <table className={'table'}>
                                        <thead>
                                        <tr>
                                            <th>Mahsulot</th>
                                            <th className={'text-center'}>Miqdori</th>
                                            <th>Jami</th>
                                            <th>. . .</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            arr1.filter(val=>{
                                                if (input.mahsulotnomi===''){
                                                    return val
                                                }else if (val.name.toUpperCase().includes(input.mahsulotnomi.toUpperCase())){
                                                    return val
                                                }
                                            })
                                                .map(item=><tr key={item.id}>
                                                <td style={{marginLeft:'10px'}}>{item.name}</td>
                                                <td className={'d-flex justify-content-between'}>
                                                    <button onClick={()=>setCount(item.id)} className={'btn btn-outline-dark'}>+</button>
                                                    {item.counter}
                                                    <button onClick={()=>sMinus(item.id)} className={'btn btn-outline-dark'}>-</button>
                                                </td>
                                                <td> </td>
                                                <td>
                                                    <button onClick={()=>deleteM(item.id)} className={'btn btn-outline-dark'}>Delete</button>
                                                </td>
                                            </tr>)
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <div className={'bbb'}>
                                    {
                                        openCalc?<Calculator/>:''
                                    }
                                </div>
                                <div style={{marginTop:'100px'}} className={'d-flex justify-content-around'}>
                                    <h6>Mahsulot soni: {
                                        arr1.map(item=><tr key={item.id}>
                                            <td style={{fontSize:'18px'}}>{item.counter}</td>
                                        </tr>)
                                    }</h6>
                                    <h6>Jami:200</h6>
                                </div>
                                <hr/>
                                <div className={'chegirmaBox'}>
                                    <h6>Chegirma-</h6>
                                    <p>0.00</p>
                                    <p className={'d-flex'}>
                                        Soliq:
                                        <img src={img4} alt=""/>
                                        0.00
                                    </p>
                                    <p className={'d-flex'}>Yetkazib berish
                                        <img src={img4} alt=""/></p>
                                </div>
                </div>
                <div className="btnBox">
                    <button className={'btn btn-primary'}>Eslatma</button>
                    <button className={'btn btn-danger'}>Chegirma</button>
                    <button className={'btn btn-warning'}>Ushlab turish</button>
                    <button className={'btn btn-outline-primary'}>Kreditga sotish</button>
                    <button className={'btn btn-outline-warning'}>Turli to`lovli</button>
                    <button className={'btn btn-info'}>Plastik</button>
                    <button className={'btn btn-success'}>Naqd</button>
                    <button className={'btn btn-dark'}>UzCard</button>
                    <button className={'btn btn-warning'}>Humo</button>
                    <h6>Jami to`lov: 0</h6>
                    <button className={'btn btn-danger'}>Chiqish</button>
                </div>
            </div>
        </div>
    )
}
export default connect((MaxsulotlarRoyxariReducer,SavdoOynaReducer),{getSavdo,saveSavdo,editSavdo,deleteSavdo,getMaxsulotRuyxati,deleteMaxsulotRuyxati}) (SavdoOynasi)

// export default connect(({SavdoOynaReducer:{savdo}})=>({savdo}),{getSavdo,saveSavdo,editSavdo,deleteSavdo}) (SavdoOynasi)