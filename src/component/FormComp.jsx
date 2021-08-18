import { React, useState, useContext } from "react";
import FromWrapper from "../UI/FromWrapper";
import {
  useThemeContext,
  useThemeUpdateContext,
} from "../context/ThemeContext";

export default function FormComp(props) {
  const [name, setname] = useState("");
  const [task, settask] = useState("");
  const Theme = useThemeContext();
  const toggleTheme = useThemeUpdateContext();

  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  // useEffect(() => {
  //   console.log(task);
  // }, [task]);
  const onNameChange = (event) => {
    setname(event.target.value);
  };
  const onTaskChange = (event) => {
    settask(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setname("");
    settask("");
    props.todosDispatch({ type: "ADDTODO", payload: { name, task } });
  };

  return (
    <FromWrapper>
      <button onClick={toggleTheme}>ToggleTheme</button>
      <form
        method="GET"
        onSubmit={onFormSubmit}
        className={Theme ? "bg-secondary" : ""}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="task">Task</label>
        <input type="text" id="task" value={task} onChange={onTaskChange} />
        <button type="submit" className="btn btn-sm btn-primary">
          ADD
        </button>
      </form>
    </FromWrapper>
  );
}
