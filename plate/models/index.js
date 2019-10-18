const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name : String,
  ingredients : String,
  price : Float32Array,
  type : String,
  disponibility :{
    type : Boolean,
    default : true
  },
  deliverable:{
    type : Boolean,
    default : false
  },
  preparationTime :Int8Array,

});

module.exports = mongoose.model('Item', itemSchema);