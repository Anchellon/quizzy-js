const API_URL = "http://localhost:3000/api/quiz/";
function submitNewQuestion(data, id) {
    data.id = id;
    console.log(JSON.stringify(data));
    // fetch(`http://localhost:3000/api/quiz/${id}`, {
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    // });
    return fetch(`http://localhost:3000/api/quiz/${id}/question`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    }).then((res) => {
        // Valid login if we have a status of 2xx (res.ok)
        if (res.ok) return res.json();
        throw new Error("Bad Data!");
    });
}
export default {
    submitNewQuestion,
};
