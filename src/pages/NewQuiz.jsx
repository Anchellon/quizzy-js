import { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
export default function NewQuiz() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div>
      Quiz Name
      <QuestionsTable></QuestionsTable>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Question Setup</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Control
              {...register("questionText")}
              type="text"
              id="question-text"
              aria-describedby="questionText"
              placeholder="Enter Question Text"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create Quiz
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Button className="float-end" size="lg" onClick={handleShow}>
        Add Question +
      </Button>
    </div>
  );
}
