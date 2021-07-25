
const dotaModel = require('../models/dataCrudModel')

//  save to DB
const saveData = async (req,res)=>{
     const {
        localized_name,
        attack_type ,
        img
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
            res.send(error)
        }else {
            res.send(data)
        }
    })
   
}


const updateHero =async (req,res) =>{
    const{attack_type}=req.body;
    const localized_name=req.params.localized_name;
   
    dotaModel.find({localized_name:localized_name}, (error,data)=>{
        if(error){
            res.send(error)

        }else{

            data[0].attack_type= attack_type;
            data[0].save();
            res.send(data)
        }
    })

}
module.exports= {
    saveData,
    getFavHero,
    deleteFavHero,
    updateHero
}