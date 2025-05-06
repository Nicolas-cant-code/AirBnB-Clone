import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import "./Header.css";
import { openModal } from "../../actions/modalAction";
import Login from "../Login";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandler = () => {
    dispatch(openModal("open", <Login />));
  };

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
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span>Logout</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={openModalHandler}>Login</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar className="header_avatar" alt="User Avatar" src="" />
      </div>
    </div>
  );
};

export default Header;
