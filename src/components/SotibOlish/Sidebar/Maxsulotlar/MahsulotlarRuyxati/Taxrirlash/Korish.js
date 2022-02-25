import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";

function Korish({active,toggle,mahsulot}){
    return(
        <Modal isOpen={active} toggle={toggle}>
            <ModalHeader>
                Korish
            </ModalHeader>
            <ModalBody>
                <h3>{mahsulot.name}</h3>
                <h3>{mahsulot.ferma}</h3>
                <h3>{mahsulot.pay}</h3>
                <h3>{mahsulot.sotishNarxi}</h3>
                <h3>{mahsulot.ostatka}</h3>
            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-primary'}>Print</button>
                <button className={'btn btn-primary'} onClick={toggle}>Chiqish</button>
            </ModalFooter>
        </Modal>
    )
}
export default Korish