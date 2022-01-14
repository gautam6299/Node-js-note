//// import and export module -common js
const name="Binod";
let add=(a,b)=>{
    console.log(a+b);
}
module.exports={name,add}

//import and export-Es6
const name="Binod";
let add=(a,b)=>{
    console.log(a+b);
}
// export default name;
export {name,add};