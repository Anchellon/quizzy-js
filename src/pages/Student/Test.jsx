import React from "react";
import { useLoaderData } from "react-router-dom";
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

    return <div>{JSON.stringify(testinfo)}</div>;
}
