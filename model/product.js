
const fs=require('fs')
const path=require('path')
const rootDir=require('../util1/path')
const express=require('express')


const p=path.join(rootDir,'data','products.json')


module.exports=class Products{
  constructor(t){
    this.title=t;
  }
  save(){
    
    let product=[]
    fs.readFile(p,(err,fileContent)=>{
      if(!err){
        product=JSON.parse(fileContent)
      }
      product.push(this)
      fs.writeFile(p,JSON.stringify(product),(err)=>{
        console.log(err);
      })
    })
  }
  static fetchAll(cb){
    
    fs.readFile(p,(err,fileContent)=>{
      if(err){
        
        cb([]);
      }else{
      cb(JSON.parse(fileContent));
      }
  });
}
}