"use strict";
function encode(str) {
  return encodeURIComponent(str)
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/\%20/g, "+");
}

function decode(str) {
  return decodeURIComponent(str.replace(/\+/g, " ").replace(/\%2A/g, "*"));
}

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;
