import { HOST_API } from "../const";

export const onAddList = async (state, dispatch) => {
  //al ingresar state.name == null valida si es nulo o undefined

  if (state.name == null || state.name === "") {
    return;
  }
  const request = {
    name: state.name,
    id: null,
    list_id: state.list_id,
  };

  const response = await fetch(HOST_API + "/list", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await response.json();
  dispatch({ type: "addList-item", item: todo });
};
