import { TodoType } from "./ToDoList";
import { useState } from "react";
export default function useTodo() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const onDelete = (id: number) => {
    const newTodo = todoList.filter((f) => f.id !== id);
    setTodoList(newTodo);
  };
  const onDone = (id: number) => {
    let newList = todoList;
    const todoIndex = todoList.findIndex((f) => f.id === id);
    if (todoIndex > -1) {
      newList[todoIndex].isSuccess = true;
    }
    // prev nemikhad
    setTodoList([...newList]);
  };
  const onAdd = (value: string) => {
    if (!value) return;
    const newTodo = {
      id: new Date().getTime(),
      title: value,
      isSuccess: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };
  return {
    todoList,
    onDelete,
    onDone,
    onAdd,
  };
}
