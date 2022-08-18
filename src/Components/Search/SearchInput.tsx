import React from "react";
import classes from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const SearchInput = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
        <div className={classes.inputBox}>
          <input
            type="text"
            placeholder="Search for a country…"
            name=""
            className={classes.input}
            id=""
          />
        </div>
      </div>
    </div>
  );
};
