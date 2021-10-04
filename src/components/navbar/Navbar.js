import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import styles from './navbar.module.css';
import { Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';

import ModalContainer from '../modal/ModalContainer';

function Navbars() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('RegisterForm')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSwitch = (type) => {
    setType(type)
  }
  
  return (
    <>
      <div className={styles.Navbar}>
        <Navbar bg="white" expand="lg">
          <span className={styles.logo}>
            <svg width="32" height="32" viewBox="0 0 256 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M250.346 28.075C248.878 22.6486 246.014 17.7014 242.039 13.7263C238.064 9.75112 233.117 6.88661 227.69 5.418C207.824 0 127.87 0 127.87 0C127.87 0 47.9122 0.164 28.0462 5.582C22.6197 7.0507 17.6726 9.91536 13.6976 13.8907C9.72263 17.8661 6.85841 22.8134 5.39019 28.24C-0.618808 63.538 -2.94981 117.324 5.55519 151.21C7.02356 156.636 9.88785 161.584 13.8628 165.559C17.8378 169.534 22.7848 172.398 28.2112 173.867C48.0772 179.285 128.033 179.285 128.033 179.285C128.033 179.285 207.988 179.285 227.853 173.867C233.28 172.399 238.227 169.534 242.202 165.559C246.177 161.584 249.042 156.637 250.51 151.21C256.848 115.862 258.801 62.11 250.346 28.076V28.075Z" fill="#DA291C" />
                <path d="M119.704 133.195C123.429 139.93 133.048 140.108 137.02 133.515L181.102 60.3495C185.076 53.7534 180.416 45.3292 172.717 45.1905L87.3126 43.6513C79.6173 43.5126 74.6565 51.7551 78.3818 58.49L119.704 133.195Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="256" height="180" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className={styles.logoText}>
            <Navbar.Brand href="#">MilanTV</Navbar.Brand>
          </div>
          <Form className="d-flex" id={styles.dflex}>
            <FormControl
              type="search"
              placeholder="search movie"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
          <div className={styles.signInLink}>
            <Nav.Link href="#action1" onClick={handleShow} >Sign in</Nav.Link>
          </div>


          <ModalContainer handleSwitch={handleSwitch} show={show} handleClose={handleClose} type={type} />


        </Navbar>
      </div>
    </>
  );
}

export default Navbars