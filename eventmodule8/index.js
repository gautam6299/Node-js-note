// example
import EventEmitter from "events";
// creating class
class MyEmitter extends EventEmitter{};
// necessary to make object
const myEmitter=new MyEmitter();

//Example 1
//Register event Listener
myEmitter.on('event',()=>{
    console.log("An event occured!")
});
//Triger event
myEmitter.emit('event');

//Example 2
let m=0;
// Register event Lister
myEmitter.on('event',()=>{
    console.log(++m);
})
//Triger event
myEmitter.emit('event');
myEmitter.emit('event');

//Example 3
let m=0;
// Register event Lister
myEmitter.once('event',()=>{
    console.log(++m);
})
//Triger event
myEmitter.emit('event');
myEmitter.emit('event');