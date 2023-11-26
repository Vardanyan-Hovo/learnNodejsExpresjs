import {createServer} from "http"
import fs from "fs"
import path  from "path";

//path.extname(filename) return example .css or ...
//
const server = createServer((req, res)=>{
    if (req === '/')// default  '/'
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        //a)fs.create Read Stream
        //b)give current directory /Users/Desktop/ExpresNode/learn3/ += "public/app.html"
        //c)dup2(0, res)
        fs.createReadStream(path.resolve("public/app.html").pipe(res));
    }
    else if (req.url === '/app.css')
    {
        res.writeHead(200, {"Content-Type": "text/css"});

        fs.createReadStream(path.resolve("public/app.css").pipe(res));
        // res.end(JSON.stringify({
        //     name: "Joe"
        // }))
    }
})

server.listen(3000);
//                                          
//we can see all "Content-Type": "*" types in google when
//"*" name "mime types"
//search "common mime types"