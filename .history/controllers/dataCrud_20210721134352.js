
const dotaModel = require('../models/dataCrudModel')

//  save to DB
const saveData = async (req,res)=>{
     const {
        localized_name,
        attack_type ,
        }= req.body


        dotaModel.find({localized_name:localized_name},(error,data)=>{
            if (data.length !=0){
                res.send("data already saved !!!")
            }else{

                let newARr =new dotaModel({
                    localized_name,
                    attack_type
                })
                newARr.save();
                res.send(newARr)
            }
        })
}

const getFavHero =async (req,res) =>{

dotaModel.find({},(error,data)=>{
    if(error){
        res.send(error)
    }else {
        res.send(data)
    }
})
}


const deleteFavHero= async (req,res) =>{
const localized_name=req.params.localized_name
    dotaModel.deleteOne({localized_name:localized_name},(error,data)=>{
        if (error){
            res.
        }
    })
   
}
module.exports= {
    saveData,
    getFavHero
}