import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import MaxsulotlarRoyxariReducer, {
    deleteMaxsulotRuyxati, editMaxsulotRuyxati,
    getMaxsulotRuyxati,
    getMaxsulotRuyxati3, saveMaxsulotRuyxati
} from "../../reducer/MaxsulotlarRoyxariReducer";
import users from "../../../../../../reducer/users";
import FirmaReducer, {getFirma} from "../../reducer/FirmaReducer";
import {useTranslation} from "react-i18next";

function Korish({active,toggle,mahsulot,MaxsulotlarRoyxariReducer,maxsulotlar}){

    const {t} = useTranslation()

    return(
        <Modal isOpen={active} toggle={toggle}>
            <ModalHeader>
                {t('Buttons.4')}
            </ModalHeader>
            <ModalBody>
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>{t('ProductList.1')}</th>
                            <th>{t('ProductList.8')}</th>
                            <th>{t('ProductList.11')}</th>
                            <th>{t('ProductList.12')}</th>
                            <th>{t('ProductList.13')}</th>
                            <th>{t('ProductList.7')}</th>
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
                <button className={'btn btn-primary'}>{t('ProductEdit.19')}</button>
                <button className={'btn btn-primary'} onClick={toggle}>{t('Buttons.7')}</button>
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
