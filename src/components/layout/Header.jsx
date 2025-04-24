import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
        alt="logo"
        className="header_logo"
      />

      <div className="header_center">
        <input type="text" placeholder="Search..." />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon className="header_languageIcon" />
        <ExpandMoreIcon className="header_expandMoreIcon" />
        <Avatar className="header_avatar" alt="User Avatar" src="" />
      </div>
    </div>
  );
};

export default Header;
