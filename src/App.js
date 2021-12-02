import Auth from "./Auth";
import { useMoralis } from "react-moralis";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Profile from "./Profile";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <>
      {!isAuthenticated ? (
        <div>
          <Link to="/">Landing</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </div>
      ) : (
        <div>
          <div>
            {isAuthenticated && (
              <>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
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
        </div>
      )}
    </>
  );
}

export default App;
