import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import classes from "./Country.module.css";
import arrow from "../../../assets/arrow.svg";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Country: React.FC = (children) => {
  const { name } = useParams();
  const fetchCounty = async () => {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);

    return response.json();
  };

  const { data, isError, error, isLoading, isFetching } = useQuery(
    "country",
    fetchCounty,
    {
      staleTime: 2000,
    }
  );
  return (
    <>
      <div className={classes.BackBox}>
        <FontAwesomeIcon className={classes.icon} icon={faArrowLeftLong} />
        <button className={classes.button}>Back</button>
      </div>
      <div className={classes.container}>
        <div className={classes.flagBox}>
          <img
            className={classes.flag}
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
            alt=""
          />
        </div>
        <div className={classes.detailsBox}>
          <h2 className={classes.detailsBoxTitle}>Nazwa kraju</h2>
          <div className={classes.wrap}>
            <div className={classes.detailTop}>
              <p className={classes.detailTopItem}>
                Native Name:
                <span className={classes.detailTopItemValue}> België</span>
              </p>
              <p className={classes.detailTopItem}>
                Population:{" "}
                <span className={classes.detailTopItemValue}> België</span>
              </p>
              <p className={classes.detailTopItem}>
                Region:{" "}
                <span className={classes.detailTopItemValue}> België</span>
              </p>
              <p className={classes.detailTopItem}>
                Sub Region:
                <span className={classes.detailTopItemValue}> België</span>
              </p>
              <p className={classes.detailTopItem}>
                Capital:{" "}
                <span className={classes.detailTopItemValue}> België</span>
              </p>
            </div>
            <div className={classes.detailBottom}>
              <p className={classes.detailBottomItem}>
                Top Level Domain:{" "}
                <span className={classes.detailBottomItemValue}> België</span>
              </p>
              <p className={classes.detailBottomItem}>
                Currencies:{" "}
                <span className={classes.detailBottomItemValue}> België</span>
              </p>
              <p className={classes.detailBottomItem}>
                Languages:{" "}
                <span className={classes.detailBottomItemValue}> België</span>
              </p>
            </div>
          </div>
          <div className={classes.borderCountriesContainer}>
            <h3 className={classes.borderCountriesContainerTitle}>
              Border Countries:{" "}
            </h3>

            <div className={classes.borderCountriesBox}>
              <div className={classes.borderCountries}>Francja</div>
              <div className={classes.borderCountries}>Francja</div>

              <div className={classes.borderCountries}>Francja</div>
              <div className={classes.borderCountries}>Francja</div>
              <div className={classes.borderCountries}>Francja</div>
              <div className={classes.borderCountries}>Francja</div>
              <div className={classes.borderCountries}>Francja</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
