import React from "react";
import { Question } from "./Question";
import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "react-bootstrap";
export const Questions = ({ questions }) => {
    const q1 = questions[0];
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log("data", data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {questions.map((question, index) => {
                return (
                    <Question
                        key={index}
                        register={register}
                        question={question}
                        index={index}
                    ></Question>
                );
            })}
            <br></br>
            <Button type="submit">Submit</Button>
        </Form>
    );
};
