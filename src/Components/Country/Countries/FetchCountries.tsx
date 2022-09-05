import { useQuery } from "react-query";
import { CountriesProps } from "./CountriesTypes";

const fetchCountries = async (region: string | null) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/${region ? "region" : "all"}/${
        region || ""
      }`
    );

    return response.json();
  } catch (e) {
    console.log(e);
  }
};

interface UseFetchCountriesArgs {
  region: string | null;
}

export const useFetchCountries = ({ region }: UseFetchCountriesArgs) => {
  const { data, isLoading, isError } = useQuery<CountriesProps[]>(
    ["countries", region],
    async () => await fetchCountries(region),
    {
      staleTime: 2000,
    }
  );

  return { fetchCountries, data, isLoading, isError };
};
