const mongoose = require('mongoose')

// Creating a Schema for API using mongoose

const userSchema = new mongoose.Schema({

    fName :{                                   // Field 1
        type:String,                            
        required:true

    },
    lName :{                                    // Field 2
        type:String,
        required:true

    },
    age:{                                     // Field 3                                              
        type:Number,                
        required:true

    }

})

module.exports = mongoose.model('User',userSchema)   //exporting the module