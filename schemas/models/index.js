const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  nameItem : String,
  ingredients : mongoose.Array,
  price : mongoose.Decimal128,
  type : String,
  disponibility :{
    type : Boolean,
    default : true
  },
  deliverable:{
    type : Boolean,
    default : false
  },
  preparationTime :mongoose.Number,
  menus : Array,

});


const menuSchema = new Schema({
  nameMenu : String,
  items : [itemSchema],

});



module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Menu', menuSchema);
