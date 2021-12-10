import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { companyInfoDetails } from "../data/company-info-details";

const RegisterInfo = () => {
  return (
    <div>
      <h1>Register User Info</h1>
      <p>Upload your document</p>
      <div>
        {companyInfoDetails.map((_document) => (
          <>
            <li>
              <NavLink to={`/register-info/${_document}`}>{_document}</NavLink>
            </li>
          </>
        ))}
        <Outlet />
      </div>
      <button>Upload</button>
    </div>
  );
};

export default RegisterInfo;
