import { assert, expect } from "chai";
import { mult, sum } from "../calculator.js";

describe(`Calc test`, () => {
  it(`Should return the sum of pos nums`, () => {
    //Arrange
    const fNumber = 1;
    const sNumber = 2;
    const expextedResult = 3;
    const expextedResult1 = 2;

    //Act
    const actalResult = sum(fNumber, sNumber);
    const actalResult1 = mult(fNumber, sNumber);
    //Assert
    expect(actalResult).to.be.equal(expextedResult);
    expect(actalResult1).to.be.equal(expextedResult1);
  });
});
