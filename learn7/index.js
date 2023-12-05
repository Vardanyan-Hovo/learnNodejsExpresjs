import express from "express";

const app = express();


app.get("/data", (req, res) => {
    console.log("pppp");
    res.send({
        firstName:"Jon",
        lastname:"Jecson"
    })
    // console.log(process.env.PORT);
})





app.listen(process.env.PORT || 3001);

