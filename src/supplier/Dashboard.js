import React from "react";
import { useMoralis } from "react-moralis";
import { Route, Routes } from "react-router-dom";
import PageTab from "./components/PageTab";
import { Home, Profile, Discover } from "./pages";

const Dashboard = () => {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div>
        {isAuthenticated && (
          <>
            <PageTab link="/home" name="Home" />
            <PageTab link="/discover" name="Discover" />
            <PageTab link="/profile" name="Profile" />
            <button onClick={() => logout()}>Sign Out</button>
          </>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <>
            <Home />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
