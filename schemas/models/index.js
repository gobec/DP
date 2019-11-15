const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  nameItem : String,
  ingredients : [Schema.Types.String],
  price : mongoose.Number,
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

});


const menuSchema = new Schema({
  nameMenu : String,
  entree : itemSchema,
  plat : itemSchema,
  dessert : itemSchema,
  description : String,

});



var Item = mongoose.model('Item', itemSchema);
var Menu = mongoose.model('Menu', menuSchema);

module.exports = {
  Item :Item,
  Menu: Menu
}
