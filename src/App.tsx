import React from "react";
import "./App.css";
import { Countris } from "./Components/Country/Countris/Countris";
import { Countryitem } from "./Components/Country/Countryitem/Countryitem";
import { Filter } from "./Components/Filter/Filter";
import { Header } from "./Components/Header/Header";
import { SearchInput } from "./Components/Search/SearchInput";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <div className="searchBox">
          <SearchInput />
          <Filter />
        </div>
        <>
          <Countris />
        </>
      </div>
    </QueryClientProvider>
  );
}

export default App;
