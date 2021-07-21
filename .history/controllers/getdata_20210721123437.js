const { default: axios } = require("axios")
const Dota 



getDotaHeros = async() =>{

    const url ='https://api.opendota.com/api/heroes'
     const reqData = axios.get(url).then(data=>{


     }).catch(error =>{
         res.send(error);
     })


}