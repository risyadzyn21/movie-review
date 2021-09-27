import React, { useState } from "react";
import './RegisterForm.css'
import MilanTVLogo from '../../MilanTVLogo.svg';
import {
  Form,
  Button,
  Modal
} from "react-bootstrap";

function LoginForm() {
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

          <h2><img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV</h2>
          <Form>

            <Form.Group className="field email" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="field password" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="chekbox-login">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={'keep me logged in'}
                />
              </div>
            ))}

            <Button className="signup-btn" variant="danger" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginForm

// function RegisterForm() {
//   return (
//     <>

//     </>
//   )
// }

// export default RegisterForm