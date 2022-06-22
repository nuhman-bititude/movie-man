import React from "react";
import "../App.css";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies"
        value={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
      {props.search.length > 1 ? (
        <img
          src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/magnifier.png"
          alt="Search-icon"
          onClick={() => {
            console.log("Loading");
            props.searchMovies(props.search);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
