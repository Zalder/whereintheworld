export interface Country {
  name: CountryName;
  flags: CountryFlag;
  population: number;
  region: string;
  capital: string[];
}

export interface CountryName {
  common: string;
  nativeName: string;
}

export interface CountryFlag {
  png: string;
  alt: string;
}