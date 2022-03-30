const mongoose = require('mongoose');// Using Node.js `require()`
const express = require('express');
const App = express();
// const DB = "mongodb://127.0.0.1:27017/form";
const DB = "mongodb+srv://root:appleapple@cluster0.riddj.mongodb.net/form?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => console.log("Connected To Database"))
    .then(() => {
        App.listen(5000);
    })
    .catch((err) => console.log(err));


// mongoose.connect("6241b8c28d5e2ec0966413a2");

// export default DB;