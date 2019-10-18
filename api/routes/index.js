const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/menus', (req, res) => {
  controller.getAllMenus(req, res);
});

router.get('/api/menu/:id', (req, res) => {
  controller.getOneMenu(req, res);
});

router.post('/api/menu', (req, res) => {
  controller.createMenu(req, res);
});

router.put('/api/menu/:id', (req, res) => {
  controller.modifyMenu(req, res);
});

router.delete('/api/menu/:id', (req, res) => {
  controller.deleteMenu(req, res);
});

module.exports = router;
