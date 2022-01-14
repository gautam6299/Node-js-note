//note
//=>The path module provies utilities for working with file and directory path.
//example
const path=require('path');
console.log(path.basename(__filename));// return index.js
console.log(path.basename(__filename,'.js')) // return index
console.log(path.dirname(__filename)) // return directory name of the path
console.log(path.dirname("f:/Class/Mern/geekyshow/pr/pathmodule4/index.js")); // same as above

console.log(path.extname(__filename)); // return .js
console.log(path.join('/search','python/arg','binid'));// join and return as a path
console.log(path.join('/search','python/arg','binid','..')); // remove binod
console.log(path.join(__dirname,'/binid'));
console.log(path.normalize("F://class///ggg")) // 

console.log(path.parse(__filename)) // return detail making object