import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">PauloCorrea</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon" />
          <input
            placeholder="Digite algo para buscar..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarLinks">
          <Link  to="/">
            <span className="topBarLink">Home Page</span>
            <span className="topBarLink">Feed</span>
          </Link>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img src="./assets/person/1.jpeg" alt="" className="topBarImage" />
        </Link>
      </div>
    </div>
  );
}
