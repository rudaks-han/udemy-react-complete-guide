import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todo = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <div className="App">
      <Todos items={todo} />
    </div>
  );
}

export default App;
