import React, { useContext, useRef, useState } from "react";
import { onAdd } from "../controller/controllerForm";
import { onEdit } from "../controller/controllerForm";
import { Store } from "../state/State";

const Form = () => {
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

              await onAdd(state, dispatch, item);

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

export default Form;
