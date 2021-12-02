import { useState } from "react";
import { useMoralis } from "react-moralis";

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

   export default SignIn;