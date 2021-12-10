import React from "react";
import { useParams } from "react-router";

const DiscoverTender = () => {
  const { discoverId } = useParams();

  return (
    <div>
      <h1>Discover Tender - {discoverId}</h1>
    </div>
  );
};

export default DiscoverTender;
