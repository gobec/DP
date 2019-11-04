const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  nameItem : String,
  ingredients : Array,
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

const supplierSchema = new Schema({
  nameSupplier : String,
  ingredients : Array,

});

const menuSchema = new Schema({
  nameMenu : String,
  items : Array,

});

const ingredientSchema = new Schema({

  nameIngredient : String,
  suppliers : Array,

});

module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Supplier', supplierSchema);
module.exports = mongoose.model('Ingredient', ingredientSchema);
module.exports = mongoose.model('Menu', menuSchema);
