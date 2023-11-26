# learnNodejsExpresjs
<h1>Expresjs NodeJs Server</h1>
<p>I learn everything in Meschisan video courses</p>
<div>
    <h4>npm init -yes</h4>
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
    <h4>"type": "module"</h4>
    <p>write here, for understand we use "ecmascript modules"</p>
    <p>Added modules in es6 and later </p>
    <p>we can use export import</p>
    
</div>
<div>
    <h4>npm install nodemon --save-dev</h4>
    <p>it sees the code, and when the code changes, the server is updated automatically</p>
    <code>{"devDependencies": { "nodemon": "^3.0.1" }}</code>
    <p>create file node_modules/* </p>
    <p>it helps when we write a program it means development time</p>
</div>
<div>
    <h4>    "scripts": {       </h4>
    <p>             "dev": "nodemone index.js"}</p>
    <p>we can execute the program in terminal with command "npm nodemone index.js"</p>
    <h5>for run "npm run dev"</h5>
</div>
<div>
    <h4>npm install express</h4>
    <pre>it gives tools and add in package.json  `"dependencies": {
        "express": "^4.18.2"
      }` </pre>
</div>