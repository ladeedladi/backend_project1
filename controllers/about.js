const rootDir=require('../util1/path')
const path=require('path')
exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views1','form.html'))
    }

    exports.getsuccess=(req,res,next)=>{
        res.send('<h1>success</h1>')
        }