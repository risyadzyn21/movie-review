import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import styles from './navbar.module.css';
import { loginId } from '../../services';
import { useState, useEffect } from 'react'

function NavbarUser() {
    const [userAva, setUserAva] = useState()


    return (
        <>


            <div className={styles.avatar}>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id={styles.dropdownAvatar} >
                        <img src="https://avatars.abstractapi.com/v1/?api_key=beb8da0430524a23bca220e902b59d20&name=Your Name" alt="My Profile" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Help</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    );
}

export default NavbarUser;