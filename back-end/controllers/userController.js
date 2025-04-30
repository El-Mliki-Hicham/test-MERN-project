const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({message:"Error in fetching users",error:error.message});
    }
  };


exports.storeUser = async(req , res ) => {

    try{
        // check validation request
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res.status(400).json({ errors: validationError.array() });
          }
          
          console.log(req.body);
          // detect request body
        const {name,email,password} = req.body
        
        // check if user alredy exist 
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400).json({message :"User already exist"});
        }
        
        //generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // store user
        const user = new User({name,email,password:hashedPassword});
         await user.save();

         res.status(201).json({message:"User has been created",
            data:user
         })

    }catch(error){
        res.status(500).json({
            message:"Error in store user",error:error.message
        });
    }

}