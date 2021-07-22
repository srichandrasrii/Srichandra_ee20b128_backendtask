const mongoose = require("mongoose");

const uri = "mongodb+srv://<username>:<password>@ss-backend.goaof.mongodb.net" // used mongdb cloud (username and password removed :) )

mongoose.connect(uri, 
{useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {console.log("Database connected")})
.catch((e) => {console.log("Databse connection error: " + e)})