import React from 'react'
import './allbusenesses.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import Edit from '../../../../../../img/Edit.png'
import Delete from '../../../../../../img/Delete.png'
import { Link } from 'react-router-dom'

export default function AllBusenesses() {
    return (
        <div className="mt-2">
            <div className="rowStyleSuperAdmin">
                <div className="headerTextBox">
                    <h4 className='me-2'>All Businesses </h4>
                    <p>Manage all registered Businesses</p>
                </div>
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6 col-sm-12">
                        <h6>Packages:</h6>
                        <select name="" id="">
                            <option value="">all</option>
                            <option value="">jjj</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>Subscription Status:</h6>
                        <select name="" id="">
                            <option value="barcasi">Barchasi</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6>Status:</h6>
                        <select name="" id="">
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6>Last transaction date:</h6>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="sana">
                            <h6>No transactions since:</h6>
                            <select name="" id="">
                                <option value="">all</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowStyleSA2">
                <div className="qoshishBH">
                    <Link to={'/headerthird/superadmin/allbusenesses/addbusiness'}> <button className='btn btn-primary'>+Qo'shish</button></Link>
                </div>
                <div className="izlashBH">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                        </select>
                        <button><img src={CSV} alt="" /> Export CSV</button>
                        <button ><img src={Excel} alt="" /> Export Excel</button>
                        <button><img src={Print} alt="" /> Print</button>
                        <button><img src={Pdf} alt="" />Export PDF</button>
                        <button><img src={Data} alt="" />Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' />
                    </div>
                </div>
                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                    <table className='table  table-striped table-bordered mt-4'>
                        <thead>
                            <tr>
                                <th>Registered on</th>
                                <th>Business Name</th>
                                <th>Rasmiylashtirish</th>
                                <th>Email</th>
                                <th>Owner Number</th>
                                <th>Business contact numbers</th>
                                <th>Manzil</th>
                                <th>Status</th>
                                <th>Current Subscription</th>
                                <th>Muallif</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                                <td>h</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                </div>

            </div>
        </div>
    )
}
