import React from "react";
import { MyContext } from "./Todo";
import "../../Styles/Todo.css";
type TodoInpitProps = {
  addTodo: (value: string) => void;
};
export default function Todoinput() {
  const { onAdd } = React.useContext(MyContext);

  const [todoItem, setTodoItem] = React.useState("");
  const handleAdd = () => {
    onAdd(todoItem);
    setTodoItem("");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="todoinput">
        <h2
          style={{
            textAlign: "center",
            border: "1px solid blue",
            borderRadius: "15px",
          }}
        >
          Todo List
        </h2>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className="add" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
