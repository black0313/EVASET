import {useEffect, useState} from 'react'
import OtkazmaReducer, {deleteOtkazma, editOtkazma, getOtkazma, saveOtkazma} from "../../reducer/OtkazmaReducer";
import {Link} from 'react-router-dom'
import users from "../../../../../../reducer/users";
import {connect} from "react-redux";
import './taxrirlashh.css'
import {useTranslation} from "react-i18next";

function Taxrirlash({saveOtkazma,editOtkazma,getOtkazma,match,users,OtkazmaReducer}){

    const {t} = useTranslation()
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


    function editO(){
        if (match.params.id !==undefined){
            getOtkazma()
        }
       OtkazmaReducer.otkazmalar.map(item=>{
            if (item.id=== match.params.id){
                input.sana = item.exchangeDate
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla(){
        console.log(match.params);
        if (match.params.id !== undefined){
            editOtkazma({
                    shippedBranchId:1,
                    receivedBranchId:1,
                    exchangeDate:input.sana,
                    description:'',
                    exchangeStatusId:1,
                    exchangeProductDTOS:[
                        {
                            exchangeProductQuantity:1,
                            productExchangeId:1
                        }
                    ],
                    businessId:1
                },console.log('edit')
            )
        }
        else {
            saveOtkazma(
                {
                    shippedBranchId:1,
                    receivedBranchId:1,
                    exchangeDate:input.sana,
                    description:'elsa',
                    exchangeStatusId:1,
                    exchangeProductDTOS:[
                        {
                            exchangeProductQuantity:1,
                            productExchangeId:1
                        }
                    ],
                    businessId:1
                },
                console.log('asdasdasd')
            )
        }
        console.log('ishladiii');
    }


    return(
        <div className='tBox'>
        <div className={'row p-3'}>
                <h4 className='text-center'>{t('BaseList.5')}</h4>
            <div className="col-12 p-4 pt-5">
                <div className="row">
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'sana'}>{t('Trade.4')}</label>
                        <input type="date" value={input.sana} onChange={sana} id={'sana'} className={'form-control'}/>
                    </div>
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'qisqa'}>{t('Buttons.17')}</label>
                        <input type="date" className={'form-control'} value={input.qisqaeslatmasana} onChange={qisqaeslatmasana} id={'qisqa'}/>
                    </div>
                    <div className="col-4 mb-4 col-sm-12">
                        <label htmlFor={'status'}>{t('Trade.9')}</label>
                        <select name="" id={'qisqa'} className={'form-control'} value={input.status} onChange={status}>
                            <option value="#">Tanlash</option>
                            <option value="#">Kutilmoqda</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-sm-12">
                        <label htmlFor={'bazadan'}>{t('BaseList.6')}</label>
                        <select name="" id={'bazadan'} value={input.bazadan} onChange={bazadan} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-12">
                        <label htmlFor={'bazadan'}>{t('BaseList.3')}</label>
                        <select name="" id={'bazadan'} value={input.bazaga} onChange={bazaga} className={'form-control'}>
                            <option value="#">Shifer Zavod</option>
                            <option value="#">Instrumentlar</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                <div className="col-6 col-sm-12 mt-5">
                        <label htmlFor="">{t('BaseList.7')}</label>
                        <input type="text" className={'form-control'} value={input.izlashproduct} onChange={izlashproduct} placeholder={'izlash product'}/>
                </div>
                <div className="col-6 col-sm-12 mt-5">
                    <label htmlFor={'yul'}>{t('BaseList.4')}:</label>
                    <input type="text" value={input.yulhaq} onChange={yulhaqi} className={'form-control'} id={'yul'}/>
                </div>

                <div className="col-12">
                   
                    <label htmlFor={'yul2'} className={'mt-3'}>{t('Buttons.17')}:</label>
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

export default connect((OtkazmaReducer,users), {
    getOtkazma,
    saveOtkazma,
    editOtkazma,
    deleteOtkazma
})(Taxrirlash)
