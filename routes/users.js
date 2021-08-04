const express = require('express')
const User = require('../models/user.js')
const router = express.Router()


router.get('/',async(req,res) => {
    try {
        const users = await User.find()
         res.json(users)

        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})


router.post('/',async(req,res) =>{
    const per= new User({
        fame: req.body.fame,
        lame: req.body.lame
    })
    try{
        const a1 = await per.save()
        
        res.send("User Added Successfully")
    }
    catch(err){
        res.send('Error')
    }
})

router.get('/:id',async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
  
        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})

router.delete('/:id',async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const a1=await user.delete()
        res.send("User Deleted Successfully")
        
    } catch (err) {
        res.send("Errors !!"+err);
    }

})
 


module.exports =router;
