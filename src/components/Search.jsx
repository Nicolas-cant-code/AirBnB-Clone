import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import "./Search.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const seletionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker onChange={handleSelect} ranges={[seletionRange]} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input
        type="number"
        min={0}
        defaultValue={2}
        placeholder="Enter number of guests"
      />
      <Button>Search AirBnB</Button>
    </div>
  );
};

export default Search;
