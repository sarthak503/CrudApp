const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Crudapp'

const app = express()
mongoose.connect(url,{useNewUrlParser:true})
app.use(express.json());

const con = mongoose.connection
con.on('open', () => {
    console.log('Connected...')
})

const useR=require('./routes/users.js')
app.use('/users',useR)

app.get('/', (req,res) =>{
    res.send("Its the homepage")
})

app.listen(4242, () => {
    console.log("Working at 4242")
})