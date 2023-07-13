import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should tranform a string number to a number of type number", () => {
    const num1 = "1";

    const result = transformToNumber(num1);

    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN for non-tranformable value", () => {
    const num1 = "invalid";
    const num2 = {};

    const result = transformToNumber(num1);
    const result2 = transformToNumber(num2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumber()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2", "3"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
