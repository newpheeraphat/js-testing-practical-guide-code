import { it, except, expect } from "vitest";

import { transformToNumber } from "./numbers";

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
