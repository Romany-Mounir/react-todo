import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoItem({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) {
  //   function handleOnDragEnd(result) {
  //     if(!result.destination) return;
  //     const newBox = Array.from(item);
  //     const [draggedItem] = newBox.splice(result.source.index,1);
  //     newBox.splice(result.destination.index,0,draggedItem);
  //   }
  return (
    <div className="todo-list">
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="boxes">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    key={item.id}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={{
                      textDecoration: item.complete ? "line-through" : "",
                      color: item.complete ? "gray" : "black",
                    }}
                  >
                    {item.todo}
                  </li>
                )}
              </Draggable>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext> */}
      <li
        key={item.id}
        style={{
          textDecoration: item.complete ? "line-through" : "",
          color: item.complete ? "gray" : "black",
        }}
      >
        {item.todo}
      </li>

      <div className="btns">
        <button
          className="crud-button enlargement complete"
          onClick={() => completeTodoItem(index)}
        >
          <b>✔</b>
        </button>
        <button
          className="crud-button ringing edit"
          onClick={() => updateTodoItem(index)}
        >
          <b>✍</b>
        </button>
        <button
          className="crud-button rotating delete"
          onClick={() => deleteTodoItem(index)}
        >
          <b>x</b>
        </button>
      </div>
    </div>
  );
}
