import './taxrirl.css'
import {useState,useEffect} from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import MaxsulotlarRoyxariReducer, {
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    getMaxsulotRuyxati,
    editMaxsulotRuyxati
} from "../../reducer/MaxsulotlarRoyxariReducer";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import kgreducer,{getkg,savekg} from "../../../../../../reducer/kgreducer";
import users from "../../../../../../reducer/users";
import FirmaReducer,{getFirma,saveFirma} from "../../reducer/FirmaReducer";
import BolimReducer,{getBolim} from "../../reducer/BolimReducer";
function Taxrirlash({editMaxsulotRuyxati,BolimReducer,getBolim, saveMaxsulotRuyxati,deleteMaxsulotRuyxati,getMaxsulotRuyxati,match,MaxsulotlarRoyxariReducer,kgreducer,getkg,users,savekg,FirmaReducer,getFirma,saveFirma,}) {


    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const [input,setInput] = useState(
        {
            mahsulotnomi:'',
            shtrixkod:'',
            shtrixkodturi:'',
            //----
            ulcovbirligi:'',
            ulcovnomi:'',
            ulcovqisqanomi:'',
            ulcovunlikasr:'',
            //-----
            ferma:'',
            brandnomi:'',
            qisqaeslatma:'',
            photoIds:'',
            // ----
            bazalar:'',
            bolim:'',
            bolim2:'',
            ogohmiqdor:'',
            //-------------
            amaldagisoliq:'',
            soliqajralishi:'',
            soliqsiznarx:'',
            foydafoiz:'',
            sotishnarxi:'',
            mahsulotrasmi:'',
            soliqbnnarx:'',
            sotibolishnarxi:'',
            miqdorMaxsulot:''

        }
    )

    function mahsulotnomi(e){
        input.mahsulotnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function shtrixkod(e){
        input.shtrixkod = e.target.value
        let a = {...input}
        setInput(a)
    }
    function shtrixkodturi(e){
        input.shtrixkodturi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ulcovbirligi(e){
        input.ulcovbirligi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ulcovNomi(e){
        input.ulcovnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ulcovqisqaNomi(e){
        input.ulcovqisqanomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ulcovunlikasr(e){
        input.ulcovunlikasr = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ferma(e){
        input.ferma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function miqdorMaxsulot(e){
        input.miqdorMaxsulot = e.target.value
        let a = {...input}
        setInput(a)
    }

    function fermabrandnomi(e){
        input.brandnomi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function fermaqisqaeslatma(e){
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bazalar(e){
        input.bazalar = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolim(e){
        input.bolim = e.target.value
        let a = {...input}
        setInput(a)
    }
    function bolim2(e){
        input.bolim2 = e.target.value
        let a = {...input}
        setInput(a)
    }
    function ogohmiqdor(e){
        input.ogohmiqdor = e.target.value
        let a = {...input}
        setInput(a)
    }
    function amaldagisoliq(e){
        input.amaldagisoliq = e.target.value
        let a = {...input}
        setInput(a)
    }
    function soliqajralishi(e){
        input.soliqajralishi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function soliqsiznarx(e){
        input.soliqsiznarx = e.target.value
        let a = {...input}
        setInput(a)
    }
    function foydafoiz(e){
        input.foydafoiz = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sotishnarxi(e){
        input.sotishnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function sotibolishnarxi(e){
        input.sotibolishnarxi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function mahsulotrasmi(e){
        input.mahsulotrasmi = e.target.value
        let a = {...input}
        setInput(a)
    }
    function soliqbnnarx(e){
        input.soliqbnnarx = e.target.value
        let a = {...input}
        setInput(a)
    }

    function toggle() {
        setActive(!active)
    }
    function toggle2() {
        setActive2(!active2)
    }
    function toggle3() {
        setActive3(!active3)
    }

    function  editMax(){
        console.log(match.params)
        if(match.params.id !== undefined){
            getMaxsulotRuyxati()
        }
        MaxsulotlarRoyxariReducer.maxsulotlar.map(item=>{
            if(item.id == match.params.id){
                input.mahsulotnomi=item.name
                input.shtrixkod=item.barcode
                input.sotibolishnarxi=item.salePrice
                input.ferma=item.brand.id
                input.bolim= item.category.id
                input.ulcovbirligi=item.measurement.id
                input.foydafoiz=item.minQuantity
                input.sotishnarxi=item.buyPrice
                input.amaldagisoliq=item.tax
                let a ={...input}
                setInput(a)
            }
        })
        console.log(input)
    }


    function saqla(){
        if(match.params.id !== undefined){
            editMaxsulotRuyxati({
                name:input.mahsulotnomi,
                quantity:input.miqdorMaxsulot,
                barcode: input.shtrixkod,
                brandId:input.ferma,
                categoryId:input.bolim,
                measurementId:input.ulcovbirligi,
                photoIds:[2],
                minQuantity:input.foydafoiz,
                buyPrice:input.sotishnarxi,
                salePrice:input.sotibolishnarxi,
                tax:input.amaldagisoliq,
                branchId:[1],
                expireDate:null,
                dueDate:null,
                id:match.params.id,
            })
            console.log('edit')
        }else{
            saveMaxsulotRuyxati({
                name:input.mahsulotnomi,
                quantity:   input.miqdorMaxsulot     ,                                 /*input.foydafoiz,*/
                barcode: input.shtrixkod,
                brandId:   input.ferma,                      /*input.ferma,*/
                categoryId: input.bolim,                     /*  input.bolim,*/
                measurementId: input.ulcovbirligi,             /*  input.ulcovbirligi,*/
                photoIds:[1],
                minQuantity:   input.foydafoiz,                    /*   input.foydafoiz,*/
                buyPrice:      input.sotishnarxi,               /*   input.sotishnarxi,*/
                salePrice:input.sotibolishnarxi,
                tax:input.amaldagisoliq,               /* input.amaldagisoliq,*/
                branchId:[1],
                expireDate: null,
                dueDate:null
            })
            console.log('save')
        }
        console.log('ishladi');
    }

    function saqlakg(){
        savekg({
            name:input.ulcovnomi,
            businessId:users.businessId
        })
        toggle()
        input.ulcovnomi=''
        input.ulcovqisqanomi=''
        input.ulcovunlikasr=''
    }
    function saqlabrand(){
        saveFirma({
            name:input.brandnomi,
            businessId:users.businessId
        })
        toggle2()
        input.brandnomi=''
        input.qisqaeslatma=''
    }

    useEffect(()=>{
        getMaxsulotRuyxati(users.businessId)
        getBolim(users.businessId)
        editMax()
    },[MaxsulotlarRoyxariReducer.current])

    useEffect(()=>{
        getkg(users.businessId)
    },[kgreducer.current])

    useEffect(()=>{
        getFirma(users.businessId)
    },[FirmaReducer.current])

    return (
        <div className={'row mt-5 contanerT'}>
            <h4 className={'text-center'}>Mahsulot qo`shish / Taxrirlash</h4>
            <div className="col-10 col-sm-10 border p-4 justify-content-center offset-1 d-flex" >
                <div className="row">
                    <div className="inputs col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'maxNomi'}>Mahsulot nomi</label>
                        <input type="text" value={input.mahsulotnomi} onChange={mahsulotnomi} id={'maxNomi'} className={'form-control'}/>

                        <label className={'mt-3'} htmlFor={'olcov'}>O`lchov birligi</label>
                        <div className={'d-flex justify-content-between '}>

                            <select name="" id={'olcov'} onChange={ulcovbirligi} value={input.ulcovbirligi} className={'form-control'}>
                                <option value="">Tanlash</option>
                                {
                                    kgreducer.kg.map((item,index)=>
                                        <option value={item.id}>
                                        {item.name}
                                    </option>)
                                }
                            </select>
                            <h2 onClick={toggle} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol'}>Bo`lim</label>
                        <select name="" onChange={bolim} value={input.bolim} className={'form-control'} id={'bol'}>
                            <option value="">Tanlash</option>
                            {
                                BolimReducer.bolimlar.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                

                    <div className="col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'shtrixKod'}>Shtrix kod</label>
                        <input type="number" id={'shtrixKod'} value={input.shtrixkod} onChange={shtrixkod} className={'form-control'}/>

                        <label className='mt-3' htmlFor={'firma'}>Firma</label>
                        <div className={'d-flex'}>

                            <select name="" value={input.ferma} onChange={ferma} id={'firma'} className={'form-control'}>
                                <option value="#">Tanlash</option>
                                {
                                    FirmaReducer.firmalar.map(item=> <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h2 onClick={toggle2} style={{cursor: 'pointer'}}>+</h2>
                        </div>
                        <label className={'mt-3'} htmlFor={'bol2'}>Bo`lim ichida bolim</label>
                        <select name="" id={'bol2'} value={input.bolim2} onChange={bolim2} className={'form-control'}>
                            <option value="">Tanlash</option>
                            <option value="">Tanlash2</option>
                        </select>
                    </div>

                    <div className="col-4 col-sm-12">
                        <label className='mt-3' htmlFor={'shtrixKod'}>Shtrix kod turi</label>
                        <select name="" id={'shtrixKod'} onChange={shtrixkodturi} value={input.shtrixkodturi} className={'form-control'}>
                            <option value="">Cude</option>
                        </select>
                        <label htmlFor="" className={'mt-3'}>Bazalar</label>
                        <input type="text" value={input.bazalar} onChange={bazalar} className={'form-control'}/>
                        <label htmlFor={'ppp'} className={'mt-4'}>Miqdori</label>
                        <input className={'form-control'} type="number" value={input.miqdorMaxsulot} onChange={miqdorMaxsulot}/>
                    </div>
                </div>
            </div>
            <div className="row mt-4 justify-content-center d-flex align-items-center">
                <div className="col-4 col-sm-10 d-flex align-items-center">
                    <label className='' onClick={toggle3} htmlFor={'miqdor'}>Miqdorni nazorat qilasizmi
                        ?</label>
                    <input className='ms-2' type="checkbox"  id={'miqdor'}/>
                </div>
           
                <div className="col-4 col-sm-10">
                    {
                        active3 ?
                            <div>
                                <label htmlFor={'ogoh'}>Ogohlantiruvchi miqdor</label>
                                <input type="number" value={input.ogohmiqdor} onChange={ogohmiqdor} className={'form-control'} id={'ogoh'}/>
                            </div>
                            : ''
                    }
                    <label htmlFor={'mahRasmi'}>Mahsulot rasmi</label>
                    <input type="file" value={input.mahsulotrasmi} onChange={mahsulotrasmi} id={'mahRasmi'} style={{background:'transparent'}}/>
                </div>
            </div>

            <Modal isOpen={active} toggle={toggle}>
                <ModalHeader>
                    Birlik qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Nomi</label>
                    <input type="text" onChange={ulcovNomi} value={input.ulcovnomi}  className={'form-control'} id={'nomi'}/>
                    <label htmlFor={'nomi2'}>Qisqa nom masalan Kg,MM</label>
                    <input type="text" id={'nomi2'} value={input.ulcovqisqanomi} onChange={ulcovqisqaNomi} className={'form-control'}/>
                    <label htmlFor={'onli'}>O`nli kasrlarga ruxsat berish</label>
                    <select name="" id={'onli'} value={input.ulcovunlikasr} onChange={ulcovunlikasr} className={'form-control'}>
                        <option value="">Tanlash</option>
                        <option value="">Ha</option>
                        <option value="">Yuq</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <button onClick={saqlakg} className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle}>CHIQISH</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={active2} toggle={toggle2}>
                <ModalHeader>
                    Brand qo`shish
                </ModalHeader>
                <ModalBody>
                    <label htmlFor={'nomi'}>Brand Nomi</label>
                    <input onChange={fermabrandnomi} value={input.brandnomi} type="text" className={'form-control'} id={'nomi'}/>
                    <label htmlFor={'nomi2'}>Qisqa eslatma</label>
                    <input type="text" id={'nomi2'} onChange={fermaqisqaeslatma}  value={input.qisqaeslatma} className={'form-control'}/>
                </ModalBody>
                <ModalFooter>
                    <button onClick={saqlabrand} className={'btn btn-primary'}>SAQLASH</button>
                    <button className={'btn btn-primary'} onClick={toggle2}>CHIQISH</button>
                </ModalFooter>
            </Modal>

            <div className="col-md-10 mt-5 offset-1 border">
                <label htmlFor={'sol'}>Amaldagi soliq</label>
                <select name="" id={'sol'} value={input.amaldagisoliq} onChange={amaldagisoliq} className={'form-control'}>
                    <option value="">Tanlash</option>
                    <option value="">Mavjud emas </option>
                </select>
                <label htmlFor={'turiMah'} className={'mt-3'}>Soliqning ajratilishi</label>
                <select name="" className={'form-control'} value={input.soliqajralishi} onChange={soliqajralishi} id={'turiMah'}>
                    <option value="">Narxga qo`shiladi</option>
                    <option value="">Narx ichida</option>
                </select>
                <div className="table-responsive"> 
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>Olish narxi</th>
                            <th>Foyda foizda(%)</th>
                            <th>Sotish narxi</th>
                            <th>Sotib olish  narxi</th>
                            <th>Mahsulot rasmi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor={'soliqszNarx'}>Soliqsiz narx </label>
                                <input type="number" value={input.soliqsiznarx} onChange={soliqsiznarx} id={'soliqszNarx'} style={{border:'2px solid gray'}}/><br/><p></p>
                               <label htmlFor={'soliqszNarx2'}>Soliq bn narx </label>
                                <input type="number" id={'soliqszNarx2'} value={input.soliqbnnarx} onChange={soliqbnnarx} style={{border:'2px solid gray'}}/>
                            </td>
                            <td>
                                <label htmlFor={'foy'}>Foyda foizda</label><br/>
                                <input type="text" id={'foy'} placeholder={'foyda'} value={input.foydafoiz} onChange={foydafoiz}
                                       style={{border:'1px solid gray',padding:'10px'}}/>
                            </td>
                            <td>
                                <label htmlFor={''}>Sotish narxi</label><br/>
                                <input type="text" placeholder={'soliqsiz narxi'} value={input.sotishnarxi} onChange={sotishnarxi}
                                       style={{border:'1px solid gray',padding:'10px'}}/>
                            </td>
                            <td>
                                <label htmlFor={''}>Sotib olish narxi</label><br/>
                                <input type="text" placeholder={'soliqsiz narxi'} value={input.sotibolishnarxi} onChange={sotibolishnarxi}
                                       style={{border:'1px solid gray',padding:'10px'}}/>
                            </td>
                            <td>
                                <p className='m-0' >mahsulot rasmi</p>
                                <input type="file"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className='d-flex justify-content-end'>
                    <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot'}><button className={'btn btn-success mt-4'} onClick={saqla}>Saqlash</button></Link>
                </div>
            </div>
        </div>

    )
}

export default connect((MaxsulotlarRoyxariReducer,users,kgreducer,FirmaReducer,BolimReducer), {
    getMaxsulotRuyxati,
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati,
    getkg,
    savekg,
    getFirma,
    saveFirma,
    getBolim,
}) (Taxrirlash)
