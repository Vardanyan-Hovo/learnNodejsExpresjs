# learnNodejsExpresjs
<h1>Expresjs NodeJs Server</h1>
<p>I learn everything in Meschisan video courses</p>
<div>
    <h4 style="color:blue;">npm init -yes</h4>
    <label>create file json and basic dependencies</label>
    <p> {<p>
    <p>   "name": "expresnode", // name of the file in which the program is created</p>
    <p>    "version": "1.0.0",  </p>
    <p>    "description": "",  // what does the program do</p>
    <p>   "main": "index.js",  // start program in this file means entry point</p>
    <p>    "scripts": {       </p>
    <p>     "test": "echo \"Error: no test specified\" && exit 1"</p> 
    <p>    },</p>
    <p>    "keywords": [],</p>
    <p>    "author": "",  //who wrote the program</p>
    <p>    "license": "ISC"</p>
    <p>  }</p>
</div>

<div>
    <h4 style="color:blue;">"type": "module"</h4>
    <p>write here, for understand we use "ecmascript modules"</p>
    <p>Added modules in es6 and later </p>
    <p>we can use export import</p>
    
</div>

<div>
    <h4 style="color:blue;">npm install nodemon --save-dev</h4>
    <p>it sees the code, and when the code changes, the server is updated automatically</p>
    <code>{"devDependencies": { "nodemon": "^3.0.1" }}</code>
    <p>create file node_modules/* </p>
    <p>Tools it helps when we write a program it means development time</p>
</div>

<div>
    <h4 style="color:blue;">    "scripts": {       </h4>
    <p>             "dev": "nodemone index.js"}</p>
    <p>we can execute the program in terminal with command "npm nodemone index.js"</p>
    <h5 style="color:powderblue;">for run "npm run dev"</h5>
</div>

<div>
    <h4 style="color:blue;">npm install express</h4>
    <pre>it  add in package.json  `"dependencies": {
        "express": "^4.18.2"
      }` </pre>
</div>
<div>
    <h4 style="color:blue;">npm install express-session</h4>
    <p>for we can use cookie add in package.json   "dependencies": {
                                                        "express-session": "^1.17.3"
                                                        }
    </p>
    <p>have three options for storing information in browser. </p>
    <p>other sites cannot see this information, means all sites can only see their own information</p>
    <p>to view information you need to open the browser application->Storage</p>
    <h5  style="color:powderblue;"> in js</h5>
    <h6 style="color:powderblue;">1) localstorage </h6>
    <p>all tabs are identical </p>
                    <pre> {
                            localStorage.setItem("nameInfo", "Info");
                            localStorage.getItem("nameInfo");
                            localStorage.removeItem("nameInfo");
                            }
                    </pre>
    <h6 style="color:powderblue;">2) sessionstorage </h6>
    <p>When opening a new tab in the browser there is no information about the old tab</p>
                    <pre>
                        {
                            sessionStorage.setItem("nameinfo", "info")
                        }
                    </pre>
    <h6 style="color:powderblue;">3) cookies</h6>
     <p>all tabs are identical </p>
                    <pre>
                    {
                        document.cookie = "nameInfo=newinfo1";  //nameInfo += newinfo1
                        document.cookie = "nameInfo=newinfo2";  //nameInfo += newinfo2
                        document.cookie = "nameInfo=newinfo3";  //nameInfo += newinfo3
                        document.cookie = "nameInfo1="as8yasd98997y9";  //"nameInfo1="as8yasd98997y9"
                        expires="+(new Data(2023, 0, 6)).toUTCString(); //expires cookie remove 
                                                                        //Object {2023, 0, 6} parse UTC standard string; cookie remove
                        alert(document.cookie)//all cookies
                                                                                                                     
                    }
                    </pre>
</div>

<dev>
    <h4 style="color:blue;">npm install dotenv --save-dev</h4>
    <p> in  "devDependencies": {"dotenv": "^16.3.1"} add dotenv</p>
    <p>  "scripts": {</p>
    <p>          "dev": "nodemon --require dotenv/config ./backend/index.js"</p>
    <p>             },</p>
    <p>in dotenv file read and add process.env</p>
</dev>

<div>
    <h4 style="color:blue;">npm install password passport-local</h4>
    <h5 style="color:powderblue;">https://www.passportjs.org VIEW ALL STRATEGIES</p>
</div>