import React from "react";
import Header from "./ components/Header";
import InsertTodoList from "./ components/InsertTodoList";
import ToDoList from "./ components/ToDoList";

import { StoreProvider } from "./state/state";

function App() {
  return (
    <StoreProvider>
      <Header />
      <InsertTodoList />

      <br />
      <ToDoList />
    </StoreProvider>
  );
}

export default App;
