import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Buy something' },
    { id: 2, completed: false, title: 'Buy something else' },
    { id: 3, completed: false, title: 'Buy something more' },
  ]

  return (
    <div className="wrapper">
      <h1>Test app</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
