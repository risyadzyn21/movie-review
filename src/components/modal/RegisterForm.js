import React, { useState } from "react";
import RegisterFormCss from "./RegisterForm.module.css";
import "./ModalForm.css";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MilanTVLogo from "../../assets/MilanTVLogo.svg";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

function RegisterForm({ handleSwitch }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://movieapp-glints.herokuapp.com/api/v1/users/signup", {
        email: values.email,
        password: values.password,
        fullName: values.fullName,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.parse(res.data.token));
      })
      .catch((err) => {
        console.error(JSON.stringify(err));
      });
  };

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
          <Form.Control className={RegisterFormCss.formControl} 
          type= "fullName"
          name= "fullName"
          value={values.fullName}
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className={RegisterFormCss.emailInput}
          controlId="formEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control className={RegisterFormCss.formControl} 
          type="email" 
          name= "email"
          value={values.email}
          onChange={handleChange}
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
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className={RegisterFormCss.signupBtn}
          variant="danger"
          type="submit"
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
