import './soliq.css'
import {useState} from "react";
import {Link} from "react-router-dom";


function Soliq(){

    const [input,setInput] = useState({
        valyutanomi:'',
        valyutakursi:'',
        vaqtzonasi:'',
        soliqnomi:'',
        soliqfoiz:'',
        soliqraqam:'',
    })


    function soliqfoiz(e){
        input.soliqfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function soliqnomi(e){
        input.soliqnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    return(
            <div className="soliqCont">
                    <h3 className='text-center pb-3'>Soliq sozlamalari</h3>
                <div className="row">

                    <div className={'d-flex'}>
                        <Link to={'/headerthird/dukonSozlama/2/soliq'}><button className={'btn btn-outline-danger'}>Soliq</button></Link>
                        <Link to={'/headerthird/dukonSozlama/2/valyuta'}><button className={'btn btn-outline-warning'} style={{marginLeft:'10px'}}>Valyuta</button></Link>
                    </div>

                    <div className='col-6 mb-3 col-sm-12 mt-2'>
                        <label htmlFor={'soliqnomi'}>Soliq nomi</label>
                        <input type="text" value={input.soliqnomi} onChange={soliqnomi} className={'form-control'} id={'soliqnomi'}/>
                    </div>

                    <div className='col-6 mb-3 col-sm-12 mt-2'>
                        <label htmlFor={'soliqnomi3'} placeholder={'Gst / Vat / Other'}>Soliq foiz</label>
                        <input type="number" className={'form-control'} id={'soliqnomi3'} value={input.soliqfoiz} onChange={soliqfoiz}/>
                    </div>
                </div>

                <div className="row">
                    <div className={'col-4 offset-4 mb-3 col-sm-12 d-flex justify-content-between'}>
                        <input style={{width:'20px',height:'20px'}} type="checkbox" id={'sot'} className='check'/>
                        <label  className='d-block ' style={{cursor:'pointer'}} htmlFor={'sot'}>Sotib va sotishda ichki soliq</label>
                    </div>
                    <br/>
<hr/>

                </div>

            </div>
    )
}
export default Soliq