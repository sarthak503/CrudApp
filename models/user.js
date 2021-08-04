const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fame :{
        type:String,
        required:true

    },
    lame :{
        type:String,
        required:true

    }

})

module.exports = mongoose.model('User',userSchema)