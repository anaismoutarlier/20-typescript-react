import { FC } from "react";
import "./checkbox.css";

interface Props {
  checked: boolean;
  onChange: () => void;
  style?: object;
  className?: string;
  index: Number;
}

const Checkbox: FC<Props> = ({
  style = {},
  className = "",
  index,
  ...props
}) => {
  let containerClass = "container";
  if (className) containerClass += ` ${className}`;

  return (
    <div className={containerClass} style={style}>
      <div className="round">
        <input type="checkbox" id={`checkbox-${index}`} {...props} />
        <label htmlFor={`checkbox-${index}`}></label>
      </div>
    </div>
  );
};

export default Checkbox;
