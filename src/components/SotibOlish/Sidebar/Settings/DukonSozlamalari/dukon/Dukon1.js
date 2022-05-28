import {useState} from 'react'
import './dukon1.css'

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
    function xisobotyil(e){
        input.xisobotyil = e.target.value
        let a = {...input}
        setInput(a)
    }
    function savdolarusulari(e){
        input.savdolarusulari = e.target.value
        let a = {...input}
        setInput(a)
    }
    function otkazmamuddati(e){
        input.otkazmamuddati = e.target.value
        let a = {...input}
        setInput(a)
    }
    function kunformat(e){
        input.kunformat = e.target.value
        let a = {...input}
        setInput(a)
    }
    function vaqtformat(e){
        input.vaqtformat = e.target.value
        let a = {...input}
        setInput(a)
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
                    <label htmlFor={'nomi'}>Savdolar usulari</label>
                    <select name="" id="" className={'form-control'} value={input.savdolarusulari} onChange={savdolarusulari}>
                        <option value="#">Fifo</option>

                    </select>
                </div>
            </div>

            <div className={'row mb-3'}>

                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Vaqt formati</label>
                    <select name="" id="" className={'form-control'} value={input.vaqtformat} onChange={vaqtformat}>
                        <option value="#">12 mb-3 soatlik</option>
                        <option value="#">24 soatlik</option>
                    </select>
                </div>
            </div>

            
        </div>

    )
}

export default Dukon1