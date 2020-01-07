function getAllMenus(req, res) {
    const models = require('../../schemas/models');
  
    models.Menu.find( function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  
  }

  function getOneType(req, res) {
    const models = require('../../schemas/models');
  
    models.Item.find({type :req.params.type.toLowerCase()}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }

  function getOneItem(req, res) {
    const models = require('../../schemas/models');
  
    models.Item.find({_id : req.params.id}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  }

  function getAllType(req, res) {
    const models = require('../../schemas/models');
  
    models.Item.find(function(err, item) {
  
      if (err) throw err;

      var flags = [], output = [];
      for( i=0; i<item.length; i++) {
        if( flags[item[i].type]) continue;
        flags[item[i].type] = true;
        output.push(item[i].type);

    }
    
      res.json(output);
  
    });
  }

  function getAllItem(req, res) {
    const models = require('../../schemas/models');
    models.Item.find(function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  }

  function getItemByName(nameItem) {
    const models = require('../../schemas/models');
  
    models.Item.find({ nameItem : req.params.nameItem}, function(err, item) {
  
      if (err) throw err;
  
      res.json(item);
  
    });
  
  }

  function getOneMenu(req, res) {
    const models = require('../../schemas/models');
  
    models.Menu.find({_id : req.params.id}, function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  }

  function getTodayMenu(req, res) {
    const models = require('../../schemas/models');
    const d = new Date
    models.Menu.find({date: d.getDay()}, function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
    });
  }
  
  function createMenu(req, res) {
    const models = require('../../schemas/models');    
    const newMenu = models.Menu ({
        nameMenu: req.body.nameMenu,
        description : req.body.description,
        entree : req.body.entree,
        plat :  req.body.plat,
        dessert : req.body.dessert,
    });
  
    newMenu.save(function(err) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  
  }

  function createItem(req, res) {
    const models = require('../../schemas/models');
    //res.send(req.body);
    const newItem = models.Item ({
        nameItem : req.body.nameItem,
        ingredients : req.body.ingredients,
        price : req.body.price,
        type : req.body.type.toLowerCase(),
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
    const models = require('../../schemas/models');
  
      models.Menu.findOneAndUpdate(
            {_id : req.params.id},
  
          { title: req.body.title,
            description : req.body.description
  
          }, function(err, user) {
              if (err) throw err;
  
              res.json({info: 'Success'});
  
          });
  
  }


  function modifyItem(req, res) {
    const models = require('../../schemas/models');
  
      models.Item.findOneAndUpdate(
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
    const models = require('../../schemas/models');
  
    models.Menu.findOneAndRemove(
          {_id : req.params.id}, function(err, menu) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }

  function deleteItem(req, res) {
    const models = require('../../schemas/models');
  
    models.Item.findOneAndRemove(
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
  module.exports.createItem = createItem;
  module.exports.modifyMenu = modifyMenu;
  module.exports.deleteMenu = deleteMenu;
  module.exports.modifyItem = modifyItem;
  module.exports.deleteItem = deleteItem;
  module.exports.getAllItem  = getAllItem;
  module.exports.getAllType = getAllType;
  module.exports.getTodayMenu = getTodayMenu;