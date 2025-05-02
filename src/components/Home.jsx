import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner.jsx";
import "./Home.css";
import Card from "./Card.jsx";
import { listListings } from "../actions/listingActions.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const listingList = useSelector((state) => state.listingList);
  const { listings, loading, error } = listingList;

  useEffect(() => {
    dispatch(listListings());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
