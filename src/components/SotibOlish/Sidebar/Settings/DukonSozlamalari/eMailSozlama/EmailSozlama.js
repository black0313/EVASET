import {useState} from 'react'
export default function EmailSozlama(){

    const [input,setInput] = useState(
        {

        }
    )

    return(
        <div className={'col-md-10'}>

            <div className="col-md-12 d-flex justify-content-between mt-4">
                <div className="col-md-4">
                    <label htmlFor={'mail'}>Mail dvijogi</label>
                    <select name="" id={'mail'} className={'form-control'}>
                        <option value="#">STMP</option>
                    </select>
                    <label htmlFor={'mail2'} className={'mt-3'}>User nomi</label>
                    <input type="text" className={'form-control'} placeholder={'mail'} id={'mail2'}/>
                    <label htmlFor={'mail3'} className={'mt-3'}>Yuborish nuqtasi</label>
                    <input type="text" className={'form-control '} id={'mail3'}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'host'}>Host</label>
                    <input type="text" id={'host'} className={'form-control'} placeholder={'host'}/>

                    <label htmlFor={'host2'} className={'mt-3'}>Parol</label>
                    <input type="text" id={'host2'} placeholder={'Parol'} className={'form-control'}/>

                    <label htmlFor={'host3'} className={'mt-3'}>Yuboruvchini nomi</label>
                    <input type="text" className={'form-control '} id={'host3'}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor={'port'}>Port</label>
                    <input type="text" className={'form-control'} id={'port'}/>
                    <label htmlFor={'port2'} className={'mt-3'}>Shifrlash</label>
                    <input type="text" className={'form-control'} placeholder={'ssl'} id={'port2'}/>
                </div>
            </div>

            <div className="col-md-10 mt-4">

                <button className={'btn btn-outline-success '} style={{marginLeft:'15px'}}>Xat yuborishni test qilib ko`rish</button>

            </div>
        </div>
    )
}