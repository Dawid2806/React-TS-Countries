import React from "react";
import { CountriesProps } from "../Countries/CountriesTypes";
import classes from "./Countryitem.module.css";
export const Countryitem: React.FC<CountriesProps> = (props) => {
  return (
    <div className={classes.countryBox}>
      <div className={classes.img}>
        <img className={classes.flag} src={props.flag} alt="" />
      </div>
      <div className={classes.details}>
        <h1 className={classes.countryName}>{props.name}</h1>
        <div className={classes.info}>
          <p className={classes.item}>
            Population:
            <span className={classes.itemAnswer}> {props.population}</span>
          </p>
          <p className={classes.item}>
            Region:<span className={classes.itemAnswer}>{props.region}</span>
          </p>
          <p className={classes.item}>
            Capital:<span className={classes.itemAnswer}>{props.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
