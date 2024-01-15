import { useState } from "react";
import { Button } from "react-bootstrap";
import QuestionsTable from "../components/QuestionsTable";
import { NewQuestion } from "../components/NewQuestion";
import { useLoaderData } from "react-router-dom";
export async function loader(id) {
    const qzInfo = await fetch(`http://localhost:3000/api/quiz/${id}`, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res.json());
    const qnInfo = await fetch(
        `http://localhost:3000/api/quiz/${id}/questions`,
        {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }
    ).then((res) => res.json());
    // if (!qzInfo.ok) {
    //     throw {
    //         message: "Failed to fetch quizes",
    //         statusText: qzInfo.statusText,
    //         status: qzInfo.status,
    //     };
    // }
    // if (!qnInfo.ok) {
    //     throw {
    //         message: "Failed to fetch quizes",
    //         statusText: qnInfo.statusText,
    //         status: qnInfo.status,
    //     };
    // }

    const allData = await Promise.all([qnInfo, qzInfo]);
    let data = {};
    data.qnInfo = allData[0];
    data.qzInfo = allData[1];
    return data;
}

export default function Quiz() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const data = useLoaderData();
    console.log(data.qnInfo);
    // let qzId = data.qnInfo[0];
    let qzId = data.qzInfo.quiz._id;
    // console.log(qzId);
    // your form submit function which will invoke after successful validation
    // you can watch individual input by pass the name of the input

    return (
        <div>
            {JSON.stringify(data.qnInfo)}
            <h1>{data.qzInfo.quiz.name}</h1>
            {/* {JSON.stringify(data)} */}
            <QuestionsTable questions={data.qnInfo}></QuestionsTable>
            <NewQuestion
                show={show}
                handleClose={handleClose}
                qzId={qzId}
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
