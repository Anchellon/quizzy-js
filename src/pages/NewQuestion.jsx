import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
export const NewQuestion = ({ show, handleClose }) => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            options: [{ optionText: "" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",
    });
    // console.log(show);
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Modal
            show={show}
            onHide={() => {
                handleClose();
            }}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Create Question Setup
                        <Form.Control
                            {...register("questionText")}
                            type="text"
                            id="question-text"
                            aria-describedby="questionText"
                            placeholder="Enter Question Text"
                        />
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    List of options
                    <div>
                        {fields.map((field, index) => {
                            return (
                                <div key={field.id}>
                                    <Form.Control
                                        type="text"
                                        key={field.id}
                                        placeholder="Add Option"
                                        {...register(
                                            `options.$(index).optionText`
                                        )}
                                    ></Form.Control>
                                    {index > 0 && (
                                        <Button
                                            type="button"
                                            onClick={() => remove(index)}
                                        >
                                            remove
                                        </Button>
                                    )}
                                </div>
                            );
                        })}
                        {
                            <Button
                                type="button"
                                onClick={() => append({ optionText: "" })}
                            >
                                Add option
                            </Button>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Create Quiz
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
