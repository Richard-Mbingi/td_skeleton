import React from "react";
import { NavLink } from "react-router-dom";

const PageTab = (props) => {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "purple" : "yellow" };
        }}
        to={props.link}
      >
        {props.name}
      </NavLink>
    </>
  );
};

export default PageTab;
