import './profil.css'
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import photoreducer ,{savephoto} from "../../../reducer/photoreducer";
import users from "../../../reducer/users";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

function Profil({image,savephoto,users,photoreducer}) {

    const {t} = useTranslation()
    const [viber,setviber] = useState({
        pic: {}
    })
    const history = useHistory()

    function vib(e){
        const data = new FormData();
        data.append('file', e.target.files[0]);
        savephoto(data)
    }

    function saqla(){

    }

    useEffect(()=>{

    },[])

    let user = JSON.parse(localStorage.getItem('user'))

    function logOut(){
        localStorage.removeItem('user',)
        localStorage.removeItem('tokenname',)
        history.push('/login')
    }

  return (
    <div className='containerProfil mt-4 mb-4'>
        <div className="row">
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">{t('Welcome.12')}</label>
                <input type="text" className='form-control' placeholder='Amaldagi parolni kiriting...' />
            </div>
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">{t('Welcome.13')}</label>
                <input type="text" className='form-control' placeholder='Yangi parolni kiriting...' />
            </div>
            <div className="col-4 col-sm-12 mb-3">
                <label htmlFor="n1">{t('Welcome.13')}</label>
                <input type="text" className='form-control' placeholder='Yangi parolni qayta kiriting...' />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                {
                    users.users?.photo?.id===undefined && photoreducer.photo?.id ===undefined ?  <img className={'img-fluid bg-danger'} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrDpSgHY2z-CJ_i1pQr42NUW531sx0yqOcQ&usqp=CAU`} alt="###"/>:
                       photoreducer.photo.id !==undefined ?   <img className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${photoreducer.photo?.id}`} alt="###"/>
                    :  <img className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${users.users?.photo?.id}`} alt="###"/>

                }
            </div>

        </div>
        <div className="row d-flex mt-2">
            <label htmlFor={'profilRasm'}>
                <p className={'btn form-control btn-primary'}>{t('Welcome.14')}</p>
            </label>
            <input type="file" className={'d-none form-control mt-2'} value={vib.pic} id={'profilRasm'} name={'file[]'}  multiple={true} onChange={vib}/>
            <button onClick={saqla} className={'btn btn-primary'}>{t('Buttons.6')}</button>
            <button onClick={logOut} className={'btn btn-danger mt-3'}>{t('Buttons.7')}</button>
        </div>
    </div>
  )
}
export default connect((users,photoreducer),{savephoto}) (Profil)