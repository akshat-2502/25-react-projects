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
        <img src={avatar_url} alt={login} />
      </div>
      <div>
        <a target="_blank" href={`https://www.github.com/${login}`}>
          {name || login}
        </a>
        <p>
          User Joined ON :-{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
    </div>
  );
};
export default User;
