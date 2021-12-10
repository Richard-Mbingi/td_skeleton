import React from "react";
import { Link } from "react-router-dom";
import { openTenderDetails } from "../data/open-tenders";

const OpenTenders = () => {
  return (
    <div>
      <h1>Open Tenders Page</h1>
      <div>
        {openTenderDetails.map((_openTender) => (
          <li key={_openTender.tenderId}>
            <Link to={`/open-tenders/${_openTender.tenderId}`}>
              {_openTender.tenderName}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default OpenTenders;
