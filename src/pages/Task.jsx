import { Draggable } from "@hello-pangea/dnd";

export default function Task(props) {
    let taskStyle = {
        border: "1px solid lightgrey",
        borderRadius: "2px",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "white",
    };
    return (
        <Draggable
            key={props.keyVal}
            draggableId={props.task.id}
            index={props.index}
        >
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div style={taskStyle}>{props.task.content}</div>
                    </div>
                );
            }}
        </Draggable>
    );
}
