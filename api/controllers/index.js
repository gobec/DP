function getAllMenus(req, res) {
    const Menu = require('../../menu/models');
  
    Menu.find( function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  
  }

  function getOneType(req, res) {
    const Item = require('../../menu/models');
  
    Item.find({type :req.params.id}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }

  function getOneItem(req, res) {
    const Item = require('../../menu/models');
  
    Item.find({_id : req.params.id}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }
  
  function getOneMenu(req, res) {
    const Menu = require('../../menu/models');
  
    Menu.find({_id : req.params.id}, function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  
  }
  
  function createMenu(req, res) {
    const Menu = require('../../menu/models');
  
    const newMenu = Menu ({
        title: req.body.title,
        description : req.body.description
    });
  
    newMenu.save(function(err) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  
  }

  function createItem(req, res) {
    const Item = require('../../menu/models');
  
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

    function createSupplier(req, res) {
        const Supplier = require('../../menu/models');
      
        const newSupplier= Item ({
            nameSupplier : req.body.nameSupplier
        });
  
    newSupplier.save(function(err) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  
  }
  
  function modifyMenu(req, res) {
    const Menu = require('../../menu/models');
  
      Menu.findOneAndUpdate(
            {_id : req.params.id},
  
          { title: req.body.title,
            description : req.body.description
  
          }, function(err, user) {
              if (err) throw err;
  
              res.json({info: 'Success'});
  
          });
  
  }

  function modifySupplier(req, res) {
    const Supplier = require('../../menu/models');
  
      Menu.findOneAndUpdate(
            {_id : req.params.id},

          { nameSupplier : req.body.nameSupplier
  
          }, function(err, user) {
              if (err) throw err;
  
              res.json({info: 'Success'});
  
          });
  
  }

  function modifyItem(req, res) {
    const Item = require('../../menu/models');
  
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
    const Menu = require('../../menu/models');
  
    Menu.findOneAndRemove(
          {_id : req.params.id}, function(err, menu) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }

  function deleteItem(req, res) {
    const Item = require('../../menu/models');
  
    Item.findOneAndRemove(
          {_id : req.params.id}, function(err, item) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }
  
  function deleteSupplier(req, res) {
    const Supplier = require('../../menu/models');
  
    Supplier.findOneAndRemove(
          {_id : req.params.id}, function(err, Supplier) {
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
  module.exports.createSupplier = createSupplier;
  module.exports.modifySupplier = modifySupplier;
  module.exports.deleteSupplier = deleteSupplier;