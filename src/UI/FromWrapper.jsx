import React from "react";
import style from "./formStyle.module.css";

export default function FromWrapper(props) {
  return <div className={`${style.formRow}`}>{props.children}</div>;
}
