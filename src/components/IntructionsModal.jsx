import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export const IntructionsModal = ({setShow, show, userName}) => {

    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate('/');
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome {userName}!</Modal.Title>
        </Modal.Header>
        <Modal.Body><ul>
            <li className = 'lead'>Anagrams is a words game! <strong>As you flip the tiles, look for words.</strong></li>
            <li className = 'lead'>Click the letters to make your word. (4 letter minimum)</li>
            <li className = 'lead'><strong>You can make new words out of the words you have by adding letters!</strong></li>
            <li className = 'lead'>To do this, you must change the meaning of the word.</li>
            <li className = 'lead'>For example: "race" + "p" can become "pacer". Then, "pacer" + "l" + "e" can become "replace".</li>
            </ul></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Let's play!
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

