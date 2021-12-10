import React from "react";
import { Link } from "react-router-dom";
import { tenderDetails } from "../data/tender-details";

const Discover = () => {
  return (
    <div>
      <h1>Discover</h1>
      <h2>Recently Added</h2>
      <div>
        {tenderDetails.map((_tender) => (
          <li key={_tender.id}>
            <Link to={`/discover/${_tender.id}`}>
              {_tender.tenderTitle}
            </Link>
            <br />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Discover;
