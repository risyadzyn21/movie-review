import React, { useState } from "react";
import './RegisterForm.css'
import MilanTVLogo from '../../MilanTVLogo.svg';
import {
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Form,
  Button,
  Modal,
  OverlayTrigger
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

          <h2><img src={MilanTVLogo} alt="MilanTVLogo" /> MilanTV</h2>
          <Form>
            <Form.Group className="field fullname" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="field email" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="field password" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button className="signup-btn" variant="danger" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>Already have an account? <a href='#'>Log in</a></p>
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