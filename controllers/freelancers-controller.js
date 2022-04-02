const freelancerModel = require('../models/freelancers-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    get : (req,res) => {
        freelancerModel.selectAll((result)=>{res.json({success : true, result})})
    },
    //Helper
    getById : (req,res)=>{
        freelancerModel.selectById(req.params.id, result =>{res.json(result)})
    },
    //Resiter
    post : (req,res) => {
        const newfreelancer = req.body
        if(!newfreelancer.email || !newfreelancer.password || !freelancer.firstname) 
            return res.satus(400).json({success : false, message : "Please enter all data"})

        freelancerModel.selectByEmail(newUser.email, freelancer => {
            if(freelancer)
                return res.status(400).json({success : false, message : "Email already exist"})

            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw err
                bcrypt.hash(newfreelancer.password, salt, (err, hash)=>{
                    if (err) throw err
                    newfreelancer.password = hash
                    freelancerModel.insert(newfreelancer, message =>{
                        jwt.sign(
                            {id : message.insertId},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },
                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    freelancer : {
                                        id: message.insertId,
                                        firstname: newfreelancer.firstname,
                                        lastname: newfreelancer.lastname,
                                        email: newfreelancer.email,
                                        phone: newfreelancer.phone,
                                    }
                                })
                            }
                        )
                    })
                })
            })
        })
    },
    put : (req,res)=>{
        if(!req.freelancerid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        freelancerModel.update(req.params.id,req.body, result =>{res.json({success : true , result})})
    },
    delete : (req,res)=>{
        if(!req.freelancerid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        freelancerModel.delete(req.params.id, result =>{res.json({success : true , result})})
    }
}