const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/menus', (req, res) => {
  controller.getAllMenus(req, res);
});

router.get('/api/type/:type', (req, res) => {
    controller.getOneType(req, res);
  });

router.get('/api/menu/:id', (req, res) => {
  controller.getOneMenu(req, res);
});

router.get('/api/item/:id', (req, res) => {
    controller.getOneItem(req, res);
  });

router.get('/api/item/:id', (req, res) => {
    controller.getOneItem(req, res);
  });

router.get('/api/items', (req, res) => {
    controller.getAllItem(req, res);
  });

router.post('/api/menu', (req, res) => {
  controller.createMenu(req, res);
});

router.post('/api/item', (req, res) => {
    controller.createItem(req, res);
  });

router.put('/api/menu/:id', (req, res) => {
  controller.modifyMenu(req, res);
});

router.put('/api/item/:id', (req, res) => {
    controller.modifyItem(req, res);
  });
  
  router.delete('/api/item/:id', (req, res) => {
    controller.deleteItem(req, res);
  });

router.delete('/api/menu/:id', (req, res) => {
  controller.deleteMenu(req, res);
});



module.exports = router;
