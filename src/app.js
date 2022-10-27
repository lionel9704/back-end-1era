const path = require('"path"').path

const detenv=require("dotenv").config();

const express = require('express');



const app = express();

app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"views/home.html"));
});


 app.listen (

    process.env.PORT, () => { 
        console.log(' server listening on port:', process.env.PORT);
    });
    // exportamos nuestra app para ultilarza como modulo
