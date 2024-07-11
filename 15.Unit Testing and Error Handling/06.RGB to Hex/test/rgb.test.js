import { expect } from "chai";
import { rgbToHexColor } from "../05.rgb.js";

describe(`Tests for the RGB TO HEX task`, () => {
  it(`should return #66CCFF for (102, 204, 255)`, () => {
    expect(rgbToHexColor(102, 204, 255)).to.equal("#66CCFF");
  });
});
describe("Test lowest possible input > zero", () => {
  it("zero tests", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
});

describe("Test highest possible range: 255", () => {
  it("test with 255", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });
});

describe("Test with negative input", () => {
  it("test should return undefined", () => {
    expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
  });

  it("test should return undefined", () => {
    expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
  });

  it("test should return undefined", () => {
    expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
  });
});

describe("Test with invalid input", () => {
  it("test should return undefined", () => {
    expect(typeof rgbToHexColor("255", 12, 160)).to.equal("undefined");
  });
});

describe("Test with empty input", () => {
  it("no input test", () => {
    expect(typeof rgbToHexColor()).to.equal("undefined");
  });
});
