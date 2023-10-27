import React from "react";

export const Buttton = (props) => {
  const { label, type } = props;

  return (
  <button type={type}>
    {label}
  </button>
  );
};
