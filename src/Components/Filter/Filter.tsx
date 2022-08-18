import React, { useState } from "react";
import classes from "./Filter.module.css";

export const Filter = () => {
  const [region, setRegion] = useState<string>();

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setRegion(value);
    console.log(region);
  };
  return (
    <form>
      <select onChange={onChangeHandler} className={classes.filterFeld}>
        <option disabled hidden value={""}>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};
