import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;