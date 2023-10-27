import React from "react";

const Input = (props) => {
  const { label, type, id, name } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} />
    </div>
  );
};
export default Input;
