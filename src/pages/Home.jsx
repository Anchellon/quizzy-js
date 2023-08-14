import Button from "react-bootstrap/esm/Button";
// import { Link } from "react-router-dom";
import QuizzesTable from "../components/QuizzesTable";
import { useState } from "react";
import { NewQuizModal } from "../components/NewQuizModal";
export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            List Of Quizzes
            {/* <Link to="create-new-quiz"> */}
            <Button className="float-end" size="lg" onClick={handleShow}>
                Add Quiz +
            </Button>
            <NewQuizModal show={show} handleClose={handleClose}></NewQuizModal>
            <QuizzesTable />
            {/* </Link> */}
        </div>
    );
}
