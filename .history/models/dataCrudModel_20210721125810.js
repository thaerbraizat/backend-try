const { mongoose } = require("mongoose");


const DotaSchema =mongoose.Schema({

localized_name:String,
attack_type:String

})
const artDataBaseModel =mongoose.model('fav_art',artScema);