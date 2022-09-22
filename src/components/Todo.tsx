import { FC, CSSProperties } from "react";
import Checkbox from "./Checkbox";

interface Props {
  item: Todo;
  index: number;
  toggleTodo: Toggle;
}

const Todo: FC<Props> = ({ item, index, toggleTodo }) => {
  const textStyle : CSSProperties = { textDecoration: item.done ? 'line-through' : "none" }
  return (
    <div className="todo-item">
      <h4 style={ textStyle }>{item.text}</h4>
      <Checkbox
        checked={item.done}
        className="todo-checkbox"
        index={index}
        onChange={() => toggleTodo(item)}
      />
    </div>
  );
};

export default Todo;
