import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import { Countryitem } from "../Countryitem/Countryitem";
import classes from "./Countris.module.css";
export const Countris = () => {
  const [countries, setCountries] = useState<[{}]>([{}]);

  const fetchCountry = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    return response.json();
  };

  const { data, isError, error, isLoading, isFetching } = useQuery(
    "countries",
    fetchCountry,
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
  if (isLoading) return <h3>Loading...</h3>;
  const randomCountry = Math.floor(Math.random() * 250);
  console.log(randomCountry);
  console.log(data[randomCountry]);
  return (
    <div className={classes.container}>
      <Countryitem />
      <Countryitem />
      <Countryitem />
      <Countryitem />
      <Countryitem />
      <Countryitem />
      <Countryitem />
      <Countryitem />
    </div>
  );
};
