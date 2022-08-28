import React from "react";
import classes from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Filter } from "../Filter/Filter";
import { CountriesProps } from "../Country/Countries/CountriesTypes";

interface SearchInputProps {
  searchCountries: (value: string) => void;
  searchInput: string;
  setFiltered: CountriesProps;
  SetIsByRegion: RegionProps[];
  region: RegionProps[];
}
interface RegionProps {
  name: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchCountries,
  searchInput,
  setFiltered,
  SetIsByRegion,
}) => {
  const region: any = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ];

  const fetchCountryByRegion = async (region: string) => {
    const res = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = await res.json();
    setFiltered(data);
    SetIsByRegion(true);
  };

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
        value={region.name}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          fetchCountryByRegion(e.currentTarget.value)
        }
      />
    </div>
  );
};
