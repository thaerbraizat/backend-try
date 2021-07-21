const { default: axios } = require("axios")




getDotaHeros = async() =>{

    const url ='https://api.opendota.com/api/heroes'
     const reqData = axios.get(url).then(data=>{


     }).catch(console.error();)


}