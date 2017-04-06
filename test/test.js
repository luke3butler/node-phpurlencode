"use strict";
const urlencode = require("../index.js");
const assert = require("assert");

describe("urlencode", function() {
  describe("#encode()", function() {
    it(
      "should encode special characters similar to php's urlencode",
      function() {
        assert.equal(
          "%21%40%23%24%25%5E%26%2A%28%29%2B%27%7E%22%3C%3E%2C.",
          urlencode("!@#$%^&*()+'~\"<>,.")
        );
      }
    );
    it("should encode a string similar to php's urlencode", function() {
      assert.equal(
        "Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10_12_2%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F56.0.2924.67+Safari%2F537.36",
        urlencode.encode(
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.67 Safari/537.36"
        )
      );
    });
  });

  describe("#decode()", function() {
    it(
      "should decode special characters similar to php's urldecode",
      function() {
        assert.equal(
          "!@#$%^&*()+'~\"<>,.",
          urlencode.decode("%21%40%23%24%25%5E%26%2A%28%29%2B%27%7E%22%3C%3E%2C.")
        );
      }
    );
    it("should decode a string similar to php's urldecode", function() {
      assert.equal(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.67 Safari/537.36",
        urlencode.decode(
          "Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10_12_2%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F56.0.2924.67+Safari%2F537.36"
        )
      );
    });
  });
});
