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
            lang1_name:'',
            lang2_name:'',
            lang1:'',
            lang2:'',
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
    function valyuta(e){
        input.valyuta = e.target.value
        let a = {...input}
        setInput(a)
    }
    function valyutajoylashuvi(e){
        input.valyutajoylashuvi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function vaqtzonasi(e){
        input.vaqtzonasi = e.target.value
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
    function lang1_name(e){
        input.lang1_name = e.target.value
        let a = {...input}
        setInput(a)
    }
    function lang2_name(e){
        input.lang2_name = e.target.value
        let a = {...input}
        setInput(a)
    }
    function lang1(e){
        input.lang1 = e.target.value
        let a = {...input}
        setInput(a)
    }
    function lang2(e){
        input.lang2 = e.target.value
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

            <div className={'row mb-3 '}>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Valyuta</label>
                    <input type="text" id={'nomi'} className={'form-control'} value={input.valyuta} onChange={valyuta}/>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'sana'}>Valyuta joylashuvi</label>
                    <select name="" id="" className={'form-control'} value={input.valyutajoylashuvi} onChange={valyutajoylashuvi}>
                        <option value="#">Narxdan chapga</option>
                        <option value="#">Narxdan o`nga</option>
                    </select>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Vaqt zonasi</label>
                    <select name="" id="" className={'form-control'} value={input.vaqtzonasi} onChange={vaqtzonasi}>
                        <option value="#">ASIA/Srednekolymsk</option>
                        <option value="#">ASIA/Taipei</option>
                    </select>
                </div>
            </div>

            <div className={'row mb-3'}>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi3'}>Logoni yangilash</label>
                    <input type="file" id={'nomi3'} value={input.legionyangilash} onChange={legionyangilash} className={'form-control'}/>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'sana'}>Xisobot yil boshlanadigan oy</label>
                    <select name="" id="" className={'form-control'} value={input.xisobotyil} onChange={xisobotyil}>
                        <option value="#">Yanvar</option>
                        <option value="#">Fevral</option>
                        <option value="#">Mart</option>
                        <option value="#">Aprel</option>
                        <option value="#">May</option>
                        <option value="#">Iyun</option>
                        <option value="#">Iyul</option>
                        <option value="#">Avgust</option>
                        <option value="#">Sentabr</option>
                        <option value="#">Oktabr</option>
                        <option value="#">Noyabr</option>
                        <option value="#">Dekabr</option>
                    </select>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Savdolar usulari</label>
                    <select name="" id="" className={'form-control'} value={input.savdolarusulari} onChange={savdolarusulari}>
                        <option value="#">Fifo</option>
                        <option value="#">ASIA/Taipei</option>
                        <option value="#">ASIA/Tashkent</option>
                    </select>
                </div>
            </div>

            <div className={'row mb-3'}>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi5'}>O`tkazmalar muddati</label>
                    <input type="text" id={'nomi5'} className={'form-control'} value={input.otkazmamuddati} onChange={otkazmamuddati}/>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'sana'}>Kun formati</label>
                    <select name="" id="" className={'form-control'} value={input.kunformat} onChange={kunformat}>
                        <option value="#">mm/dd/yyyy</option>
                        <option value="#">mm/yyyy/dd</option>
                        <option value="#">yyyy/dd/mm</option>
                    </select>
                </div>
                <div className='col-4 col-sm-12 mb-3'>
                    <label htmlFor={'nomi'}>Vaqt formati</label>
                    <select name="" id="" className={'form-control'} value={input.vaqtformat} onChange={vaqtformat}>
                        <option value="#">12 mb-3 soatlik</option>
                        <option value="#">24 soatlik</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-3 col-sm-12 mb-3'>
                    <label htmlFor={'l1'}>code_1_name:</label>
                    <input type="text" id={'l1'} className={'form-control'} value={input.lang1_name} onChange={lang1_name}/>
                </div>
                <div className='col-3 col-sm-12 mb-3'>
                    <label htmlFor={'l2'}>code_1:</label>
                    <input type="text" id={'l2'} onChange={lang1} value={input.lang1} className={'form-control'}/>
                </div>
                <div className='col-3 col-sm-12 mb-3'>
                    <label htmlFor={'l3'}>name:</label>
                    <input type="text" id={'l3'} className={'form-control'} onChange={lang2_name} value={input.lang2_name}/>
                </div>
                <div className='col-3 col-sm-12 mb-3'>
                    <label htmlFor={'l4'}>code_2:</label>
                    <input type="text" id={'l4'} className={'form-control'} value={input.lang2}/>
                </div>
            </div>
            
        </div>

    )
}

export default Dukon1