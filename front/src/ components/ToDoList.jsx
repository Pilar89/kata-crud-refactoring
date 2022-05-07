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
    <div className="container">
      <div className="row ">
        {currentList.map((todo) => {
          return (
            <div
              key={todo.id}
              className="col-lg-6 col-md-7 col-sm-12 mb-4 col-auto "
            >
              <div className="container mt-3">
                <div className="card " style={{ minWidth: "400px" }}>
                  <h4 className="card-header text-light bg-dark d-flex justify-content-between align-items-center">
                    {todo.name}
                    <button
                      className="btn btn-outline-light btn-sm"
                      onClick={() => onDeleteList(todo.id, dispatch)}
                    >
                      X
                    </button>
                  </h4>
                  <br />
                  <div className="container pb-3">
                    <InsertToDo idList={todo.id} />
                    <hr />
                    <ToDos idList={todo.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
