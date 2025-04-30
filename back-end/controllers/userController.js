const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            success: true,
            data:users
        });
    }catch(error){
        res.status(500).json({ 
            success: false,
            message: "Error fetching users",
            error: error.message
    });
    }
  };

exports.storeUser = async(req, res) => {
    try {
        // check validation request
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res.status(500).json({ 
                success: false,
                errors: validationError.array() 
            });
        }
          
        console.log(req.body);
        // detect request body
        const {name, email, password} = req.body
        
        // check if user alredy exist 
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(500).json({
                success: false,
                message: "User already exists"
            });
        }
        
        //generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // store user
        const user = new User({name,email,password:hashedPassword});
         await user.save();

        res.status(200).json({
            success: true,
            message: "User has been created successfully",
            data: user
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Error in storing user",
            error: error.message
        });
    }

}