
const 

const saveData = async (req,res)=>{
     const reqbody ={
        localized_name,
        attack_type 
        }

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
module.exports= saveData