  //creating server
  const http=require('http')
  const server=http.createServer((req,res)=>{
      res.writeHead(200,"ok",{'content-type':'text/html'});
    //   res.end("<h1>Hello I am respponse</h1>");
    if(req.url=='/'){
        res.end("<h1>Home page</h1>");
    }
    else if(req.url=='/about'){
        res.end("<h1>About page</h1>");
    }
    else{
        res.end("Page not found");
    }
  });
  let PORT=process.env.PORT || 4000;
  let   LOCALHOST='localhost';
  server.listen(PORT,LOCALHOST,()=>{
      console.log(`serverRunning at port ${PORT}`);
  });

//2.sove html page
const http=require('http')
const fs=require('fs');
  const server=http.createServer((req,res)=>{
      res.writeHead(200,"ok",{'content-type':'text/html'});
       if(req.url=="/"){
           fs.readFile("./public/home.html",(error,data)=>{
               if(error) throw error;
              res.end(data);
           });
       }
       if(req.url=="/about"){
        fs.readFile("./public/about.htm",(error,data)=>{
            if(error) throw error;
           res.end(data);
        });
    }
  });
  let PORT=process.env.PORT || 4000;
  let   LOCALHOST='localhost';
  server.listen(PORT,LOCALHOST,()=>{
      console.log(`serverRunning at port ${PORT}`);
  });