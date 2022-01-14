//note
//i.The dns (Domain Name System) module enables name resolution. for example,use it to loop up IP addressess of host name
//eample 1= lookup function
const dns=require('dns');
dns.lookup('geekyshows.com',(error,address,family)=>{
    if(error) throw error;
    console.log(address); // return ip address=internet is necessary
});
//2.i resolve
const dns=require('dns');
dns.resolve('geekyshows.com',(error,records)=>{
    if(error) throw error;
    console.log(records); // return ip address=internet is necessary
});

//2.ii resolve function
const dns=require('dns');
dns.resolve('geekyshows.com','ns',(error,records)=>{
    if(error) throw error;
    console.log(records); // return ip address=internet is necessary
});