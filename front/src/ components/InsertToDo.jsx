import React, { useContext, useRef, useState } from "react";
import { onAdd } from "../controller/controllerInsertToDo";
import { onEdit } from "../controller/controllerInsertToDo";
import { Store } from "../state/state";

const InsertToDo = ({ idList }) => {
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
            if (event.target.value !== "" || event.target.value !== null) {
              setIsEmpty(false);
            }
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

              await onAdd(state, dispatch, idList);

              setState({ name: "" });
              formRef.current.reset();
            }}
          >
            Crear
          </button>
        )}
      </form>
    </>
  );
};

export default InsertToDo;
