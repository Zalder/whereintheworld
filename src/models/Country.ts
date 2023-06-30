export interface CountryName {
  common: string;
  nativeName: Record<string, CountryNativeName>;
}

export interface CountryNativeName {
  common: string;
  official: string;
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Country {
  name: CountryName;
  flags: CountryFlag;
  population: number;
  region: string;
  capital: string[];
  tld: string[];
  subregion: string;
  currencies: Record<string, Currency>;
  languages: Record<string, string>;
  borders: string[];
  cca3: string;
}