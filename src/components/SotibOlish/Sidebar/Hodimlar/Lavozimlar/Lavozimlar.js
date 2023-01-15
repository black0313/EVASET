import React from 'react'
import "./lavozimlar.css"
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {Switch, Link, Route} from 'react-router-dom'
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import LavozimReducer, {getLavozim, saveLavozim, editLavozim, deleteLavozim} from "../reducer/LavozimReducer";
import users from "../../../../../reducer/users";
import {useTranslation} from "react-i18next";

function Lavozimlar({getLavozim, saveLavozim,users, deleteLavozim, editLavozim, lavozimlar,LavozimReducer}) {

    function deletel(item) {
        console.log(item)
        deleteLavozim(item.id)
        getLavozim(users.businessId)
    }

    const {t} = useTranslation()
    const [inSearch2, setInSearch2] = useState(
        {
            inputputsearch2: ''
        }
    )

    function search(e) {
        inSearch2.inputputsearch2 = e.target.value
        let a = {...inSearch2}
        setInSearch2(a)
    }

    useEffect(() => {
        getLavozim(users.businessId)
    }, [LavozimReducer.current])

    const [input, setInput] = useState(
        {
            view: '',
            izlash: ''
        }
    )

    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function izlash(e) {
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [visible,setvisible] = useState(5)

    function koproq(){
        setvisible(prev=>prev+5)
    }

    return (
            <div className="col-md-12 pt-4 pb-4 ">
                    <div className="textHeaderL">
                        <div className="textBoxL">
                            <h2>{t('Roles.1')}</h2>
                            <p>{t('Roles.2')}</p>
                        </div>
                    </div>
                    <div className="rowStyleL">
                        <div className="qoshish">
                            <h5>{t('Roles.3')}</h5>
                            {
                                users.addrole ? <Link to={'/headerthird/lavozimlar/taxrirlash'}>
                                    <button className='btn btn-primary'>+{t('Buttons.2')}</button>
                                </Link>:''
                            }

                        </div>

                        {
                            users.viewrole ? <div>
                                <div className="izlashL">
                                    <div className="izlashLBox1">
                                        <p>{t('Buttons.8')}</p>
                                        <select name="" id="">
                                            <option value="">25</option>
                                        </select>
                                    </div>
                                    <div className="izlashBox2">
                                        <input type="text" value={inSearch2.inputputsearch2} onChange={search} placeholder='Izlash...'/>
                                    </div>
                                </div>
                                <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                                    <table className='table table-striped table-bordered mt-4'>
                                        <thead>
                                        <tr>
                                            <th>T/R</th>
                                            <th>{t('Roles.1')}</th>
                                            <th>{t('Buttons.9')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            LavozimReducer.lavozimlar.filter(val => {
                                                if (inSearch2.inputputsearch2 === '') {
                                                    return val
                                                } else if (val.name.toUpperCase().includes(inSearch2.inputputsearch2.toUpperCase())) {
                                                    return val
                                                }
                                            }).splice(0,visible).map((item,index) => <tr key={item.id}>
                                                <td>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    {
                                                        users.editrole ?   <Link to={'/headerthird/lavozimlar/taxrirlash/'+item.id}>
                                                            <button className='taxrirlash' ><img src={Edit} alt=""/> {t('Buttons.1')}</button>
                                                        </Link>:''
                                                    }
                                                    {
                                                        users.deleterole ?<button className='ochirish' onClick={() => deletel(item)}><img src={Delete} alt=""/> {t('Buttons.3')}
                                                        </button>:''
                                                    }

                                                </td>
                                            </tr>)
                                        }

                                        </tbody>
                                    </table>
                                    <button onClick={koproq} className={'btn btn-outline-danger form-control'}>{t('Buttons.5')}</button>
                                </div>

                            </div>:''
                        }

                    </div>
                </div>
    )
}

export default connect((LavozimReducer,users), {
    getLavozim,
    saveLavozim,
    deleteLavozim,
    editLavozim
})(Lavozimlar)