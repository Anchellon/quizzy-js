import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
export const NewQuizModal = ({ show, handleClose }) => {
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log("Posting");
        setSpinner(true);
        let res = await fetch("http://localhost:3000/api/quiz", {
            method: "post",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(function (data) {
                setSpinner(false);
                console.log("/quiz/" + data.id);
                navigate("/quiz/" + data.id);
            });
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Quiz Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            type="text"
                            placeholder="Enter Quiz Name"
                            id="quiz-name"
                            aria-describedby="quizName"
                            {...register("quizName")}
                        ></Form.Control>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            onClick={handleClose}
                        >
                            Create Quiz
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal show={spinner}>
                <img
                    style={{ background: "grey" }}
                    src="https://i.gifer.com/ZZ5H.gif"
                ></img>
            </Modal>
        </div>
    );
};
