const express = require("express")

const usersController = require("./model.controllers/model.controller")

const connect = require("./configs/db")
const app = express(express.json());

app.use("", usersController)
app.listen(2345, async function(req, res)
{
    try{
        await connect();
        console.log("Listening on port 2345")
    }
    catch(err)
    {
        console.log(err)
    }
})