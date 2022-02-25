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
function Taxrirlash({getLavozim,saveXodim,LavozimReducer,getXodim,XodimReducer,users,match,editXodim,getbranch,branchreducer}) {

    useEffect(()=>{
       getLavozim()
        getbranch(users.businessId)
        editx()
    },[])

    const [input, setInput] = useState(
        {
            username: '',
            firstName: '',
            lastName: '',
            roleName:1,
            email: '',
            parol: '',
            parolTakror:''
        }
    );

    function onchangeuserName(event){
        input.username = event.target.value
        let a = {...input}
        setInput(a)
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


    function  editx(){
        if(match.params.id !== undefined){
            getXodim()
        }
        XodimReducer.xodimlar.map(item=>{
            if(item.id == match.params.id){
                input.username=item.username
                input.firstName=item.firstName
                input.lastName=item.lastName
                input.parol=''
                input.roleName=item.role.id
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
                password: input.parolTakror,
                roleId: input.roleName,
                branchId:1,
                businessId: 1,
                enabled: false,
                photoId:1,
                id:match.params.id
            })
        }
        else {
            saveXodim({
                firstName: input.firstName,
                lastName: input.lastName,
                username: input.username,
                password: input.parolTakror,
                roleId: input.roleName,
                branchId: 1,
                businessId: 1,
                enabled: false,
                photoId: 1
            })
        }
        if (input.parol === input.parolTakror){
            toggle()
            console.log('Parol mos');
        }else {
            alert('= = - - > ERROR PAROL MOS EMAS')
        }
    }

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    return(
        <div className={' ht'}>
            <h5 className={'text-center mt-4'}>Xodim qo`shish</h5>
                <div className="row">
                    <div className="col-sm-12 col-4 mb-2">
                        <label htmlFor={'login1'}>Login</label>
                        <input type="text" id={'login1'} value={input.username} onChange={onchangeuserName} placeholder={'Mr/Mrs/Miss'} className={'form-control'}/>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'ismi'} >Ismi</label>
                        <input type="text" onChange={onchangefirstName} id={'ismi'} placeholder={'Ismi'} value={input.firstName} className={'form-control'}/>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'login2'} >Familiyasi</label>
                        <input type="text" id={'login2'} onChange={onchangelastName} value={input.lastName} placeholder={'Familiyasi'} className={'form-control'}/>
                    </div>
                </div>

                <div className="row d-flex mt-4 justify-content-between align-items-center">
                    <div className="col-sm-12 col-4 ">
                        <label htmlFor={'email'}>Email</label>
                        <input type="text" onChange={onchangeemail} value={input.email} className={'form-control'} placeholder={'Email'}/>
                    </div>
                    <div className="col-md-8  d-flex pt-4 align-items-center">
                        <label htmlFor={'faol'}>Faolmi ?</label>
                        <input type="checkbox" style={{width:'20px',height:'20px'}} id={'faol'}/>
                    </div>
                </div>
                <h5 className={'text-center mt-4'}>Lavozim vakolatlari</h5>
                <div className="row mt-4 mb-5">
                    <div className="col-6 d-flex justify-content-center" >
                        <button className={'btn btn-outline-primary btnLogin'} onClick={toggle}>Login parol berish</button>
                    </div>

                    <div className="col-6 d-flex justify-content-center">
                        <Link to={'/headerthird/hodimlarruyxati'}><button onClick={saqla} className={'btn btn-outline-primary btnSaqlash'}>Saqlash</button></Link>
                    </div>

                    <Modal isOpen={active} toggle={toggle}>
                        <ModalHeader>
                            Log / Parol
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'log3'} className={'mt-3'}>Parol</label>
                            <input type="text" onChange={onchangeparol} value={input.parol} className={'form-control'} id={'log3'}/>
                            <label htmlFor={'log4'} className={'mt-3'}>Parolni takroran yozing</label>
                            <input type="text" onChange={onchangeparolTakror} value={input.parolTakror} className={'form-control'} id={'log4'}/>
                            <label htmlFor={'lavozimi'} className={'mt-3'}>Lavozimi</label>
                            <select name="" id={'lavozimi'} onChange={onchangeroleName} value={input.roleName}  className={'form-control'}>
                                {
                                    LavozimReducer.lavozimlar.map((item,index)=> <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h5 className={'mt-3'}>Biriktirilgan baza</h5>
                            <div className="col-md-12 d-flex justify-content-between">
                                <div className="col-md-6 d-flex align-items-center">
                                    <label htmlFor={'b1'}>Barcha bazalar</label>
                                    <input type="checkbox"
                                           style={{width:'20px',height:'20px',marginLeft:'20px'}}
                                           id={'b1'}/>
                                    {
                                        branchreducer.branch.map(item=><div>
                                            <label htmlFor={'b1'}>{item.name}</label>
                                            <input type="checkbox"
                                                   style={{width:'20px',height:'20px',marginLeft:'20px'}}
                                                   id={'b1'}/>

                                        </div>)
                                    }
                                </div>
                                {console.log(input)}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className={'btn btn-primary btnSaqlash'} onClick={toggle}>Saqlash</button>
                            <button className={'btn btn-primary btnLogin'} onClick={toggle}>Chiqish</button>
                        </ModalFooter>
                    </Modal>
                </div>
        </div>

    )
}
export default connect((LavozimReducer,XodimReducer,users,branchreducer),{getLavozim,saveLavozim,saveXodim,getXodim,editXodim,getbranch}) (Taxrirlash)