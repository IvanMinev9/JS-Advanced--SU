import { expect } from "chai";
import { sum } from "../04.Sum-Numbers.js";

describe(`Sum of nums`, () => {
  it(`Should return sum of nums`, () => {
    const input = [1, 4, 5];
    const expectRes = 10;

    const actualRes = sum(input);

    expect(actualRes).to.equal(expectRes);
  });
});
