const express = require('express');
const router = express.Router();
const user = require('../Models/user');     

router.post('/user', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = password;
        const newuser = new user({
            name,
            email,
            password
           
        });
        await newuser.save();

        return res.status(201).json({ message: 'user registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports=router;