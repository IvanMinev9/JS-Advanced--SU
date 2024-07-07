import { expect } from "chai";
import { isSymmetric } from "../05.Check for Symmetry.js";

describe(`is Symmetric tests`, () => {
  it("Should return true if the array in symmeric", () => {
    const input = [1, 2, 1];

    const result = isSymmetric(input);

    expect(result).to.be.true;
  });
});

describe("if it`s not Symmetric tests", () => {
  it("Should return false if the array in not symmeric", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it(`Should throw error if another type is passed`, () => {
    //expect to throw error in general
    expect(isSymmetric({})).to.be.false;
    expect(isSymmetric("")).to.be.false;
    expect(isSymmetric([1, 2, "3"])).to.be.false;
    expect(isSymmetric([1, 2, "1"])).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
    expect(isSymmetric(null)).to.be.false;
  });
});
