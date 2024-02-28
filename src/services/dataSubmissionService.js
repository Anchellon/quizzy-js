const API_URL = "http://localhost:3000/api/quiz/";
function submitNewQuestion(data, id) {
    let formData = {
        quiz: id,
        options: data.options.map((op) => {
            // console.log(op);
            return op.optionText;
        }),
        questionText: data.questionText,
        correctAnswer: data.correctAnswer,
    };
    // fetch(`http://localhost:3000/api/quiz/${id}`, {
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    // });
    return fetch(`http://localhost:3000/api/question/qz/${id}/`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        // Valid login if we have a status of 2xx (res.ok)
        if (res.ok) return res.json();
        throw new Error("Bad Data!");
    });
}
export default {
    submitNewQuestion,
};
