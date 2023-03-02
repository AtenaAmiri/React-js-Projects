import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { MyContext } from "./Todo";
import { TodoType } from "./ToDoList";
import "../../Styles/Todo.css";

type TodoListItemProps = {
  index: number;
  todoItem: TodoType;
};
export default function Todolistitem({
  todoItem: todoItem,
}: TodoListItemProps) {
  const { onDelete, onDone } = React.useContext(MyContext);
  return (
    <div className="main-todoitem">
      <div className="todoitem">
        <div>
          {todoItem.isSuccess && <span className="done-icon">✅</span>}
          <span className="title">{todoItem.title}</span>
        </div>
        <div>
          <button onClick={() => onDelete(todoItem.id)}>Delete</button>
          {!todoItem.isSuccess && (
            <button onClick={() => onDone(todoItem.id)}>Done</button>
          )}
        </div>
      </div>
    </div>
  );
}
