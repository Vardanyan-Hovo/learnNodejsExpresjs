//it's worked in node that follow console in node
import express  from "express";

const app = express();


//we create middleware
app.use(express.static("public"))// http://localhost:3000/{app.html}
                                 // search /public/app.html file



// app.use(express.json())//place of this of {*2}


//http://localhost:3000/
app.get("/", (req, res) => {
    //req.url = http://localhost:3000/ += app.html
    //and restart
    res.redirect("app.html");//http://localhost:3000/app.html
})

app.get("/ping", (req, res)=>{
    res.send("pong")
})


app.post("/hi", (req, res)=> {
    console.log(req.body); //undefined


    //for read file we need 
    //{*2}
    let data = "";
    req.on("data", (info) =>{
        data += info;
    });
    req.on("end", () =>{
        data = JSON.parse(data);
        console.log(data.name);
        res.send("All Ok");
    })
    // app.use(express.json())//place of this of {*2}
    // console.log(req.body.name);
})
app.listen(3001);
