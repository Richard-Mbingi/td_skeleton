import React from "react";
import { useParams } from "react-router";

const DocumentUpload = (props) => {
  const { documentUpload } = useParams();
  
  return <h1>{documentUpload}</h1>;
};

export default DocumentUpload;
