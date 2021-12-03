import React from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { user } = useMoralis();
  return (
    <>
      <h1>
        Welcome to the Twitter Clone,
        {user ? user.attributes.username : "Authenticate Please 🙏"}
      </h1>
    </>
  );
};

export default Home;
