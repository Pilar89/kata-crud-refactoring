import React, { useContext, useRef, useState } from "react";
import { onAdd } from "../controller/controllerInsertToDo";
import { onEdit } from "../controller/controllerInsertToDo";
import { Store } from "../state/state";
import AlertModal from "./AlertModal";

const InsertToDo = ({ idList }) => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  return (
    <>
      <form ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {item.id && (
          <button
            onClick={async (event) => {
              event.preventDefault();

              await onEdit(state, dispatch, item);

              setState({ name: "" });
              formRef.current.reset();
            }}
          >
            Actualizar
          </button>
        )}
        {!item.id && (
          <button
            onClick={async (event) => {
              event.preventDefault();
              //al ingresar state.name == null valida si es nulo o undefined
              if (state.name == null || state.name === "") {
                setShowModal(true);
                return;
              }
              await onAdd(state, dispatch, idList);

              setState({ name: "" });
              formRef.current.reset();
            }}
          >
            Crear
          </button>
        )}
        <AlertModal
          show={showModal}
          onHandleClose={() => {
            setShowModal(false);
          }}
        />
      </form>
    </>
  );
};

export default InsertToDo;
