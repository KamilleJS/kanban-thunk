import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";
import {deleteCard} from "./redux/actions";


const ModalDelete = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteButtonHandler = () => {
        props.deleteCardItem(props.id);
        toggle();
    }

    return (
        <>
            <button className="btn btn-outline-danger" onClick={toggle}>Delete</button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {props.name}?</ModalHeader>
                <ModalBody>
                    Are you sure?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteCardItem: (cardId) => dispatch(deleteCard(cardId)),
})

export default connect(null, mapDispatchToProps)(ModalDelete);