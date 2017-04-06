"use strict";
const encode = str => {
  return encodeURIComponent(str + '')
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/\%20/g, "+")
    .replace(/~/g, '%7E');
};

const decode = str => {
  return decodeURIComponent(
    (str + '')
    .replace(/%(?![\da-f]{2})/gi, () => '%25')
    .replace(/\+/g, '%20')
  );
};

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;
