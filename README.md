# phpurlencode
Functionally similar to PHP urlencode and urldecode functions. No dependencies.

## Install

NPM
```bash
$ npm install phpurlencode
```

Yarn
```bash
$ yarn add phpurlencode
```

## Usage

### Include it in your Node.js file

```js
var phpurlencode = require('phpurlencode');
```

### phpurlencode(string)
```js
var encodedString = phpurlencode("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.67 Safari/537.36");
console.log(encodedString);
// => Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10_12_2%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F56.0.2924.67+Safari%2F537.36
```

### phpurlencode.encode(string) [ alias of phpurlencode( ) ]
```js
var encodedString = phpurlencode.encode("!@#$%^&*()-+='\"");
console.log(encodedString);
// => %21%40%23%24%25%5E%26%2A%28%29-%2B%3D%27%22
```

### phpurlencode.decode(string)
```js
var decodedString = phpurlencode.decode('%21%40%23%24%25%5E%26%2A%28%29-%2B%3D%27%22');
console.log(decodedString);
// => !@#$%^&*()-+='"
```

### phpurlencode.definePrototypes()
#### Globally defines `.urlencode` and `.urldecode` String prototypes 
```js
// Register String prototypes. 
// Once this function is called, the String prototypes will be available across your entire project
phpurlencode.definePrototypes();

var decodedString = '%21%40%23%24%25%5E%26%2A%28%29-%2B%3D%27%22'.urldecode();
console.log(decodedString);
// => !@#$%^&*()-+='"

var encodedString = decodedString.urlencode();
console.log(encodedString);
// => %21%40%23%24%25%5E%26%2A%28%29-%2B%3D%27%22
```
