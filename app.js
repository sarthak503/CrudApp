const express = require('express')   //import express module
const mongoose = require('mongoose')  //import mongoose module
const url = 'mongodb://localhost/Crudapp'  // setting up the local database

const app = express()    // creating instance
mongoose.connect(url,{useNewUrlParser:true}) //enabling the useNewUrlParser option in MongoClient.connect().
app.use(express.json());   //middleware - inbuilt method in express to recognize the incoming Request Object as a JSON Object.

const con = mongoose.connection //creating a connection
con.on('open', () => {
    console.log('Connected...')     //confirmation message on establishment of connection
})

const useR=require('./routes/users.js')
app.use('/users',useR)                        //middleware

app.get('/', (req,res) =>{
    res.send("Its the homepage")               //get route for confirmation
})

app.listen(4242, () => {
    console.log("Working at 4242")   //This app starts a server and listens on port 4242 for connections
})