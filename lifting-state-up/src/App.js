import React from 'react';
import TodoList from './Components/ToDoList';

const App = () =>
{
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;