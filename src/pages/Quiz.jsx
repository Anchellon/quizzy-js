import { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";
import { useLoaderData } from "react-router-dom";
export async function loader(id) {
    const res = await fetch(`/api/quiz/${id}`);
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
    // your form submit function which will invoke after successful validation
    // you can watch individual input by pass the name of the input

    return (
        <div>
            {JSON.stringify(data)}
            <QuestionsTable></QuestionsTable>
            <NewQuestion show={show} handleClose={handleClose}></NewQuestion>
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
