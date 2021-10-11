import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="TodoList">
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
