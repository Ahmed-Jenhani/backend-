const examenModel = require('../models/offres-model')


module.exports = {
    get : (req,res) => {
        offreModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        offreModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.offreid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
        offreModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            offreModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            offreModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}