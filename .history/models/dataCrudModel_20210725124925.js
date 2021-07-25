const mongoose  = require('mongoose');


const dotaSchema = mongoose.Schema({

    localized_name: {
        type :String,
        unique:true,
        lowercase:true,
        trim:true

    } ,
  
    attack_type: String,
    img:String

})
const dotaModel = mongoose.model('hero', dotaSchema);


module.exports = dotaModel;
  




