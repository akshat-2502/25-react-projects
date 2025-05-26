const GithubProfileFinder = () => {
  return (
    <div>
      <h1>Github Profile Finder</h1>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            name="search-by-username"
            placeholder="Search GitHub Username..."
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
