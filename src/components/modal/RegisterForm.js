import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterFormCss from "./RegisterForm.module.css";
import "./ModalForm.css";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MilanTVLogo from "../../assets/MilanTVLogo.svg";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { getRegisterAsync } from "../../redux/actions";

function RegisterForm({ handleSwitch,handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();

  function validateForm() {
    return fullName.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await dispatch(getRegisterAsync(email, password, fullName))
    console.log(response, "signUp")

    if(response.status === 200)  {
      handleClose()
    }
  }

  return (
    <>
      {/* <Button className="close-btn" variant="light"> X </Button> */}

      <h3 className={RegisterFormCss.logo}>
        <img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV
      </h3>

      <Form className={RegisterFormCss.formContainer} onSubmit={handleSubmit}>
        <Form.Group
          className={RegisterFormCss.fullnameInput}
          controlId="formFullName"
        >
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            className={RegisterFormCss.formControl}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className={RegisterFormCss.emailInput}
          controlId="formEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={RegisterFormCss.formControl}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className={RegisterFormCss.passwordInput}
          controlId="formPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={RegisterFormCss.formControl}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className={RegisterFormCss.signupBtn}
          variant="danger"
          type="submit"
          disabled={!validateForm()}
        >
          Sign Up
        </Button>
        <p className={RegisterFormCss.loginIf}>
          Already have an account?
          <span
            onClick={() => handleSwitch("LoginForm")}
            className={RegisterFormCss.loginIfBtn}
          >
            Log in
          </span>
        </p>
      </Form>
    </>
  );
}

export default RegisterForm;
