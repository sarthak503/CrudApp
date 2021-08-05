const express = require('express')
const User = require('../models/user.js')            //importing the schema/model required 
const router = express.Router()                      //Using routers to create routes

//1. Get Route  

router.get('/',async(req,res) => {
    try {
        const users = await User.find()                 //Finds all the users                            
         res.json(users)                                //and displays them    

        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})

//2. Post Route
router.post('/',async(req,res) =>{
    const per= new User({                                    //creates a new user of type 'User' and fields are filled from the request                   
        fName: req.body.fName,
        lName: req.body.lName,
        age:req.body.age
    })
    try{
        const a1 = await per.save()                         //details are saved                    
        
        res.send("User Added Successfully")
    }
    catch(err){
        res.send('Error')
    }
})

//3. Get By ID Route

router.get('/:id',async(req,res) => {
    try {
        const user = await User.findById(req.params.id)          //finds the user by id 
        res.json(user)                                           //and displays it                   
  
        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})

//4. Delete Route

router.delete('/:id',async(req,res) => {
    try {
        const user = await User.findById(req.params.id)      //finds the user by ID
        const a1=await user.delete()                         //after finding , deletes that user
        res.send("User Deleted Successfully")
        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})
 


module.exports =router;                                 //exporting the module
