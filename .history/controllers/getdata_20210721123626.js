const { default: axios } = require("axios")
const Dota =require('../models/getDataModal')



getDotaHeros = async() =>{

    const url ='https://api.opendota.com/api/heroes'
     const reqData = axios.get(url).then(data=>{
            console.log(data);
            let newData=data.map
             new Dota;

            res.send(data)

     }).catch(error =>{
         res.send(error);
     })


}