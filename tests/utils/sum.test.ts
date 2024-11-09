import { describe, expect, test } from "vitest";
import { addArray, sum } from "../../src/utils/sum";

describe("add function", () => {
  test("adds 1 + 2 to equal 3", () => {
    // if (sum(1, 2) != 3) {
    //   throw new Error("La suma no es correcta");
    // }
    //preparación
    const a = 1;
    const b = 4;
    //resultado
    const result = sum(a, b);

    expect(sum(a, b)).toBe(result);
  });
});

describe("addArray function", () => {
  test("should return 0 if the array is empty", () => {
    const numberArray = [];
    const result = addArray(numberArray);
    expect(result).toBe(0);
  });

  test("should return the proper value of the addArray function", () => {
    const numberArray = [1, 2, 3, 4];
    const result = addArray(numberArray);
    expect(result).toBe(10);
  });
});
