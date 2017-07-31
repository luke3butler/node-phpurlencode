"use strict";
const encode = function(str) {
  return encodeURIComponent(str + '')
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/\%20/g, "+")
    .replace(/~/g, '%7E');
};

const decode = function(str) {
  return decodeURIComponent(
    (str + '')
    .replace(/%(?![\da-f]{2})/gi, '%25')
    .replace(/\+/g, '%20')
  );
};

const definePrototypes = function () {
  if (!String.prototype.urlencode) {
    global.String.prototype.urlencode = function () {
      return encode(this);
    };
  }
  if (!String.prototype.urldecode) {
    global.String.prototype.urldecode = function () {
      return decode(this);
    };
  }
};

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;
module.exports.definePrototypes = definePrototypes;
