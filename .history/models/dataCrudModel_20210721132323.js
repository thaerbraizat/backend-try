const { mongoose } = require("mongoose");


const dotaSchema = mongoose.Schema({

    localized_name: String,
    attack_type: String

})
const dotaModel = mongoose.model('hero', dotaSchema);


module.exports = dotaModel;
  
const mongoose  = require('mongoose');

const artScema =mongoose.Schema({

    title :{
        type :String,
        unique:true,
        lowercase:true,
        trim:true

    } ,
    // slug :{
    //     type :String,
    //     unique:true,
    //     lowercase:true,
    //     trim:true

    // } ,
   thumbnail:String,
   artist_display:String
})
const artDataBaseModel =mongoose.model('fav_art',artScema);


module.exports=artDataBaseModel;