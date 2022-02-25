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
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";

function SavdoOynasi({getSavdo,editSavdo,deleteSavdo,saveSavdo,savdo}){

    const [input,setInput] = useState(
        {
            baza:'',
            mahsulotnomi:'',
            barchabrandlar:''
        }
    )

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
        // getSavdo()
        getMaxsulotRuyxati()
    },[])


    const [count,setCount] = useState(0)

    return(
        <div className={'row p-5'} >
            <div className={'colorbackj ps-4 pe-4'}>
                <div className="navBlock">
                    {/* <button className={'btn btn-outline-primary'}>Oxirgi savdolar</button> */}
                    <div className="navBox1">
                        <label htmlFor={'baza'}>BAZA : </label>
                            <select className="" value={input.baza} onChange={baza} name="" id="">
                                <option value="#">Walk in-customer</option>
                                <option value="#">Walk in-seller</option>
                            </select>
                    </div>
                    <div className="navBox2">
                        <img src={img} alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                        <img src={img4} alt=""/>
                        <img src={img5} alt=""/>
                        <img src={img6} alt=""/>
                    </div>
                </div>
                <div className="block2">
                            <div className="brendBox">
                                <label htmlFor={'brand'}>Barcha brandlar: </label>
                                <select name="" className={''} id={'brand'} value={input.barchabrandlar} onChange={barchabrandlar}>
                                    <option value="#">Barcha brandlar</option>
                                </select>
                            </div>
                            <div className="mahsulotBox">
                                <input type="text" className={''} value={input.mahsulotnomi} onChange={mahsulotnomi} placeholder={'mahsulot nomini yozing'}/>
                                <img src={img8} alt="" style={{cursor:'pointer'}}/>
                            </div>
                </div>
                <div className="">
                                <div className="table-responsive">
                                    <table className={'table'}>
                                        <thead>
                                        <tr>
                                            <th>Mahsulot</th>
                                            <th>Miqdori</th>
                                            <th>Jami</th>
                                            <th>. . .</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            // MaxsulotlarRoyxariReducer.maxsulotruyxati.map(item=><tr key={item.id}>
                                            //     <td>{item.name}</td>
                                            // </tr>)

                                            // savdo.map(item=><tr key={item.id}>
                                            //     <td>{item.amountPaid}</td>
                                            // </tr>)
                                        }

                                        {/*<tr>*/}
                                        {/*    <td>Cardigan (Open style) sweater</td>*/}
                                        {/*    <td className={'d-flex  align-items-center p-3'}>*/}
                                        {/*        <button onClick={()=>setCount(count-1)} className={'btn btn-outline-primary'}>-</button>*/}
                                        {/*        {count}*/}
                                        {/*        <button onClick={()=>setCount(count+1)} className={'btn btn-outline-primary'}>+</button>*/}
                                        {/*    </td>*/}
                                        {/*    <td>1200000</td>*/}
                                        {/*    <td><button className={'btn btn-primary'}>Delete</button></td>*/}
                                        {/*</tr>*/}
                                        </tbody>
                                    </table>
                                </div>

                                <div style={{marginTop:'300px'}} className={'d-flex justify-content-around'}>
                                    <h6>Mahsulot soni: 5</h6>
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
export default connect((MaxsulotlarRoyxariReducer,SavdoOynaReducer),{getSavdo,saveSavdo,editSavdo,deleteSavdo}) (SavdoOynasi)

// export default connect(({SavdoOynaReducer:{savdo}})=>({savdo}),{getSavdo,saveSavdo,editSavdo,deleteSavdo}) (SavdoOynasi)