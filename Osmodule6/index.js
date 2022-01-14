//note
//1.The os module provides operating System-related utility methods and properties
const os=require("os");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus);
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
console.log(os.freemem()); // return in byte
console.log(os.totalmem()); // return in byte