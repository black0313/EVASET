import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './emailSettings.css'

export default function EmailSettings() {
    return (
        <div className='ms-3 me-3 containerEmail'>
            <h5 className='mb-3 text-center'>Email Settings</h5>

            <div className="row">
                <div className="col-sm-12 col-md-6  mb-4">
                    <h6>Mail Driver:</h6>
                    <select name="" id="" className='form-control' style={{ cursor: 'pointer' }}>
                        <option value="">Tanlang</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>Host:</h6>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>Port:</h6>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>Username:</h6>
                    <input type="text" className='form-control' />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>Password:</h6>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>Encryption:</h6>
                    <input type="number" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>From Address:</h6>
                    <input type="text" className='form-control' />
                </div>
                <div className="col-sm-12 col-md-6 mb-4">
                    <h6>From Name:</h6>
                    <input type="text" className='form-control' />
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-sm-12 col-md-12 mb-4 emailSetting-width">
                    <label className='container d-flex  label-text' style={{ cursor: 'pointer' }}>
                        <input type="checkbox" style={{ width: '40px', height: '20px' }} />
                        Allow businesses to use Superadmin email configuration
                    </label>
                </div>
                <div className="col-sm-12 col-md-12 mb-4 emailSetting-width">
                    <label  className='container d-flex label-text' style={{ cursor: 'pointer' }}>
                        <input type="checkbox" style={{ width: '40px', height: '20px' }} />
                        Enable new business registration email
                    </label>
                </div>
                <div className="col-sm-12 col-md-12 mb-4 emailSetting-width">
                    <label className='container d-flex label-text' style={{ cursor: 'pointer' }}>
                        <input type="checkbox" style={{ width: '40px', height: '20px' }} />
                        Enable new business registration email
                    </label>
                </div>
            </div>

            <hr className='mb-4' />

            <div className="row">
                <div className="col-sm-12 col-md-12 mb-4 emailSetting-width">
                    <label className='container d-flex label-text' style={{ cursor: 'pointer' }}>
                        <input type="checkbox" style={{ width: '40px', height: '20px' }} />
                        Enable welcome email to new business
                    </label>
                </div>
                <div className="col-md-12 col-sm-12 ">
                    <h5>Welcome email template:</h5>
                    <p>Mavjud teglar: business_name, owner_name</p>
                </div>
            </div>

            <div className="row mb-4 mt-4">
                <div className="col-md-12">
                    <p>Welcome email subject:</p>
                    <Editor />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
    )
}
