import React from "react";
import { useMoralis } from "react-moralis";
import { Route, Routes } from "react-router-dom";
import PageTab from "./components/PageTab";
import {
  Home,
  Profile,
  Discover,
  Prequalification,
  OpenTenders,
  PostQualification,
  ClosedTenders,
  Financials,
  RegisterInfo,
  Document1,
  Document2,
} from "./pages";

const Dashboard = () => {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div>
        {isAuthenticated && (
          <>
            <PageTab link="/home" name="Home" />
            <PageTab link="/discover" name="Discover" />
            <PageTab link="/prequalification" name="Prequalification" />
            <PageTab link="/open-tenders" name="Open Tenders" />
            <PageTab link="/post-qualification" name="Post Qualification" />
            <PageTab link="/closed-tenders" name="Closed Tenders" />
            <PageTab link="/financials" name="Financials" />
            <PageTab link="/profile" name="Profile" />
            <button onClick={() => logout()}>Sign Out</button>
          </>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register-info" element={<RegisterInfo />}>
              <Route path="document-1" element={<Document1 />} />
              <Route path="document-2" element={<Document2 />} />
            </Route>
            <Route path="/discover" element={<Discover />} />
            <Route path="/prequalification" element={<Prequalification />} />
            <Route path="/open-tenders" element={<OpenTenders />} />
            <Route path="/post-qualification" element={<PostQualification />} />
            <Route path="/closed-tenders" element={<ClosedTenders />} />
            <Route path="/financials" element={<Financials />} />
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
