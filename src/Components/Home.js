import React from 'react';
//import ErrorMessage from './ErrorMessage';
import React from "react";
import { useState } from "react";
import Youtube from "react-youtube";
import Searchbar from "./Searchbar";

function Home() {

    const [search, setSearch] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  const [userSearch, setUserSearch] = useState([]);

  function handleTextChange(e) {
    setSearch(e.target.value);
  }
  function handleOnClick(e) {
    e.preventDefault();
    if (search === "") {
      return setUserSearch([]);
    } else {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyD0ZPMTO8s-e9U2GV1OjGOz9OtJOHqi3io`
      )
        .then((res) => res.json())
        .then((res) => {
          setUserSearch(res.items);
          console.log(res.items);
          setLoadingError(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingError(true);
        });
    }
  }

  function handleInputReset() {
    setSearch("");
  }

  return (
    <div className="homepage">
      <label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={handleTextChange}
        ></input>
        <button onClick={handleOnClick}>Search</button>
      </label>
      {search === "" ? (
        <p className="prompt">
          No search Result Yet! Submit a search Above!
        </p>
      ) : (
        <Searchbar
          search={search}
          setSearch={setSearch}
          userSearch={userSearch}
          setUserSearch={setUserSearch}
        />
      )}
      {/* <Searchbar />
         <p className='prompt'>No search Result Yet! Submit a search Above!</p> */}
    </div>
  );
}
    
export default Home;
