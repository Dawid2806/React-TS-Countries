import { useQuery } from "react-query";

export const FetchCountires = () => {
  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");

    return response.json();
  };
  const { data, isLoading } = useQuery("countries", fetchCountries, {
    staleTime: 2000,
  });

  return { fetchCountries, data, isLoading };
};
