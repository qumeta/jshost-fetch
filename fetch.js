/* eslint-disable no-prototype-builtins */
var g =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    // eslint-disable-next-line no-undef
    (typeof global !== 'undefined' && global) ||
    {}

export function fetch(input, init) {
    return new Promise(function (resolve, reject) {
        resolve("ok");
    })
}

fetch.polyfill = true

if (!g.fetch) {
    g.fetch = fetch
}

console.log("fetch.js");