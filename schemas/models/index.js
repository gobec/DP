const Schema = mongoose.Schema;

const itemSchema = new Schema({
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
  nameMenu : String,
  suppliers : Array,

});

module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Supplier', supplierSchema);
module.exports = mongoose.model('Menu', nameMenu);
module.exports = mongoose.model('Ingredient', ingredientSchema);
