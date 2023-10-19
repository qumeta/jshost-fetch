const { fetch } = require('jshost-fetch')

fetch('http://127.0.0.1:6000')
  .then(data => {
    console.log(data)
  });
  
/*
import nodeFetch from 'node-fetch';
const realFetch = nodeFetch.default || nodeFetch

const fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url
  }
  return realFetch.call(this, url, options)
}

fetch('http://127.0.0.1:6000')
  .then(res => {
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
  */