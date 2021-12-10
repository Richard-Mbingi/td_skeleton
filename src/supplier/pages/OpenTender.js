import React from "react";
import { useParams } from "react-router";

const OpenTender = () => {
  const { openTenderId } = useParams();

  return (
    <div>
      <h1>Open Tender details - {openTenderId}</h1>
    </div>
  );
};

export default OpenTender;
