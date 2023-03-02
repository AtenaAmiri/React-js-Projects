import React from "react";
import { MyContext } from "./Todo";
import Todolistitem from "./ToDoListItem";
import "../../Styles/Todo.css";
export type TodoType = {
  id: number;
  title: string;
  isSuccess: boolean;
};

export default function TodoList() {
  const { todoList } = React.useContext(MyContext);
  return (
    <div className="todolist">
      {todoList.map((item, index) => (
        <Todolistitem todoItem={item} key={item.id} index={index} />
      ))}
    </div>
  );
}
