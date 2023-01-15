import './korish.css'
import {Link, Route, Switch, useParams} from "react-router-dom";
import UseInfo from "./useInfo/UseInfo";
import DocNote from "./DocNote/DocNote";
import Activate from "./Activate/Activate";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function Korish({match}) {

    const {t} = useTranslation()
    const [pic,setpic] = useState({
        rasm:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYS4ItI44R4hI66qjzhinqY5-Miyb30PelnQ&usqp=CAU'
    })
    // const {name,login,email} = useParams();
    const {name,login,email} = match.params;
    console.log(match.params);
    return(
        <div className={'containerKorish '}>
            <div className="headerBoxK">
                <h4 className={'text-center'}>{t('Buttons.4')}</h4>
                <select name="" id="">
                    <option value="1" >Boshliq</option>
                </select>
            </div>
            <div className="bodyBox mt-3">
                <div className="userCardK">
                    <div className="card mt-2">
                        <div className="card-header justify-content-center d-flex ">
                            <div className="carImgBox">
                                <div className="imgUser2">
                                    <img src={pic.rasm} alt="yuq" />
                                </div>
                                <h5 className={'text-center'}>{name}</h5>
                                <p className={'text-center'}>{login}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="bCard">
                                <h6>{t('Employ.7')}</h6>
                                <p>{login}</p>
                            </div>
                            <div className="bCard">
                                <h6>{t('Employ.11')}</h6>
                                <p>{email}</p>
                            </div>
                            <div className="bCard">
                                <h6>{t('Employ.12')} ?</h6>
                                <p>Faol</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to={'/headerthird/hodimlarruyxati/taxrirlash'}>
                                <button className={'btn btn-primary'} style={{ width: '100%' }}>{t('Buttons.1')}</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="buttonBlockk">
                    <div className='buttonBox'>
                        <Link to={'/headerthird/hodimlarruyxati/view/usInfo'}><th><button className={'btn btn-outline-primary m-2'}>User Info</button></th></Link>
                        <Link to={'/headerthird/hodimlarruyxati/view/docNote'}><th><button className={'btn btn-outline-primary m-2'}>Document & Note</button></th></Link>
                        <Link to={'/headerthird/hodimlarruyxati/view/activities'}><th><button className={'btn btn-outline-primary m-2'}>Activities</button></th></Link>
                    </div>

                    <Switch>
                        <Route path={'/headerthird/hodimlarruyxati/view/usInfo'} component={UseInfo} />
                        <Route path={'/headerthird/hodimlarruyxati/view/docNote'} component={DocNote} />
                        <Route path={'/headerthird/hodimlarruyxati/view/activities'} component={Activate} />
                    </Switch>

                </div>
            </div>

        </div>
    )
}
export default Korish