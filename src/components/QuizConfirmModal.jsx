import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
export const QuizConfirmModal = ({ show, handleClose, quizID }) => {
    const navigate = useNavigate();
    console.log(quizID);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to take the quiz?</Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            navigate(`/student/test/${quizID}`);
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
