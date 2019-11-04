function getAllMenus(req, res) {
    const Menu = require('../../schemas/models');
  
    Menu.find( function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  
  }

  function getOneType(req, res) {
    const Item = require('../../schemas/models');
  
    Item.find({type :req.params.id}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }

  function getOneItem(req, res) {
    const Item = require('../../schemas/models');
  
    Item.find({_id : req.params.id}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }
  
  function getItemByName(name) {
    const Item = require('../../schemas/models');
  
    Item.find({nameItem : name}, function(err, item) {
  
      if (err) throw err;
  
      return item;
  
    });
  
  }

  function getOneMenu(req, res) {
    const Menu = require('../../schemas/models');
  
    Menu.find({_id : req.params.id}, function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  
  }
  
  function createMenu(req, res) {
    const Menu = require('../../schemas/models');
  
    const newMenu = Menu ({
        title: req.body.title,
        description : req.body.description,
        items : getItemByName(req.body.name)
    });
  
    newMenu.save(function(err) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  
  }

  function createItem(req, res) {
    const Item = require('../../schemas/models');
  
    const newItem = Item ({
        title: req.body.title,
        nameItem : req.body.nameItem,
        ingredients : req.body.ingredients,
        price : req.body.price,
        type : req.body.type,
        disponibility : req.body.disponibility,
        preparationTime :  req.body.preparationTime,
        deliverable: req.body.deliverable
    });
    newItem.save(function(err) {
        if (err) throw err;
    
        res.json({info: 'Success'});
    
      });
    
}
  function modifyMenu(req, res) {
    const Menu = require('../../schemas/models');
  
      Menu.findOneAndUpdate(
            {_id : req.params.id},
  
          { title: req.body.title,
            description : req.body.description
  
          }, function(err, user) {
              if (err) throw err;
  
              res.json({info: 'Success'});
  
          });
  
  }


  function modifyItem(req, res) {
    const Item = require('../../schemas/models');
  
      Item.findOneAndUpdate(
            {_id : req.params.id},
  
          { title: req.body.title,
            nameItem : req.body.nameItem,
            ingredients : req.body.ingredients,
            price : req.body.price,
            type : req.body.type,
            disponibility : req.body.disponibility,
            preparationTime :  req.body.preparationTime,
            deliverable: req.body.deliverable
  
          }, function(err, user) {
              if (err) throw err;
  
              res.json({info: 'Success'});
  
          });
  
  }
  
  function deleteMenu(req, res) {
    const Menu = require('../../schemas/models');
  
    Menu.findOneAndRemove(
          {_id : req.params.id}, function(err, menu) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }

  function deleteItem(req, res) {
    const Item = require('../../schemas/models');
  
    Item.findOneAndRemove(
          {_id : req.params.id}, function(err, item) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }
  
  
  module.exports.getAllMenus = getAllMenus;
  module.exports.getOneType = getOneType;
  module.exports.getOneMenu = getOneMenu;
  module.exports.getOneItem = getOneItem;
  module.exports.createMenu = createMenu;
  module.exports.modifyMenu = modifyMenu;
  module.exports.deleteMenu = deleteMenu;
  module.exports.modifyItem = modifyItem;
  module.exports.deleteItem = deleteItem;