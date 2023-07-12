import React, { useState } from "react";
import Popup from "reactjs-popup";


export default function PopUpForm({ updateTodoItem }) {
  // const [inputValue, setInputValue] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addData(inputValue);
  //   setInputValue("");
  // };
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };
  return (
   
    <Popup
    trigger={
      <button>
      </button>
    }
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Edit your task </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your edited task here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => {
                // updateTodoItem(index, inputValue);
                setInputValue("");
                close();
              }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    )}
  </Popup>
   
  );
}
