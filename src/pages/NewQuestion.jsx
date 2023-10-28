import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DevTool } from "@hookform/devtools";
export const NewQuestion = ({ show, handleClose }) => {
    const reorder = (result) => {
        console.log("results are");
        console.log(result);
        console.log("end results");
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        const sourceIndex = source.index;
        const destIndex = destination.index;

        setValue("isCorrect", destIndex);
        move(sourceIndex, destIndex);
    };

    const { register, control, handleSubmit, setValue, getValues } = useForm({
        defaultValues: {
            options: [{ optionText: "" }],
            // isCorrect: null,
        },
    });
    const { fields, append, remove, move } = useFieldArray({
        control,
        name: "options",
    });
    console.log(fields);
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
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    List of options ( Mark the correct option )
                    <DragDropContext onDragEnd={reorder}>
                        <Droppable droppableId="parent">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {fields.map((field, index) => {
                                        return (
                                            <Draggable
                                                key={field.id}
                                                draggableId={field.id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        key={field.id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {/* <Form.Control
                                                            type="text"
                                                            key={field.id}
                                                            placeholder="Add Option"
                                                            _ref={
                                                                ...register(
                                                                    `options.${index}.optionText`
                                                                )
                                                            }
                                                        ></Form.Control>
                                                        Broken work on it Later 
                                                        
                                                        */}
                                                        <div>
                                                            <input
                                                                type="radio"
                                                                {...register(
                                                                    "isCorrect",
                                                                    {
                                                                        required:
                                                                            {
                                                                                value: true,
                                                                                message:
                                                                                    "Please select a correct answer",
                                                                            },
                                                                    }
                                                                )}
                                                                value={index}
                                                            ></input>
                                                            <input
                                                                type="text"
                                                                {...register(
                                                                    `options.${index}.optionText`
                                                                )}
                                                            ></input>
                                                            {index > 0 && (
                                                                <Button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        if (
                                                                            getValues(
                                                                                "isCorrect"
                                                                            ) ==
                                                                            index
                                                                        ) {
                                                                            setValue(
                                                                                "isCorrect",
                                                                                null
                                                                            );
                                                                        }
                                                                        remove(
                                                                            index
                                                                        );
                                                                    }}
                                                                >
                                                                    remove
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {
                                        <Button
                                            type="button"
                                            onClick={() =>
                                                append({ optionText: "" })
                                            }
                                        >
                                            Add option
                                        </Button>
                                    }

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
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
            <DevTool control={control} />
        </Modal>
    );
};
