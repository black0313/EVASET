import './profil.css'
import {useState} from 'react'
function Profil({image,params,match}) {

    const [viber,setviber] = useState({
        pic: ''
    })
    const {imageHander} = match.params
    function vib(e){
        viber.pic = e.target.value
        let a = {...viber}
        setviber(a)
    }

  return (
    <div className='containerProfil mt-4 mb-4'>
        <div className="row">
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">Amaldagi parol</label>
                <input type="text" className='form-control' placeholder='Amaldagi parolni kiriting...' />
            </div>
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">Yangi parol</label>
                <input type="text" className='form-control' placeholder='Yangi parolni kiriting...' />
            </div>
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">Yangi parol</label>
                <input type="text" className='form-control' placeholder='Yangi parolni qayta kiriting...' />
            </div>
        </div>
        <div className="row">
            <input type="file" value={vib.pic} onChange={vib} onClick={imageHander}/>
        </div>
    </div>
  )
}
export default Profil