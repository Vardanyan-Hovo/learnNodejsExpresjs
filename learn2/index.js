
/*//1)-----------------------------  response text -----------------


//this gives us the opportunity to write a server
//http this is a protocol
import http from "http"


//res = response. արձագանք.
//rej = reject    մերժել
const server = http.createServer((req, res)=>{

    //describes what information is in the content
    //http status code 200
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Server")
})

server.listen(3000);

a)
//Network -> file ieiie -> Header
//server gives request in browser
//Request URL: http://localhost:3000/
//Request Method: GET
//Recuset: Code 200
//Request Headers
//Content-Type: text/plain

b)
//Network -> file ieiie -> Response
//"Hello Server"



*/
//2)-------------------------------------   respons "json file"  -------
import {createServer} from "http"


const server = createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
        name: "Joe"
    }))
})

server.listen(3000);

//server gives request in browser
//Request URL: http://localhost:3000/
//Request Method: GET
//Recuset: Code 200
//Content-Type": "application/json"