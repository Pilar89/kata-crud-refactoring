import { HOST_API } from "../const";

export function initTodos(dispatch) {
  fetch(HOST_API + "/todos")
    .then((response) => response.json())
    .then((list) => {
      dispatch({ type: "update-list", list });
    });
}

export const onDelete = (id, dispatch) => {
  fetch(HOST_API + "/" + id + "/todo", {
    method: "DELETE",
  }).then((list) => {
    dispatch({ type: "delete-item", id });
  });
};

export const onEdit = (todo, dispatch) => {
  dispatch({ type: "edit-item", item: todo });
};

export const onChange = (event, todo, dispatch) => {
  const request = {
    name: todo.name,
    id: todo.id,
    completed: event.target.checked,
  };
  fetch(HOST_API + "/todo", {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((todo) => {
      dispatch({ type: "update-item", item: todo });
    });
};
