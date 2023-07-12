import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/to-do-input";
import TodoItem from "./components/to-do-item";
function App() {
  //static data of the list
  const [todoItems, setTodoItems] = useState([
    {
      todo: "Processing task",
      complete: false,
    },
    {
      todo: "Completed task",
      complete: true,
    },
  ]);

  //create item
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  //mark item as checked
  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete = !newTodoItems[index].complete;
    setTodoItems(newTodoItems);
  };

  //update item data
  const updateTodoItem = (index, updatedItem) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    // let newItem =  prompt(`Update ${item.todo}?`, item.todo);
    let newItem = updatedItem;
    let todoObject = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObject);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };






  //delete item
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="origin">
      {/* <a href="#popup1"> hi</a>

      <div id="popup1" class="popup">
        <div class="popup-content">
        <PopUpForm 
        updateTodoItem={updateTodoItem}
        />
        </div>
      </div> */}
     

      <div className="app">
        <h1>Hello Friend</h1>
        <h2>Create & Organize your daily tasks easily</h2>
        <TodoInput createTodoItem={createTodoItem} />

        {todoItems.length === 0 ? (
          <p>There are no tasks, add one and start organizing your time</p>
        ) : (
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              index={index}
              item={item}
              completeTodoItem={completeTodoItem}
              updateTodoItem={updateTodoItem}
              deleteTodoItem={deleteTodoItem}
            
            />
          ))
        )}
      </div>
      <i>
        designed & developed by
        <a href="https://romany-mounir.github.io/Romany/">
          <b> Eng Romany Mounir</b>
        </a>
      </i>
    </div>
  );
}

export default App;
