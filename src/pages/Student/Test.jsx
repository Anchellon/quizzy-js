import React from "react";
import { useLoaderData } from "react-router-dom";
import { Questions } from "../../components/Questions";
export async function loader(id) {
    const testInfo = await fetch(
        `http://localhost:3000/api/quiz/student/${id}`,
        {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }
    ).then((res) => res.json());
    return testInfo;
}

export default function Test() {
    const testInfo = useLoaderData();
    const quiz = testInfo.quiz.name;
    const questions = testInfo.questions;
    return (
        <>
            <h1>{quiz}</h1>
            <Questions questions={questions}></Questions>
        </>
    );
}
