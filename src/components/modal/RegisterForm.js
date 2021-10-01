import React, { useState } from "react";
import RegisterFormCss from './RegisterForm.module.css'
import './ModalForm.css'
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MilanTVLogo from '../../assets/MilanTVLogo.svg';
import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";

function RegisterForm({ handleSwitch }) {

  return (
    <>

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
          <span onClick={() => handleSwitch('LoginForm')} className={RegisterFormCss.loginIfBtn}>Log in</span>
        </p>
      </Form>


    </>
  );
}

export default RegisterForm

