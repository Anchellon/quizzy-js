import initialData from "./initialData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Test() {
  let state = initialData;
  let onDragEndCb = () => {};
  return (
    <DragDropContext>
      <Droppable droppableId="droppable">
        {(provided) => {
          const column = state.columns["column-1"];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          console.log();
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}
