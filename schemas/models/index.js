const Schema = mongoose.Schema;

const itemSchema = new Schema({
  _id : Int8Array,
  nameItem : String,
  ingredients : Array,
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
  menus : Array,

});

const supplierSchema = new Schema({
  _id : Int8Array,
  nameSupplier : String,
  ingredients : Array,

});

const menuSchema = new Schema({
  _id : Int8Array,
  nameMenu : String,
  items : Array,

});

const ingredientSchema = new Schema({
  _id : Int8Array,
  nameMenu : String,
  suppliers : Array,

});

module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Supplier', supplierSchema);
module.exports = mongoose.model('Menu', nameMenu);
module.exports = mongoose.model('Ingredient', ingredientSchema);
