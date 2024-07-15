import { useEffect, useState } from "react";

export default function ToDoLis() {
  const [todos, setTodos] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const arr = localStorage.getItem("list");
    if (arr) {
      setArr(JSON.parse(arr));
    }
  }, []);

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

  const delyteSubmit = (index) => {
    const update = arr.filter((todo, i) => i !== index);
    setArr(update);
    if (arr.length > 0) {
      localStorage.setItem("list", JSON.stringify(update));
    }
  };

  return (
    <>
      <form onSubmit={hengleSubmit}>
        <input type="text" onChange={todoValue} value={todos}></input>
        <button>Дабавить</button>
      </form>
      <ol>
        {arr.map((todo, index) => (
          <li key={index}>
            {todo !== "" && <p>{todo}</p>}

            <button onClick={() => delyteSubmit(index)}>Удалить</button>
          </li>
        ))}
      </ol>
    </>
  );
}
