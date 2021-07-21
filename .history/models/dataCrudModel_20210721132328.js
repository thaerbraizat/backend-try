const { mongoose } = require("mongoose");


const dotaSchema = mongoose.Schema({

    localized_name: String,
    attack_type: String

})
const dotaModel = mongoose.model('hero', dotaSchema);


module.exports = dotaModel;
  
const mongoose  = require('mongoose');

const artScema =mongoose.Schema({

