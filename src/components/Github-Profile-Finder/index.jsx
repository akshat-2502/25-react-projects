import { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("akshat-2502");
  const [userData, setUserData] = useState(null);

  const handleSubmit = () => {};

  const fetchGithubUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div>
      <h1>Github Profile Finder</h1>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            name="search-by-username"
            placeholder="Search GitHub Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
