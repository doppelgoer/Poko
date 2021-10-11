import React from 'react';
import './TodoListItem.css';

function TodoListItem({ todo }) {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className="checkBox">
        <input type="checkbox" />
        <div className="text">할일</div>
        <button className="remove">-</button>
      </div>
    </div>
  );
}

export default TodoListItem;
