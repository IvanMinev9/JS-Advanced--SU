import { expect } from "chai";
import { lookupChar } from "../03.Char.js";

describe("Main tests for lookupCahr() function", () => {
  describe("Test with incorrect values", () => {
    it("should return undefined", () => {
      expect(lookupChar("123", "hello")).to.be.undefined;
    });

    it("should return undefined when testing with incorrect number(floating-point)", () => {
      expect(typeof lookupChar("hello", 3.14)).to.equal("undefined");
    });

    it("should return undefined when testing with incorrect number(negative)", () => {
      expect(lookupChar("hello", -4)).to.equal("Incorrect index");
    });

    it("should return Incorrect index when passing bigger number than the stirng length", () => {
      expect(lookupChar("hello", 20)).to.equal("Incorrect index");
    });

    it("should return Incorrect index when passing bigger number than the stirng length", () => {
      expect(lookupChar("hello", 5)).to.equal("Incorrect index");
    });

    it("should return Incorrect index when passing bigger number than the stirng length", () => {
      expect(lookupChar(2, 5)).to.be.undefined;
    });
  });
});

describe("Main test with correct inputs data", () => {
  it("Should return 'l'", () => {
    expect(lookupChar("hello", 2)).to.equal("l");
  });

  it("Should return 'e'", () => {
    expect(lookupChar("hello", 1)).to.equal("e");
  });
});
