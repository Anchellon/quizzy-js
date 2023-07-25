import Task from "./Task";
import { Droppable } from "@hello-pangea/dnd";

export default function Column(props) {
  let containerStyle = {
    margin: "8px",
    border: "1px solid lightgrey",
    borderRadius: "2px",
  };
  let titleStyle = { padding: "8px" };
  let taskListStyle = { padding: "8px" };
  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            style={taskListStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* {props.tasks.map((task, index) => {
              return <Task key={task.id} task={task} index={index}></Task>;
            })} */}
            <Task key={"task-1"} task={props.tasks[0]} index={0}></Task>
            <Task key={"task-2"} task={props.tasks[1]} index={1}></Task>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
