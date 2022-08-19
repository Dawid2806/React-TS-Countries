import "./App.css";
import { Countries } from "./Components/Country/Countries/Countries";
import { Filter } from "./Components/Filter/Filter";
import { Header } from "./Components/Header/Header";
import { SearchInput } from "./Components/Search/SearchInput";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { Country } from "./Components/Country/Country/Country";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Routes>
          <>
            <Route
              path="/"
              element={
                <>
                  <div className="searchBox">
                    <SearchInput />
                    <Filter />
                  </div>
                  <>
                    <Countries
                      key={""}
                      name={""}
                      population={""}
                      region={""}
                      capital={""}
                      flag={""}
                    />
                  </>
                </>
              }
            />
            <Route path="/:name" element={<Country />} />
            <Route path="*" element={<h2>idz stąd</h2>} />
          </>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
