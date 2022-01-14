//note 
//1.Three way to add file system
//i.Promise base Api
//ii.Callback Api
//iii.Sync Api

//i Promise base Api=provide asynchronous file System
//example
//1. creating directory=path should be there
import * as fs from 'fs/promises';
try{
     await fs.mkdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text");
     console.log("Directory is created");
}catch(error){
  console.log(error);
}

//2.Read content of directory
import * as fs from 'fs/promises';
try {
    const files=await fs.readdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text");
    for(const file of files){
        console.log(file)
    }
} catch (error) {
    console.log(error)
}
//3.Remove Directory
 import * as fs from 'fs/promises';
try {
    await fs.rmdir("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\text");
    console.log("Directory removed");
} catch (error) {
    console.log(error)
}

//4. Create and write file
import * as fs from 'fs/promises'
try{
    await fs.writeFile("read.txt","I am Binod Gautam");
}catch(error){
    console.log(error);
}

//5.readFile 
import * as fs from 'fs/promises'
try{
  const data= await fs.readFile("read.txt","utf-8");//if missing utf-8 buffer data display
  console.log(data);
}catch(error){
    console.log(error);
}

//6.appendFile= if file doesnot exit then it create file and append to the file
import * as fs from 'fs/promises'
try{
   await fs.appendFile("read.txt","This is append data");//if missing utf-8 buffer data display
    console.log(" Data are append into file");
}catch(error){
    console.log(error);
}

//7.copy file= file2 created and copy into data
import * as fs from 'fs/promises'
try{
  await fs.copyFile("read.txt","file2.txt");//if missing utf-8 buffer data display
  console.log("file copied");
}catch(error){
    console.log(error);
}

//8.get File information
import * as fs from 'fs/promises'
try{
  const stats= await fs.stat("F:\\Class\\Mern\\geekyshow\\note\\node  js\\FileSystem5\\Promises APi");//if missing utf-8 buffer data display
  console.log(stats.isDirectory());
  console.log(stats.isFile());
  console.log(stats)
}catch(error){
    console.log(error);
}
