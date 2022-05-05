import { HOST_API } from "../const";

//funciones llamadas por Form

export const onAdd = async (state, dispatch) => {
  const request = {
    name: state.name,
    id: null,
    completed: false,
  };

  const response = await fetch(HOST_API + "/todo", {
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
  const request = {
    name: state.name,
    id: item.id,
    isCompleted: item.isCompleted,
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

//funciones llamadas por

// fetch({...})
// .then((result) => algo1(result))

// async
// const result = await fetch({...})
// algo1(result)
