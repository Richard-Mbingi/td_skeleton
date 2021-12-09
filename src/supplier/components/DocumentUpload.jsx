import React from "react";
import { NavLink } from "react-router-dom";

const DocumentUpload = (props) => {
  return (
    <>
      <NavLink to={`/register-info/${props.documentLink}`}>
        <h3>{props.documentName}</h3>
      </NavLink>
    </>
  );
};

export default DocumentUpload;
