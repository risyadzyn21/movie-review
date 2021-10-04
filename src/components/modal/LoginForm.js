import React, { useState } from "react";
import LoginFormCss from './LoginForm.module.css'
import './ModalForm.css'
import MilanTVLogo from '../../assets/MilanTVLogo.svg';
import {
  Form,
  Button
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getLoginAsync } from "../../redux/actions";
import { Login } from "../../services";




function LoginForm({ handleSwitch }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const nama = e.target.name; // text


  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoginAsync(email, password))
  }

  return (
    <>

      {/* <Button className="close-btn" variant="light"> X </Button> */}

      <h3 className={LoginFormCss.logo}>
        <img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV
      </h3>

      <Form onSubmit={handleSubmit} className={LoginFormCss.formContainer}>

        <Form.Group className={LoginFormCss.emailInput} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className={LoginFormCss.formControl}
            name='email'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className={LoginFormCss.passwordInput} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={LoginFormCss.formControl}
            name='password'
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button className={LoginFormCss.loginBtn} variant="danger" type="submit" disabled={!validateForm()}>
          Log In
        </Button>
        <p className={LoginFormCss.signupIf}>Don’t have an account?
          <span onClick={() => handleSwitch('RegisterForm')} className={LoginFormCss.signupIfBtn}>Sign Up</span></p>
      </Form>

    </>
  );
}

export default LoginForm