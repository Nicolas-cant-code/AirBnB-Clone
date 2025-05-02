import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays • 26 August to 30 August • 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?fit=2662,1776"
        location="Strand, Cape Town, South Africa"
        title="Luxury Beachfront Villa"
        description="4 guests • 2 bedrooms • 2 bathrooms • private pool • Wifi • Kitchen • Free parking"
        price="R7200 / night"
        total="R28,000 total"
        star={4.82}
      />

      <SearchResults
        img="https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16:9/w_2560%2Cc_limit/airbnb%2520luxe.jpg"
        location="Langebaan, South Africa"
        title="Beautiful Lake House"
        description="2 guests • 2 bedrooms • 1 bathroom • Lake • Kitchen"
        price="R5400 / night"
        total="R26,000 total"
        star={4.64}
      />

      <SearchResults
        img="https://www.travelandleisure.com/thmb/_XsBCRprdQriog2hTCkuiT3f7lc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airbnb-listing-NEWAIRBNB1123-a67a0e07c4e846e2ae4e653d201e47af.jpg"
        location="Blouberg, Cape Town, South Africa"
        title="Luxury Cabin"
        description="2 guests • 1 bedroom • 1 bathroom  • Kitchen • Free parking"
        price="R2000 / night"
        total="R5,500 total"
        star={4.71}
      />

      <SearchResults
        img="https://news.airbnb.com/wp-content/uploads/sites/4/2023/04/Private-Room-Cape-Town.jpeg?fit=2500%2C1667"
        location="Sedgefield, South Africa"
        title="Beach House"
        description="1 guest • 1 bedrooms • 1 bathrooms • private pool • Kitchen • Free parking"
        price="R4200 / night"
        total="R12,200 total"
        star={4.15}
      />

      <SearchResults
        img="https://assets.vogue.com/photos/65faea089c75d05bc3012662/master/w_2560%2Cc_limit/image%2520(115).png"
        location="Strand, Cape Town, South Africa"
        title="Luxury Cabin"
        description="5 guests • 3 bedrooms • 2 bathrooms • private pool • Wifi • Kitchen • Jacuzzi • Hiking trail"
        price="R6450 / night"
        total="R25,000 total"
        star={4.91}
      />
    </div>
  );
};

export default SearchPage;
