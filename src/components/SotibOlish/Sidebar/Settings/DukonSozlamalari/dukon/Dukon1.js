import {useEffect, useState} from 'react'
import './dukon1.css'
import {toast} from "react-toastify";

function Dukon1() {

    const [input,setInput] = useState(
        {
            dukonnomi:'',
            ochilgansana:'',
            savdodanfoiz:'',
            valyuta:'',
            valyutajoylashuvi:'',
            vaqtzonasi:'',
            legionyangilash:'',
            xisobotyil:'',
            savdolarusulari:'',
            otkazmamuddati:'',
            kunformat:'',
            vaqtformat:'',
        }
    )

    function dukonnomi(e){
        input.dukonnomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [fifovalue,setfifovalue] = useState(true)
    const [lifovalue,setlifovalue] = useState(false)

    function fifo(e){
        if (e.target.value ==='fifo'){
            setfifovalue(true)
            setlifovalue(false)
            console.log('fifo')
            }
        else{
            setfifovalue(false)
            setlifovalue(true)
            console.log('lifo')
        }

    }


    function ochilgansana(e){
        input.ochilgansana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdodanfoiz(e){
        input.savdodanfoiz = e.target.value
        let a = {...input}
        setInput(a)
    }

    function legionyangilash(e){
        input.legionyangilash = e.target.value
        let a = {...input}
        setInput(a)
    }

    function saqla(){

    }

    return (
        <div className="dukonCont">
             <h3 className='text-center pb-3'>Dukon sozlamalari</h3>
            <div className={'row mb-3'}>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Dukon nomi</label>
                    <input type="text" id={'nomi'} className={'form-control'} value={input.dukonnomi} onChange={dukonnomi}/>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'sana'}>Ochilgan sana</label>
                    <input type="date" id={'sana'} className={'form-control'} value={input.ochilgansana} onChange={ochilgansana}/>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Savdodan foyda(barcha)</label>
                    <input type="text" className={'form-control'} value={input.savdodanfoiz} onChange={savdodanfoiz}/>
                </div>
            </div>



            <div className={'row mb-3'}>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi3'}>Logoni yangilash</label>
                    <input type="file" id={'nomi3'} value={input.legionyangilash} onChange={legionyangilash} className={'form-control'}/>
                </div>

                <div className='col-4 col-sm-12 mb-3'>
                    <p>Savdo usuli tanlang</p>

                    <label htmlFor={'fifo'} className={'fifo'}>Fifo</label>
                    <input type="radio" style={{marginLeft:'15px'}} id={'fifo'} checked={fifovalue} name={'male'}  value={'fifo'} onChange={fifo}/>

                    <label htmlFor={'lifo'} className={'lifo'}>Lifo</label>
                    <input type="radio" style={{marginLeft:'15px'}} id={'lifo'} checked={lifovalue} name={'male'}  value={'lifo'} onChange={fifo}/>

                </div>

                <button className={'btn btn-primary'} onClick={saqla}>Saqlash</button>
            </div>
            
        </div>

    )
}

export default Dukon1