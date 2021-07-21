const { mongoose } = require("mongoose");


const dotaSchema =mongoose.Schema({

localized_name:String,
attack_type:String

})
const DotaModel =mongoose.model('hero',);