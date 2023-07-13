import { it, expect, vi, describe } from "vitest";
import { promises as fs, writeFile } from "fs";
import path from "path";

import writeData from "./io";

vi.mock("fs"); // Use for module (mock)
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "TEST";
  const testFilename = "testFile.txt";

  writeData(testData, testFilename);

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

  // expect(fs.writeFile).toBeCalled();

  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return a promise that resolves to no value if we call correctly", () => {
  const testData = "TEST";
  const testFilename = "testFile.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

  // expect(fs.writeFile).toBeCalled();

  // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
