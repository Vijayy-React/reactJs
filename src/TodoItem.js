import React from "react";

function TodoItem({ todo, removeTodo }) {
  return (
    <li>
      {todo}
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
}

export default TodoItem;