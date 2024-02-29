import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AvailableQuizzesTable from "../../components/AvailableQuizzesTable";
import { QuizConfirmModal } from "../../components/QuizConfirmModal";
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
export default function StudentHome() {
    const quizsInfo = useLoaderData();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            Active Quizzes
            <AvailableQuizzesTable
                handleShow={handleShow}
                quizzes={quizsInfo.quizzes}
            />
            <QuizConfirmModal
                show={show}
                handleClose={handleClose}
            ></QuizConfirmModal>
        </div>
    );
}
