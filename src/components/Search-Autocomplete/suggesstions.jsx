const Suggestion = ({ data, handleClick }) => {
  return (
    <ul className="mb-28">
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestion;
