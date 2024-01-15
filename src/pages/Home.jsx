import Button from "react-bootstrap/esm/Button";
// import { Link } from "react-router-dom";
import QuizzesTable from "../components/QuizzesTable";
import { useState } from "react";
import { NewQuizModal } from "../components/NewQuizModal";
import { useLoaderData } from "react-router-dom";
export async function loader(id) {
    const qzInfo = await fetch(`http://localhost:3000/api/quiz/`, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res.json());
    return qzInfo;
}
export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const quizsInfo = useLoaderData();
    console.log(quizsInfo);
    return (
        <div>
            List Of Quizzes
            {/* <Link to="create-new-quiz"> */}
            <Button className="float-end" size="lg" onClick={handleShow}>
                Add Quiz +
            </Button>
            <NewQuizModal show={show} handleClose={handleClose}></NewQuizModal>
            <QuizzesTable quizzes={quizsInfo.quizzes} />
            {/* </Link> */}
        </div>
    );
}
