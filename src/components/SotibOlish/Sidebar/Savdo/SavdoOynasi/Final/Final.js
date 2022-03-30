import {connect} from "react-redux";
import TradeHistory, {getSavdolarHistory} from "../../reducer/TradeHistory";
import kgreducer from "../../../../../../reducer/kgreducer";
import PayReducer from "../../../../../../reducer/PayReducer";
import MaxsulotlarRoyxariReducer from "../../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import BolimReducer from "../../../Maxsulotlar/reducer/BolimReducer";
import FirmaReducer from "../../../Maxsulotlar/reducer/FirmaReducer";
import users from "../../../../../../reducer/users";
import SavdoOynaReducer from "../../reducer/SavdoOynaReducer";
import MijozGuruxReducer from "../../../Hamkorlar/reducer/MijozGuruxReducer";
import SavdoQoshishReducer from "../../reducer/SavdoQoshishReducer";
import branchreducer from "../../../../../../reducer/branchreducer";
import {useEffect} from "react";

function Final({getSavdolarHistory,TradeHistory}){

    useEffect(()=>{
       getSavdolarHistory()
    },[])

    return(
        <div className={'row'}>
            <div className="col-md-12">
                <table className={'table mt-3'}>
                    <thead>
                    <tr>
                        <th>Sana</th>
                        <th>Name</th>
                        <th>Summa</th>
                        <th>Amallar</th>
                    </tr>
                    </thead>
                    {console.log(TradeHistory.savdolar)}
                    <tbody>
                    {
                        TradeHistory.savdolar.map(item=><tr key={item.id}>
                            <td>{item.name}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
// export default Final
export default connect((kgreducer, PayReducer,TradeHistory, MaxsulotlarRoyxariReducer, BolimReducer, FirmaReducer, users, SavdoOynaReducer, MijozGuruxReducer, SavdoQoshishReducer,branchreducer), {
    getSavdolarHistory
})(Final)