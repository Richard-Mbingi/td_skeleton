import { useState } from "react";
import { useMoralis } from "react-moralis";

const Profile = () => {
  const { user, setUserData, userError } = useMoralis();

  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [password, setPassword] = useState("");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });
  };

  return (
    <div>
      <h1>Profile</h1>
      <h3>Username</h3>
      <input
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <h3>Email</h3>
      <input
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <h3>Password</h3>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <button onClick={handleSave}>Save</button>
      {userError && (
        <div>
          <h1>User change failed</h1>
          <p>{userError.message} </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
