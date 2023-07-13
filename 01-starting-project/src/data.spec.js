import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn(); // Empty function (Spy)
    generateReportData(logger); // Pass logger to call the function
    expect(logger).toBeCalled();
  });
});
