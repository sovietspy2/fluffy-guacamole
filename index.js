const express = require('express');

const app = express();

app.listen( 8080,()=> console.log("Server started"));

app.get("/test", (req, res)=> {
    console.log("RQ");
    res.send("HELO THERE");
})