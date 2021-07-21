const { mongoose } = require("mongoose");


const DotaSchema =mongoose.Schema({

localized_name:String,
attack_type:String

})
const DotaModel =mongoose.model('hero',Scema);