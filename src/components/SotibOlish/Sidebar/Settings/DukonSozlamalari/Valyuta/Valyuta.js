import './Valyuta.css'
import {useState} from "react";


function Soliq(){

    const [input,setInput] = useState({
        valyutanomi:'',
        valyutakursi:'',
        vaqtzonasi:'',
    })

    function valyutanomi(e){
        input.valyutanomi = e.target.value
        let a = {...input}
        setInput(a)
    }

    function valyutakursi(e){
        input.valyutakursi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function vaqtzonasi(e){
        input.vaqtzonasi = e.target.value
        let a = {...input}
        setInput(a)
    }

    return(
        <div className="soliqCont">
            <div className="row">

                <hr/>
                <h2 className={'text-center'}>VALYUTA / USSD & UZS</h2>

                <div className={'row mb-3 mt-3'}>
                    <div className='col-4 col-sm-12 mb-3'>
                        <label htmlFor={'nomi'}>Valyuta nomi</label>
                        <input type="text" id={'nomi'} className={'form-control'} value={input.valyutanomi} onChange={valyutanomi}/>
                    </div>
                    <div className='col-4 col-sm-12 mb-3'>
                        <label htmlFor={'sana'}>Valyuta kursi</label>
                        <input type="number" className={'form-control'} value={input.valyutakursi} onChange={valyutakursi}/>
                    </div>
                    <div className='col-4 col-sm-12 mb-3'>
                        <label htmlFor={'nomi'}>Vaqt zonasi</label>
                        <select id="" className={'form-control'} value={input.vaqtzonasi} onChange={vaqtzonasi}>
                            <option value="">ASIA/Srednekolymsk</option>
                            <option value="">ASIA/Taipei</option>
                        </select>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Soliq