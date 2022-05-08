import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AlertModal = (props) => {
  const { show, onHandleClose } = props;

  return (
    <>
      <Modal show={show}>
        <Modal.Header></Modal.Header>
        <Modal.Body>El campo seleccionado no puede estar vacío</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertModal;
