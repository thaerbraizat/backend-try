const { mongoose } = require("mongoose");


const dotaSchema = mongoose.Schema({

    localized_name:    title :{
        type :String,
        unique:true,
        lowercase:true,
        trim:true

    } ,,
    attack_type: String

})
const dotaModel = mongoose.model('hero', dotaSchema);


module.exports = dotaModel;
  
const mongoose  = require('mongoose');



