//note
//i.The url provides utilities for url resolution and parsing
//example
import {URL} from 'url';
const myurl=new URL('https://www.example.com:8000/p/a/h?query=string#hash');
console.log(myurl.hash);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.href);
console.log(myurl.port);
console.log(myurl.protocol);
console.log(myurl.search);
console.log(myurl.searchParams);
console.log(myurl.toString());
console.log(myurl.toJSON());