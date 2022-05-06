import React from "react";
import InsertTodoList from "./ components/InsertTodoList";
import ToDoList from "./ components/ToDoList";

import { StoreProvider } from "./state/state";

function App() {
  return (
    <StoreProvider>
      <h3>To-Do List</h3>
      <InsertTodoList />

      <br />
      <ToDoList />
    </StoreProvider>
  );
}

export default App;
