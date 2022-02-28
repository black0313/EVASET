import "./maxsulotlarRoyxati.css"
import {Link, Switch, Route, useHistory} from "react-router-dom"
import BarchaMaxsulotlar from "../../Maxsulotlar/MahsulotlarRuyxati/barchaMaxsulotlar/BarchaMaxsulotlar"
import QoldiqlarXisoboti from "../../Maxsulotlar/MahsulotlarRuyxati/qoldiqlarXisoboti/QoldiqlarXisoboti"
import React from "react";
import {connect} from 'react-redux'
import {useEffect,useState} from 'react'
import users from "../../../../../reducer/users";
import MaxsulotlarRoyxariReducer,{getMaxsulotRuyxati,saveMaxsulotRuyxati,editMaxsulotRuyxati,deleteMaxsulotRuyxati,getCategory,getMaxsulotRuyxati3,getMaxsulotRuyxatiBOLIM,getMaxsulotRuyxatiMeasure} from '../reducer/MaxsulotlarRoyxariReducer'
import FirmaReducer,{getFirma} from "../reducer/FirmaReducer";
import kgreducer,{getkg} from "../../../../../reducer/kgreducer";
import BolimReducer,{getBolim} from "../reducer/BolimReducer";
function MaxsulotlarRoyxati({getBolim,BolimReducer, getMaxsulotRuyxati,saveMaxsulotRuyxati,maxsulotruyxati,getCategory,users,getFirma,FirmaReducer,getMaxsulotRuyxati3,getMaxsulotRuyxatiBOLIM,getkg,kgreducer,getMaxsulotRuyxatiMeasure}) {



    const [input,setInput] = useState(
        {
            maxsulotturi:'',
            soliq:'',
            bolim:'',
            firma:'',
            ulcov:'',
            baza:'',
            sotvemas:'',
        }
    )

    function changemaxsulotturi(e){
        input.maxsulotturi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changesoliq(e){
        input.soliq = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changebolim(e){
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
        if (input.bolim !== 'barchasi'){
            getMaxsulotRuyxatiBOLIM(input.bolim)
        }
        else{
            getMaxsulotRuyxati(users.businessId)

        }
    }
    function changefirma(e){
        input.firma = e.target.value
        let a = {...input}
        setInput(a)
        if (input.firma !== 'barchasi'){
            getMaxsulotRuyxati3(input.firma)
        }
        else{
            getMaxsulotRuyxati(users.businessId)

        }
    }
    function changeulcov(e){
        input.ulcov = e.target.value
        let a = {...input}
        setInput(a)
        if (input.ulcov !== 'barchasi'){
            getMaxsulotRuyxatiMeasure(input.ulcov)
        }
        else{
            getMaxsulotRuyxati(users.businessId)

        }
    }
    function changebaza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function changesotuvemas(e){
        input.sotvemas = e.target.value
        let a = {...input}
        setInput(a)
    }
    const history = useHistory()
    useEffect(()=>{
        getMaxsulotRuyxati(users.businessId)
        getFirma(users.businessId)
        getkg(users.businessId)
        getBolim(users.businessId)
        history.push('/headerthird/mahsulotRuyxati/barcaMahsulot')
    },[])


       return (
              <div className="col-md-12 mt-4 ">
                            <div className="textHeaderMax">
                                <h2>Maxsulotlar</h2>
                                <p className="ms-2">Maxsulotlarni boshqarish</p>
                            </div>
                            <div className="rowStyleMax colorback">
                                   <div className="qoshish">
                                          <h5>Filtirlash</h5>
                                   </div>
                                        <div className="block">
                                            <div className="box">
                                                    <div className="minBox">
                                                        <h6>Maxsulot turi:</h6>
                                                        <select value={input.maxsulotturi} onChange={changemaxsulotturi} name="" id="">
                                                            <option value="">Barchasi</option>
                                                        </select>
                                                    </div>
                                                    <div className="minBox">
                                                        <h6>Bo'lim:</h6>
                                                        <select value={input.bolim} onChange={changebolim} name="" id="">
                                                            <option value="barchasi">Barchasi</option>
                                                            {
                                                                BolimReducer.bolimlar.map(item=> <option
                                                                    value={item.id}>{item.name}</option>)
                                                            }
                                                        </select>
                                                    </div>                                            
                                            </div>
                                            <div className="box">
                                                <div className="minBox">
                                                <h6>O'lchov birligi:</h6>
                                                    <select name="" id="" value={input.ulcov} onChange={changeulcov}>
                                                       <option value="barchasi">Barchasi</option>
                                                        {
                                                            kgreducer.kg.map(item=> <option value={item.id}>{item.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="minBox">
                                                    <h6>Soliq:</h6>
                                                    <select name="" id="" onChange={changesoliq} value={input.soliq}>
                                                        <option value="">Barchasi</option>
                                                   </select>
                                                </div>                                                
                                            </div>
                                            <div className="box">
                                                <div className="minBox">
                                                    <h6>Firma:</h6>
                                                    <select name="" id="" onChange={changefirma} value={input.firma}>
                                                        <option value={'barchasi'}>Barchasi</option>
                                                        {
                                                            FirmaReducer.firmalar.map(item=> <option value={item.id}>{item.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="minBox">
                                                    <h6>Baza:</h6>
                                                    <select name="" id="" onChange={changebaza} value={input.baza}>
                                                        <option value="">Barchasi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="minBox">
                                                    <div className="chescbox">
                                                        <input type="checkbox" onChange={changesotuvemas} checked={input.sotvemas}  id={'d'}/>
                                                            <label htmlFor={'d'}><h6>Sotuvda emas</h6></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   <hr />
                                   <div className="bynBarchMax">
                                          <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/'}><button className="btn btn-success mb-2 me-2">Barcha maxsulotlar</button></Link>
                                          <Link to={'/headerthird/mahsulotRuyxati/qoldiqXisobot'}><button className="btn btn-primary mb-2">Qoldiqlar xisoboti</button></Link>
                                   </div>
                                <Route path={'/headerthird/mahsulotRuyxati/barcaMahsulot/'} component={BarchaMaxsulotlar}/>
                                <Route path={'/headerthird/mahsulotRuyxati/qoldiqXisobot'} component={QoldiqlarXisoboti}/>
                            </div>
                     </div>
       )
}
export default connect((MaxsulotlarRoyxariReducer,users,FirmaReducer,kgreducer,BolimReducer),{getBolim,getkg,getFirma,getMaxsulotRuyxati,saveMaxsulotRuyxati,editMaxsulotRuyxati,deleteMaxsulotRuyxati,getCategory,getMaxsulotRuyxati3,getMaxsulotRuyxatiBOLIM,getMaxsulotRuyxatiMeasure})  (MaxsulotlarRoyxati)