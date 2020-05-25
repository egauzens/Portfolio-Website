import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

const ImageModal = ({show, onHide, modalTitle, modalImage}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <ModalHeader>
                <ModalTitle className="w-100 text-center">
                    {modalTitle}
                </ModalTitle>
                <button onClick={onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
                <ModalBody>
                    <div className="container-fluid">
                        <img className="w-100" src={modalImage} alt=""/>
                    </div>
                </ModalBody>
        </Modal>
    );
}

export default ImageModal;