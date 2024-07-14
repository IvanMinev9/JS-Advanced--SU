import { assert } from "chai";
import { mathEnforcer } from "../04.Math.js";

describe("Test with addFive() property", () => {
  describe("addFive() test with invalid data", () => {
    it("pass string value", () => {
      assert.isUndefined(mathEnforcer.addFive("5"), "undefined");
      assert.isUndefined(mathEnforcer.addFive("Mitko"), "undefined");
    });

    it("pass array value", () => {
      assert.isUndefined(mathEnforcer.addFive([5]), "undefined");
      assert.isUndefined(mathEnforcer.addFive(["Mitko"]), "undefined");
      assert.isUndefined(mathEnforcer.addFive("5"), "undefined");
    });

    it("pass object value", () => {
      assert.isUndefined(mathEnforcer.addFive({ num: 5 }), "undefined");
      assert.isUndefined(mathEnforcer.addFive({ num: "5" }), "undefined");
      assert.isUndefined(mathEnforcer.addFive({ num: "Mitko" }), "undefined");
    });
  });

  describe("addFive() test with valid data", () => {
    it("pass positive value, plus floating-point number", () => {
      assert.equal(mathEnforcer.addFive(5), 10, "return result 10");
      assert.equal(mathEnforcer.addFive(2.5), 7.5, "return result 7.5");
    });

    it("pass positive value, plus floating-point number", () => {
      assert.equal(mathEnforcer.addFive(-10), -5, "return result -5");
      assert.equal(mathEnforcer.addFive(-10.5), -5.5, "return result -5.5");
    });
  });
});

describe("Test with subtractTen() property", () => {
  describe("subtractTen() test with invalid data", () => {
    it("pass string value", () => {
      assert.isUndefined(mathEnforcer.subtractTen("5"), "undefined");
      assert.isUndefined(mathEnforcer.subtractTen("Mitko"), "undefined");
    });

    it("pass array value", () => {
      assert.isUndefined(mathEnforcer.subtractTen([5]), "undefined");
      assert.isUndefined(mathEnforcer.subtractTen(["Mitko"]), "undefined");
      assert.isUndefined(mathEnforcer.subtractTen(["5"]), "undefined");
    });

    it("pass object value", () => {
      assert.isUndefined(mathEnforcer.subtractTen({ num: 5 }), "undefined");
      assert.isUndefined(mathEnforcer.subtractTen({ num: "5" }), "undefined");
      assert.isUndefined(
        mathEnforcer.subtractTen({ num: "Mitko" }),
        "undefined"
      );
    });
  });

  describe("subtractTen() test with valid data", () => {
    it("pass positive value, plus floating-point number", () => {
      assert.equal(mathEnforcer.subtractTen(5), -5, "return result 5");
      assert.equal(mathEnforcer.subtractTen(2.5), -7.5, "return result -7.5");
    });

    it("pass negative value, plus floating-point number", () => {
      assert.equal(mathEnforcer.subtractTen(-20), -30, "return result -30");
      assert.equal(
        mathEnforcer.subtractTen(-10.5),
        -20.5,
        "return result -20.5"
      );
    });
  });

  describe("Test sum method with valid data", () => {
    it("test with positive numbers", () => {
      assert.equal(mathEnforcer.sum(10, 20), 30, "retrn result 30");
      assert.equal(mathEnforcer.sum(2.5, 5), 7.5, "return result 7.5");
    });

    it("test with negative numbers", () => {
      assert.equal(mathEnforcer.sum(-10, 5), -5, "return result -5");
      assert.equal(mathEnforcer.sum(-5.5, 10), 4.5, "return result 4.5");
      assert.equal(mathEnforcer.sum(-4.5, -5.5), -10, "return result -10");
    });
  });

  describe("Test sum property with invalid data type", () => {
    it("pass string value", () => {
      assert.isUndefined(mathEnforcer.sum("5", 5), "undefined");
      assert.isUndefined(mathEnforcer.sum("Mitko", 5), "undefined");
      assert.isUndefined(mathEnforcer.sum("5", "5"), "undefined");
      assert.isUndefined(mathEnforcer.sum("Mitko", "Pesho"), "undefined");
    });

    it("pass array value", () => {
      assert.isUndefined(mathEnforcer.sum([5], [5]), "undefined");
      assert.isUndefined(mathEnforcer.sum(["Mitko"], [10]), "undefined");
      assert.isUndefined(mathEnforcer.sum(["5"], ["10"]), "undefined");
      assert.isUndefined(mathEnforcer.sum(["5"], [10]), "undefined");
      assert.isUndefined(mathEnforcer.sum([5], ["10"]), "undefined");
    });

    it("pass object value", () => {
      assert.isUndefined(
        mathEnforcer.sum({ num: 5 }, { num: 10 }),
        "undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum({ num: "5" }, { num: "5" }),
        "undefined"
      );
      assert.isUndefined(
        mathEnforcer.sum({ num: "Mitko" }, { num: 5 }),
        "undefined"
      );

      assert.isUndefined(mathEnforcer.sum({ num: 5 }, { num: "10" }));
    });
  });
});
