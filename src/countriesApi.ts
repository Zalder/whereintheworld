import axios from "axios";
import { Country } from "./models/Country";

export const getAllCountries = async (): Promise<Country[]> => {
    try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,subregion,currencies,borders,cca3,languages,tld"
        );
        
        return res.data
      } catch (err) {
        if (err instanceof Error)  throw new Response(err.message, {status: 404});
        return [];
      }
}

export const getCountryDetails = async (countryId: string): Promise<Country> => {
    try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryId}`
        );
        
        return res.data[0]
      } catch (err) {
        const error = err as Error;
        throw new Response(error.message, {status: 404})
      }
}