const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  nameItem : String,
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

const supplierSchema = new Schema({
  nameSupplier : String,

});

module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Supplier', supplierSchema);