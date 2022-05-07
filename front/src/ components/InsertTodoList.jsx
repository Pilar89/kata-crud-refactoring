import React, { useContext, useRef, useState } from "react";
import { onAddList } from "../controller/ControllerInsertToDoList";
import { Store } from "../state/state";

const InsertTodoList = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  return (
    <form ref={formRef} className="container mt-3">
      <input
        type="text"
        name="name"
        placeholder="Lista de To-Do"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      ></input>
      <button
        onClick={async (event) => {
          event.preventDefault();
          await onAddList(state, dispatch);
          setState({ name: "" });
          formRef.current.reset();
        }}
      >
        Nueva lista
      </button>
    </form>
  );
};

export default InsertTodoList;
