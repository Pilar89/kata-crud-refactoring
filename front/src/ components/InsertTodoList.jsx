import React, { useContext, useRef, useState } from "react";
import { onAddList } from "../controller/ControllerInsertToDoList";
import { Store } from "../state/state";
import AlertModal from "./AlertModal";

const InsertTodoList = () => {
  const [showModal, setShowModal] = useState(false);
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
          //al ingresar state.name == null valida si es nulo o undefined
          if (state.name == null || state.name === "") {
            setShowModal(true);
            return;
          }

          await onAddList(state, dispatch);
          setState({ name: "" });
          formRef.current.reset();
        }}
      >
        Nueva lista
      </button>
      <AlertModal
        show={showModal}
        onHandleClose={() => {
          setShowModal(false);
        }}
      />
    </form>
  );
};

export default InsertTodoList;
