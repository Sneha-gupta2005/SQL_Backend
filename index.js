const { faker } = require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app=express();


const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"",
});


let getRandomUser = ()=> {
  return {
     id:faker.datatype.uuid(),
     username:faker.internet.username(),
    email:faker.internet.email(),
     password:faker.internet.password(),
   
  };
};

app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;
    try{
    connection.query(q,(err,result)=>{
        if(err)throw err;
        console.log(result[0]["count(*)"]);
        res.send("success");
    });
}catch(err){
    console.log(err);
    res.send('some error in DB');   
}
});

app.listen("8080",()=>{
    console.log("service is listening to port 8080");
    
})

//inserting New Data
// let q="INSERT INTO user(id,username,email,password) VALUES?";

// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
    
// }
// connection.end();


console.log(getRandomUser());
