import { expect, assert } from "chai";
import { isOddOrEven } from "../02.EvenOrOdd.js";

describe("General Unit testing isOddOrEven() function invalid data", () => {
  it("should return undefined after passing number", () => {
    expect(isOddOrEven(123)).to.be.undefined;
  });

  it("should return undefined after passing decimal number", () => {
    expect(isOddOrEven(12.4)).to.be.undefined;
  });

  it("should return undefined after passing negative number", () => {
    expect(isOddOrEven(-12)).to.be.undefined;
  });
});

describe("General Unit testing isOddOrEven() function with valid data", () => {
  it("test with odd length", () => {
    assert.equal("odd", isOddOrEven("tot"));
  });

  it("test with even length", () => {
    assert.equal("even", isOddOrEven("toto"));
  });

  it("test with empty input data", () => {});
});
