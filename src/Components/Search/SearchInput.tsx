import React from "react";
import classes from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Filter } from "../Filter/Filter";

interface SearchInputProps {
  searchCountries: (value: string) => void;
  searchInput: string;
  onRegionChange: (region: string) => void;
  selectedRegion: string | null;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchCountries,
  searchInput,
  onRegionChange,
  selectedRegion,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
        <div className={classes.inputBox}>
          <input
            value={searchInput}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              searchCountries(e.currentTarget.value)
            }
            type="text"
            placeholder="Search for a country…"
            className={classes.input}
          />
        </div>
      </div>
      <Filter
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
      />
    </div>
  );
};
