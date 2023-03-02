import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import TodoInput from "./ToDoInput";
import TodoList from "./ToDoList";
import { TodoType } from "./ToDoList";
import useTodo from "./useTodo";
import "../../Styles/Todo.css";
type ContextType = {
  todoList: TodoType[];
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
  onAdd: (value: string) => void;
};
export const MyContext = React.createContext<ContextType>({} as ContextType);

export default function Todo() {
  const value = useTodo();

  return (
    <MyContext.Provider value={value}>
      <div>
        <TodoInput />
        <TodoList />
        {/* <Todoinput addTodo={onAdd} /> */}
        {/* <TodoList data={todoList} onDelete={onDelete} onDone={onDone} /> */}
      </div>
    </MyContext.Provider>
  );
}
