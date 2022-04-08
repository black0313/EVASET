import './HodimlarRoyhati.css';
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png';
import Print from '../../../../../img/Print.png';
import Data from '../../../../../img/Data.png';
import Pdf from '../../../../../img/PDF.png';
import Edit from '../../../../../img/Edit.png';
import Korish from '../../../../../img/Korish.png';
import Delete from '../../../../../img/Delete.png';
import {Link, Route, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {connect} from "react-redux";
import users from "../../../../../reducer/users";
import XodimReducer, {getXodim, saveXodim, editXodim, deleteXodim} from "../reducer/XodimReducer";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function HodimlarRoyhati({getXodim, deleteXodim, XodimReducer, xodimlar, users}) {

    useEffect(() => {
        getXodim(users.businessId)
    }, [XodimReducer.current])


    const [input, setInput] = useState('')
    const [inSearch, setinSearch] = useState(
        {
            inputsearch: ''
        }
    )

    function deletex(item) {
        deleteXodim(item.id)
        setTimeout(() => {
            getXodim(users.businessId)

        }, 100)
    }

    function search(e) {
        inSearch.inputsearch = e.target.value
        let a = {...inSearch}
        setinSearch(a)
        console.log(inSearch.inputsearch)
    }

    const [login,setlogin] = useState(true)
    const [ism,setism] = useState(true)
    const [familiyasi,setfamiliyasi] = useState(true)
    const [lavozim,setlavozim] = useState(true)
    const [email,setemail] = useState(true)
    const [amallar,setamallar] = useState(true)

    const [headlist,setheadlist] = useState([
        {
            login: 'Login',
            name: 'Ism',
            lastName: 'Familiyasi',
            lavozim: 'Lavozim',
            email:' Email',
            amallar:' Amallar'
        }
    ])

    const [malkamay, setmalkamay] = useState(false)


    return (
        <div className="col-md-12 pb-4 pt-4">
            <div className="textHeaderHR">
                <div className="textBox">
                    <h2>Hodimlar ro'yxati</h2>
                    <p>Hodimlar boshqaruvi</p>
                </div>
            </div>
            <div className="rowStyleHR">
                <div className="qoshishHR">
                    <h5>Barcha hodimlar</h5>
                    {
                        users.adduser ?
                            <Link to={'/headerthird/hodimlarruyxati/taxrirlash'}>
                                <button className={`btn btn-primary`}>+Qo'shish</button>
                            </Link>:''
                    }
                </div>
                {
                    users.viewuser ?
                        <div>
                            <div className="izlashHR">
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
                                    <button><img src={CSV} alt=""/> Export CSV</button>
                                    <button><img src={Excel} alt=""/>Export Excel</button>
                                    <button><img src={Print} alt=""/>Print</button>
                                    <button><img src={Pdf} alt=""/>Export PDF</button>
                                    <button onClick={()=>setmalkamay(!malkamay)}><img src={Data} alt=""/>Malumotlarni kamaytirish</button>

                                    {
                                        malkamay ? headlist.map(item => <ul className={'ul2'} key={item.id}>
                                            <li onClick={()=>setlogin(!login)} className={'li2'}>{login? item.login: item.login+' <-'}</li>
                                            <li onClick={()=>setism(!ism)} className={'li2'}>{ism? item.name:item.name +' <-'}</li>
                                            <li onClick={()=>setfamiliyasi(!familiyasi)} className={'li2'}>{familiyasi? item.lastName:item.lastName+' <-'}</li>
                                            <li onClick={()=>setlavozim(!lavozim)} className={'li2'}>{lavozim? item.lavozim:item.lavozim+' <-'}</li>
                                            <li onClick={()=>setemail(!email)} className={'li2'}>{email? item.email:item.email+' <-'}</li>
                                            <li onClick={()=>setamallar(!amallar)} className={'li2'}>{amallar?item.amallar:item.amallar+ ' <-'}</li>
                                        </ul>) : ''
                                    }

                                </div>
                                <div className="izlashBox2">
                                    <input type="text" onChange={search} value={inSearch.inputsearch} placeholder='Izlash...'/>
                                </div>
                            </div>
                            <div className="table-responsive mb-4">
                                <table className='table table-striped table-bordered mt-4'>
                                    <thead>
                                    {
                                        headlist.map(item=><tr key={item.id}>
                                            <th>T/R</th>
                                            {
                                                login?<th>{item.login}</th>:''
                                            }
                                            {
                                                ism?<th>{item.name}</th>:''
                                            }
                                            {
                                                familiyasi?<th>{item.lastName}</th>:''
                                            }
                                            {
                                                lavozim?<th>{item.lavozim}</th>:''
                                            }
                                            {
                                                email?<th>{item.email}</th>:''
                                            }
                                            {
                                                amallar?<th>{item.amallar}</th>:''
                                            }
                                        </tr>)
                                    }
                                    </thead>
                                    <tbody>
                                    {
                                        XodimReducer.xodimlar.filter(val => {
                                            if (inSearch.inputsearch === '') {
                                                return val
                                            } else if (val.username.toUpperCase().includes(inSearch.inputsearch.toUpperCase())) {
                                                return val
                                            }
                                        })
                                            .map((item,index) => <tr key={item.id}>
                                                <td>{index+1}</td>
                                                {
                                                    login?<td>{item.username}</td>:''
                                                }
                                                {
                                                    ism?<td>{item.firstName}</td>:''
                                                }
                                                {
                                                    familiyasi?<td>{item.lastName}</td>:''
                                                }
                                                {
                                                    lavozim?<td>{item.role?.name}</td>:''
                                                }
                                                {
                                                    email?<td>-</td>:''
                                                }
                                                {
                                                    amallar?<td>
                                                        {
                                                            users.edituser ?   <Link to={'/headerthird/hodimlarruyxati/taxrirlash/' + item.id}>
                                                                <button className='taxrirlash'><img src={Edit} alt=""/>Taxrirlash</button>
                                                            </Link>:''
                                                        }


                                                        <Link
                                                            to={'/headerthird/hodimlarruyxati/view/' + item.username + '/' + item.firstName + '/' + item.lastName}>
                                                            <button className='korish'><img src={Korish} alt=""/> Ko'rish</button>
                                                        </Link>
                                                        {
                                                            users.deleteuser ? <Link to={'/headerthird/hodimlarruyxati'}>
                                                                <button onClick={() => deletex(item)} className='ochirish'><img src={Delete}
                                                                                                                                alt=""/> O'chirish
                                                                </button>
                                                            </Link>:''
                                                        }

                                                    </td>:''
                                                }

                                            </tr>)

                                    }

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
                        :''
                }

            </div>
        </div>
    )
}


export default connect((XodimReducer, users), {getXodim, saveXodim, editXodim, deleteXodim})
(HodimlarRoyhati)
