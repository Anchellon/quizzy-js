import React, { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";
import { useForm } from "react-hook-form";

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
  const onSubmit: Function = (data: string) => {
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
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <p>This field is required</p>}

            <input type="submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Quiz
          </Button>
        </Modal.Footer>
      </Modal>
      <Button className="float-end" size="lg" onClick={handleShow}>
        Add Question +
      </Button>
    </div>
  );
}
