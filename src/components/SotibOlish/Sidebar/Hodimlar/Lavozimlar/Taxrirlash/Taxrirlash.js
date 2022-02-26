import './taxrirlash.css'
import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import LavozimReducer, {saveLavozim, getLavozim, deleteLavozim, editLavozim} from '../../reducer/LavozimReducer'
import {Link} from 'react-router-dom'
import users from "../../../../../../reducer/users";

function Taxrirlash({getLavozim, editLavozim, lavozimlar, saveLavozim, users, match, LavozimReducer}) {

    const [input, setInput] = useState(
        {
            name: '',
            xBarchasinibelgilash: '',
            xodimkorish: '',
            xodimkorishinput: null,
            xodimqoshish: '',
            xodimqoshishinput: null,
            xodimtaxrirlash: '',
            xodimtaxrirlashinput: null,
            xodimochirish: '',
            xodimochirishinput: null,

            lBarchasinibelgilash: '',
            lavozimkorish: '',
            lavozimkorishinput: null,
            lavozimqoshish: '',
            lavozimqoshishinput: null,
            lavozimtaxrirlash: '',
            lavozimtaxrirlashinput: null,
            lavozimochirish: '',
            lavozimochirishinput: null,

            tBarchasinibelgilash: '',
            lang1: '',
            lang1input: null,
            lang2: '',
            lang2input: null,
            dillerqoshish: '',
            dillerqoshishinput: null,
            dillertaxrirlash: '',
            dillertaxrirlashinput: null,
            dillerochirish: '',
            dillerochirishinput: null,

            mBarchasinibelgilash: '',
            lang3: '',
            lang3input: null,
            lang4: '',
            lang4input: null,
            lang5: '',
            lang5input: null,
            lang6: '',
            lang6input: null,
            lang7: '',
            lang7input: null,
            lang8: '',
            lang8input: null,
            lang9: '',
            lang9input: null,
            mijozqoshish: '',
            mijozqoshishinput: null,
            mijoztaxrirlash: '',
            mijoztaxrirlashinput: null,
            mijozochirish: '',
            mijozochirishinput: null
        }
    )

    const [permission, setpermission] = useState([])

    function changexBarchasini(e) {
        input.xBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        changexodimkorish(e)
        changexodimqoshish(e)
        changexodimochirish(e)
        changexodimtaxrirlash(e)
        console.log(input)
    }

    function changename(e) {
        input.name = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.name)
    }

    function changexodimkorish(e) {
        input.xodimkorish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.xodimkorishinput = 'VIEW_USER'
            let a = {...input}
            setInput(a)
        } else {
            input.xodimkorishinput = ''
            let a = {...input}
            setInput(a)
        }
        console.log(input.xodimkorishinput)
    }

    function changexodimqoshish(e) {
        input.xodimqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.xodimqoshishinput = "ADD_USER"
            let a = {...input}
            setInput(a)
        } else {
            input.xodimqoshishinput = ''
            let a = {...input}
            setInput(a)
        }
        console.log(input.xodimqoshishinput)
    }

    function changexodimtaxrirlash(e) {
        input.xodimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.xodimtaxrirlashinput = "EDIT_USER"
            let a = {...input}
            setInput(a)
        } else {
            input.xodimtaxrirlashinput = null
            let a = {...input}
            setInput(a)
        }
        console.log(input.xodimtaxrirlashinput)
    }

    function changexodimochirish(e) {
        input.xodimochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.xodimochirishinput = "DELETE_USER"
            let a = {...input}
            setInput(a)
        } else {
            input.xodimochirishinput = ''
        }
        console.log(input.xodimochirishinput)
    }

    function changelBarchasini(e) {
        input.lBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        changelavozimqoshish(e)
        changelavozitaxrirlash(e)
        changelavozimkorish(e)
        changelavozimochirish(e)
        console.log(input)
    }

    function changelavozimqoshish(e) {
        input.lavozimqoshish = "ADD_ROLE"
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lavozimqoshishinput = "ADD_ROLE"
        } else {
            input.lavozimqoshishinput = ''
        }
        console.log(input.lavozimqoshishinput)

    }

    function changelavozimkorish(e) {
        input.lavozimkorish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lavozimkorishinput = "VIEW_ROLE"
        } else {
            input.lavozimkorishinput = ''
        }
        console.log(input.lavozimkorishinput)
    }

    function changelavozitaxrirlash(e) {
        input.lavozimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lavozimtaxrirlashinput = "EDIT_ROLE"
        } else {
            input.lavozimtaxrirlashinput = ''
        }
        console.log(input.lavozimtaxrirlashinput)
    }

    function changelavozimochirish(e) {
        input.lavozimochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lavozimochirishinput = "DELETE_ROLE"
        } else {
            input.lavozimochirishinput = ''
        }
        console.log(input.lavozimochirishinput)
    }

    function changetBarchasi(e) {
        input.tBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        changelang1(e)
        changelang2(e)
        changedillerqoshish(e)
        changedillertaxrirlash(e)
        changedillerochirish(e)
        console.log(input)
    }

    function changelang1(e) {
        input.lang1 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang1input = "LANG_V1"
        } else {
            input.lang1input = ''
        }
        console.log(input.lang1input)
    }

    function changelang2(e) {
        input.lang2 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang2input = "LANG_V2"
        } else {
            input.lang2input = ''
        }
        console.log(input.lang2input)
    }

    function changedillerqoshish(e) {
        input.dillerqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.dillerqoshishinput = "ADD_SUPPLIER"
        } else {
            input.dillerqoshishinput = ''
        }
        console.log(input.dillerqoshishinput)
    }

    function changedillertaxrirlash(e) {
        input.dillertaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.dillertaxrirlashinput = "EDIT_SUPPLIER"
        } else {
            input.dillertaxrirlashinput = ''
        }
        console.log(input.dillertaxrirlashinput)
    }

    function changedillerochirish(e) {
        input.dillerochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.dillerochirishinput = "DELETE_SUPPLIER"
        } else {
            input.dillerochirishinput = ''
        }
        console.log(input.dillerochirishinput)
    }

    function changemBarchasi(e) {
        input.mBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        changemlang3(e)
        changemlang4(e)
        changemlang5(e)
        changemlang6(e)
        changemlang7(e)
        changemlang8(e)
        changemlang9(e)
        changemijozqoshish(e)
        changemijoztaxrirlash(e)
        changemijozochrish(e)
        console.log(input)
    }

    function changemlang3(e) {
        input.lang3 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang3 = "LANG_V3"
        } else {
            input.lang3 = ''
        }
        console.log(input.lang3input)
    }

    function changemlang4(e) {
        input.lang4 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang4input = "LANG_V4"
        } else {
            input.lang4input = ''
        }
        console.log(input.lang4input)
    }

    function changemlang5(e) {
        input.lang5 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang5input = "LANG_V5"
        } else {
            input.lang5input = ''
        }
        console.log(input.lang5input)
    }

    function changemlang6(e) {
        input.lang6 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang6input = "LANG_V6"
        } else {
            input.lang6input = ''
        }
        console.log(input.lang6input)
    }

    function changemlang7(e) {
        input.lang7 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang7input = "LANG_V7"
        } else {
            input.lang7input = ''
        }
        console.log(input.lang7input)
    }

    function changemlang8(e) {
        input.lang8 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang8input = "LANG_V8"
        } else {
            input.lang8input = ''
        }
        console.log(input.lang8input)
    }

    function changemlang9(e) {
        input.lang9 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.lang9input = "LANG_V9"
        } else {
            input.lang9input = ""
        }
        console.log(input.lang9input)
    }

    function changemijozqoshish(e) {
        input.mijozqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.mijozqoshishinput = "ADD_CUSTOMER"
        } else {
            input.mijozqoshishinput = ""
        }
        console.log(input.mijozqoshishinput)
    }

    function changemijoztaxrirlash(e) {
        input.mijoztaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.mijoztaxrirlashinput = "EDIT_CUSTOMER"
        } else {
            input.mijoztaxrirlashinput = ""
        }
        console.log(input.mijoztaxrirlashinput)
    }

    function changemijozochrish(e) {
        input.mijozochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === true) {
            input.mijozochirishinput = "DELETE_CUSTOMER"
        } else {
            input.mijozochirishinput = ""
        }
        console.log(input.mijozochirishinput)
    }

    const [roleid, setroleid] = useState('')

    function editl() {
        setroleid(match.params.id)
        LavozimReducer.lavozimlar.map(item => {
            if (match.params.id == item.id) {
                editl2(item)
            }

        })
        console.log(roleid)
    }

    function editl2(item) {
        let a = item.permissions
        input.name = item.name
        let c = {...input}
        setInput(c)
        for (let i = 0; i < a.length - 1; i++) {
                 console.log(a[i])
                 switch (a[i]) {
                case 'ADD_USER' :
                    input.xodimqoshish = true
                    let a = {...input}
                    setInput(a)
                    break;
                case 'VIEW_USER' :
                    input.xodimkorish = true
                    let b = {...input}
                    setInput(b)
                    break;
                case 'EDIT_USER' :
                    input.xodimtaxrirlash = true
                    let c = {...input}
                    setInput(c)
                    break;
                case 'DELETE_USER' :
                    input.xodimochirish = true
                    let d = {...input}
                    setInput(d)
                    break;
                case 'ADD_ROLE' :
                    input.lavozimqoshish = true
                    let e = {...input}
                    setInput(e)
                    break;
                case 'EDIT_ROLE' :
                    input.lavozimtaxrirlash = true
                    let r = {...input}
                    setInput(r)
                    break;
                case 'VIEW_ROLE' :
                    input.lavozimkorish = true
                    let t = {...input}
                    setInput(t)
                    break;
                case 'DELETE_ROLE' :
                    input.lavozimochirish = true
                    let y = {...input}
                    setInput(y)
                    break;
                case 'ADD_SUPPLIER' :
                    input.dillerqoshish = true
                    let u = {...input}
                    setInput(u)
                    break;
                case 'EDIT_SUPPLIER' :
                    input.dillertaxrirlash = true
                    let i = {...input}
                    setInput(i)
                    break;
                case 'DELETE_SUPPLIER' :
                    input.dillerochirish = true
                    let p = {...input}
                    setInput(p)
                    break;
                case 'ADD_CUSTOMER' :
                    input.mijozqoshish = true
                    let o = {...input}
                    setInput(o)
                    break;
                case 'EDIT_CUSTOMER' :
                    input.mijoztaxrirlash = true
                    let s = {...input}
                    setInput(s)
                    break;
                case 'DELETE_CUSTOMER' :
                    input.mijoztaxrirlash = true
                    let f = {...input}
                    setInput(f)
                    break;
            }
        }
    }

    function saqla() {
        permission.push(input.xodimkorishinput, input.xodimqoshishinput, input.xodimtaxrirlashinput, input.xodimochirishinput, input.lavozimkorishinput
            , input.lavozimqoshishinput, input.lavozimtaxrirlashinput, input.lavozimochirishinput, input.lang1input, input.lang2input, input.dillertaxrirlashinput,
            input.dillerochirishinput, input.dillerqoshishinput, input.lang3input, input.lang4input, input.lang5input, input.lang6input, input.lang7input, input.lang8input,
            input.lang9input, input.mijoztaxrirlashinput, input.mijozqoshishinput, input.mijozochirishinput)

        let a = {...permission}
        setpermission(a)
        console.log(permission);
        if (match.params.id === undefined) {
            saveLavozim(
                {
                    name: input.name,
                    permissions: permission,
                    description: "ol",
                    businessId: users.businessId
                }
            )
            console.log('savele')
        } else {
            editLavozim(
                {
                    name: input.name,
                    permissions: permission,
                    description: "ol",
                    id: match.params.id,
                    businessId: users.businessId
                }
            )
            console.log('edit')
        }

        getLavozim(users.businessId)
    }

    useEffect(() => {
        getLavozim(users.businessId)
        editl()
    }, [])

    return (
        <div className={'row mt-5'}>
            <h4 className={'text-center'}>Lavozimni qo`shish / taxrirlash</h4>
            <div className="col-md-12">
                <div className="row justify-content-center ">
                    <div className="l1 p-4 mt-5 col-sm-10 col-md-7 col-5 border">
                        {/*{console.log(match.params.id)}*/}
                        <div>
                            {/*{*/}
                            {/*    console.log(input)*/}
                            {/*}*/}
                            <label htmlFor={'l'}>Lavozim nomi</label>
                            <input type="text" className={'form-control mt-2'} value={input.name} onChange={changename}
                                   placeholder={'Lavozim nomi'}/>
                            <div className="ruxsat mt-4">
                                <h5>Ruxsatnomalar</h5>
                                <label htmlFor={'ch'}>Barchasini belgilash</label>
                                <input type="checkbox" checked={input.xBarchasinibelgilash} onChange={changexBarchasini}
                                       style={{marginLeft: '10px', width: '15px', height: '15px'}} id={'ch'}/>
                                <div className={'mt-4'}>
                                    <input type="checkbox" checked={input.xodimkorish} onChange={changexodimkorish}
                                           style={{width: '15px', height: '15px', marginTop: '4px'}} id={'kor'}/>
                                    <label htmlFor={'kor'}>Xodimlarni korish</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={'qosh'} checked={input.xodimqoshish}
                                           onChange={changexodimqoshish}
                                           style={{width: '15px', marginTop: '10px', height: '15px'}}/>
                                    <label htmlFor={'qosh'}>Xodimlarni Qo`shish</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.xodimtaxrirlash}
                                           onChange={changexodimtaxrirlash} id={'tax'}
                                           style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                    <label htmlFor={'tax'}>Xodimlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.xodimochirish} onChange={changexodimochirish}
                                           id={'och'} style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                    <label htmlFor={'och'}>Xodimlarni o`chirish</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="l1 mt-5 col-sm-10 col-5 col-md-7 p-4 border">
                        <label htmlFor={'l'}>Lavozimlar</label>
                        <div className="ruxsat mt-4">
                            <label htmlFor={'chch'}>Barchasini belgilash</label>
                            <input type="checkbox" checked={input.lBarchasinibelgilash} onChange={changelBarchasini}
                                   style={{marginLeft: '10px', width: '15px', height: '15px'}} id={'chch'}/>

                            <div className={'mt-4'}>
                                <input type="checkbox" checked={input.lavozimkorish} onChange={changelavozimkorish}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'korr'}/>
                                <label htmlFor={'korr'}>Lavozimni korish</label>
                            </div>
                            <div>
                                <input type="checkbox" checked={input.lavozimqoshish} onChange={changelavozimqoshish}
                                       id={'qoshLavozim'} style={{width: '15px', marginTop: '10px', height: '15px'}}/>
                                <label htmlFor={'qoshLavozim'}>Lavozim Qo`shish</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'taxLavozim'} checked={input.lavozimtaxrirlash}
                                       onChange={changelavozitaxrirlash}
                                       style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                <label htmlFor={'taxLavozim'}>Lavozimni taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'ochLavozim'} checked={input.lavozimochirish}
                                       onChange={changelavozimochirish}
                                       style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                <label htmlFor={'ochLavozim'}>Lavozimni o`chirish</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ikki justify-content-center">

                    <div className="l1 mt-5 p-4 col-sm-10 col-md-7 col-5 border">
                        <div>
                            <label htmlFor={'l'}>Ta`minotchi diller</label>

                            <div className="ruxsat mt-4">

                                <label htmlFor={'chDiller'}>Barchasini belgilash</label>
                                <input type="checkbox" checked={input.tBarchasinibelgilash} onChange={changetBarchasi}
                                       style={{marginLeft: '10px', width: '15px', height: '15px'}} id={'chDiller'}/>

                                <div className={'mt-4'}>
                                    <input type="radio" checked={input.lang1} onChange={changelang1} name={'radio'}
                                           style={{width: '15px', height: '15px', marginTop: '4px'}} id={'korDiller'}/>
                                    <label htmlFor={'korDiller'}>Barcha dillerlarni ko'rish</label>
                                </div>
                                <div>
                                    <input type="radio" checked={input.lang2} onChange={changelang2} name={'radio'}
                                           id={'qoshDiller'}
                                           style={{width: '15px', marginTop: '10px', height: '15px'}}/>
                                    <label htmlFor={'qoshDiller'}>view_own_supplier</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillerqoshish} onChange={changedillerqoshish}
                                           id={'taxDiller'} style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                    <label htmlFor={'taxDiller'}>Dillerlarni qoshish</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillertaxrirlash}
                                           onChange={changedillertaxrirlash} id={'ochDiller'}
                                           style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                    <label htmlFor={'ochDiller'}>Dillerlarni taxrirlash</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked={input.dillerochirish}
                                           onChange={changedillerochirish} id={'och3'}
                                           style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                    <label htmlFor={'och3'}>Dillerlarni o`chirish</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="l1 mt-5 p-4 col-sm-10 col-md-7 col-5  border">
                        <label htmlFor={'l'}>Mijoz</label>

                        <div className="ruxsat mt-4">
                            <label htmlFor={'ch1'}>Barchasini belgilash</label>
                            <input type="checkbox" checked={input.lang3} onChange={changemlang3}
                                   style={{marginLeft: '10px', width: '15px', height: '15px'}} id={'ch1'}/>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang4} onChange={changemlang4} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langC'}/>
                                <label htmlFor={'langC'}>view_all_customer</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang5} onChange={changemlang5} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langC2'}/>
                                <label htmlFor={'langC2'}>view_own_customer</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang6} onChange={changemlang6} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langC3'}/>
                                <label htmlFor={'langC3'}>customer no_sell_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang7} onChange={changemlang7} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langthree'}/>
                                <label htmlFor={'langthree'}>custm_with_no_sell_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang8} onChange={changemlang8} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langsix'}/>
                                <label htmlFor={'langsix'}>customer_with_no_sell_6_month</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="radio" checked={input.lang9} onChange={changemlang9} name={'r'}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'langyear'}/>
                                <label htmlFor={'langyear'}>customer_with_no_sell_year</label>
                            </div>

                            <div className={'mt-4'}>
                                <input type="checkbox" checked={input.mijozqoshish} onChange={changemijozqoshish}
                                       style={{width: '15px', height: '15px', marginTop: '4px'}} id={'kor1'}/>
                                <label htmlFor={'kor1'}>Qoshish</label>
                            </div>
                            <div>
                                <input type="checkbox" checked={input.mijoztaxrirlash} onChange={changemijoztaxrirlash}
                                       id={'qosh3'} style={{width: '15px', marginTop: '10px', height: '15px'}}/>
                                <label htmlFor={'qosh3'}>Taxrirlash</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'tax2'} checked={input.mijozochirish}
                                       onChange={changemijozochrish}
                                       style={{width: '15px', height: '15px', marginTop: '10px'}}/>
                                <label htmlFor={'tax2'}>O`chirish</label>
                            </div>
                        </div>
                        <Link to={'/headerthird/lavozimlar'}>
                            <button className={'btn btn-primary mt-4 ml-4'} onClick={saqla}>Saqlash</button>
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default connect((LavozimReducer, users), {
    getLavozim,
    saveLavozim,
    editLavozim,
    deleteLavozim
})(Taxrirlash)