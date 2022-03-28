const mongoose = require('mongoose');// Using Node.js `require()`
mongoose.connect("mongodb://127.0.0.1:27017/form").then(() => console.log("connected sucessfully..")).catch((error) => console.log("error"));
// mongoose.connect("6241b8c28d5e2ec0966413a2");