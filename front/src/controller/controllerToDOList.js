import { HOST_API } from "../const";

export async function initTodosList(dispatch) {
  const response = await fetch(HOST_API + "/list");
  const list = await response.json();
  const action = { type: "update-listTodo", todoList: list };

  dispatch(action);
}

export const onDeleteList = (id, dispatch) => {
  fetch(HOST_API + "/list/" + id, {
    method: "DELETE",
  }).then((list) => {
    dispatch({ type: "deleteList-item", id });
  });
};
