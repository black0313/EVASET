import Edit from '../../../../../img/Edit.png'
import Settings from '../../../../../img/settings.png'
import Korish from '../../../../../img/Korish.png'
import Delete from '../../../../../img/Delete.png'
import './bazalar.css'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Bazalar() {

    const [active, setActive] = useState(false)
    const [list, setList] = useState([
        {
            name: 'Naqd'
        },
        {
            name: 'Plastik'
        },
        {
            name: 'Cheque'
        },
        {
            name: 'Bank Transfer'
        },
        {
            name: 'Uzcard'
        },
        {
            name: 'Humo'
        },
    ])

    function toggle() {
        setActive(!active)
    }

    return (
        <div>
            <div className="col-md-12 mt-4 mb-4">
                <div className="textHeaderBaza">
                    <h2>Bazalar</h2>
                    <p> boshqaruvi</p>
                </div>
                <div className="rowStyleBaza">
                    <div className="qoshish">
                        <h5>Sizning bazalaringiz</h5>
                        <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                    </div>
                    <div className="izlashBaza">
                        <input type="text" placeholder='Izlash...'/>
                    </div>
                    <div className="table-responsive">
                        <table className='table table-striped table-bordered mt-4'>
                            <thead>
                            <tr>
                                <th>Nomi</th>
                                <th>Baza IDsi</th>
                                <th>Hudud</th>
                                <th>Index</th>
                                <th>Amallar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>boshliq</td>
                                <td>Boshliq</td>
                                <td>Admin</td>
                                <td></td>
                                <td>
                                    <button onClick={toggle} className='taxrirlash'><img src={Edit} alt=""/>Taxrirlash
                                    </button>
                                    <Link to={'/headerthird/bazaSozlama'}><button className='korish'><img src={Settings} alt=""/>Sozlamalar</button></Link>
                                    <button className='ochirish'><img src={Delete} alt=""/>Bazani o'chirish</button>
                                </td>
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
            <div className="col-md-12">
                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'nomi'}>Nomi</label>
                        <input type="text" className={'form-control'} id={'nomi'}/>
                        <div className={'d-flex justify-content-between'}>
                            <div className="col-md-6">
                                <label htmlFor={'bazaid'}>Baza Idsi</label>
                                <input type="text" className={'form-control'} id={'bazaid'}/>
                                <label htmlFor={'bazaid2'}>Shahar</label>
                                <input type="text" className={'form-control'} id={'bazaid2'}/>
                                <label htmlFor={'bazaid3'}>Tel raqam</label>
                                <input type="text" className={'form-control'} id={'bazaid3'}/>
                                <label htmlFor={'bazaid4'}>Xisob faktura</label>
                                <select name="" id={'bazaid4'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                                <label htmlFor={'bazaid5'}>Sotish un faktura</label>
                                <select name="" id={'bazaid5'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor={'xudud'}>Xudud</label>
                                <input type="text" className={'form-control'} id={'xudud'}/>
                                <label htmlFor={'xudud2'}>Index</label>
                                <input type="text" className={'form-control'} id={'xudud2'}/>
                                <label htmlFor={'xudud3'}>Davlat</label>
                                <input type="text" className={'form-control'} placeholder={'Davlat'} id={'xudud3'}/>
                                <label htmlFor={'xudud4'}>Xisob faktura sxemasi</label>
                                <select name="" id={'xudud4'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                                <label htmlFor={'xudud5'}>Sotish narxlarning guruhlari</label>
                                <select name="" id={'xudud5'} className={'form-control'}>
                                    <option value="#">Tanlash</option>
                                    <option value="#">Default</option>
                                </select>
                            </div>
                        </div>
                        <hr/>
                        <label htmlFor={'sotuv'}>Sotuv oynasida ko`p sotiladigan mahsulotlarni belgilash</label>
                        <input type="text" className={'form-control'} id={'sotuv'} placeholder={'enter character'}/>
                        <hr/>
                        <h5>To`lov usullari</h5>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>To`lov usullari</th>
                                <th>Yoqish</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                list.map((item,index) => 
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <input type="checkbox" style={{width:'15px',height:'15px'}}/>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>

                        </table>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
