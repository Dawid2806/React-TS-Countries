import React from "react";
import classes from "./Countryitem.module.css";
export const Countryitem = () => {
  return (
    <div className={classes.countryBox}>
      <div className={classes.img}>
        <img
          className={classes.flag}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png"
          alt=""
        />
      </div>
      <div className={classes.details}>
        <h1 className={classes.countryName}>Niemcy</h1>
        <div className={classes.info}>
          <p className={classes.item}>
            Population:<span className={classes.itemAnswer}> 81,770,900</span>
          </p>
          <p className={classes.item}>
            Region:<span className={classes.itemAnswer}>Europe</span>
          </p>
          <p className={classes.item}>
            Capital:<span className={classes.itemAnswer}>Berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
};
