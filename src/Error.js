import React from "react";

const errorStyle = {
  color: "red",
};

const Error = ({ title, message }) => {
  return (
    <div>
      <h2 style={errorStyle}>
        <h3>{title}</h3>
        <p>{message}</p>
      </h2>
    </div>
  );
};

export default Error;
