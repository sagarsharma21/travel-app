const express = require ("express");
const mongoose = require("mongoose");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const app = express(); //creating an express application

//import and configure env
const dotenv = require("dotenv");
dotenv.config();
//console.log(process.env);

app.use(express.json());//builtin middleware function in express

//usenewurlparser is deprecated
mongoose.connect(process.env.MONGO_URL).then( ()=>{
console.log("MongoDB connected!")
}).catch(err => {
    console.log(err);
});


//pinroute
app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

var port =8081;   
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
//npm start -> npm i nodemon 
