//note
//i.The HHTP interface in Node.js are designed to support many feature of the protocol which have been traditionlly difficult to use
// example
//1. Create web server
// const http=require('http');
// const server=http.createServer((req,res)=>{
//      res.setHeader('content-type','text/plain');
//     res.end("I am Binod don");
// });
// const PORT=process.env.PORT || 3000;
// const HOST="localhost"
// server.listen(PORT,HOST,()=>{
//     console.log("Server Running at port 3000");
// });

//2.Request property
const http=require('http');
const server=http.createServer((req,res)=>{
    // Request property
    // console.log(req.url)
    if(req.url !="/favicon.ico"){
        console.log(req.url)
    }
    console.log(req.method);
    // response
    res.statusCode=202;
    res.statusMessage="good";
     res.setHeader('content-type','text/plain');
  // statuscode,message and content type in one line= above three submit into one line
      res.writeHead(200,"goog",{'content-type':'text/plain'});
    res.end("I am Binod don");
});
const PORT=process.env.PORT || 3000;
const HOST="localhost"
server.listen(PORT,HOST,()=>{
    console.log("Server Running at port 3000");
});
