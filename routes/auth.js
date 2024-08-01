const express = require('express');
const router = express.Router();
const  User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "Shashi_is_boog_boy";

//Create a user using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter the valid mail').isEmail(),
    body('password', 'Password must be atleast 5 character').isLength({ min: 5 }),
], async (req, res)=>{
    //if there are errors, returns Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already
    try {

        let user = await User.findOne ({email: req.body.email});
        if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //if not, create the user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
         });
      
         const data = {
            user: {
                id: user.id,
                },
         }

         const authtoken = jwt.sign(data, JWT_SECRET);
      

    //   res.json(user);
    res.json({ authtoken });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
} )

module.exports = router;