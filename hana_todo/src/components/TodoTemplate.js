import React from 'react';
import './TodoTemplate.css';

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">SCHEDULE</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
