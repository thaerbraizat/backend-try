const { default: axios } = require("axios")
const Dota =require('../models/getDataModal')



getDotaHeros = async() =>{

    const url ='https://api.opendota.com/api/heroes'
     const reqData = axios.get(url).then(data=>{
            console.log(data);
            let newData=data.map(hero =>{
                new Dota;
            })
            

            res.send(reqData)

     }).catch(error =>{
         res.send(error);
     })


}
module.exports=