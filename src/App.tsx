import { useState } from "react";
import "sanitize.css";

import Banner from "./components/Banner";
import List from "./components/List";
import AddForm from "./components/AddForm";

const initialItems = [
  {
    id: 2,
    text: "Nettoyer machine à café",
    done: false,
  },
  {
    id: 1,
    text: "RDV chez le dentiste",
    done: true,
  },
  {
    id: 3,
    text: "Masterclass Typescript",
    done: false,
  },
];

function App() {
  const [items, setItems] = useState<Todo[]>(initialItems);

  const toggleTodo = (item: Todo) => {
    setItems(items =>
      items.map(el => ({ ...el, done: el.id === item.id ? !el.done : el.done }))
    );
  };

  const addTodo = (text: string) => {
    setItems([...items, { id: Math.floor(Math.random() * 10) + 3, text, done: false }])
  }

  return (
    <div className="App">
      <Banner />
      <div className="content">
        <List items={items} toggleTodo={toggleTodo} />
        <AddForm add={addTodo}/>
      </div>
    </div>
  );
}

export default App;
