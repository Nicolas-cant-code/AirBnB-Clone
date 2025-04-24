import React from "react";
import Banner from "./Banner.jsx";
import "./Home.css";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/08/Broadway-SocialShare.jpg?w=1200"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />

        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/07/OlympicsxAirbnb-PressDeviceHero-LexGilletteFeatured.jpg?w=20480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />

        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2018/09/IMG_20180825_1424256695.jpg?fit=697%2C294"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>

      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720"
          title="Hartbeespoort, South Africa"
          description="Moutain and lake views"
          price="R1,200/night"
        />

        <Card
          src="	https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720"
          title="Dolphin Coast, South Africa"
          description="Beach and ocean views."
          price="R8,400/night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=720"
          title="Clarens, South Africa"
          description="A beautiful place to stay in the mountains."
          price="R3,700/night"
        />
      </div>
    </div>
  );
};

export default Home;
