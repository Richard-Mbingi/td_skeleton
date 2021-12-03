import { useMoralis } from "react-moralis";
import { Link, Route, Routes } from "react-router-dom";
import { Home, Profile} from "./components/";
import { SignIn, SignUp, Landing } from "./pages/";

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
