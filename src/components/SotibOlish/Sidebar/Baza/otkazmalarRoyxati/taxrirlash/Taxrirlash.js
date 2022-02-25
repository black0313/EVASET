import {useEffect, useState} from 'react'
import {deleteOtkazma, editOtkazma, getOtkazma, saveOtkazma} from "../../reducer/OtkazmaReducer";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import './taxrirlashh.css'
function Taxrirlash({saveOtkazma,editOtkazma,getOtkazma}){

    const [input,setInput] = useState(
        {
            sana:'',
            qisqaeslatmasana:'',
            status:'',
            bazadan:'',
            bazaga:'',
            izlashproduct:'',
            yulhaq:'',
            qisqaeslatma:''
        }
    )

    function sana(e){
        input.sana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqaeslatmasana(e){
        input.qisqaeslatmasana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function status(e){
        input.status = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bazadan(e){
        input.bazadan = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bazaga(e){
        input.bazaga = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlashproduct(e){
        input.izlashproduct = e.target.value
        let a = {...input}
        setInput(a)
    }
    function yulhaqi(e){
        input.yulhaq = e.target.value
        let a = {...input}
        setInput(a)
    }
    function qisqaeslatma(e){
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }

    function saqla(){
        saveOtkazma(
            {
                shippedBranchId:1,
                receivedBranchId:1,
                exchangeDate:input.sana,
                description:'ddd',
                exchangeStatusId:1,
                exchangeProductDTOS:[
                    {
                        exchangeProductQuantity:1,
                        productExchangeId:1
                    }
                ],
                businessId:1
            }
        )
        console.log('ishladiii');
    }


    return(
        <div className='tBox'>
        <div className={'row p-3'}>
                <h4 className='text-center'>Yangi o`tkazma</h4>
            <div className="col-12 p-4 pt-5">
                <div className="row">
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'sana'}>Sana</label>
                        <input type="date" value={input.sana} onChange={sana} id={'sana'} className={'form-control'}/>
                    </div>
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'qisqa'}>Qisqa eslatma</label>
                        <input type="date" className={'form-control'} value={input.qisqaeslatmasana} onChange={qisqaeslatmasana} id={'qisqa'}/>
                    </div>
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'status'}>Status</label>
                        <select name="" id={'qisqa'} className={'form-control'} value={input.status} onChange={status}>
                            <option value="#">Tanlash</option>
                            <option value="#">Kutilmoqda</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-sm-12">
                        <label htmlFor={'bazadan'}>Bazadan(amaldagi baza)</label>
                        <select name="" id={'bazadan'} value={input.bazadan} onChange={bazadan} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-12">
                        <label htmlFor={'bazadan'}>Bazaga(o`tkazilgan baza)</label>
                        <select name="" id={'bazadan'} value={input.bazaga} onChange={bazaga} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                <div className="col-6 col-sm-12 mt-5">
                        <label htmlFor="">Mahsulot izlash</label>
                        <input type="text" className={'form-control'} value={input.izlashproduct} onChange={izlashproduct} placeholder={'izlash product'}/>
                </div>
                <div className="col-6 col-sm-12 mt-5">
                    <label htmlFor={'yul'}>Yul haqi:</label>
                    <input type="text" value={input.yulhaq} onChange={yulhaqi} className={'form-control'} id={'yul'}/>
                </div>

                <div className="col-12">
                   
                    <label htmlFor={'yul2'} className={'mt-3'}>Qisqa eslatma:</label>
                    <textarea className={'form-control'} value={input.qisqaeslatma} onChange={qisqaeslatma} name="" id="" cols="30" rows="3">

                    </textarea>
                    <Link to={'/headerthird/utkazmaRuyxati'}><button className={'btn mt-2 btn-outline-primary'} onClick={saqla}>Saqlash</button></Link>

                </div>
                </div>
            </div>
        </div>
        </div>
    )
        }

export default connect(({OtkazmaReducer: {otkazmalar}}) => ({otkazmalar}), {
    getOtkazma,
    saveOtkazma,
    editOtkazma,
    deleteOtkazma
})(Taxrirlash)
