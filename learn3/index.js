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


//-----------------------------------------------------------------------------------------------------------------------------------


/*
import {createServer} from "http"
import fs from "fs"
import path  from "path";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {

    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';
  
    // Set content type based on file extension
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      default:
        contentType = 'text/html';
    }

    // Read file and serve
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(content, 'utf8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
            } else {
            // Successful response
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
            }
    });
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/