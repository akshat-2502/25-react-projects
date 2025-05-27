import { useEffect, useState } from "react";
import Suggestion from "./suggesstions";

const SearchAutocomplete = () => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col  items-center">
      <h1 className="text-4xl font-bold mt-28">Auto Complete Searchbar</h1>
      <div className="search-autocomplete-container">
        {loading ? (
          <h1>Loading Data...</h1>
        ) : (
          <input
            className="border-blue-400 border-2 mt-10 w-[300px] px-4 py-1"
            type="text"
            placeholder="Enter User Here..."
            value={searchParam}
            onChange={handleChange}
            name="search-user"
          />
        )}

        {showDropDown && (
          <Suggestion data={filteredUsers} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default SearchAutocomplete;
