import React from "react";
import { Outlet } from "react-router-dom";
import DocumentUpload from "../components/DocumentUpload";

const RegisterInfo = () => {
  return (
    <div>
      <h1>Register User Info</h1>
      <p>Upload your document</p>
      <DocumentUpload documentName="Document 1" documentLink="document-1"/>
      <DocumentUpload documentName="Document 2" documentLink="document-2"/>
      <Outlet />
      <button>Upload</button>
    </div>
  );
};

export default RegisterInfo;
