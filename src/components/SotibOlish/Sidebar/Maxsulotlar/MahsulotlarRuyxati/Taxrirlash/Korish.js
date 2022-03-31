import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati, editMaxsulotRuyxati,
    getMaxsulotRuyxati,
    getMaxsulotRuyxati3, saveMaxsulotRuyxati
} from "../../reducer/MaxsulotlarRoyxariReducer";
import users from "../../../../../../reducer/users";
import FirmaReducer, {getFirma} from "../../reducer/FirmaReducer";

function Korish({active,toggle,mahsulot,MaxsulotlarRoyxariReducer,maxsulotlar}){
    return(
        <Modal isOpen={active} toggle={toggle}>
            <ModalHeader>
                Korish
            </ModalHeader>
            <ModalBody>
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>Mahsulot</th>
                            <th>Baza</th>
                            <th>Sotib olish narxi</th>
                            <th>Sotish narxi</th>
                            <th>Qolgan mahsulot</th>
                            <th>Firma</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        MaxsulotlarRoyxariReducer.maxsulotlar.filter(val=>{
                            if (mahsulot == val.id){
                                return val
                            }
                        }).map(item=><tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.branch.name}</td>
                            <td>{item.buyPrice}</td>
                            <td>{item.salePrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.brand.name}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-primary'}>Print</button>
                <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
            </ModalFooter>
        </Modal>
    )
}
export default connect((MaxsulotlarRoyxariReducer, users, FirmaReducer), {
    getMaxsulotRuyxati,
    getMaxsulotRuyxati3,
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati,
    getFirma
})(Korish)
