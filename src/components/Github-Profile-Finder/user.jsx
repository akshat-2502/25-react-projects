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
      <div>
        <a target="_blank" href={`https://www.github.com/${login}`}>
          {name || login}
        </a>
        <p>
          User Joined On :-{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Public Respositories : </p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers : </p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following : </p>
        <p>{following}</p>
      </div>
    </div>
  );
};
export default User;
