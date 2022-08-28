import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./Country.module.css";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CountryProps } from "./CountryTyps";
import { Loading } from "../../Loading/Loading";
import { CoutryItem } from "./CountryItem/CoutryItem";
export const Country: React.FC = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };

  const { name } = useParams();
  const fetchCounty = async () => {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);

    return response.json();
  };

  const { data, isLoading } = useQuery("country", fetchCounty, {
    staleTime: 2000,
  });
  if (isLoading) return <Loading />;

  return (
    <>
      <div className={classes.BackBox} onClick={backHandler}>
        <FontAwesomeIcon className={classes.icon} icon={faArrowLeftLong} />

        <button className={classes.button}>Back</button>
      </div>

      {data.map((el: CountryProps) => {
        const {
          flag,
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
          numericCode,
        } = el;
        return (
          <CoutryItem
            key={numericCode}
            flag={flag}
            name={name}
            nativeName={nativeName}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
            topLevelDomain={topLevelDomain}
            currencies={currencies || ["none"]}
            languages={languages}
            borders={borders || ["None"]}
            numericCode={numericCode}
          />
        );
      })}
    </>
  );
};
