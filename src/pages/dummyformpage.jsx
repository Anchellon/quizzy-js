import { useForm, useFieldArray, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// https://www.react-hook-form.com/form-builder/
let renderCount = 0;
export default function DummyPage() {
  const { register, control, handleSubmit, reset, watch } = useForm();

  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "questions",
    });
  const onSubmit = (data) => console.log("data", data);
  renderCount++;
  return (
    <div>
      <div>Quiz Name</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Field Array </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  {...register(`test.${index}.firstName`, { required: true })}
                />

                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <section>
          <button
            type="button"
            onClick={() => {
              append({ firstName: "appendBill", lastName: "appendLuo" });
            }}
          >
            append
          </button>
          <button
            type="button"
            onClick={() =>
              prepend({
                firstName: "prependFirstName",
                lastName: "prependLastName",
              })
            }
          >
            prepend
          </button>
          <button
            type="button"
            onClick={() =>
              insert(2, {
                firstName: "insertFirstName",
                lastName: "insertLastName",
              })
            }
          >
            insert at
          </button>

          <button type="button" onClick={() => swap(1, 2)}>
            swap
          </button>

          <button type="button" onClick={() => move(1, 2)}>
            move
          </button>

          <button
            type="button"
            onClick={() =>
              replace([
                {
                  firstName: "test1",
                  lastName: "test1",
                },
                {
                  firstName: "test2",
                  lastName: "test2",
                },
              ])
            }
          >
            replace
          </button>

          <button type="button" onClick={() => remove(1)}>
            remove at
          </button>

          <button
            type="button"
            onClick={() =>
              reset({
                test: [{ firstName: "Bill", lastName: "Luo" }],
              })
            }
          >
            reset
          </button>
        </section>

        <input type="submit" />
      </form>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          {...register("questionText", { required: true })}
          type="text"
          id="question-text"
          placeholder="Question Text"
        />
        <br></br>
        <Button as="input" type="submit" value="Submit" />
      </Form> */}
      hi
    </div>
  );
}
