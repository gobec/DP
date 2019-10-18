function viewCreateItem(req, res) {
    res.send('View create Item');
  }
  
  function viewModifyItem(req, res) {
    res.send('View modify Item');
  }
  
  function viewDeleteItem(req, res) {
    res.send('View delete Item');
  }
  
  module.exports.viewCreateItem = viewCreateItem;
  module.exports.viewModifyItem = viewModifyItem;
  module.exports.viewDeleteItem = viewDeleteItem;