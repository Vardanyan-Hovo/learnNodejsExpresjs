import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport"
import passportLocal from "passport-local"

const app = express();

let data = [];

//search {file} in file public
// http://localhost:3000/{file}
app.use(express.static("../public"));


//when a request arrives in json format, it is parsed and added to red.body
app.use(express.json())                     

//<Form></Form> form data pars
//extended:true the tree may be deep
app.use(express.urlencoded({extended:true}));


// secret:"keyboard cat"
app.use(session({
    secret: process.env.SESSION_SECRET,  //save .env
    resave: false,                        //cookie: {maxAge: 60000}
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//middleware for check password 
//Authentication
passport.use(new passportLocal.Strategy({
    //we say your username is your email address
    usernameField: "email"
}, async (email, password, done) => {
    let user = data.find((user)=>user.email === email);
    if (!user)
    {
        //         error, user?  
        return done(null, null, {massage: "incorect email"});
    }
    //                       real           hash password
    if (await bcrypt.compare(password, user.password))
    {
        return done(null, user);
    }
    done(null, null, {massage: "incorect password"})
}));


//got error function user and returned id
passport.serializeUser((user, done) => {
    done(null, user.id);
})
//got error function id and returned user
passport.deserializeUser((id, done)=>{
    done(null, data.find((user)=>user.id === id));
})

//when open http://localhost:3000/{register} server return ./public/register.html
app.get("/register", checkNoteAuthenticated, (req, res)=>{
    res.sendFile(path.resolve("./public/register.html"));
})

//when clicking submit button information to app.post("required",()=>) function
app.post("/register", async (req, res)=> {
    let {name, email, password} = req.body;

    // for hash password
    const hashedPwd = await bcrypt.hash(password, 10);
    data.push({
            id: `${Date.now()}_${Math.random()}`,
            name,
            email,
            password: hashedPwd
    });
    res.redirect("/login")
});


app.get("/login", checkNoteAuthenticated, (req, res) => {
    res.sendFile(path.resolve("./public/login.html"));
})

//call passport.use(new passportLocal.Strategy())
app.post("/login",  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}));







//------------------------------------------------------- isAuthenticated true -------------
//static routing
app.use(checkisAuthenticated);
//-------------------------------------------------------------------------------------------

app.get("/", checkisAuthenticated, (req, res) => {
    // if (req.isAuthenticated() === false)
    // {
    //     return res.redirect("/login");
    // }
    res.sendFile(path.resolve("./public/Home.html"));
})

app.get("/logout", (req, res)=>{
    req.logOut();
    res.redirect("login");
})


function checkisAuthenticated(req, res, next){
    if (req.isAuthenticated() === false)
    {
        return res.redirect("/login");
    }
    next();
}

function checkNoteAuthenticated(req, res, next){
    if (req.isAuthenticated() === true)
    {
        return res.redirect("/");
    }
    next();
}
app.listen(process.env.MY_APP_PORT || 5001);
// app.listen(3001);
