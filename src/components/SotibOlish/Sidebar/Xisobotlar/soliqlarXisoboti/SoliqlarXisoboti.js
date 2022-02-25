import { Link,Switch,Route } from 'react-router-dom'
import HariddadiSoliqlar from './hariddagiSoliqlar/HariddadiSoliqlar'
import SotishdagiSoliqlar from './sotishdagiSoliqlar/SotishdagiSoliqlar'
import BoshqaSoliqlar from './boshqaSoliqlar/BoshqaSoliqlar'
import './soliqlarXisoboti.css'
import {connect} from 'react-redux'
import {getSoliqxisobot,saveSoliqxisobot,editSoliqxisobot,deleteSoliqxisobot} from '../reducer/SoliqlarxisobotiReducer'
import {useEffect,useState} from 'react'
function SoliqlarXisoboti() {

    const [input,setInput] = useState(
        {
            baza:'',
            aniqsanabelgilash:''
        }
    )

    function baza(e){
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function aniqsanabelgilash(e){
        input.aniqsanabelgilash = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getSoliqxisobot()
    })

    return (
        <div className="col-md-12 mt-4 mb-4">
        <div className="textHeaderSoliq">
               <h2>Soliqlar xisoboti</h2>
               <p>Tanlangan sana oralig'idagi soliq tafsilotlari</p>
        </div>
        <div className="rowStyleSoliq">
               <div className="qoshish">
                      <h5>Filtirlash</h5>
               </div>
               <div className="row">
                      <div className="col-6 col-sm-12">
                             <h6>Baza:</h6>
                             <select name="" id="" value={input.baza} onChange={baza}>
                                    <option value="">Barchasi</option>
                                    <option value=""></option>
                             </select>
                      </div>
                      <div className="col-6 col-sm-12">
                             <h6>Aniq sanani belgilash:</h6>
                             <select name="" id="" value={input.aniqsanabelgilash} onChange={aniqsanabelgilash}>
                                    <option value="">Bugun</option>
                                    <option value="">Oxirgi bir xafta</option>
                                    <option value="">Oxirgi bir oy</option>
                                    <option value="">Istalgan sanani tanlash</option>
                             </select>
                      </div>
               </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="rowStyleSSS">
                    <div className="cardlar">
                        <p>JAMI XISOBOTLAR <br /> (kirim-chiqim xarajatlar):</p>
                        <h3>240 000 000 so'm</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="rowStyleSSS">
                <Link to={'/headerthird/soliqlarXisoboti/harid'}><button className='btn btn-success '>Hariddagi soliqlar</button></Link>
                <Link to={'/headerthird/soliqlarXisoboti/sotish'}><button className='btn btn-primary m-2'>Sotishdagi soliqlar</button></Link>
                <Link to={'/headerthird/soliqlarXisoboti/boshqa'}><button className='btn btn-danger'>Boshqa soliqlar </button></Link>
               
                <Switch>
                    <Route path={'/headerthird/soliqlarXisoboti/harid'} component={HariddadiSoliqlar}/>
                    <Route path={'/headerthird/soliqlarXisoboti/sotish'} component={SotishdagiSoliqlar}/>
                    <Route path={'/headerthird/soliqlarXisoboti/boshqa'} component={BoshqaSoliqlar}/>
                </Switch>
        </div>
 </div>
    )
}
export default connect(({XarajatXisobotReducer: {xarajatxisobot}}) => ({xarajatxisobot}), {
    getSoliqxisobot,
    saveSoliqxisobot,
    editSoliqxisobot,
    deleteSoliqxisobot
})(SoliqlarXisoboti)
