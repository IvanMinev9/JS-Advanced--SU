import { assert, expect } from "chai";

describe(`Smoke tests`, () => {
  it(`Should always pass`, () => {
    assert.equal(true, true);
  });

  it(`Should fail`, () => {
    assert.equal(true, false);
  });

  it(`Should pass`, () => {
    expect(true).to.equal(true);
  });
});
