import React from "react";
//import { useState, useEffect } from "react";

function Searchbar() {
    return (
      <><div className="wrapper" />
        <div className="search-wrapper"/>
        <label htmlFor="search-form" />
        <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..." /></>
    );
  }
  export default Searchbar;