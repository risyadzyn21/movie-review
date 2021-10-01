import React, { useState } from "react";
import LoginFormCss from './LoginForm.module.css'
import './ModalForm.css'
import MilanTVLogo from '../../assets/MilanTVLogo.svg';
import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";

function LoginForm({ handleSwitch }) {


  return (
    <>

      {/* <Button className="close-btn" variant="light"> X </Button> */}

      <h3 className={LoginFormCss.logo}>
        <img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV
      </h3>

      <Form className={LoginFormCss.formContainer}>

        <Form.Group className={LoginFormCss.emailInput} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className={LoginFormCss.formControl} type="email" />
        </Form.Group>

        <Form.Group className={LoginFormCss.passwordInput} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={LoginFormCss.formControl} type="password" />
        </Form.Group>

        <Button className={LoginFormCss.loginBtn} variant="danger" type="submit">
          Log In
        </Button>
        <p className={LoginFormCss.signupIf}>Don’t have an account?
          <span onClick={() => handleSwitch('RegisterForm')} className={LoginFormCss.signupIfBtn}>Sign Up</span></p>
      </Form>

    </>
  );
}

export default LoginForm