import { useState } from "react";
import { useMoralis } from "react-moralis";

const SignUp = () => {
  const { signup, authError } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div>
        {authError && (
          <div>
            <h1>Sign Up has Failed</h1>
            <p>{authError.message}</p>
          </div>
        )}
      </div>
      <h2>Sign Up</h2>
      <input
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.currentTarget.value)}
      ></input>
      <input
        type={password}
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.currentTarget.value)}
      ></input>
      <button onClick={() => signup(email, password, email)}>Sign Up</button>
    </div>
  );
};

export default SignUp;
