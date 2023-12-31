import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const [ show, setShow ] = useState(false);
    const goto = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogOut = () => {
        localStorage.removeItem('userData')
        localStorage.removeItem('userToken')
        handleClose()
        goto('/')

    }
    return (
        <>
            <div  onClick={ handleShow }>
                <i className="fa-solid fa-right-from-bracket"></i> Log Out
            </div>

            <Modal show={ show } onHide={ handleClose } animation={ false }>
                <Modal.Header closeButton>
                    <Modal.Title>Log Out</Modal.Title>
                </Modal.Header>
                <Modal.Body><strong></strong>are you sure to log out ? , if you do that you wil loss some features</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ handleLogOut }>
                        log out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LogOut;