const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img className="avatar" src={avatar_url} alt={login} />
      </div>
      <div className="name-container">
        <a
          className="font-bold text-xl"
          target="_blank"
          href={`https://www.github.com/${login}`}
        >
          {name || login}
        </a>
        <p>
          User Joined On :-{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div className="font-bold">
          <p>Public Respositories </p>
          <p>{public_repos}</p>
        </div>
        <div className="font-bold">
          <p>Followers </p>
          <p>{followers}</p>
        </div>
        <div className="font-bold">
          <p>Following </p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};
export default User;
