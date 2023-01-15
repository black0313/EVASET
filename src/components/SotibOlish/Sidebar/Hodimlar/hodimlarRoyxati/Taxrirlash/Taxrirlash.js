import './taxrir.css'
import {useForm} from 'react-hook-form'
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import LavozimReducer, {getLavozim, saveLavozim} from "../../reducer/LavozimReducer";
import XodimReducer, {saveXodim, getXodim, editXodim, getXodimID} from "../../reducer/XodimReducer";
import users from "../../../../../../reducer/users";
import branchreducer, {getbranch} from "../../../../../../reducer/branchreducer";
import {toast} from "react-toastify";
import {savephoto} from "../../../../../../reducer/photoreducer";
import Select from "react-select";
import {useTranslation} from "react-i18next";

function Taxrirlash({
                        getLavozim,
                        saveXodim,
                        LavozimReducer,
                        getXodim,
                        getXodimID,
                        XodimReducer,
                        users,
                        match,
                        editXodim,
                        getbranch,
                        branchreducer
                    }) {

    useEffect(() => {
        getLavozim(users.businessId)
        getbranch(users.businessId)
        if (match.params.id !== undefined) {
            getXodimID(match.params.id)
        }
    }, [])

    const {t} = useTranslation()
    const [input, setInput] = useState(
        {
            photoid: '',
            branchid: [],
            selectvalue: [],
            enabled: true
        }
    );
    const history = useHistory()

    const {register, setValue, handleSubmit, resetField, formState: {errors}} = useForm()
    const {
        register: register2,
        setValue: setValue2,
        handleSubmit: handleSubmit2,
        resetField: resetField2,
        formState: {errors: errors2}
    } = useForm()
    const [formData, setFormData] = useState(null)

    function editx() {

        setValue('username', XodimReducer.oneXodim?.username);
        setValue('firstName', XodimReducer.oneXodim?.firstName);
        setValue('lastName', XodimReducer.oneXodim?.lastName);
        setValue2('roleId', XodimReducer.oneXodim?.role?.id);
        input.photoid = XodimReducer.oneXodim?.photoId
            input.enabled = XodimReducer.oneXodim?.enabled
            input.selectvalue = XodimReducer.oneXodim.branches?.map(({
                                                                         name: label,
                                                                         id: value, ...rest
                                                                     }) => ({label, value, ...rest}));
        let a = {...input}
        setInput(a)
        let ids = []
        XodimReducer.oneXodim?.branches?.map(item => {
            ids.push(item.id)
        })
        let b = {
            roleId: XodimReducer.oneXodim?.role?.id,
            password: '',
            branchId: ids
        }

        setFormData({...b})

    }

    function saqla(data) {
        saveXodim(
            {...data, ...formData, businessId: users.businessId, enabled: true, photoId: null}
        )
    }

    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }

    function changeselect(e) {
        input.selectvalue = e
        input.branchid = []
        e.map(item => {
            let b = input.branchid
            b.push(item.value)
        })
        let a = {...input}
        setInput(a)
    }

    useEffect(() => {
        getLavozim(users.businessId)
        if (match.params.id) {
            editx()
        }
    }, [XodimReducer.current])

    function saveEdit(data) {
        editXodim({
            ...data, ...formData,id:match.params.id, businessId: users.id, photoId: input.photoid, enabled: input.enabled
        })
    }

    function onSubmit(data) {
        if (match.params.id) {
            saveEdit(data)

        } else {
            if (formData === null) {
                toast.warning("Ma`lumotlarni kiriting")
                toggle()
            } else {
                saqla(data)
                history.push('/headerthird/hodimlarruyxati')
            }
        }
    }

    function onSubmit2(data) {
        if (data.password === data.password2) {
            let a = {...data, branchId: input.branchid}
            setFormData({...a})
            toggle()
        } else {
            toast.warning("Parollaringizni tengligini tekshiring")
        }
    }

    return (
        <div className={' ht'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className={'text-center mt-4'}>{t('Employ.13')}</h5>
                <div className="row">
                    <div className="col-sm-12 col-4 mb-2">
                        <label htmlFor={'login1'}>{t('Employ.7')}</label>
                        <input type="text" id={'login1'}
                               {...register('username', {required: true})}
                               placeholder={errors.username ? errors.username?.type === "required" && "Username is required" : 'Login'}

                               className={'form-control'}/>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'ismi'}>{t('Employ.8')}</label>
                        <input type="text" id={'ismi'}
                               {...register('firstName', {required: true})}
                               placeholder={errors.firstName ? errors.firstName?.type === "required" && "FirstName is required" : 'Name'}
                               defaultValue={''}
                               className={'form-control'}/>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <label htmlFor={'login2'}>{t('Employ.9')}</label>
                        <input type="text" id={'login2'}
                               {...register('lastName', {required: true})}
                               placeholder={errors.lastName ? errors.lastName?.type === "required" && "LastName is required" : 'LastName'}
                               defaultValue={''}
                               className={'form-control'}/>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button type={"submit"} className={'btn btn-outline-danger btnSaqlash'}>{t('Buttons.6')}</button>
                </div>
            </form>

            <h5 className={'text-center mt-4'}>{t('Employ.14')}</h5>

            <div className="row mt-4 mb-5">
                <div className="col-6 d-flex justify-content-center">

                    <button className={'btn btn-outline-primary btnLogin'} onClick={toggle}>{t('Employ.15')}
                    </button>

                </div>


                <Modal isOpen={active} toggle={toggle}>
                    <form onSubmit={handleSubmit2(onSubmit2)}>
                        <ModalHeader>
                            {t('Employ.20')}
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor={'log3'} className={'mt-3'}>{t('Employ.16')}</label>
                            <input type="text"
                                   {...register2("password", {required: match.params.id ? false : true})}
                                   placeholder={errors2.password ? errors2.password.type === "required" && "Password is required" : "password"}
                                   defaultValue={''}
                                   className={'form-control'} id={'log3'}/>
                            <label htmlFor={'log4'} className={'mt-3'}>{t('Employ.17')}</label>
                            <input type="text"
                                   {...register2("password2", {required: match.params.id ? false : true})}
                                   placeholder={errors2.password2 ? errors2.password2.type === "required" && "Password2 is required" : "password2"}
                                   className={'form-control'} id={'log4'}/>
                            <label htmlFor={'lavozimi'} className={'mt-3'}>{t('Employ.18')}</label>
                            <select id={'lavozimi'}
                                    {...register2('roleId', {required: true})}
                                    defaultValue={XodimReducer.one}
                                    className={'form-control'}>
                                {
                                    LavozimReducer.lavozimlar.map((item, index) =>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                            <h5 className={'mt-4 text-center'}>{t('Employ.19')}</h5>

                            <Select options={branchreducer.branches} isMulti={true}
                                    defaultValue={input.selectvalue}
                                    class={'form-control'} onChange={changeselect}/>


                        </ModalBody>
                        <ModalFooter>

                            <button className={'btn btn-danger btnSaqlash'} type={"submit"}>{t('Buttons.6')}</button>
                            <button className={'btn btn-primary btnLogin'} type={"button"} onClick={toggle}>{t('Buttons.7')}
                            </button>
                        </ModalFooter>
                    </form>
                </Modal>

            </div>

        </div>
    )
}

export default connect((LavozimReducer, XodimReducer, users, branchreducer), {
    getLavozim,
    saveLavozim,
    saveXodim,
    getXodim,
    editXodim,
    getbranch,
    getXodimID
})(Taxrirlash)
