import { useLoaderData } from "react-router-dom";

import AvailableQuizzesTable from "../../components/AvailableQuizzesTable";

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

    return (
        <div>
            Active Quizzes
            <AvailableQuizzesTable quizzes={quizsInfo.quizzes} />
        </div>
    );
}
