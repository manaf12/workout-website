const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async(req,res,next)=>{
        const {authorization}= req.headers;
        if(!authorization) {
                res.status(400).json({error:'authorization token require'})
        }
        
        const token = authorization.split(' ')[1];
            try { 
                 const test= jwt.verify(token,'manafs');
                 console.log("bla bla bla ",test)
                const {_id}=  jwt.verify(token,'manafs') ;
                 req.user = await User.findOne({_id}).select('id')
                 console.log(req.user);
                next();
            }catch (err){
                console.log(err)
                res.status(400).json({error:'req is not authorized '})
            }

}
module.exports=requireAuth
