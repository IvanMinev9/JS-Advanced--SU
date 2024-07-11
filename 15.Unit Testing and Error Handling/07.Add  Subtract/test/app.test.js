import { expect } from "chai";
import { createCalculator } from "../07.Add  Subtract.js";

let calc = createCalculator();

//beforeEach(function () {
//calc = createCalculator();
//});

describe("Main tests for createCalculator() function", () => {
  describe("Test with zero ot non input", () => {
    it("result should be 0", () => {
      let value = calc.get();
      expect(value).to.equal(0);
    });
  });
});

describe("Test the add property", () => {
  it("should return 10 after add(5) and add(5)", () => {
    calc.add(5);
    calc.add(5);

    let value = calc.get();

    expect(value).to.equal(10);
  });
});

describe("Test the subtract property", () => {
  it("should return 1 after subtract(10) and subtract(9)", () => {
    calc.subtract(5);
    calc.subtract(4);

    let value = calc.get();

    expect(value).to.equal(1);
  });
});

describe("Test with invalid input", () => {
  it("Should return NaN, when test add property with string input data. ", () => {
    calc.add("hello");

    let value = calc.get();

    expect(value).to.be.NaN;
  });

  it("Should return NaN, when test subtract property with string input data.", () => {
    calc.subtract("hello");

    let value = calc.get();

    expect(value).to.be.NaN;
  });
});

describe("Test with string numbers after conversion", () => {
  it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
    calc.add(9);
    calc.subtract("7");
    calc.add("-2");
    calc.subtract(-1);
    let value = calc.get();
    expect(value).to.be.NaN;
  });
});
