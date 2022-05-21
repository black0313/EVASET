import React from 'react'
import './packagesubscription.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import Edit from '../../../../../../img/Edit.png'
import Delete from '../../../../../../img/Delete.png'
import { Link } from 'react-router-dom'

export default function PackageSubscripton() {
  return (

    <div className="rowStylePageS">
               
                <div className="izlashPageS">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                        </select>
                        <button><img src={CSV} alt="" /> Export CSV</button>
                        <button><img src={Excel} alt="" /> Export Excel</button>
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
                                <th>Business Name</th>
                                <th>Package Name</th>
                                <th>Status</th>
                                <th>Start Date</th>
                                <th>Trial End Date</th>
                                <th>End Date</th>
                                <th>Price</th>
                                <th>Paid Via</th>
                                <th>Transaction Id</th>
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
                                <td>
                                <button className='btn btn-success'>Status</button>
                                <button className='btn btn-primary'>Taxrirlash</button>
                                  
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
                </div>

            </div>
  )
}
