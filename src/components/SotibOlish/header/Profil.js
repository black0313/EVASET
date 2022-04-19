import './profil.css'
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import photoreducer ,{savephoto,getphoto} from "../../../reducer/photoreducer";
import users from "../../../reducer/users";
function Profil({image,savephoto,users,photoreducer,getphoto}) {

    const [viber,setviber] = useState({
        pic: {}
    })


    const [selectfile,setSelectfile] = useState([])

    function vib(e){
        const data = new FormData();
        data.append('file', e.target.files[0]);
        savephoto(data)
    }

    function saqla(){

    }

    useEffect(()=>{
        getphoto()
    },[])

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
            <div className="col-md-6">
                {
                    users.users?.photo?.id===undefined && photoreducer.photo?.id ===undefined ?  <img className={'img-fluid bg-danger'} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrDpSgHY2z-CJ_i1pQr42NUW531sx0yqOcQ&usqp=CAU`} alt="###"/>:
                       photoreducer.photo.id !==undefined ?   <img className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${photoreducer.photo?.id}`} alt="###"/>
                    :  <img className={'img-fluid bg-danger'} src={`http://localhost:8080/api/attachment/download/${users.users?.photo?.id}`} alt="###"/>

                }
            </div>

        </div>
        <div className="row">
            <label htmlFor={'profilRasm'}>
                <p className={'btn btn-primary'}>Add img</p>
            </label>
            <input type="file" className={'d-none'} value={vib.pic} id={'profilRasm'} name={'file[]'}  multiple={true} onChange={vib}/>
        </div>
        <div className="row mt-2">
            <div className="col-md-3"><button onClick={saqla} className={'btn btn-primary'}>Saqlash</button>
            </div>
            <div className="col-md-3">
                <div className="conic">
                </div>
            </div>
        </div>
    </div>
  )
}
export default connect((users,photoreducer),{savephoto,getphoto}) (Profil)