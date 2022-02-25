import './aloqa.css'
import {useState} from 'react'

function Aloqa(){

    const [input,setInput] = useState(
        {
            lang:''
        }
    )
    function lang(e){
        input.lang = e.target.value
    }

    return(
        <div className={'aloqaCont'}>
             <h3 className='text-center pb-3'>Aloqa sozlamalari</h3>
            <label htmlFor={'lang'}>Standart kridit chegarasi</label>
            <input value={input.lang} onChange={lang} type="text" className={'form-control'} id={'lang'}/>
        </div>
    )
}
export default Aloqa