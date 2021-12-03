import React from "react";
import { useMoralis } from "react-moralis";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home, Profile } from "./pages";

const Dashboard = () => {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div>
        {isAuthenticated && (
          <>
            <NavLink
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "purple" : "yellow" };
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "purple" : "yellow" };
              }}
              to="/profile"
            >
              Profile
            </NavLink>
            <button onClick={() => logout()}>Sign Out</button>
          </>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <Routes>
            <Route path="/home" element={<Home />} />
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
