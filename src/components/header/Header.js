import React, { useState } from "react";
import HeaderItems from "./HeaderItems";
import "./header.css";
const Header = ({ setSearch }) => {
  const [searchQ, setSearchQ] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchQ);
  };
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://icon-library.com/images/movie-app-icon/movie-app-icon-6.jpg"
          alt="header logo"
        />
        <h3>QUAD-B</h3>
      </div>
      <div className="header-middle">
        <HeaderItems title="Movies" />
        <HeaderItems title="Series" />
        <HeaderItems title="Upcoming" />
        <HeaderItems title="Trending" />
      </div>
      <div className="header-right">
        <form onSubmit={handleSubmit}>
          <div className="search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchQ(e.target.value);
                console.log(searchQ);
              }}
              value={searchQ}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
