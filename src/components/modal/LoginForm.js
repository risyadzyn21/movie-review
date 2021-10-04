import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginAsync } from "../../redux/actions";
import LoginFormCss from './LoginForm.module.css'
import './ModalForm.css'
import MilanTVLogo from '../../assets/MilanTVLogo.svg';
import {
  Form,
  Button,
  Modal,
} from "react-bootstrap";

function LoginForm({ handleSwitch,handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  function validateForm() {
    return password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await dispatch(getLoginAsync(email, password))
    console.log(response, "signIn")

    if(response.status === 200)  {
      handleClose()
    }
  }

  return (
    <>

      {/* <Button className="close-btn" variant="light"> X </Button> */}

      <h3 className={LoginFormCss.logo}>
        <img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV
      </h3>

      <Form className={LoginFormCss.formContainer} onSubmit={handleSubmit}>

        <Form.Group className={LoginFormCss.emailInput} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className={LoginFormCss.formControl} 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className={LoginFormCss.passwordInput} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={LoginFormCss.formControl} 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className={LoginFormCss.loginBtn} variant="danger" type="submit">
          Log In
        </Button>
        <p className={LoginFormCss.signupIf}>Don’t have an account?
          <span onClick={() => handleSwitch('RegisterForm')} className={LoginFormCss.signupIfBtn} disabled={!validateForm}>Sign Up</span></p>
      </Form>

    </>
  );
}

export default LoginForm