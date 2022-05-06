import React, { useContext, useEffect } from "react";

import { initTodos } from "../controller/controllerToDos";
import { initTodosList, onDeleteList } from "../controller/controllerToDOList";
import { Store } from "../state/state";
import InsertToDo from "./InsertToDo";

import ToDos from "./ToDos";

const ToDoList = () => {
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);

  const currentList = todo.todoList;

  useEffect(() => {
    initTodosList(dispatch);
    initTodos(dispatch);
  }, [dispatch]);

  return (
    <>
      {currentList.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => onDeleteList(todo.id, dispatch)}>
              Eliminar
            </button>
            <h1>{todo.name}</h1>
            <InsertToDo idList={todo.id} />
            <ToDos idList={todo.id} />
          </div>
        );
      })}
    </>
  );
};

export default ToDoList;
