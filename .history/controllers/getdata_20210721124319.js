const { default: axios } = require("axios")
const Dota = require('../models/getDataModal')



const getDotaHeros = async () => {

    const url = 'https://api.opendota.com/api/heroes'
    const reqData = axios.get(url).then(data => {
       dataArr=data.data
        let newData = data.map(hero => {
           return new Dota;
        })
        res.send(reqData)

    }).catch(error => {
        res.send("error");
    })


}
module.exports = getDotaHeros