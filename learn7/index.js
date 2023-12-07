import express from "express";
import cors from 'cors';
import {Users} from "./data"


const app = express();



// CORS (Cross-Origin Resource Sharing): If the server 
// is on a different domain or port than your React Native app, 
// ensure that the server allows cross-origin requests.
//  You might need to configure the server to include the 
//  proper CORS headers (Access-Control-Allow-Origin)
//  to permit requests from your React Native app's origin.
app.use(cors());

//for data.on dont use
app.use(express.json());


app.use(express.urlencoded({
    extended : true
}))


//when request came to react.js
app.use(express.static("./frontR/build"));


// //when request came to react native
// app.use(express.static("./PinPointEyes/build"));


//create new object user and response that object to 
//client because in server added other information 
//such as id and other
app.post("/users", (req, res) =>{
    //Create a new event with given data
    //....
    //req.body
    //.....
    res.send(Users);
});



// Define a GET route to retrieve user data by ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Access the user ID from request parameters
  
    const user = Users.find((user) => user.id === userId);

    if (!user)
        res.send(null);

    // Here you would typically fetch user data based on the provided ID from a database or another source
    // For example, assuming some user data is fetched based on userId
    const userData = {
      id: userId,
      name: user.name,
      type : user.type,
      email : user.email
    };
  
    // Send the user data as a JSON response
    res.send(userData);
  });


  app.put('/user/:id', (req, res) => {
    const userId = req.params.id; // Access the user ID from request parameters
  
    const user = Users.find((user) => user.id === userId);

    if (!user)
        res.send(null);

    user.name = req.body;
    user.type = req.body;
    user.email = req.body;

  
    // Send the user data as a JSON response
    res.send(user);
  });


  app.delete('/user/:id', (req, res) => {
    // Access the user ID from request parameters
    const userId = parseInt(req.params.id); 

    // Find the index of the user with the provided ID in the users array
    const index = Users.findIndex((user) => user.id === userId);

    if (index === -1)
      res.status(404).json({ message: `User with ID ${userId} not found` });

    // Remove the user from the users array if found
    Users.splice(index, 1);
    // Send the user data as a JSON response
    res.status(200).json({ message: `User with ID ${userId} deleted successfully` });
  });



let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});
