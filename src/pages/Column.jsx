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
    let tasks = props.tasks;
    return (
        <div style={containerStyle}>
            <h3 style={titleStyle}>{props.column.title}</h3>
            <Droppable droppableId={props.column.id}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        <div style={taskListStyle}>
                            {tasks.map((task, index) => {
                                return (
                                    <Task
                                        keyVal={task.id}
                                        task={task}
                                        index={index}
                                    ></Task>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    );
}
