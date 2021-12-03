import { useMoralis } from "react-moralis";
import { Link, Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Landing } from "./authentication/pages";
import Dashboard from "./supplier/Dashboard";

function App() {
  const { isAuthenticated} = useMoralis();

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
        <Dashboard/>
      )}
    </>
  );
}

export default App;
