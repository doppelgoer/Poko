import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: 1,
      checked: true,
    },
    {
      id: 2,
      text: 2,
      checked: true,
    },
    {
      id: 3,
      text: 3,
      checked: false,
    },
  ]);
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
