import React from "react";
import "./SearchResults.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SearchResults = ({
  img,
  location,
  title,
  description,
  price,
  total,
  star,
}) => {
  return (
    <div className="search-results">
      <img src={img} alt="" />
      <FavoriteIcon className="search-results-heart" />
      <div className="search-results-info">
        <div className="search-results-infoTop">
          <p>Location: {location}</p>
          <h3>{title}</h3>
          <p>----</p>
          <p>{description}</p>
        </div>
        <div className="search-results-infoBottom">
          <div className="search-results-stars">
            <p>
              <strong className="search-results-star">{star}</strong>
            </p>
          </div>
          <div className="search-results-price">
            <h2>Price: {price}</h2>
            <p>Total: {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
