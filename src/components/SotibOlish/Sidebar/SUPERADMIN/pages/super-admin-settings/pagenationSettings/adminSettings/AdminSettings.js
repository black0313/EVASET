import React from 'react'
import './adminsettings.css'

export default function AdminSettings() {
    return (
        <div>
            <div className='ms-3 me-3'>
                <h5 className='mb-3 text-center'>Super Admin Settings</h5>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Biznes nomi (do'kon nomi):</h6>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Email:</h6>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Hudud:</h6>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Index:</h6>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Viloyat:</h6>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Shaxar:</h6>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Davlat:</h6>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h6>Min days for subscription expiry alert:</h6>
                        <input type="number" className='form-control' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-4 mt-4">
                        <label class='container d-flex align-items-center' style={{ cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '40px', height: '20px', cursor: 'pointer' }} />
                            Biznesga asoslangan foydalanuvchi nomini yoqing
                        </label>
                        <p className='mt-3'>Agar yoqilgan bo'lsa, foydalanuvchi nomiga biznes identifikatori qo'shiladi. Bu faqat yangi yaratilgan foydalanuvchilarga qo'llaniladi va mavjud emas.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className='btn btn-primary'>Saqlash</button>
                </div>
            </div>

        </div>
    )
}
