import express  from "express";
import { resolve } from "path";

const app = express();

app.use((req, res, next) => {

    //request example "/"
    console.log(req.url);
   
    //next 
    next();
})

//find in the folder "public" have file with name "app.html"
//in this example http://localhost:3000/app.html
// if (req.url === app.html)
//      {res.sendFile()}
//  else{ next()} 
app.use(express.static("public"))

//http://localhost:3000/
app.get("/", (req, res)=>{

    //req.url = http://localhost:3000/ += /app.html and restart
    req.redirect("/app.html")
})

app.get("/index", (req, res)=>{
    res.send("hello world")
})



app.listen(3000);