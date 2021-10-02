import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";



const ModalContainer = ({ type, handleSwitch, show, handleClose }) => {



  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {type == 'RegisterForm' ? <RegisterForm handleSwitch={handleSwitch} /> : <LoginForm handleSwitch={handleSwitch} />}
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default ModalContainer
