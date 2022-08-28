import React from "react";
import classes from "../Country.module.css";
import { CountryProps } from "../CountryTyps";
export const CoutryItem: React.FC<CountryProps> = (props) => {
  return (
    <div key={props.numericCode} className={classes.container}>
      <div className={classes.flagBox}>
        <img className={classes.flag} src={props.flag} alt="" />
      </div>
      <div className={classes.detailsBox}>
        <h2 className={classes.detailsBoxTitle}>{props.name}</h2>
        <div className={classes.wrap}>
          <div className={classes.detailTop}>
            <p className={classes.detailTopItem}>
              Native Name:
              <span className={classes.detailTopItemValue}>
                {" "}
                {props.nativeName}
              </span>
            </p>
            <p className={classes.detailTopItem}>
              Population:{" "}
              <span className={classes.detailTopItemValue}>
                {" "}
                {props.population}
              </span>
            </p>
            <p className={classes.detailTopItem}>
              Region:{" "}
              <span className={classes.detailTopItemValue}>
                {" "}
                {props.region}
              </span>
            </p>
            <p className={classes.detailTopItem}>
              Sub Region:
              <span className={classes.detailTopItemValue}>
                {" "}
                {props.subregion}
              </span>
            </p>
            <p className={classes.detailTopItem}>
              Capital:{" "}
              <span className={classes.detailTopItemValue}>
                {" "}
                {props.capital}
              </span>
            </p>
          </div>
          <div className={classes.detailBottom}>
            <p className={classes.detailBottomItem}>
              Top Level Domain:{" "}
              {props.topLevelDomain.map((el, index) => {
                return (
                  <span
                    key={el[index]}
                    className={classes.detailBottomItemValue}
                  >
                    {el}
                  </span>
                );
              })}
            </p>
            <p className={classes.detailBottomItem}>
              Currencies:{" "}
              {props.currencies.map((el) => {
                return (
                  <span key={el.name} className={classes.detailBottomItemValue}>
                    {el.name}
                  </span>
                );
              })}
            </p>
            <p className={classes.detailBottomItem}>
              Languages:{" "}
              {props.languages.map((el) => {
                return (
                  <span key={el.name} className={classes.detailBottomItemValue}>
                    {el.name}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className={classes.borderCountriesContainer}>
          <h3 className={classes.borderCountriesContainerTitle}>
            Border Countries:{" "}
          </h3>

          <div className={classes.borderCountriesBox}>
            {props.borders.map((el, index) => {
              return (
                <div key={el[index]} className={classes.borderCountries}>
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
