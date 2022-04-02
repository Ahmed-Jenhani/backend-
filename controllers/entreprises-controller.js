const entrepriseModel = require('../models/entreprises-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    get : (req,res) => {
        entrepriseModel.selectAll((result)=>{res.json({success : true, result})})
    },
    //Helper
    getById : (req,res)=>{
        entrepriseModel.selectById(req.params.id, result =>{res.json(result)})
    },
    //Resiter
    post : (req,res) => {
        const newentreprise = req.body
        if(!newentreprise.email || !newentreprise.password || !newentreprise.name) 
            return res.satus(400).json({success : false, message : "Please enter all data"})

            entrepriseModel.selectByEmail(newentreprise.email, user => {
            if(user)
                return res.status(400).json({success : false, message : "Email already exist"})

            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw err
                bcrypt.hash(newentreprise.password, salt, (err, hash)=>{
                    if (err) throw err
                    newentreprise.password = hash
                    entrepriseModel.insert(newUser, message =>{
                        jwt.sign(
                            {id : message.insertId},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },
                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    entreprise : {
                                        id: message.insertId,
                                        name: newentreprise.name,
                                        email: newentreprise.email,
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
        if(!req.entrepriseid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            entrepriseModel.update(req.params.id,req.body, result =>{res.json({success : true , result})})
    },
    delete : (req,res)=>{
        if(!req.entrepriseid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            entrepriseModel.delete(req.params.id, result =>{res.json({success : true , result})})
    }
}