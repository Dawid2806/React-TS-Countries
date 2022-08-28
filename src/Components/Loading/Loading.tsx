import React from "react";
import classes from "./Loading.module.css";
export const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
