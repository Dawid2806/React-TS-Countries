import React from "react";
import classes from "./Filter.module.css";
interface FilterProps {
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  return (
    <form>
      <select
        onChange={onChange}
        className={classes.filterFeld}
        value={value || ""}
      >
        <option disabled hidden value={""}>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};
