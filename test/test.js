"use strict";
const urlencode = require("../index.js");
const assert = require("assert");

const strings = {
  userAgent: {
    encoded: "Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10_12_2%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F56.0.2924.67+Safari%2F537.36",
    decoded: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.67 Safari/537.36"
  },
  specialChars: {
    encoded: "%21%40%23%24%25%5E%26%2A%28%29%2B%27%7E%22%3C%3E%2C.",
    decoded: "!@#$%^&*()+'~\"<>,."
  }
};

describe("urlencode", function() {
  describe("#encode()", function() {
    it(
      "should encode special characters similar to php's urlencode",
      function() {
        assert.equal(
          strings.specialChars.encoded,
          urlencode(strings.specialChars.decoded)
        );
      }
    );
    it("should encode a string similar to php's urlencode", function() {
      assert.equal(
        strings.userAgent.encoded,
        urlencode.encode(strings.userAgent.decoded)
      );
    });
  });

  describe("#decode()", function() {
    it(
      "should decode special characters similar to php's urldecode",
      function() {
        assert.equal(
          strings.specialChars.decoded,
          urlencode.decode(strings.specialChars.encoded)
        );
      }
    );
    it("should decode a string similar to php's urldecode", function() {
      assert.equal(
        strings.userAgent.decoded,
        urlencode.decode(strings.userAgent.encoded)
      );
    });
  });
});

describe("#definePrototypes()", function () {
  it("should register global String prototypes", function () {
    urlencode.definePrototypes();
    assert.equal(false, !String.prototype.urldecode, 'String.prototype.urldecode exists');
    assert.equal(false, !String.prototype.urlencode, 'String.prototype.urlencode exists');
  });

  it("should correctly encode with String prototype", function () {
    assert.equal(
      strings.specialChars.decoded.urlencode(),
      strings.specialChars.encoded,
      'correctly encodes special character test string'
    );
    assert.equal(
      strings.userAgent.decoded.urlencode(),
      strings.userAgent.encoded,
      'correctly encodes user-agent test string'
    );
  });

  it("should correctly decode with String prototype", function () {
    assert.equal(
      strings.specialChars.encoded.urldecode(),
      strings.specialChars.decoded,
      'correctly decodes special character test string'
    );
    assert.equal(
      strings.userAgent.encoded.urldecode(),
      strings.userAgent.decoded,
      'correctly decodes user-agent test string'
    );
  });
});
