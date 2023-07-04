import { getAllCountries, getCountryDetails } from "./countriesApi";
import { Country } from "./models/Country";

type CountryMap = Record<string, Country>;

export class CountriesStore {
  private _countries: CountryMap = {};

  public async getCountries() {
    if (!this._countries) {
      const countries = await getAllCountries();
      this._countries = countries.reduce<CountryMap>((acc, e) => {
        acc[e.cca3] = e;
        return acc;
      }, {});
    }

    return this._countries;
  }

  public async getCountryById(id: string) {
    if (!this._countries[id]) {
      const newCountry = await getCountryDetails(id);
      this._countries[id] = newCountry;
    }

    return this._countries[id];
  }
}
