import './taxrir.css'

// import {Link,Route,Switch} from "react-router-dom";
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap";
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import LavozimReducer, {getLavozim, saveLavozim} from "../../reducer/LavozimReducer";
import XodimReducer, {saveXodim,getXodim,editXodim} from "../../reducer/XodimReducer";
import {Link} from 'react-router-dom'
import users from "../../../../../../reducer/users";
import branchreducer,{getbranch} from "../../../../../../reducer/branchreducer";
import {toast} from "react-toastify";
import {savephoto} from "../../../../../../reducer/photoreducer";
function Taxrirlash({getLavozim,saveXodim,LavozimReducer,getXodim,XodimReducer,users,match,editXodim,getbranch,branchreducer}) {

    useEffect(()=>{
       getLavozim(users.businessId)
        getbranch(users.businessId)
        editx()
    },[])

    const [input, setInput] = useState(
        {
            username: '',
            usernameplace: 'Mr/Mrs/Miss',
            firstName: '',
            firstNameplace: 'Ismi',
            lastName: '',
            lastNameplace: 'Familiyasi',
            roleName:'',
            email: '',
            parol: '',
            parolplace: 'Parolni kiriting',
            parolTakror:'',
            parolTakrorplace:'Parolni kiriting',
            barchacheck: '',
            checkId:'',
            checkIdinput: null,
            photoid:'',
            branchid:''
        }
    );

    function onchangeuserName(event){
        input.username = event.target.value
        let a = {...input}
        setInput(a)
    }





    function barchacheck(event){
        input.barchacheck = event.target.checked
        let a = {...input}
        setInput(a)
    }

    function checkId(event){
        {
            branchreducer.branch.map(item=>{
                console.log(branchreducer.branch + '  3das ')
            })
        }
    }
    function onchangefirstName(event){
        input.firstName = event.target.value
        let a = {...input}
        setInput(a)
    }
    function onchangelastName(event){
        input.lastName = event.target.value
        let a = {...input}
        setInput(a)
    }
    function onchangeroleName(event){
        input.roleName = (event.target.value)
        let a = {...input}
        setInput(a)
    }
    function onchangeemail(event){
        input.roleName = event.target.value
        let a = {...input}
        setInput(a)
    }
    function onchangeparol(event){
        input.parol = event.target.value
        let a = {...input}
        setInput(a)
    }
    function onchangeparolTakror(event){
        input.parolTakror = event.target.value
        let a = {...input}
        setInput(a)
    }

    function selectbranch(e){
        console.log(e)
        input.branchid = e.target.value
        let a = {...input}
        setInput(a)
    }

    function editx(){
        if(match.params.id !== undefined){
            getXodim(users.businessId)
        }
        XodimReducer.xodimlar.map(item=>{
            if(item.id == match.params.id){
                input.username=item.username
                input.firstName=item.firstName
                input.lastName=item.lastName
                input.roleName=item.role.id
                input.photoid=item.photoId
                input.branchid=item.branches[0].id
                let a ={...input}
                setInput(a)
            }
        })
    }

    function saqla(){

        if(match.params.id !== undefined){
            editXodim({
                firstName: input.firstName,
                lastName: input.lastName,
                username: input.username,
                password: '',
                roleId: input.roleName,
                branchId:[input.branchid],
                businessId: users.businessId,
                enabled: true,
                photoId: null,
                id:match.params.id
            })

        }
        else {
            if (input.username === '' || input.firstName === '' || input.lastName==="" || input.parol === '' ){
                    let f = document.getElementById('login1')
                    let f2 = document.getElementById('ismi')
                    let f3 = document.getElementById('login2')
                    f.classList.add('placecolor')
                    f2.classList.add('placecolor')
                    f3.classList.add('placecolor')
                 input.usernameplace= "Ma'lumot kiriting !"
                 input.firstNameplace= "Ma'lumot kiriting !"
                 input.lastNameplace= "Ma'lumot kiriting !"
                let a ={...input}
                setInput(a)
                toast.warn("Login va Parolni ham to'liq kiriting")

            }
            else{
                saveXodim({
                    firstName: input.firstName,
                    lastName: input.lastName,
                    username: input.username,
                    password: parseInt(input.parolTakror),
                    roleId: input.roleName === '' ? LavozimReducer.lavozimlar[0].id : input.roleName,
                    branchId: [input.branchid === '' ? branchreducer.branch[0].id : input.branchid],
                    businessId: users.businessId,
                    enabled: true,
                    photoId: null
                })
            }


        }
        if (input.parol === input.parolTakror){
            console.log('Parol mos');
        }else {
            alert('= = - - > ERROR PAROL MOS EMAS')
        }
    }

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    useEffect(()=>{
        getLavozim(users.businessId)
    },[])

    return(
        <div className={' ht'}>
            <h5 className={'text-center mt-4'}>Xodim qo`shish</h5>
                <div className="row">
                    <div className="col-sm-12 col-4 mb-2">
                        <label htmlFor={'login1'}>Login</label>
                        <input type="text" id={'login1'} value={input.username} onChange={onchangeuserName} placeholder={input.usernameplace} className={'form-control'}/>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'ismi'} >Ismi</label>
                        <input type="text" onChange={onchangefirstName} id={'ismi'} placeholder={input.firstNameplace} value={input.firstName} className={'form-control'}/>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'login2'} >Familiyasi</label>
                        <input type="text" id={'login2'} onChange={onchangelastName} value={input.lastName} placeholder={input.lastNameplace} className={'form-control'}/>
                    </div>
                </div>

                <h5 className={'text-center mt-4'}>Lavozim vakolatlari</h5>
                <div className="row mt-4 mb-5">
                    <div className="col-6 d-flex justify-content-center" >
                        {
                            input.parol === '' ?
                                <button className={'btn btn-outline-primary btnLogin'} onClick={toggle}>Login parol berish</button>
                                : <button className={'btn btn-outline-primary btnLogin'} onClick={toggle}>Login parol berish</button>


                        }
                    </div>

                    <div className="col-6 d-flex justify-content-center">
                        {
                            input.username === '' || input.firstName === '' || input.lastName===""  ?
                                <button onClick={saqla} className={'btn btn-outline-danger btnSaqlash'}>Saqlash</button> :
                                <Link to={'/headerthird/hodimlarruyxati'}><button onClick={saqla} className={'btn btn-outline-primary btnSaqlash'}>Saqlash</button></Link>
                        }

                        {/*<Link to={'/headerthird/hodimlarruyxati'}><button onClick={saqla} className={'btn btn-outline-primary btnSaqlash'}>Saqlash</button></Link>*/}
                    </div>

                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Log / Parol
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'log3'} className={'mt-3'}>Parol</label>
                            <input type="text" onChange={onchangeparol} value={input.parol} placeholder={input.parolplace} className={'form-control'} id={'log3'}/>
                            <label htmlFor={'log4'} className={'mt-3'}>Parolni takroran yozing</label>
                            <input type="text" onChange={onchangeparolTakror} value={input.parolTakror} placeholder={input.parolTakrorplace} className={'form-control'} id={'log4'}/>
                            <label htmlFor={'lavozimi'} className={'mt-3'}>Lavozimi</label>
                            <select name="" id={'lavozimi'} onChange={onchangeroleName} value={input.roleName}  className={'form-control'}>
                                {
                                    LavozimReducer.lavozimlar.map((item,index)=>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h5 className={'mt-4 text-center'}>Biriktirilgan baza</h5>
                            {/*<table className={'table mt-2 border'}>*/}
                            {/*    <thead>*/}
                            {/*        <tr>*/}
                            {/*            <th>*/}
                            {/*                <input checked={input.barchacheck} onChange={barchacheck} type="checkbox" />*/}
                            {/*            </th>*/}
                            {/*            <th>Bazalar</th>*/}
                            {/*            <th>Adress</th>*/}
                            {/*        </tr>*/}
                            {/*    </thead>*/}
                            {/*    {*/}
                            {/*        console.log(branchreducer.branch)*/}
                            {/*    }*/}
                            {/*    <tbody>*/}
                            {/*    {*/}
                            {/*        branchreducer.branch.map(item=><tr key={item.id}>*/}
                            {/*            <td><input type="checkbox" checked={input.checkId} onChange={checkId}/></td>*/}
                            {/*            <td>{item.name}</td>*/}
                            {/*            <td>{item.address.city}</td>*/}
                            {/*        </tr>)*/}
                            {/*    }*/}
                            {/*    </tbody>*/}
                            {/*</table>*/}
                            <select value={input.branchid} className={'form-control'} onChange={selectbranch}>
                                {
                                    branchreducer.branch.map(item=>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>

                        </ModalBody>
                        <ModalFooter>
                            {
                                input.parol === input.parolTakror  ? <button className={'btn btn-primary btnSaqlash'} onClick={toggle}>Saqlash</button>
                                    :  <button className={'btn btn-danger btnSaqlash'}>Parol bir xilligini tekshiring</button>


                            }
                            <button className={'btn btn-primary btnLogin'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
        </div>
    )
}

export default connect((LavozimReducer,XodimReducer,users,branchreducer),{getLavozim,saveLavozim,saveXodim,getXodim,editXodim,getbranch}) (Taxrirlash)
