import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import QuizzesTable from "../components/QuizzesTable";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      List Of Quizzes
      {/* <Link to="create-new-quiz"> */}
      <Button className="float-end" size="lg" onClick={handleShow}>
        Add Quiz +
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Quiz Name</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Quiz
          </Button>
        </Modal.Footer>
      </Modal>
      <QuizzesTable />
      {/* </Link> */}
    </div>
  );
}
