import React, { useState } from "react";
import RegisterFormCss from './RegisterForm.module.css'
import './ModalForm.css'
import MilanTVLogo from '../../MilanTVLogo.svg';
import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";

function RegisterForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>

          {/* <Button className="close-btn" variant="light"> X </Button> */}

          <h3 className={RegisterFormCss.logo}>
            <img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV
          </h3>

          <Form className={RegisterFormCss.formContainer}>
            <Form.Group className={RegisterFormCss.fullnameInput} controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control className={RegisterFormCss.formControl} type="email" />
            </Form.Group>

            <Form.Group className={RegisterFormCss.emailInput} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className={RegisterFormCss.formControl} type="email" />
            </Form.Group>

            <Form.Group className={RegisterFormCss.passwordInput} controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className={RegisterFormCss.formControl} type="password" />
            </Form.Group>
            <Button className={RegisterFormCss.signupBtn} variant="danger" type="submit">
              Sign Up
            </Button>
            <p className={RegisterFormCss.loginIf}>Already have an account?
              <span className={RegisterFormCss.loginIfBtn}>Log in</span></p>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterForm

// function RegisterForm() {
//   return (
//     <>

//     </>
//   )
// }

// export default RegisterForm