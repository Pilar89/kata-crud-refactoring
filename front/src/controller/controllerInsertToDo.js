import { HOST_API } from "../const";

export const onAdd = async (state, dispatch, idList) => {
  const request = {
    name: state.name,
    id: null,
    completed: false,
    list_id: state.list_id,
  };

  const response = await fetch(HOST_API + "/" + idList.toString() + "/todo", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const todo = await response.json();
  dispatch({ type: "add-item", item: todo });
};

export const onEdit = async (state, dispatch, item) => {
  if (state.name == null || state.name === "") {
    return;
  }
  const request = {
    name: state.name,
    id: item.id,
    isCompleted: item.isCompleted,
    list_id: state.list_id,
  };

  const response = await fetch(HOST_API + "/todo", {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await response.json();
  dispatch({ type: "update-item", item: todo });
};
