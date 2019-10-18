function getAllMenus(req, res) {
    const Menu = require('../../menu/models');
  
    Menu.find({}, function(err, menu) {
  
      if (err) throw err;
  
      res.json(menu);
  
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
  
  function deleteMenu(req, res) {
    const Menu = require('../../menu/models');
  
    Menu.findOneAndRemove(
          {_id : req.params.id}, function(err, menu) {
      if (err) throw err;
  
      res.json({info: 'Success'});
  
    });
  }
  
  
  
  
  module.exports.getAllMenus = getAllMenus;
  module.exports.getOneMenus = getOneMenus;
  module.exports.createMenu = createMenu;
  module.exports.modifyMenu = modifyMenu;
  module.exports.deleteMenu = deleteMenu;
  