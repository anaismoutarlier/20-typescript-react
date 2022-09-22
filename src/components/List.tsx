import { FC } from "react";
import Todo from "./Todo";

interface Props {
  items: Todo[];
  /**
   * Pass function to remove or add todo from list
   */
  toggleTodo: Toggle;
}

/**
 * Component for displaying lists
 * @param param0 
 * @returns List JSX element
 */
const List : FC<Props> = ({ items, toggleTodo }) => {
  return (
    <div className="todo-item-list">
      {
        items.map((item, index) => <Todo item={item} index={index} key={item.id} toggleTodo={ toggleTodo } />)
      }
    </div>
  )
}

export default List;

// __jsx("h1", { children: "Hello World!", color: "red" })