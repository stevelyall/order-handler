import getOrderCountryFromString from "./getOrderCountryFromString";
import { OrderCountry } from "../domain/enums";

describe("getOrderCountryFromString", () => {

  describe("for US orders", () => {
    const expectedCountry: OrderCountry = OrderCountry.US;

    it("should return US for the OrderCountry when 'usa' is provided", () => {
      const countryString = "usa";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

    it("should return US for the OrderCountry when 'USA' is provided", () => {
      const countryString = "USA";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });


    it("should return US for the OrderCountry when 'U.S.' is provided", () => {
      const countryString = "U.S.";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });


    it("should return US for the OrderCountry when 'U.S.A.' is provided", () => {
      const countryString = "U.S.A.";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

    it("should return US for the OrderCountry when 'Etats-Unis' is provided", () => {
      const countryString = "Etats-Unis";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });


  });

  describe("for CA orders", () => {
    const expectedCountry: OrderCountry = OrderCountry.CA;

    it("should return CA for the OrderCountry when 'CA' is provided", () => {
      const countryString = "CA";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });


    it("should return CA for the OrderCountry when 'Canada' is provided", () => {
      const countryString = "Canada";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

  });

  describe("for UK orders", () => {
    const expectedCountry: OrderCountry = OrderCountry.UK;

    it("should return UK for the OrderCountry when 'UK' is provided", () => {
      const countryString = "UK";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });


    it("should return UK for the OrderCountry when 'gb' is provided", () => {
      const countryString = "gb";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

    it("should return UK for the OrderCountry when 'united kingdom' is provided", () => {
      const countryString = "united kingdom";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

    it("should return UK for the OrderCountry when 'great britain' is provided", () => {
      const countryString = "great britain";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(expectedCountry);
    });

  });


  describe("for invalid country values", () => {

    it("returns undefined", () => {
      const countryString = "NA";

      const result = getOrderCountryFromString(countryString);

      expect(result).toBe(undefined);
    });

  });






});
