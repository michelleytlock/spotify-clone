import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import '../styles/Header.css'
import { useDataLayerValue } from "../StateProvider";

function Header() {
   const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user ? user?.images[0]?.url : ""} alt={user ? user?.display_name : "Guest"} />
        <h4>{user ? user?.display_name : "Guest"}</h4>
      </div>
    </div>
  );
}

export default Header;
