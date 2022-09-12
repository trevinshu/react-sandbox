import React, { useState } from 'react';
import Todo from './Todo';

export default function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      {showTodo && <Todo />}
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>
        Toggle Todo
      </button>
    </div>
  );
}
