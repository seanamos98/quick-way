import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

// components import
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const useStyle = {
    textDecoration: "none",
    color: "#fff",
  };
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/" style={useStyle}>
            <h1>QW</h1>
            {/*  */}
          </Link>
        </div>
        <div className="header__search">
          <input
            type="search"
            className="header__searchInput"
            placeholder="Search"
          />
          <SearchIcon className="header__searchIcon" />
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <Link style={useStyle}>Item1</Link>
            </li>
            <li>
              <Link style={useStyle}>Item1</Link>
            </li>
            <li>
              <Link style={useStyle}>Item1</Link>
            </li>
            <li>
              <Link style={useStyle}>Item1</Link>
            </li>
          </ul>
        </nav>
        <div className="header__menu">
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </header>
      <Sidebar func={handleClick} value={open} />
    </>
  );
};

export default Header;
