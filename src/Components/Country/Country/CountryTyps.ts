export interface CountryProps {
  key: any;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: elo[];
  languages: elo[];
  borders: string[];
  numericCode: string;
}
interface elo {
  key: string;
  name: string;
}
