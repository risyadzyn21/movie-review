import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";



const ModalContainer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default ModalContainer
