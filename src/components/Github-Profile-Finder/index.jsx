import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("akshat-2502");
  const [userData, setUserData] = useState(null);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setUsername("");
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div>
      <h1 className="hone">GitHub Profile Finder</h1>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            name="search-by-username"
            placeholder="Enter GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
