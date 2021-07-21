const mongoose  = require('mongoose');


const dotaSchema = mongoose.Schema({

    localized_name: {
        type :String,
        unique:true,
        lowercase:true,
        trim:true

    } ,
    slu
    attack_type: String

})
const dotaModel = mongoose.model('hero', dotaSchema);


module.exports = dotaModel;
  




