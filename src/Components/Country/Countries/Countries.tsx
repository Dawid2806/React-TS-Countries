import { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import { CountryCard } from "../CountryCard/CountryCard";
import classes from "./Countries.module.css";
import { CountriesProps } from "./CountriesTypes";
import { SearchInput } from "../../Search/SearchInput";
import { FetchCountires } from "./FetchCountries";
export const Countries: React.FC<CountriesProps> = (): JSX.Element => {
  const [filtered, setFiltered] = useState<CountriesProps[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isByRegion, SetIsByRegion] = useState<boolean>(false);
  const { data, isLoading } = FetchCountires();
  const searchCountries = (value: string) => {
    setSearchInput(value);

    if (searchInput) {
      const filteredCountries = data.filter((country: CountriesProps) => {
        return Object.values(country)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFiltered(filteredCountries);
    } else {
      setFiltered(data);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <>
      <SearchInput
        searchCountries={searchCountries}
        searchInput={searchInput}
        SetIsByRegion={SetIsByRegion}
        region={[]}
        setFiltered={setFiltered}
      />
      {searchInput.length > 0 || isByRegion ? (
        <div className={classes.container}>
          {filtered.map((item: CountriesProps) => {
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
      ) : (
        <div className={classes.container}>
          {data.map((item: CountriesProps) => {
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
      )}
    </>
  );
};
