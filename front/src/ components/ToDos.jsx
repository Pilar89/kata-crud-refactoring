import React, { useContext, useEffect } from "react";
import { onChange, onDelete, onEdits } from "../controller/controllerToDos";
import { Store } from "../state/state";

const ToDos = ({ idList }) => {
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const currentList = todo.list;

  const decorationDone = {
    textDecoration: "line-through",
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((item) => {
            if (item.list.id === idList) {
              return (
                <tr key={item.id} style={item.completed ? decorationDone : {}}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={item.completed}
                      onChange={(event) => onChange(event, item, dispatch)}
                    ></input>
                  </td>

                  <td>
                    <button onClick={() => onDelete(item.id, dispatch)}>
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onEdit(item, dispatch)}>
                      Editar
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDos;
