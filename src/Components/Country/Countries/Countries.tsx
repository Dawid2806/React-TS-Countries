import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { Countryitem } from "../Countryitem/Countryitem";
import classes from "./Countries.module.css";
import { CountriesProps } from "./CountriesTypes";

export const Countries: React.FC<CountriesProps> = (): JSX.Element => {
  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");

    return response.json();
  };

  const { data, isError, error, isLoading, isFetching } = useQuery(
    "countries",
    fetchCountries,
    {
      staleTime: 2000,
    }
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className={classes.container}>
      {data.map((item: CountriesProps) => {
        const { name, population, region, capital, flag } = item;
        return (
          <Link to={`/${name}`}>
            <Countryitem
              key={name}
              name={name}
              population={population}
              region={region}
              capital={capital}
              flag={flag}
            />
          </Link>
        );
      })}
    </div>
  );
};
