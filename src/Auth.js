import React from "react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import Error from "./Error";

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
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

const SignIn = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h2>Sign In</h2>
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
      <button onClick={() => login(email, password)}>Sign In</button>
    </div>
  );
};

const Auth = () => {
  const { authenticate, authError } = useMoralis();
  return (
    <div>
      {authError && (
        <div>
          <Error title="Authentication has failed" message={authError} />
          <h1>Twitter Clone</h1>
          <SignUp />
          <SignIn />
          <h2>Metamask</h2>
          <button onClick={() => authenticate()}>Authenticate</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
