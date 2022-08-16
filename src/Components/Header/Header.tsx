import React, { useState } from "react";
import classes from "./Header.module.css";
import moonIcon from "../../assets/moon.svg";
import moonIconFully from "../../assets/moonFully.svg";
export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandler = () => {
    console.log("test");
    if (document.documentElement.hasAttribute("data-theme")) {
      document.documentElement.removeAttribute("data-theme");
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Where in the world?</h1>
      <div className={classes.darkMode} onClick={darkModeHandler}>
        {!isDarkMode ? (
          <img className={classes.darkModeIcon} src={moonIcon} alt="" />
        ) : (
          <img className={classes.darkModeIcon} src={moonIconFully} alt="" />
        )}
        <span className={classes.darkModeText}>Dark Mode</span>
      </div>
    </header>
  );
};
