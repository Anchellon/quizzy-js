import { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";

import { NewQuestion } from "./NewQuestion";
export default function Quiz() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // your form submit function which will invoke after successful validation
    // you can watch individual input by pass the name of the input

    return (
        <div>
            Quiz Name
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
