const examenModel = require('../models/postulats-model')


module.exports = {
    get : (req,res) => {
        postulatsModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        postulatsModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
            postulatsModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            postulatsModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.postulatsid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            postulatsModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}