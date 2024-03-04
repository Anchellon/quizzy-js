import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Question = ({ question, register, index }) => {
    const questionText = question.qnText;
    const options = question.options;
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Q{index + 1}. {questionText}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {options.map((option, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        label={`${option}`} //text value displayed
                        {...register(`${question._id}`)}
                        value={index}
                    />
                ))}
            </Card.Body>
        </Card>
    );
};
