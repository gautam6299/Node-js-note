//note
//i.The call back Apis perform all the operation asynchronously,without blocking the event loop
//1.create directory=path should be must
import * as fs from 'fs'
fs.mkdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text",(error)=>{
    if (error) throw error;
    console.log("directory created");
});

// 1.create directory=path is not required
import * as fs from 'fs'
fs.mkdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text",{recursive:true},(error)=>{
    if (error) throw error;
    console.log("directory created");
});

//2.Read content of directory
import * as fs from 'fs'
fs.readdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text",(error,files)=>{
    if (error) throw error;
    for(const file of files){
        console.log(file);
    }
});

//3.Remove directory
import * as fs from 'fs'
fs.rmdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text",(error)=>{
    if (error) throw error;
    console.log("removed directory");
});

//4. Read and write file
import * as fs from 'fs'
fs.writeFile("hello.txt","Heelo i am Binod Don",(error)=>{
    if (error) throw error;
    console.log("file created");
});

//5.Read data from the file
import * as fs from 'fs'
fs.readFile("hello.txt","utf-8",(error,data)=>{
    if (error) throw error;
    console.log(data);
});

//6. Append data
import * as fs from 'fs'
fs.appendFile("hello.txt","append data",(error)=>{
    if (error) throw error;
    console.log("Data append");
});

//7.copy file
import * as fs from 'fs'
fs.copyFile("hello.txt","Binod.txt",(error)=>{
    if (error) throw error;
    console.log("copid file");
});

//8.get file information
import * as fs from 'fs'
fs.stat("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5",(error,stats)=>{
    if (error) throw error;
    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats)
});



