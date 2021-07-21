const { default: axios } = require("axios")
const Dota = require('../models/getDataModal')



const getDotaHeros = async () => {

    const url = 'https://api.opendota.com/api/heroes'
   axios.get(url).then(data => {
       dataArr=data.data
        let newData = dataArr.map(hero => {
           return new Dota(data);
        })
        res.send(newData)

    }).catch(error => {
        res.send("error");
    })


}
module.exports = getDotaHeros