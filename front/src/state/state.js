import React, { useReducer, createContext } from "react";

const initialState = {
  todo: { list: [], item: {}, todoList: [] },
};

export const Store = createContext(initialState);

function reducer(prevState, action) {
  let newState;
  switch (action.type) {
    case "update-item":
      const todoUpItem = prevState.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      newState = { ...prevState, todo: todoUpItem };
      break;
    case "delete-item":
      const todoUpDelete = prevState.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      newState = { ...prevState, todo: todoUpDelete };
      break;
    case "update-list":
      const todoUpList = prevState.todo;
      todoUpList.list = action.list;
      newState = { ...prevState, todo: todoUpList };
      break;
    case "edit-item":
      const todoUpEdit = prevState.todo;
      todoUpEdit.item = action.item;
      newState = { ...prevState, todo: todoUpEdit };
      break;
    case "add-item":
      const todoUp = prevState.todo.list;
      todoUp.push(action.item);
      newState = {
        ...prevState,
        todo: { list: todoUp, item: {}, todoList: prevState.todo.todoList },
      };
      break;
    case "update-listTodo":
      const todoUpTodoList = prevState.todo;
      todoUpTodoList.todoList = action.todoList;
      newState = { ...prevState, todo: todoUpTodoList };
      break;
    case "addList-item":
      const todoListUp = prevState.todo.todoList;
      todoListUp.push(action.item);
      newState = {
        ...prevState,
        todo: { todoList: todoListUp, item: {}, list: prevState.todo.list },
      };
      break;
    case "deleteList-item":
      const todoListUpDelete = prevState.todo;
      const updateList = todoListUpDelete.todoList.filter((item) => {
        return item.id !== action.id;
      });
      todoListUpDelete.todoList = updateList;
      newState = {
        ...prevState,
        todoList: todoListUpDelete,
      };
      break;
    default:
      newState = { ...prevState };
      break;
  }

  console.log({ action, newState });
  return newState;
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
