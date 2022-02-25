import './taxrirlash.css'
import {useState} from 'react'
import {connect} from 'react-redux'
import LavozimReducer, {saveLavozim, getLavozim, deleteLavozim, editLavozim} from '../../reducer/LavozimReducer'
import {Link} from 'react-router-dom'
import users from "../../../../../../reducer/users";

function Taxrirlash({getLavozim, editLavozim, lavozimlar, saveLavozim,users}) {

    const [input, setInput] = useState(
        {
            name: '',

            xBarchasinibelgilash: '',
            xodimkorish: '',
            xodimqoshish: '',
            xodimtaxrirlash: '',
            xodimochirish: '',

            lBarchasinibelgilash: '',
            lavozimkorish: '',
            lavozimqoshish: '',
            lavozimtaxrirlash: '',
            lavozimochirish: '',

            tBarchasinibelgilash: '',
            lang1: '',
            lang2: '',
            dillerqoshish: '',
            dillertaxrirlash: '',
            dillerochirish: '',

            mBarchasinibelgilash: '',
            lang3: '',
            lang4: '',
            lang5: '',
            lang6: '',
            lang7: '',
            lang8: '',
            lang9: '',
            mijozqoshish: '',
            mijoztaxrirlash: '',
            mijozochirish: ''
        }
    )

    const [permission,setpermission] = useState([])

    const [Xbarchasi,setXbarchasi] = useState('')
    function changexBarchasini(e) {
        input.xBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        changexodimkorish(e)
        changexodimqoshish(e)
        changexodimochirish(e)
        changexodimtaxrirlash(e)
    }
    // const [name,setName] = useState('')
    function changename(e) {
        input.name = e.target.value
        let a = {...input}
        setInput(a)
        console.log(input.name)
        // if (e.target.checked === false){
        //     setName('ADD_ROLE')
        // }else {
        //     setName('')
        // }
        // console.log(name)
    }

    const [xodimkorish,setXodimkorish] = useState('')
    function changexodimkorish(e) {

        if (e.target.checked ===false){
            setXodimkorish('VIEW_USER')
        }else {
            setXodimkorish('')
        }
        input.xodimkorish = e.target.checked
        let a = {...input}
        setInput(a)
        console.log(xodimkorish)
    }

    const [xodimqoshish,setXodimqoshish] = useState('')
    function changexodimqoshish(e) {

        if (e.target.checked===false){
            setXodimqoshish('ADD_USER')
        }else {
            setXodimqoshish('')
        }
        input.xodimqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        console.log(xodimqoshish)
    }

    const [xodimtaxrirlash,setXodimtaxrirlash] = useState('')
    function changexodimtaxrirlash(e) {

        if(e.target.checked===false){
            setXodimtaxrirlash("EDIT_USER")
        }else {
            setXodimtaxrirlash('')
        }
        input.xodimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        console.log(xodimtaxrirlash)
    }

    const [deleteXodim,setdeleteXodim] = useState('')
    function changexodimochirish(e) {

        if (e.target.value===false){
            setdeleteXodim("DELETE_USER")
        }else {
            setdeleteXodim('')
        }
        input.xodimochirish = e.target.checked
        let a = {...input}
        setInput(a)
        console.log(deleteXodim)
    }

    const [lavozimbarcha,setlavozimbarcha] = useState('')
    function changelBarchasini(e) {
        input.lBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlavozimbarcha("CHECK_ALL_ROLE")
        }else {
            setlavozimbarcha('')
        }
        console.log(lavozimbarcha)
    }

    const [lavozimqoshish,setlavozimqoshish] = useState('')
    function changelavozimqoshish(e) {
        input.lavozimqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlavozimqoshish("ADD_ROLE")
        }else {
            setlavozimqoshish('')
        }
        console.log(lavozimqoshish)
    }

    const [lavozimkorish,setlavozimkorish] = useState('')
    function changelavozimkorish(e) {
        input.lavozimkorish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlavozimkorish("VIEW_ROLE")
        }else {
            setlavozimkorish('')
        }
        console.log(lavozimkorish)
    }

    const [lavozimtaxrirlash,setlavozimtaxrirlash] = useState('')
    function changelavozitaxrirlash(e) {
        input.lavozimtaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlavozimtaxrirlash("EDIT_ROLE")
        }else {
            setlavozimtaxrirlash('')
        }
        console.log(lavozimtaxrirlash)
    }

    const [deleterole,setdeleterole] = useState('')
    function changelavozimochirish(e) {
        input.lavozimochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setdeleterole("DELETE_ROLE")
        }else {
            setdeleterole('')
        }
        console.log(deleterole)
    }

    const [taminotbarcha,settaminotbarcha] = useState('')
    function changetBarchasi(e) {
        input.tBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            settaminotbarcha("CHECK_ALL_SUPPLIER")
        }else {
            settaminotbarcha('')
        }
        console.log(taminotbarcha)
    }

    const [lang1,setlang1] = useState('')
    function changelang1(e) {
        input.lang1 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang1("LANG_V1")
        }else {
            setlang1('')
        }
        console.log(lang1)
    }

    const [lang2,setlang2] = useState('')
    function changelang2(e) {
        input.lang2 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang2("LANG_V2")
        }else {
            setlang2('')
        }
        console.log(lang2)
    }

    const [dillerqoshish,setdillerqoshish] = useState('')
    function changedillerqoshish(e) {
        input.dillerqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setdillerqoshish("ADD_SUPPLIER")
        }else {
            setdillerqoshish('')
        }
        console.log(dillerqoshish)
    }

    const [dillertaxrirlash,setdillertaxrirlash] = useState('')
    function changedillertaxrirlash(e) {
        input.dillertaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setdillertaxrirlash("EDIT_SUPPLIER")
        }else {
            setdillertaxrirlash('')
        }
        console.log(dillertaxrirlash)
    }

    const [deletediller,setdillerdelete] = useState('')
    function changedillerochirish(e) {
        input.dillerochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setdillerdelete("DELETE_SUPPLIER")
        }else {
            setdillerdelete('')
        }
        console.log(deletediller)
    }
    const [mijozbarcha,setmijozbarcha] = useState('')
    function changemBarchasi(e) {
        input.mBarchasinibelgilash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setmijozbarcha("CUSTOMER_ALL")
        }else {
            setmijozbarcha('')
        }
        console.log(mijozbarcha)
    }
    const [lang3,setlang3] = useState('')
    function changemlang3(e) {
        input.lang3 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang3("LANG_V3")
        }else {
            setlang3('')
        }
        console.log(lang3)
    }

    const [lang4,setlang4] = useState('')
    function changemlang4(e) {
        input.lang4 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang4("LANG_V4")
        }else {
            setlang4('')
        }
        console.log(lang4)
    }

    const [lang5,setlang5] = useState('')
    function changemlang5(e) {
        input.lang5 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang5("LANG_V5")
        }else {
            setlang5('')
        }
        console.log(lang5)
    }

    const [lang6,setlang6] = useState('')
    function changemlang6(e) {
        input.lang6 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang6("LANG_V6")
        }else {
            setlang6('')
        }
        console.log(lang6)
    }

    const [lang7,setlang7] = useState('')
    function changemlang7(e) {
        input.lang7 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked === false){
            setlang7("LANG_V7")
        }else {
            setlang7('')
        }
        console.log(lang7)
    }

    const [lang8,setlang8] = useState('')
    function changemlang8(e) {
        input.lang8 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang8("LANG_V8")
        }else {
            setlang8('')
        }
        console.log(lang8)
    }

    const [lang9,setlang9] = useState('')
    function changemlang9(e) {
        input.lang9 = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setlang9("LANG_V9")
        }else {
            setlang9('')
        }
        console.log(lang9)
    }

    const [mijozqoshish,setmijozqoshish] = useState('')
    function changemijozqoshish(e) {
        input.mijozqoshish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setmijozqoshish("CUSTOMER_ADD")
        }else {
            setmijozqoshish('')
        }
        console.log(mijozqoshish)
    }

    const [mijoztaxrirlash,setmijoztaxrirlash] = useState('')
    function changemijoztaxrirlash(e) {
        input.mijoztaxrirlash = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setmijoztaxrirlash("EDIT_CUSTOMER")
        }else {
            setmijoztaxrirlash('')
        }
        console.log(mijoztaxrirlash)
    }

    const [deletmijoz,setdeletemijoz] = useState('')
    function changemijozochrish(e) {
        input.mijozochirish = e.target.checked
        let a = {...input}
        setInput(a)
        if (e.target.checked===false){
            setdeletemijoz("DELETE_CUSTOMER")
        }else {
            setdeletemijoz('')
        }
        console.log(deletmijoz)
    }

    function saqla() {
        saveLavozim(
            {
                name: input.name,
                permissions: [
                "ADD_USER",
            ],
            description:null,
            businessId:parseInt(users.businessId)
        }
        )
        getLavozim(users.businessId)
    }


    return (
        <div className={'row mt-5'}>
            <h4 className={'text-center'}>Lavozimni qo`shish / taxrirlash</h4>
            <div className="col-md-12" >
                <div className="row justify-content-center " >
                    <div className="l1 p-4 mt-5 col-sm-10 col-md-7 col-5 border">
                        <div>
                            {
                                console.log(input)
                            }
                            <label htmlFor={'l'}>Lavozim nomi</label>
                            <input type="text" className={'form-control mt-2'} value={input.name} onChange={changename} placeholder={'Lavozim nomi'}/>
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

export default connect((LavozimReducer,users), {
    getLavozim,
    saveLavozim,
    editLavozim,
    deleteLavozim
})(Taxrirlash)