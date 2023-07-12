import React, { useState, useRef, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoItem({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) {
  const [updateItem, setUpdatedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const popupContentRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupContentRef.current && !popupContentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateItem === "") {
      return console.log("please add value");
    }
    updateTodoItem(index, updateItem);

    // createTodoItem(updateItem);
    setUpdatedItem("");
    setIsOpen(false);
  };

  return (
    <>
    
      {isOpen? <div
       
        className="popup"
       
      >
        <div ref={popupContentRef} className="popup-content">
          <span className="close" onClick={() => setIsOpen(false)}>
            &times;
          </span>

          <form onSubmit={handleSubmit} className="editing-form">
            <input
              type="text"
              placeholder="Add your Task here"
              value={updateItem}
              onChange={(e) => {
                setUpdatedItem(e.target.value);
                
              }}
            />
            <button id="submit-edited-btn" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>: null}

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
            href="#popup1"
            className="crud-button ringing edit"
            position="top center"
            onClick={() => {
              setIsOpen(true);
            }}
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
    </>
  );
}
