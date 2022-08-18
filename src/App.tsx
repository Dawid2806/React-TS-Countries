import React from "react";
import "./App.css";
import { Countryitem } from "./Components/Countryitem/Countryitem";
import { Filter } from "./Components/Filter/Filter";
import { Header } from "./Components/Header/Header";
import { SearchInput } from "./Components/Search/SearchInput";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="searchBox">
        <SearchInput />
        <Filter />
      </div>
      <div className="container">
        <Countryitem />
        <Countryitem />
        <Countryitem />
        <Countryitem />
        <Countryitem />
        <Countryitem />
        <Countryitem />
        <Countryitem />
      </div>
    </div>
  );
}

export default App;
