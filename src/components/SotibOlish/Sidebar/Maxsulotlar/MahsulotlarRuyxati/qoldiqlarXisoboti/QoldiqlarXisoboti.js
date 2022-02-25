import './qoldiqlarXisoboti.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
// import Edit from '../../img/Edit.png'
// import Korish from '../../img/Korish.png'
// import Delete from '../../img/Delete.png'


export default function QoldiqlarXisoboti() {
       return (
              <div>
                     <div className="col-md-12 ">
                            <div className="rowStyleQH">
                                   <div className="qoshish">
                                          <h5>Qoldiqlar xisoboti</h5>
                                   </div>
                                   <div className="izlashQH">
                                          <div className="izlashBox1">
                                                 <p>Ko'rsatildi</p>
                                                 <select name="" id="">
                                                        <option value="">25</option>
                                                        <option value="">50</option>
                                                        <option value="">100</option>
                                                        <option value="">200</option>
                                                        <option value="">500</option>
                                                        <option value="">1,000</option>
                                                        <option value="">All</option>
                                                 </select>
                                                 <button> <img src={CSV} alt="" /> Export CSV</button>
                                                 <button><img src={Excel} alt="" /> Export Excel</button>
                                                 <button><img src={Print} alt="" /> Print</button>
                                                 <button><img src={Pdf} alt="" />Export PDF</button>
                                                 <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>
                                          </div>
                                          <div className="izlashBox2">
                                                 <input type="text" placeholder='Izlash...'/>
                                          </div>
                                   </div>
                                   <div className="table-responsive mb-4">
                                          <table className='table table-striped table-bordered mt-4'>
                                                 <thead>
                                                        <tr>
                                                               <th>Maxsulot nomi</th>
                                                               <th>Baza</th>
                                                               <th>Narxi</th>
                                                               <th>Qolgan maxsulot</th>
                                                               <th>Sotilgan miqdori</th>
                                                               <th>O'tkazilgan miqdori</th>
                                                               <th>Jami</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody>
                                                        <tr>
                                                               <td>AZBIZ</td>
                                                               <td>Bazan nomi</td>
                                                               <td>2000</td>
                                                               <td>23</td>
                                                               <td>34</td>
                                                               <td>12</td>
                                                               <td>66</td>
                                                        </tr>
                                                 </tbody>
                                          </table>
                                   </div>

                                   <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                                   <div className='sahifalar'>
                                          <button>Ortga</button>
                                          <button>1</button>
                                          <button>Oldinga</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
