import './profil.css'
import {useState} from 'react'
import {connect} from "react-redux";
import photoreducer ,{savephoto} from "../../../reducer/photoreducer";
import users from "../../../reducer/users";
function Profil({image,savephoto}) {

    const [viber,setviber] = useState({
        pic: {}
    })


    const [selectfile,setSelectfile] = useState([])

    function vib(e){
        console.log(e.target.files[0])
        // setSelectfile([])
        // if(e.target.files){
        //     const filesArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
        //     setSelectfile((prev=>prev.concat(filesArray)))
        //     Array.from(e.target.files).map(
        //         (file)=>URL.revokeObjectURL(file)
        //     );
        // }
        viber.pic = e.target.files[0]
        let a = {...viber}
        setviber(a)
    }


    const renderPhotos = (source) => {
            return source.map((photo)=>{
                return <img src={photo} alt={''} key={photo} style={{width:"300px",height:"400px"}}/>;
            });
    }



    function saqla(){
            savephoto(
                viber.pic
            )
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
            <input type="file" value={vib.pic} id={'file'} name={'file[]'}  multiple={true} onChange={vib}/>
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
export default connect((users,photoreducer),{savephoto}) (Profil)