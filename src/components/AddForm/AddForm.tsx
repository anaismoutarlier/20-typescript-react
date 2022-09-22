import { FC, useState, ChangeEvent } from "react";
import "./addform.css";

interface Props {
  add: Add;
}

const AddForm: FC<Props> = ({ add }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const submit = () => {
    add(text);
    setText("");
    setOpen(false);
  };
  const unfold = () => setOpen(!open);

  const change = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const click = () => (open && text ? submit() : unfold());

  return (
    <div className="add-form">
      <button className={`add-button${open ? ` open` : ""}`} onClick={click}>
        <h5
          style={{ fontSize: open ? 50 : 30, marginTop: open ? 0 : 4 }}
          dangerouslySetInnerHTML={{ __html: open ? "+" : "&#11167;" }}
        />
      </button>
      <div className={`input-container${open ? ` open` : ""}`}>
        <input type="text" value={text} onChange={change} />
      </div>
    </div>
  );
};


export default AddForm;