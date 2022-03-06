import './korish.css'
import {Link, Route, Switch, useParams} from "react-router-dom";
import UseInfo from "./useInfo/UseInfo";
import DocNote from "./DocNote/DocNote";
import Activate from "./Activate/Activate";

function Korish({match}) {
    // const {name,login,email} = useParams();
    const {name,login,email} = match.params;
    console.log(match.params);
    return(
        <div className={'containerKorish '}>
            <div className="headerBoxK">
                <h4>Ko`rish</h4>
                <select name="" id="">
                    <option value="1" >Boshliq</option>
                </select>
            </div>
            <div className="bodyBox">
                <div className="userCardK">
                    <div className="card mt-2">
                        <div className="card-header justify-content-center d-flex ">
                            <div className="carImgBox">
                                <div className="imgUser2">
                                    <img src="" alt="" />
                                </div>
                                <h5>{name}</h5>
                                <p>{login}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="bCard">
                                <h6>Login</h6>
                                <p>{login}</p>
                            </div>
                            <div className="bCard">
                                <h6>Email</h6>
                                <p>{email}</p>
                            </div>
                            <div className="bCard">
                                <h6>Faolmi ?</h6>
                                <p>Faol</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className={'btn btn-primary'} style={{ width: '100%' }}>Taxrirlash</button>
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