import React, {useState} from "react";

function Search({search, setSearch}) {

const handleChange = (event) => {
  setSearch(event.target.value)
}
  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
