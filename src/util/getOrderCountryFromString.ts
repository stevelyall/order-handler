import { OrderCountry } from "../domain/enums";

/*
  Given a string representing the country, returns the corresponding OrderCountry value, if one exists.

  This is currently quite brittle and could be improved. There are numerous other country representations that would need to be handled.
  It could be simplified by ensuring the consuming module (i.e. client app) collects, validates and submits the order country in a consistent format
*/

export default function getOrderCountryFromString(inputCountry: string): OrderCountry | undefined {
  const country = inputCountry.toLowerCase();

  if (country === 'canada' || country === 'ca') {
    return OrderCountry.CA;
  }
  else if (country === 'usa' || country === 'us' || country === 'u.s.' || country === 'u.s.a.' || country === 'etats-unis') {
    return OrderCountry.US;
  }
  else if (country === 'uk' || country === 'united kingdom' || country === 'gb' || country === 'great britain') {
    return OrderCountry.UK;
  }
  else {
    return undefined;
  }

}
