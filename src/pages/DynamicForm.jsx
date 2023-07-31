import { useForm, useFieldArray } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//stackoverflow.com/questions/74921479/how-to-work-drag-and-drop-for-nested-array-in-usefieldarray
// https://codesandbox.io/s/watch-usewatch-calc-forked-t5ltk2?file=/src/fieldArray.js
// https://www.react-hook-form.com/form-builder/
// https://www.youtube.com/watch?v=tvEeNPy7OVA&list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s&index=15
export default function DynamicForm() {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            options: [{ optionText: "" }],
        },
    });
    const { fields, append, remove, move } = useFieldArray({
        control,
        name: "options",
    });
    const onSubmit = (data) => console.log("data", data);
    return (
        <div>
            <div>Quiz Name</div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                Create Question Setup
                <Form.Control
                    {...register("questionText")}
                    type="text"
                    id="question-text"
                    aria-describedby="questionText"
                    placeholder="Enter Question Text"
                />
                <br />
                List of options
                <div>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <Form.Control
                                    type="text"
                                    key={field.id}
                                    placeholder="Add Option"
                                    {...register(`options.$(index).optionText`)}
                                ></Form.Control>
                                {index > 0 && (
                                    <Button
                                        type="button"
                                        onClick={() => remove(index)}
                                    >
                                        remove
                                    </Button>
                                )}
                            </div>
                        );
                    })}
                    {
                        <Button
                            type="button"
                            onClick={() => append({ optionText: "" })}
                        >
                            Add option
                        </Button>
                    }
                </div>
                <button>Submit</button>
            </Form>
        </div>
    );
}
