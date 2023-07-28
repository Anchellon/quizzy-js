import Column from "./Column";
import initialData from "./initialData";

import { DragDropContext } from "@hello-pangea/dnd";
export default function DraggableComponent() {
  let state = initialData;
  let onDragEndCb = () => {};
  return (
    <DragDropContext onDragEnd={onDragEndCb}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
