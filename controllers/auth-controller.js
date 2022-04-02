const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require('config')
const usersModel = require("../models/freelancers-model")


module.exports = {
    login : (req,res) => {
        let {email,password} = req.body
        
        if (!email || !password) 
            return res.status(400).json({success : false, message : "Please enter all data"})

        usersModel.selectByEmail(email, user => {
            if(!user) 
                return res.status(400).json({success : false, message : "User does not exist"})
            
            bcrypt.compare(password, user.password)
                .then(result => {
                    if(!result) 
                        return res.status(400).json({success : false, message : "Bad credantials"})

                    usersModel.selectByEmail(user.email, user =>{
                        jwt.sign(

                            {id : user.id},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },

                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    user : {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email,
                                    }
                                })
                            }
                        )
                    })
                })
        })
    },
    verifyToken : (req,res) => {
        console.log(req.userid)
    }
}