import React from 'react'
import './addbusiness.css'

export default function AddBusiness() {
  return (
    <div className='containersSuperAdmin'>
            <div className="header123">
                <h4 className=''>Add new Business </h4>
            </div>  
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Biznes nomi (brend, do'kon nomi):*</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Websayt</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Tuzilgan sana:</h6>
                        <input type="date"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Pul birligi:</h6>
                        <select name="" id="" className='form-control'>
                            <option value="">Valyutani tanlang:</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Logo yuklash:</h6>
                        <input type="file"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Biznesning aloqa raqami:</h6>
                        <input type="number"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Mobil raqam:</h6>
                        <input type="number"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Davlat:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Viloyat:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Shaxar:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Index:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Hudud:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Vaqt zonasi:</h6>
                        <input type="datetime-local"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Qo'shimcha:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Ism:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Familya:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Login:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Email:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Parol:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Parolni qayta yozing:</h6>
                        <input type="text"  className='form-control'/>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Packages:</h6>
                        <select name="" id="" className='form-control'>
                            <option value="">Tanlang</option>
                            <option value="">Doimiy</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-4" >
                        <h6>Paid Via:</h6>
                        <select name="" id="" className='form-control'>
                            <option value="">Tanlang</option>
                            <option value="">Offline</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h6>Transaction Id::</h6>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success '>Saqlash</button>
                </div>

            </div>
        </div>
  )
}
