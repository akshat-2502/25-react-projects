import { useState } from "react";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("akshat-2502");
  const handleSubmit = () => {};
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
