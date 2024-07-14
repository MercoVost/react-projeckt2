import { useState } from "react";

export default function ToDoLis() {
  const [todos, setTodos] = useState("");
  const [arr, setArr] = useState([]);

  const todoValue = (e) => {
    setTodos(e.target.value);
  };

  const hengleSubmit = (e) => {
    e.preventDefault();
    if (todos.trim() !== "") {
      setArr((prevTodos) => {
        const updatedTodos = [...prevTodos, todos];
        localStorage.setItem("list", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      setTodos("");
    }
  };

  return (
    <>
      <input type="text" onChange={todoValue}></input>
    </>
  );
}
