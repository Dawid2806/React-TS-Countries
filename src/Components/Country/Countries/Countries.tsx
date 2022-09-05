import { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import { CountryCard } from "../CountryCard/CountryCard";
import classes from "./Countries.module.css";
import { SearchInput } from "../../Search/SearchInput";
import { useFetchCountries } from "./FetchCountries";

export const Countries = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const {
    data: countries,
    isLoading,
    isError,
  } = useFetchCountries({
    region: selectedRegion,
  });

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleChangeSelectedRegion = (region: string) => {
    setSelectedRegion(region);
  };
  if (isLoading) return <Loading />;

  if (isError) {
    <div>Jebło</div>;
  }
  return (
    <>
      <SearchInput
        searchCountries={handleSearchInputChange}
        searchInput={searchInput}
        onRegionChange={handleChangeSelectedRegion}
        selectedRegion={selectedRegion}
      />

      <div className={classes.container}>
        {countries?.map((item) => {
          const { name, population, region, capital, flag } = item;
          return (
            <>
              <Link key={name} to={`/${name}`}>
                <CountryCard
                  key={name}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
