import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "./Search.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default Search;
