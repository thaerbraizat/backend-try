const { mongoose } = require("mongoose");


const DotaSchema =mongoose.Schema({

localized_name:String,
attack_type:String

})
const DModel =mongoose.model('fav_art',artScema);