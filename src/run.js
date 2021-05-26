const path=require("path");
const express = require("express");
const ap = express();
const port = process.env.PORT ||8000;




   const staticPath = path.join(__dirname,"../krk");

    
 ap.use(express.static(staticPath));


//path to public folder which constins statics files


//buildin middileware



ap.listen(port,()=>{
    console.log(`listining to the port no at ${port}`);
    });




