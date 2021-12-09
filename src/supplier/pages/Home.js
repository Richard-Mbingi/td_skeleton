import React from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { user } = useMoralis();
  return (
    <>
      <h1>
        Welcome to the Twitter Clone,
        {user ? user.attributes.username : "Authenticate Please 🙏"}
      </h1>
      <Link to="/register-info">Register your Info</Link>
    </>
  );
};

export default Home;
