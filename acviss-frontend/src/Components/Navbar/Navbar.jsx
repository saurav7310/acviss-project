import axios from "axios";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./navbar.css";

const Navbar = ({ adsData, handleCardData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleFilter = (item) => {
    if (item.ads.primaryText.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item.ads.primaryText;
    } else if (
      item.ads.headline.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item.ads.headline;
    } else if (
      item.ads.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item.ads.description;
    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item.name;
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    console.log(event.target.value);
    if (!event.target.value) {
      setSuggestion([]);
    } else {
      const filterData = adsData.filter(handleFilter);
      setSuggestion(filterData);
    }
  };

  // for the list when you search something
  const handleSuggest = (text) => {
    setSearchTerm(text.name);
    handleCardData(text);
    setSearchTerm("");
    setSuggestion("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTerm("");
  };

  return (
    <nav>
      <div className="logo">Acviss</div>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
          {suggestion.length >= 1 ? (
            <div className="suggestions">
              {suggestion.map((item, ind) => {
                return (
                  <div
                    className="suggestionItem"
                    key={ind}
                    onClick={() => handleSuggest(item)}
                  >
                    <SearchOutlined />
                    <h5> {item.name}</h5>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
