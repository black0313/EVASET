import React from 'react'
import './packageadd.css'

export default function PackageAdd() {
    return (
        <div className='containerStyle'>
            <div className="textBlock ">
                <h4 className='me-2'>Packages </h4>
                <p>Add New package</p>
            </div>
            <div className='container mt-3 styleBlock'>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Nomi:</h6>
                        <input type="text" className='form-control mb-4' />
                    </div>
                    <div className="col-md-6">
                        <h6>Package Description:</h6>
                        <input type="text" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Number of Locations:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                    <div className="col-md-6">
                        <h6>Number of active users:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Number of products:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                    <div className="col-md-6">
                        <h6>Number of Invoices:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Price Interval:</h6>
                        <select name="" id="" className='form-control mb-4'>
                            <option value="">Tanlang</option>
                            <option value="">all</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Interval:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Trial Days:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                    <div className="col-md-6">
                        <h6>Price:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Sort Order:</h6>
                        <input type="number" className='form-control mb-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label class="container d-flex">
                            <input type="checkbox" className='checkboxStyle' />
                            Private Superadmin only
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label class="container d-flex">
                            <input type="checkbox" className='checkboxStyle' />
                            One time only subscription
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label class="container d-flex">
                            <input type="checkbox" className='checkboxStyle' />
                            Enable custom subscription link

                        </label>
                    </div>
                    <div className="col-md-6">
                        <label class="container d-flex">
                            <input type="checkbox" className='checkboxStyle' />
                            Activate
                        </label>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
    )
}
