const path=require("path");
const express = require("express");
const ap = express();




   const staticPath = path.join(__dirname,"../krk");

    
 ap.use(express.static(staticPath));


//path to public folder which constins statics files


//buildin middileware



ap.listen(8000,()=>{
    console.log("this app started successfully on port 8000")
    });




