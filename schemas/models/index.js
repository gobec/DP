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
  entree : Schema.Types.ObjectId,
  plat : Schema.Types.ObjectId,
  dessert : Schema.Types.ObjectId,
  description : String,
  day : mongoose.Number,
  price : mongoose.Number,

});



var Item = mongoose.model('Item', itemSchema);
var Menu = mongoose.model('Menu', menuSchema);

module.exports = {
  Item :Item,
  Menu: Menu
}
