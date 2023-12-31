import { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";
import { useLoaderData } from "react-router-dom";
export async function loader(id) {
    const res = await fetch(`http://localhost:3000/api/quiz/${id}`, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
    if (!res.ok) {
        throw {
            message: "Failed to fetch quizes",
            statusText: res.statusText,
            status: res.status,
        };
    }

    const quizzes = await res.json();
    return quizzes;
}

import { NewQuestion } from "./NewQuestion";
export default function Quiz() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const data = useLoaderData();
    console.log(data);
    let qnId = data.quiz._id;
    console.log(qnId);
    // your form submit function which will invoke after successful validation
    // you can watch individual input by pass the name of the input

    return (
        <div>
            {JSON.stringify(data)}
            <QuestionsTable></QuestionsTable>
            <NewQuestion
                show={show}
                handleClose={handleClose}
                qnId={qnId}
            ></NewQuestion>
            <Button
                className="float-end"
                size="lg"
                onClick={() => {
                    setShow(true);
                }}
            >
                Add Question +
            </Button>
        </div>
    );
}
